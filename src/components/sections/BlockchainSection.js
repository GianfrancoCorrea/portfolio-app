import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { iconList } from '@gianjsx/component-library/dist/esm/helpers';
import * as styles from '@gianjsx/component-library/dist/esm/styles';
import Orderbook from '../Orderbook';
import { Description, Title } from '../../App.styles';
import TokenPairsCards from '../TokenPairsCards';
import { apiGet } from '../../helpers/helpers';
import { connect, L2_ORDER_BOOK, TICKER } from '../../helpers/backend';
import getTokenPairs from '../../helpers/tokenPairs';

const BlockchainSectionContainer = styled.section`
   display: grid;
    grid-template-columns: 1fr 6fr 4fr 1fr;
    grid-gap: 1em;
    align-items: center;

    height: 100vh;
    width: 100%;
    opacity: 1;

`;

function BackchainDataIcons() {
    const [icons, setIcons] = useState([]);
    const {
        tecnologies,
    } = iconList;
    useEffect(() => {
        if (!icons.length) {
            // const used = tecnologies.filter(tech => tech.name === 'Blockchain');
            setIcons(tecnologies);
        }
    }, [icons, setIcons, tecnologies]);
    return (
        <styles.IconsContainer>
            {icons.map((icon) => (
                <icon.icon key={`key_${icon.name}`} />
            ))}
        </styles.IconsContainer>
    );
}

function BlockchainSection() {
    const [L2, setL2] = useState(null);
    const [tokenPrices, setTokenPrices] = useState({
        'BTC-USD' : 0,
        'ETH-USD' : 0,
        'LTC-USD' : 0,
        'XLM-USD' : 0,
    });
    const tokenPairs = getTokenPairs((pair) => tokenPrices[pair]);
    const handleTokensPrices = ({ symbol, price }) => {
        setTokenPrices(prev => ({ ...prev, [symbol]: price }));
    };

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

    // get token pairs prices from websocket
    useEffect(() => {
        connect({
            url             : 'wss://quiet-plateau-12069.herokuapp.com',
            // url             : 'ws://localhost:8000',
            keepAlive       : true,
            keepAlivePeriod : 5000,
        }, handleTokensPrices);
    }, []);

    return (
        <>
            <TokenPairsCards tokenPairs={tokenPairs} />
            <BlockchainSectionContainer>
                <div />
                {L2 ? <Orderbook orders={L2} /> : null }
                {/* <Divider /> */}
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
                        <BackchainDataIcons />
                    </div>
                </div>
                <div />
            </BlockchainSectionContainer>
        </>
    );
}

export default BlockchainSection;
