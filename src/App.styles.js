import styled from 'styled-components';

const IframeSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    width: 100%;
    opacity: 1;
    div {
        width: 30%;
        height: 75%
    }
`;

const Inverted = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`;

const Title = styled.h1`
    font-size: 2em;
    text-align: center;
`;

const Description = styled.p`
    font-size: 1.5em;
    text-align: center;
   -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
`;

const GetInTouchForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /* input styles */
    .input {
        width: 50%;
        height: 50px;
        border: 1px solid;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        font-size: 1.5em;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }
    /* button styles */
    .button {
        width: 50%;
        height: 50px;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        font-size: 1.5em;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }
    textarea {
        width: 50%;
        height: 50px;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        font-size: 1.5em;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }
    `;

export { IframeSection, Title, Description, GetInTouchForm, Inverted };
