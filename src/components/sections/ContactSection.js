import styled from 'styled-components';
import { Description, GetInTouchForm, Title, Inverted } from '../../App.styles';

function ContactSection() {
    return (
        <Inverted>
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
        </Inverted>
    );
}

export default ContactSection;

const ContactSectionContainer = styled.div`
   display: grid;
    grid-template-columns: 1fr 4fr 6fr 1fr;
    grid-gap: 1em;
    align-items: center;
    width: 100%;
    opacity: 1;
    `;
