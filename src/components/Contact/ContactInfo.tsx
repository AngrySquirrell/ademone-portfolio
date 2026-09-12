import { Anchor, Box, Flex, Text, ThemeIcon, Title } from '@mantine/core';
import {
    IconBrandInstagram,
    IconBrandLinkedin,
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
                <Title order={2} fw={500} ff="The Seasons, serif">
                    Informations pratiques
                </Title>
            </Flex>

            <Flex direction="column" gap="xl" mb="xl">
                <Box className="contact-info-item">
                    <ThemeIcon variant="transparent" c="rosePoudre.7">
                        <IconMapPin />
                    </ThemeIcon>
                    <Text fw={500} size="lg" c="rosePoudre.7">
                        Adresse
                    </Text>
                    <Box />
                    <PocketText fieldId="Addresse" c="rosePoudre.7" />
                </Box>
                <Box className="contact-info-item">
                    <ThemeIcon variant="transparent" c="rosePoudre.7">
                        <IconMail />
                    </ThemeIcon>
                    <Text fw={500} size="lg" c="rosePoudre.7">
                        Email
                    </Text>
                    <Box />
                    <PocketText
                        fieldId="Email"
                        link
                        linkPrefix="mailto:"
                        style={{ size: '1rem', c: 'rosePoudre.7' }}
                    />
                </Box>
                <Box className="contact-info-item">
                    <ThemeIcon variant="transparent" c="rosePoudre.7">
                        <IconBrandInstagram />
                    </ThemeIcon>
                    <Text fw={500} size="lg" c="rosePoudre.7">
                        Instagram
                    </Text>
                    <Box />

                    <Flex direction="column" gap="sm">
                        <Anchor
                            href="https://www.instagram.com/centre_isao/"
                            target="_blank"
                            className="Instalink"
                        >
                            Centre Isao
                        </Anchor>
                        <Anchor
                            href="https://www.instagram.com/audreybranly_therapeute/"
                            target="_blank"
                            className="Instalink"
                        >
                            Audrey Branly
                        </Anchor>
                    </Flex>
                </Box>
                <Box className="contact-info-item">
                    <ThemeIcon variant="transparent" c="rosePoudre.7">
                        <IconBrandLinkedin />
                    </ThemeIcon>
                    <Text fw={500} size="lg" c="rosePoudre.7">
                        LinkedIn
                    </Text>
                    <Box />
                    <PocketText
                        fieldId="LinkedIn"
                        link
                        label="Audrey Branly"
                        style={{ size: '1rem', c: '#666' }}
                    />
                </Box>
                <Box className="contact-info-item">
                    <ThemeIcon variant="transparent" c="rosePoudre.7">
                        <IconPhone />
                    </ThemeIcon>
                    <Text fw={500} size="lg" c="rosePoudre.7">
                        Téléphone
                    </Text>
                    <Box />
                    <PocketText fieldId="Telephone" c="rosePoudre.7" />
                </Box>
            </Flex>
        </Box>
    );
};

export default ContactInfo;
