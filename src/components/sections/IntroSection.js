import { Introduction, IconsBackground } from '@gianjsx/component-library';
import { SectionContainer, SectionWrapper } from '../../App.styles';

function IntroSection() {
    return (
        <SectionContainer className="SectionContaine">
            <IconsBackground />
            <SectionWrapper className="SectionWrapper">

                <Introduction
                    name="Gianfranco"
                    descriptions={['web developer', 'crypto enthusiast']}
                />
            </SectionWrapper>

        </SectionContainer>

    );
}

export default IntroSection;
