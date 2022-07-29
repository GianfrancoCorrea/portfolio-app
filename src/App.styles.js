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
