import {
    HeadingXLarge, Text, Button, Input, TextArea,
} from '@gianjsx/component-library/dist/esm/styles';
import styled from 'styled-components';
import { SectionContainer, SectionWrapper, ContactSectionContainer } from '../../App.styles';

function ContactSection() {
    return (
        <ContactSectionContainer>
            <SectionContainer>
                <ContactSectionWrapper>
                    <ContactSectionGrid>
                        <ContactSectionTextWrapper>
                            <HeadingXLarge>
                                Get in touch
                            </HeadingXLarge>
                            <Text>
                                Let&apos;s talk about everything!
                                <br />
                                Don&apos;t like forms? Send me an email. 👋
                            </Text>
                        </ContactSectionTextWrapper>
                        <GetInTouchForm>
                            <Input type="text" placeholder="Name" />
                            <Input type="email" placeholder="Email" />
                            <TextArea placeholder="Message" />
                            <Button type="button">Send</Button>
                        </GetInTouchForm>
                    </ContactSectionGrid>
                </ContactSectionWrapper>
            </SectionContainer>
        </ContactSectionContainer>

    );
}

const ContactSectionWrapper = styled(SectionWrapper)`
    text-align: center;
`;

const ContactSectionGrid = styled.div`
    display: grid;
    grid-template-columns: auto 400px;
    justify-content: space-around;
    grid-gap: 80px;
    width: max-content;
    margin: 0 auto;
`;

const ContactSectionTextWrapper = styled.div` 
    text-align: right;
`;

const GetInTouchForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;    
`;

export default ContactSection;
