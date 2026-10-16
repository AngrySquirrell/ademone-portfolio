import { Box, Burger, Button, Drawer, Group, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMessageCircle } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router';
import classes from './Header.module.css';

const Header = () => {
    const [opened, { toggle, close }] = useDisclosure(false);
    const location = useLocation();

    const navLinks = [
        { label: 'Accueil', href: '#accueil' },
        { label: 'Projets', href: '#projets' },
    ];

    const currentHash = location.hash || '#accueil';

    return (
        <>
            <Box className={classes.headerWrapper}>
                <Box className={classes.island}>
                    {/* Brand Identifier */}
                    <Link to="/" className={classes.brandLink}>
                        <span className={classes.brandDot} />
                        <span className={classes.brandText}>ADEMONE</span>
                    </Link>

                    {/* Center Nav Links: Accueil, Projets */}
                    <Group gap="xl" visibleFrom="md">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`${classes.navLink} ${
                                    currentHash === link.href ? classes.navLinkActive : ''
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </Group>

                    {/* Trailing Action: Me contacter */}
                    <Group gap="md">
                        <Button
                            component="a"
                            href="#contact"
                            className={classes.ctaButton}
                            leftSection={<IconMessageCircle size={16} />}
                            visibleFrom="sm"
                        >
                            Me contacter
                        </Button>
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="md"
                            size="sm"
                            color="white"
                            aria-label="Menu de navigation"
                        />
                    </Group>
                </Box>
            </Box>

            {/* Mobile Drawer */}
            <Drawer
                opened={opened}
                onClose={close}
                size="100%"
                position="right"
                hiddenFrom="md"
                styles={{
                    content: {
                        backgroundColor: '#131315',
                        color: 'white',
                    },
                    header: {
                        backgroundColor: '#131315',
                        color: 'white',
                    },
                }}
                title={
                    <Group gap="xs">
                        <span className={classes.brandDot} />
                        <Text fw={700} ff="Lexend, sans-serif" lts="0.1em" c="white">
                            ADEMONE
                        </Text>
                    </Group>
                }
            >
                <Stack gap="xl" p="md" mt="xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={close}
                            className={classes.navLink}
                            style={{ fontSize: '1.25rem' }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button
                        component="a"
                        href="#contact"
                        onClick={close}
                        className={classes.ctaButton}
                        size="lg"
                        leftSection={<IconMessageCircle size={20} />}
                    >
                        Me contacter
                    </Button>
                </Stack>
            </Drawer>
        </>
    );
};

export default Header;
