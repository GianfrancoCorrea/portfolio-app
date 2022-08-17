import PropTypes from 'prop-types';
import { SectionContainer, SectionWrapper } from '../../App.styles';
import BlockchainSection from './BlockchainSection';
import ChartSection from './ChartSection';

function CryptosSection({ darkTheme }) {
    return (
        <SectionContainer>
            <SectionWrapper>
                <BlockchainSection darkTheme={darkTheme} />
                <ChartSection />
            </SectionWrapper>
        </SectionContainer>
    );
}

CryptosSection.propTypes = {
    darkTheme: PropTypes.bool.isRequired,
};

export default CryptosSection;
