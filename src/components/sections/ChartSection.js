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
        <ChartSectionContainer className="ChartSectionContainer">
            <div>
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
            {btcPrices ? <Chart prices={btcPrices} /> : <div /> }
        </ChartSectionContainer>
    );
}
export default ChartSection;

const ChartSectionContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 6fr;
    grid-gap: 1em;
    align-items: center;

`;
