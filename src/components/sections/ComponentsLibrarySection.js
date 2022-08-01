import styled from 'styled-components';
import { HeadingXLarge, Text, Button } from '@gianjsx/component-library/dist/esm/styles';
import { SectionContainer, SectionWrapper, ComponentsLibraryContainer } from '../../App.styles';
import ComponentsLibrary from '../ComponentsLibrary';

const ComponentsLibraryGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 40px;
    align-items: center;
    padding-bottom: 60px;
`;

const StorybookButton = styled(Button)`
    background: #FF4785;
    color: #ffffff;
    margin-top: 40px;

    &:hover {
        color: #ffffff;
        background: #FF4584;
    }

`;

function ComponentsLibrarySection() {
    return (
        <ComponentsLibraryContainer>
            <SectionContainer>
                <SectionWrapper>
                    <ComponentsLibraryGrid>
                        <div>
                            <HeadingXLarge>
                                Title
                            </HeadingXLarge>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec euismod, nisl eget consectetur sagittis,
                                nisl nunc consectetur nisi, euismod consectetur
                                nisi nisl eget consectetur sagittis.
                            </Text>
                            <StorybookButton
                                as="a"
                                href="https://storybook.js.org/"
                                traget="_blank"
                            >
                                Ver componentes
                            </StorybookButton>
                        </div>
                        <ComponentsLibraryWrapper>
                            <ComponentsLibrary
                                source="./build-sb/index.html"
                                width="100%"
                                height="500px"
                                frameBorder="0"
                            />
                        </ComponentsLibraryWrapper>
                    </ComponentsLibraryGrid>
                </SectionWrapper>
            </SectionContainer>
        </ComponentsLibraryContainer>
    );
}

export default ComponentsLibrarySection;

const ComponentsLibraryWrapper = styled.div`
 margin-top: -80px;
 border-radius: 10px;
 overflow: hidden;
 box-shadow: 0 1px 2px rgba(0, 0, 0, .1), 0 12px 30px rgba(0, 0, 0, .25);
 `;
