import { Box, Flex, Text, ThemeIcon, Title } from '@mantine/core';
import {
    IconMail,
    IconMapPin,
    IconPhone,
} from '@tabler/icons-react';
import PocketText from '../PocketText';
import './ContactInfo.scss';

const ContactInfo = () => {
    return (
        <Box flex={1}>
            <Flex align="center" gap="md" mb="xl">
                <Title order={2} fw={500}>
                    Informations pratiques
                </Title>
            </Flex>

            <Flex direction="column" gap="xl" mb="xl">
                <Box className="contact-info-item">
                    <ThemeIcon variant="transparent" c="primary.7">
                        <IconMapPin />
                    </ThemeIcon>
                    <Text fw={500} size="lg" c="primary.7">
                        Adresse
                    </Text>
                    <Box />
                    <PocketText fieldId="Addresse" c="primary.7" />
                </Box>
                <Box className="contact-info-item">
                    <ThemeIcon variant="transparent" c="primary.7">
                        <IconMail />
                    </ThemeIcon>
                    <Text fw={500} size="lg" c="primary.7">
                        Email
                    </Text>
                    <Box />
                    <PocketText
                        fieldId="Email"
                        link
                        linkPrefix="mailto:"
                        style={{ size: '1rem', c: 'primary.7' }}
                    />
                </Box>
                <Box className="contact-info-item">
                    <ThemeIcon variant="transparent" c="primary.7">
                        <IconPhone />
                    </ThemeIcon>
                    <Text fw={500} size="lg" c="primary.7">
                        Téléphone
                    </Text>
                    <Box />
                    <PocketText fieldId="Telephone" c="primary.7" />
                </Box>
            </Flex>
        </Box>
    );
};

export default ContactInfo;
