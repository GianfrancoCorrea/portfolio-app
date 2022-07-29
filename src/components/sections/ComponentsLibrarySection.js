import styled from 'styled-components';
import { HeadingXLarge, Text } from '@gianjsx/component-library/dist/esm/styles';
import {
    SectionContainer,
    SectionWrapper, ComponentsLibraryContainer,
} from '../../App.styles';
import ComponentsLibrary from '../ComponentsLibrary';

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
                        </div>
                        <ComponentsLibraryWrapper>
                            <ComponentsLibrary source="./build-sb/index.html" width="800" height="700" frameBorder="0" />
                        </ComponentsLibraryWrapper>
                    </ComponentsLibraryGrid>
                </SectionWrapper>
            </SectionContainer>
        </ComponentsLibraryContainer>
    );
}

export default ComponentsLibrarySection;

const ComponentsLibraryGrid = styled.div`
display: grid;
grid-template-columns: 1fr 3fr;
grid-gap: 40px;
align-items: center;
`;

const ComponentsLibraryWrapper = styled.div`
 margin-top: -80px;
 margin-bottom: -80px;
 `;