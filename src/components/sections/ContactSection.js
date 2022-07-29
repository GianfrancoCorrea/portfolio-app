import { HeadingXLarge, Text, Button } from '@gianjsx/component-library/dist/esm/styles';
import {
    SectionContainer, SectionWrapper, GetInTouchForm,
    ContactSectionContainer, ContactSectionGrid,
} from '../../App.styles';

function ContactSection() {
    return (
        <ContactSectionContainer>
            <SectionContainer>
                <SectionWrapper>
                    <ContactSectionGrid>
                        <GetInTouchForm>
                            <div>
                                <input type="text" className="input" placeholder="Name" />
                                <input type="email" className="input" placeholder="Email" />
                                <textarea placeholder="Message" />
                                <Button type="button">Send</Button>
                            </div>
                        </GetInTouchForm>
                        <div>
                            <HeadingXLarge>
                                Get in touch
                            </HeadingXLarge>
                            <Text>
                                Let&apos;s talk about everything!
                                <br />
                                Don&apos;t like forms? Send me an email. 👋
                            </Text>
                        </div>
                    </ContactSectionGrid>
                </SectionWrapper>
            </SectionContainer>
        </ContactSectionContainer>

    );
}

export default ContactSection;
