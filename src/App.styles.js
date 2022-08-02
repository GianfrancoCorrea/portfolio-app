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

const ContactSectionContainer = styled.div`
    width: 100%;
`;

const ComponentsLibraryContainer = styled.div`
margin-top: 80px;

${SectionContainer} {
    padding: 0;
}
`;

export {
    ComponentsLibraryContainer, ContactSectionContainer,
    SectionContainer, SectionWrapper,
};
