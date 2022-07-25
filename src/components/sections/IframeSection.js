import styled from 'styled-components';
import { SectionContainer, SectionWrapper } from '@gianjsx/component-library/dist/esm/styles';
import { Title, Description, Inverted } from '../../App.styles';
import Iframe from '../Iframe';

function IframeSection() {
    return (
        <Inverted>
            <SectionContainer>
                <SectionWrapper>
                    <IframeSectionContainer>
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
                    </IframeSectionContainer>
                </SectionWrapper>
            </SectionContainer>
        </Inverted>
    );
}

export default IframeSection;

const IframeSectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 40px;
    align-items: center;
`;
