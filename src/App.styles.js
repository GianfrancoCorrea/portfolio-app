import styled from 'styled-components';

const IframeSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #444B58;
    opacity: 1;
    font-family: 'Rubik', sans-serif;
    div {
        width: 30%;
        height: 75%
    }
`;

const Title = styled.h1`
    font-size: 2em;
    color: white;
    text-align: center;
`;

const Description = styled.p`
    font-size: 1.5em;
    color: white;
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
        border: 1px solid #444B58;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        font-size: 1.5em;
        color: white;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        background-color: #3D4450;
    }
    /* button styles */
    .button {
        width: 50%;
        height: 50px;
        border: 1px solid #444B58;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        font-size: 1.5em;
        color: white;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        background-color: #3D4450;
    }
    textarea {
        width: 50%;
        height: 50px;
        border: 1px solid #444B58;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        font-size: 1.5em;
        color: white;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        background-color: #3D4450;
    }
    `;

export { IframeSection, Title, Description, GetInTouchForm };
