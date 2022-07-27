import { SectionContainer, SectionWrapper } from '@gianjsx/component-library/src/styles';
import { Description, GetInTouchForm, Title, ContactSectionContainer, ContactSectionGrid } from '../../App.styles';

function ContactSection() {
    return (
        <ContactSectionContainer className="ContactSectionContainer">
            <SectionContainer>
                <SectionWrapper>
                    <ContactSectionGrid>
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
                    </ContactSectionGrid>
                </SectionWrapper>
            </SectionContainer>
        </ContactSectionContainer>

    );
}

export default ContactSection;
