import styled from 'styled-components';

const SectionContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
position: relative;
padding: 60px 0;
animation: fadeIn 0.5s ease-in-out;

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`;

const SectionWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
    padding: 0 20px;
    text-align: left;
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
   width: 100%;
    `;

const ContactSectionGrid = styled.div`
display: grid;
 grid-template-columns: 1fr 4fr 6fr 1fr;
 grid-gap: 1em;
 align-items: center;
 width: 100%;
 opacity: 1;
 `;

const ComponentsLibraryContainer = styled.div`
margin-top: 80px;
   ${SectionContainer} {
    padding: 0;
}


 `;

export {
    GetInTouchForm,
    ContactSectionContainer, ContactSectionGrid,
    SectionContainer, SectionWrapper, ComponentsLibraryContainer,
};
