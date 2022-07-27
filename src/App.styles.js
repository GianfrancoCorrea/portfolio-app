import styled from 'styled-components';

const IframeSectionContainer = styled.div`
    width: 100%;
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

const ContactSectionContainer = styled.div`
   display: grid;
    grid-template-columns: 1fr 4fr 6fr 1fr;
    grid-gap: 1em;
    align-items: center;
    width: 100%;
    opacity: 1;
    `;

export { Title, Description, GetInTouchForm, ContactSectionContainer, IframeSectionContainer };
