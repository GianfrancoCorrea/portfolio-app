import { useEffect, useState } from 'react';
import { Button, Divider } from 'component-library';
import './App.less';
import Iframe from './components/Iframe';
import { connect, L2_ORDER_BOOK, TICKER } from './helpers/backend';
import Orderbook from './components/Orderbook';
import { apiGet } from './helpers/helpers';
import TokenPairsCards from './components/TokenPairsCards';
import getTokenPairs from './helpers/tokenPairs';
import Chart from './Chart';

function App() {
    const [L2, setL2] = useState(null);
    const [tokenPrices, setTokenPrices] = useState({
        'BTC-USD' : 0,
        'ETH-USD' : 0,
        'LTC-USD' : 0,
        'XLM-USD' : 0,
    });

    const handleTokensPrices = ({ symbol, price }) => {
        setTokenPrices(prev => ({ ...prev, [symbol]: price }));
    };

    // get token pairs prices from websocket
    useEffect(() => {
        connect({
            url             : 'ws://localhost:8000',
            keepAlive       : true,
            keepAlivePeriod : 5000,
        }, handleTokensPrices);
    }, []);

    useEffect(() => {
        console.log('mounted');

        return () => {
            console.log('unmounted');
        };
    }, []);

    // get L2 orderbook from API
    useEffect(() => {
        if (!L2) {
            apiGet(L2_ORDER_BOOK('BTC-USD')).then((res) => {
                setL2(res);
            });
        }
        if (tokenPrices['LTC-USD'] === 0) {
            apiGet(TICKER('LTC-USD')).then((res) => {
                // ws for litecoin doesnt work
                setTokenPrices(prev => ({
                    ...prev,
                    'LTC-USD': res.last_trade_price,
                }));
            });
        }
    }, [L2, tokenPrices]);

    const tokenPairs = getTokenPairs((pair) => tokenPrices[pair]);

    return (
        <div className="App">
            <header className="App-header">
                <TokenPairsCards tokenPairs={tokenPairs} />
                <Divider />
                <Iframe source="./build-sb/index.html" width="1000" height="1000" frameBorder="0" />
                <Divider />
                {L2 ? <Orderbook orders={L2} /> : null }
                <Divider />
                <div className="test-buttons">
                    <Button primary size={'large'}>Buy</Button>
                    <Button secondary size={'large'}>Sell</Button>
                </div>
                <Divider />
                <Chart />
            </header>
        </div>
    );
}

export default App;
