import {
    Anchor,
    Box,
    Container,
    Divider,
    Flex,
    Group,
    Image,
    SimpleGrid,
    Text,
    ThemeIcon,
} from '@mantine/core';
import { IconBrandLinkedin, IconClock, IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';
import { NavLink } from 'react-router';
import PocketText from '../components/PocketText';
import './Footer.scss';
import logo from '../assets/logoAB2.svg';

const Footer = () => {
    return (
        <Box bg={'white'} pb={50}>
            <Divider pt={50} />
            <Container size="xl">
                <Flex wrap={'wrap'} gap={{ base: 'xl', md: 50 }} justify="space-between">
                    <Box flex={1} miw={250}>
                        <Image
                            src={logo}
                            alt={'Audrey Branly'}
                            // height={'100%'}
                            w={'80%'}
                            fit="contain"
                            style={{ cursor: 'pointer' }}
                            bdrs={'sm'}
                        />
                        <PocketText
                            fieldId="FooterDescription"
                            fz={'sm'}
                            style={{ textWrap: 'balance' }}
                            c="#666"
                            lh={1.6}
                        />
                    </Box>

                    <Box flex={1} miw={250}>
                        <Text size="md" fw={600} c="#333" mb="md">
                            Navigation
                        </Text>
                        <SimpleGrid cols={{ base: 2, md: 2 }}>
                            <Anchor
                                component={NavLink}
                                to="/"
                                c="#666"
                                size="sm"
                                className="footer-link"
                            >
                                Accueil
                            </Anchor>
                            <Anchor
                                component={NavLink}
                                to="/parcours-presentation"
                                c="#666"
                                size="sm"
                                className="footer-link"
                            >
                                Parcours & Présentation
                            </Anchor>
                            <Anchor
                                component={NavLink}
                                to="/approche-soins"
                                c="#666"
                                size="sm"
                                className="footer-link"
                            >
                                Approche & Soins
                            </Anchor>
                            <Anchor
                                component={NavLink}
                                to="/transmission-supervision"
                                c="#666"
                                size="sm"
                                className="footer-link"
                            >
                                Transmission & Supervision
                            </Anchor>
                            <Anchor
                                component={NavLink}
                                to="/contact"
                                c="#666"
                                size="sm"
                                className="footer-link"
                            >
                                Contact
                            </Anchor>
                        </SimpleGrid>
                    </Box>

                    <Box flex={1} miw={250}>
                        <Text size="md" fw={600} c="#333" mb="md">
                            Contact
                        </Text>
                        <Flex direction="column" gap="sm">
                            <Flex align="flex-start" gap="xs">
                                <ThemeIcon variant="transparent" c={'rosePoudre.7'}>
                                    <IconMapPin size={18} style={{ marginTop: 2 }} />
                                </ThemeIcon>
                                <PocketText
                                    fieldId="Addresse"
                                    style={{ size: '1rem', c: '#666' }}
                                />
                            </Flex>
                            <Flex align="center" gap="xs">
                                <ThemeIcon variant="transparent" c={'rosePoudre.7'}>
                                    <IconPhone size={18} />
                                </ThemeIcon>
                                <PocketText
                                    fieldId="Telephone"
                                    style={{ size: '1rem', c: '#666' }}
                                />
                            </Flex>
                            <Flex align="center" gap="xs">
                                <ThemeIcon variant="transparent" c={'rosePoudre.7'}>
                                    <IconMail size={18} />
                                </ThemeIcon>
                                <PocketText fieldId="Email" style={{ size: '1rem', c: '#666' }} />
                            </Flex>
                            <Flex align="center" gap="xs">
                                <ThemeIcon variant="transparent" c={'rosePoudre.7'}>
                                    <IconBrandLinkedin size={18} />
                                </ThemeIcon>
                                <PocketText
                                    fieldId="LinkedIn"
                                    link={true}
                                    label="LinkedIn"
                                    style={{ size: '1rem', c: '#666' }}
                                />
                            </Flex>
                            <Flex align="center" gap="xs">
                                <ThemeIcon variant="transparent" c={'rosePoudre.7'}>
                                    <IconClock size={18} />
                                </ThemeIcon>
                                <PocketText fieldId="Heures" style={{ size: '1rem', c: '#666' }} />
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>

                <Box mt={40} pt={20} style={{ borderTop: '1px solid #ddd' }}>
                    <Flex justify="space-evenly" align="center" gap={'sm'}>
                        <Flex direction={'column'}>
                            <Text ta="center" c="#666" size="sm">
                                © {new Date().getFullYear()} Audrey Branly. Tous droits réservés.
                            </Text>
                            <Anchor
                                component={NavLink}
                                ta={'center'}
                                to="/admin/login"
                                c="#666"
                                size="sm"
                                className="footer-link"
                            >
                                Se connecter
                            </Anchor>
                        </Flex>
                        <Group>
                            <Anchor
                                component={NavLink}
                                to="/politique-de-confidentialite"
                                size="xs"
                            >
                                Politique de confidentialité
                            </Anchor>
                            ·
                            <Anchor component={NavLink} to="/mentions-legales" size="xs">
                                Mentions légales
                            </Anchor>
                        </Group>
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
