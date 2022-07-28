import { SectionContainer, SectionWrapper } from '../../App.styles';
import BlockchainSection from './BlockchainSection';
import ChartSection from './ChartSection';

function CryposSection() {
    return (
        <SectionContainer>
            <SectionWrapper>
                <BlockchainSection />
                <ChartSection />
            </SectionWrapper>
        </SectionContainer>
    );
}
export default CryposSection;
