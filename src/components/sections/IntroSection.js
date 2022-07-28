import { Introduction, IconsBackground } from '@gianjsx/component-library';
import { SectionContainer, SectionWrapper } from '../../App.styles';

function IntroSection() {
    return (
        <SectionContainer>
            <IconsBackground />
            <SectionWrapper>
                <Introduction
                    name="Gianfranco"
                    descriptions={['web developer', 'crypto enthusiast']}
                />
            </SectionWrapper>
        </SectionContainer>
    );
}

export default IntroSection;
