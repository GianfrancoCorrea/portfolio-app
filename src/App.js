import { useEffect, useState } from 'react';
import { Button, Divider } from '@gianjsx/component-library';
import './App.less';
import Iframe from './components/Iframe';
import { connect, L2_ORDER_BOOK, TICKER } from './helpers/backend';
import Orderbook from './components/Orderbook';
import { apiGet, handleChartData } from './helpers/helpers';
import TokenPairsCards from './components/TokenPairsCards';
import getTokenPairs from './helpers/tokenPairs';
import Chart from './components/Chart';

function App() {
    const [L2, setL2] = useState(null);
    const [chartData, setChartData] = useState(null);
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
            url             : 'wss://quiet-plateau-12069.herokuapp.com',
            // url             : 'ws://localhost:8000',
            keepAlive       : true,
            keepAlivePeriod : 5000,
        }, handleTokensPrices);
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
        if (!chartData) {
            // TODO: websocket for btc-usd
            apiGet('https://api.blockchain.com/nabu-gateway/markets/exchange/prices?symbol=BTC-USD&start=1625054117000&end=1656158177000&granularity=86400')
                .then((res) => {
                    setChartData(handleChartData(res.prices));
                });
        }
    }, [L2, tokenPrices, chartData]);

    const tokenPairs = getTokenPairs((pair) => tokenPrices[pair]);
    const { candleData, volumeData } = chartData || {};
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
                {candleData ? <Chart prices={candleData} volume={volumeData} /> : null }
            </header>
        </div>
    );
}

export default App;
