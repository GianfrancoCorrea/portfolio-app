import styled from 'styled-components';
import { Description, GetInTouchForm, Title } from '../../App.styles';

function ContactSection() {
    return (
        <ContactSectionContainer>
            <div />
            <GetInTouchForm>
                <div>
                    <input type="text" className="input" placeholder="Name" />
                    <input type="email" className="input" placeholder="Email" />
                    <textarea placeholder="Message" />
                    <button type="button" className="button">Send</button>
                </div>
            </GetInTouchForm>
            <div>
                <Title>
                    Get in touch
                </Title>
                <Description>
                    Let&apos;s talk about everything!
                    <br />
                    Don&apos;t like forms? Send me an email. 👋
                </Description>
            </div>
            <div />
        </ContactSectionContainer>
    );
}

export default ContactSection;

const ContactSectionContainer = styled.section`
   display: grid;
    grid-template-columns: 1fr 4fr 6fr 1fr;
    grid-gap: 1em;
    align-items: center;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    /* background-color: #444B58c1; */
    opacity: 1;
    font-family: 'Rubik', sans-serif;
    `;
