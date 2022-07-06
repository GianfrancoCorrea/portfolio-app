import { useEffect, useState } from 'react';
import { Divider, PortfolioIntro } from '@gianjsx/component-library';
import './App.less';
import styled from 'styled-components';
// import { IconsContainer } from '@gianjsx/component-library/src/PortfolioIntro/styles';
import Iframe from './components/Iframe';
import { connect, L2_ORDER_BOOK, TICKER } from './helpers/backend';
import Orderbook from './components/Orderbook';
import { apiGet } from './helpers/helpers';
import TokenPairsCards from './components/TokenPairsCards';
import getTokenPairs from './helpers/tokenPairs';
import Chart from './components/Chart';

function App() {
    const [L2, setL2] = useState(null);
    const [btcPrices, setBtcPrices] = useState(null);
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
        if (!btcPrices) {
            // TODO: websocket for btc && volume handler
            apiGet('https://api.blockchain.com/nabu-gateway/markets/exchange/prices?symbol=BTC-USD&start=1625054117000&end=1656158177000&granularity=86400')
                .then((res) => {
                    const parsed = res.prices?.map((x => ({
                        time   : x[0],
                        open   : x[1].toString(),
                        high   : x[2].toString(),
                        low    : x[3].toString(),
                        close  : x[4].toString(),
                        volume : x[5].toString(),
                    })));
                    setBtcPrices(parsed);
                });
        }
    }, [L2, tokenPrices, btcPrices]);

    const tokenPairs = getTokenPairs((pair) => tokenPrices[pair]);

    return (
        <div className="App">
            <PortfolioIntro />
            <IframeSection>
                <Iframe source="./build-sb/index.html" width="800" height="700" frameBorder="0" />
                <div>
                    <Title>
                        Title
                    </Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisl eget consectetur sagittis,
                        nisl nunc consectetur nisi, euismod consectetur
                        nisi nisl eget consectetur sagittis.
                    </Description>

                </div>
            </IframeSection>
            <TokenPairsCards tokenPairs={tokenPairs} />
            <BlockchainSection>
                <Divider />
                {L2 ? <Orderbook orders={L2} /> : null }
                <Divider />
                <div className="info">
                    <Title>
                        Blockchain data (API & WebSockets)
                    </Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisl eget consectetur sagittis,
                        nisl nunc consectetur nisi, euismod consectetur
                        nisi nisl eget consectetur sagittis.
                    </Description>
                    <div>
                        🙄🙄😣😮
                    </div>
                </div>
                <Divider />
            </BlockchainSection>
            <ChartSection>
                {btcPrices ? <Chart prices={btcPrices} /> : null }
                <div className="info">
                    <Title>
                        Charts
                    </Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisl eget consectetur sagittis,
                        nisl nunc consectetur nisi, euismod consectetur
                        nisi nisl eget consectetur sagittis.
                    </Description>
                </div>
            </ChartSection>
            <ContactSection>
                <div>
                    <Title>
                        Get in touch
                    </Title>
                    <Description>
                        Let&apos;s talk about everything!
                        <br />
                        Don&apos;t like forms? Send me an email. 👋
                    </Description>
                </div>
                <GetInTouchForm>
                    <div>
                        <input type="text" className="input" placeholder="Name" />
                        <input type="email" className="input" placeholder="Email" />
                        <textarea placeholder="Message" />
                        <button type="button" className="button">Send</button>
                    </div>
                </GetInTouchForm>
            </ContactSection>
        </div>
    );
}

export default App;

const IframeSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #444B58;
    opacity: 1;
    font-family: 'Rubik', sans-serif;
    div {
        width: 30%;
        height: 75%
    }
`;

const Title = styled.h1`
    font-size: 2em;
    color: white;
    text-align: center;
`;

const Description = styled.p`
    font-size: 1.5em;
    color: white;
    text-align: center;
   -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
`;

const BlockchainSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #444B58b8;
    opacity: 1;
    font-family: 'Rubik', sans-serif;
    .info {
        display: flex;
        width: 30%;
        height: 75%;
        flex-direction: column;
        justify-content: center;
    }
`;

const ChartSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    /* background-color: #444B58; */
    opacity: 1;
    font-family: 'Rubik', sans-serif;
    .info {
        display: flex;
        width: 30%;
        height: 75%;
        flex-direction: column;
        justify-content: center;
    }
`;

const ContactSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #444B58c1;
    opacity: 1;
    font-family: 'Rubik', sans-serif;
    `;

const GetInTouchForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /* input styles */
    .input {
        width: 50%;
        height: 50px;
        border: 1px solid #444B58;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        font-size: 1.5em;
        color: white;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        background-color: #3D4450;
    }
    /* button styles */
    .button {
        width: 50%;
        height: 50px;
        border: 1px solid #444B58;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        font-size: 1.5em;
        color: white;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        background-color: #3D4450;
    }
    textarea {
        width: 50%;
        height: 50px;
        border: 1px solid #444B58;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        font-size: 1.5em;
        color: white;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        background-color: #3D4450;
    }
    

    `;
