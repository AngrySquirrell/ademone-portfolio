import { Burger, Button, Drawer, Flex, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, NavLink, useLocation } from 'react-router';
import './Header.scss';

const Header = () => {
    const [opened, { toggle, close }] = useDisclosure(false);
    const location = useLocation();

    // TODO: Customize navigation links for your project
    const navLinks = [
        { label: 'Accueil', path: '/' },
        { label: 'Portrait', path: '/page-2' },
        { label: 'Studio', path: '/page-3' },
        { label: 'Contact', path: '/page-5' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <Flex
                align={'center'}
                justify={'center'}
                h="var(--app-shell-header-height)"
                style={{
                    // backgroundColor: 'red',
                    position: 'sticky',
                    // top: 0,
                    zIndex: 100,
                    margin: 24,
                    marginTop: 64
                }}
            >
                <Flex justify="space-between" align={'center'} w="1200px" px="md" style={{
                    padding: 24,
                    // backgroundColor: 'blue',
                    borderRadius: 16,
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(3.3px)",
                    WebkitBackdropFilter: "blur(3.3px)",
                    border: "1px solid rgba(255, 255, 255, 0.13)",
                    backgroundColor: 'rgba(255, 255, 255, 0.09)'
                }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        {/* TODO: Replace with your logo */}
                        <Text fw={700} fz="xl" c="primary">
                            Ademone Photo
                        </Text>
                    </Link>

                    <Flex gap={'xs'} visibleFrom="md" align={'center'}>
                        {navLinks.map((link) => (
                            <Button
                                className={`header-link ${isActive(link.path) ? 'active' : ''}`}
                                color={isActive(link.path) ? 'primary.7' : 'dark.7'}
                                variant="white"
                                component={NavLink}
                                to={link.path}
                                key={link.path}
                            >
                                {link.label}
                            </Button>
                        ))}
                    </Flex>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
                </Flex>
            </Flex>

            <Drawer opened={opened} onClose={close} size="100%" position="right" hiddenFrom="md">
                <Flex direction="column" gap="lg" p="md">
                    {navLinks.map((link) => (
                        <Button
                            key={link.path}
                            component={NavLink}
                            to={link.path}
                            onClick={close}
                            variant="white"
                            color={isActive(link.path) ? 'primary.7' : 'dark.7'}
                            size="xl"
                        >
                            {link.label}
                        </Button>
                    ))}
                </Flex>
            </Drawer>
        </>
    );
};

export default Header;
