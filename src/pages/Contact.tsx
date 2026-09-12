import { Box, Card, Container, Flex } from '@mantine/core';
import ContactFAQ from '../components/Contact/ContactFAQ';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

const Contact = () => {
    return (
        <Box>
            <Container mt={'xl'}>
                <Flex
                    gap={'xl'}
                    direction={{
                        base: 'column',
                        md: 'row',
                    }}
                >
                    <ContactForm />
                    <ContactInfo />
                </Flex>
                <ContactFAQ />
                <Card
                    style={{ overflow: 'hidden' }}
                    mb={'xl'}
                    mt={'lg'}
                    withBorder
                    p={0}
                    pos={'relative'}
                >
                    <iframe
                        style={{ border: 'none' }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.302189505028!2d-1.5545039229457565!3d47.23023462495322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ee9bae7c35cd%3A0x9ed0297ab18ecd0f!2s6%20Rue%20Jean%20Debay%2C%2044000%20Nantes!5e0!3m2!1sfr!2sfr!4v1763982393596!5m2!1sfr!2sfr"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Card>
            </Container>
        </Box>
    );
};

export default Contact;
