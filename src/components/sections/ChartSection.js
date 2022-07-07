import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Title, Description } from '../../App.styles';
import { getBtcPrices } from '../../helpers/helpers';
import Chart from '../Chart';

function ChartSection() {
    const [btcPrices, setBtcPrices] = useState(null);

    useEffect(() => {
        if (!btcPrices) {
            getBtcPrices().then((res) => {
                setBtcPrices(res);
            });
        }
    }, [btcPrices]);

    return (
        <ChartSectionContainer>
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
        </ChartSectionContainer>
    );
}
export default ChartSection;

const ChartSectionContainer = styled.section`
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
