import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HeadingXLarge, Text } from '@gianjsx/component-library/dist/esm/styles';
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
            <div>
                <HeadingXLarge>
                    Charts
                </HeadingXLarge>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisl eget consectetur sagittis,
                    nisl nunc consectetur nisi, euismod consectetur
                    nisi nisl eget consectetur sagittis.
                </Text>
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
    margin-top: 60px;

`;
