import { Box, Container, Flex, Card } from '@mantine/core';
import ContactFAQ from '../components/Contact/ContactFAQ';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import { config } from '../config';

/**
 * Page 5 — Contact page.
 *
 * This page includes a contact form, contact info, FAQ, and an optional
 * Google Maps embed. Configure the map URL in your .env file.
 */
const Page5 = () => {
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
                {config.googleMapsEmbedUrl && (
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
                            src={config.googleMapsEmbedUrl}
                            height="450"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Card>
                )}
            </Container>
        </Box>
    );
};

export default Page5;
