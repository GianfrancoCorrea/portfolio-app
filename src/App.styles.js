import styled from 'styled-components';

const IframeSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    opacity: 1;
    div {
        width: 30%;
        height: 75%
    }
`;

const Inverted = styled.div`
    display: block;
`;

const Title = styled.div`
font-weight: 900;
    font-size: 45px;
    line-height: 1;
    margin-bottom: 30px;
`;

const Description = styled.p`
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
