import styled from 'styled-components';
import { Title, Description } from '../../App.styles';
import Iframe from '../Iframe';

function IframeSection() {
    return (
        <IframeSectionContainer>
            <div />
            <Iframe source="./build-sb/index.html" width="800" height="700" frameBorder="0" />
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
            <div />
        </IframeSectionContainer>
    );
}

export default IframeSection;

const IframeSectionContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 6fr 4fr 1fr;
    grid-gap: 1em;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    /* background-color: #444B58c1; */
    opacity: 1;
    font-family: 'Rubik', sans-serif;
    `;
