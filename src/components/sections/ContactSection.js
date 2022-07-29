import {
    HeadingXLarge, Text, Button, Input, TextArea,
} from '@gianjsx/component-library/dist/esm/styles';
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
                                <Input type="text" placeholder="Name" />
                                <Input type="email" placeholder="Email" />
                                <TextArea placeholder="Message" />
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
