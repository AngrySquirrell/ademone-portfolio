import { Burger, Button, Drawer, Flex, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, NavLink, useLocation } from 'react-router';
import './Header.scss';
import logo from '../assets/logoAB3.svg';

const Header = () => {
    const [opened, { toggle, close }] = useDisclosure(false);
    const location = useLocation();

    const navLinks = [
        { label: 'Accueil', path: '/' },
        { label: 'Parcours & Présentation', path: '/parcours-presentation' },
        { label: 'Approche & Soins', path: '/approche-soins' },
        { label: 'Transmission & Supervision', path: '/transmission-supervision' },
        { label: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <Flex
                align={'center'}
                justify={'center'}
                h="var(--app-shell-header-height)"
                style={{
                    // borderBottom: '1px solid #cbbd93',
                    backgroundColor: 'white',
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Flex justify="space-between" align={'center'} w="1200px" px="md">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Image
                            src={logo}
                            alt={'Audrey Branly'}
                            height={80}
                            fit="contain"
                            style={{ cursor: 'pointer' }}
                            bdrs={'sm'}
                        />
                    </Link>

                    <Flex gap={'xs'} visibleFrom="md" align={'center'}>
                        {navLinks.map((link) => (
                            <Button
                                className={`header-link ${isActive(link.path) ? 'active' : ''}`}
                                color={isActive(link.path) ? 'rosePoudre.7' : 'dark.7'}
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
                            color={isActive(link.path) ? 'rosePoudre.7' : 'dark.7'}
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
