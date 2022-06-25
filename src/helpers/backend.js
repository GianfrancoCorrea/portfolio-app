const L2_ORDER_BOOK = (symbol) => `https://api.blockchain.com/v3/exchange/l2/${symbol}`;
const TICKER = (symbol) => `https://api.blockchain.com/v3/exchange/tickers/${symbol}`;

const BLOCKCHAIN_WSS = 'wss://ws.blockchain.com/mercury-gateway/v1/ws';

let keepAliveId = null;
function connect({ url, keepAlive, keepAlivePeriod }, callback) {
    const ws = new WebSocket(url);
    ws.binaryType = 'blob';
    if (keepAlive) {
        clearInterval(keepAliveId);
        keepAliveId = setInterval(() => {
            ws.send('ping');
        }, keepAlivePeriod || 5000);
    }

    ws.onopen = () => {
        console.log('Websocket is open');
        const apiCall = {
            url     : BLOCKCHAIN_WSS,
            headers : { origin: 'https://exchange.blockchain.com' },
            payload : {
                action      : 'subscribe',
                channel     : 'prices',
                symbol      : 'BTC-USD',
                granularity : 60,
            },
        };
        ws.send(JSON.stringify(apiCall));
    };

    ws.onerror = () => {
        ws.close();
    };

    ws.onmessage = (message) => {
        let temp;
        if (message.data instanceof Blob) {
            const reader = new FileReader();

            reader.onload = () => {
                temp = reader.result;
                const json = JSON.parse(temp);
                if (json?.price) {
                    callback({ symbol: json?.symbol, price: json?.price[3] });
                }
            };

            reader.readAsText(message.data);
        }
    };
}

export { connect, L2_ORDER_BOOK, TICKER, BLOCKCHAIN_WSS };
