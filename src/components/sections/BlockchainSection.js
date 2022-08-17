import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { iconList } from '@gianjsx/component-library/dist/esm/helpers';
import * as styles from '@gianjsx/component-library/dist/esm/styles';
import Orderbook from '../Orderbook';
import TokenPairsCards from '../TokenPairsCards';
import { apiGet } from '../../helpers/helpers';
import { connect, L2_ORDER_BOOK, TICKER } from '../../helpers/backend';
import getTokenPairs from '../../helpers/tokenPairs';

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
        <BlockchainDataIconsWrapper>
            {icons.map((icon) => (
                <icon.icon key={`key_${icon.name}`} />
            ))}
        </BlockchainDataIconsWrapper>
    );
}

function BlockchainSection({ darkTheme }) {
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
            <TokenPairsIntro>
                <styles.HeadingXLarge>
                    Lorem ipsum
                </styles.HeadingXLarge>
                <styles.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisl eget consectetur sagittis.
                </styles.Text>
            </TokenPairsIntro>
            <TokenPairsCards tokenPairs={tokenPairs} />
            <BlockchainSectionContainer>
                {L2 ? <Orderbook isDarkTheme={darkTheme} orders={L2} /> : <div /> }
                <div>
                    <styles.HeadingXLarge>
                        Blockchain data (API & WebSockets)
                    </styles.HeadingXLarge>
                    <styles.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisl eget consectetur sagittis,
                        nisl nunc consectetur nisi, euismod consectetur
                        nisi nisl eget consectetur sagittis.
                    </styles.Text>
                    <BackchainDataIcons />
                </div>
            </BlockchainSectionContainer>
        </>
    );
}

BlockchainSection.propTypes = {
    darkTheme: PropTypes.bool.isRequired,
};

export default BlockchainSection;

const TokenPairsIntro = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 60px;    
    align-items: center;

    ${styles.HeadingXLarge},
    ${styles.Text} {
        max-width: 600px;
        text-align: center;
    }
`;

const BlockchainSectionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    align-items: center;
    margin-top: 100px;
    text-align: center;
`;

const BlockchainDataIconsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, auto);
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 60px;
    margin-top: 40px;

    svg {
        height: 30px;
        margin: 0 auto;
    }

`;
