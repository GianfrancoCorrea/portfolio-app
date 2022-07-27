import {
    Title, Description, IframeSectionGrid, IframeSectionContainer, SectionContainer,
    SectionWrapper,
} from '../../App.styles';
import Iframe from '../Iframe';

function IframeSection() {
    return (
        <IframeSectionContainer className="IframeSectionContainer">
            <SectionContainer className="SectionContainer">
                <SectionWrapper className="SectionWrapper">
                    <IframeSectionGrid className="IframeSectionGrid">
                        <div>
                            <Title>
                                Title
                            </Title>
                            <Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec euismod, nisl eget consectetur sagittis,
                                nisl nunc consectetur nisi, euismod consectetur
                                nisi nisl eget consectetur sagittis.
                            </Description>
                        </div>
                        <Iframe source="./build-sb/index.html" width="800" height="700" frameBorder="0" />
                    </IframeSectionGrid>
                </SectionWrapper>
            </SectionContainer>
        </IframeSectionContainer>
    );
}

export default IframeSection;
