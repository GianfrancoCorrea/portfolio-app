import { SectionContainer, SectionWrapper } from '../../App.styles';
import BlockchainSection from './BlockchainSection';
import ChartSection from './ChartSection';

function CryptosSection() {
    return (
        <SectionContainer>
            <SectionWrapper>
                <BlockchainSection />
                <ChartSection />
            </SectionWrapper>
        </SectionContainer>
    );
}
export default CryptosSection;
