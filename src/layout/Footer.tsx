import { Box, Group, Text } from '@mantine/core';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <Box component="footer" className={classes.footer}>
            <div className={classes.footerContainer}>
                {/* Brand & Copyright */}
                <Group gap="xs">
                    <Text className={classes.brand}>ADEMONE</Text>
                    <Text c="dimmed" size="xs">
                        •
                    </Text>
                    <Text size="xs" c="#c7c6c6" ff="Comfortaa, sans-serif">
                        © 2026 ADEMONE. Tous droits réservés.
                    </Text>
                </Group>

                {/* Footer Navigation */}
                <Group gap="xl">
                    <a href="#accueil" className={classes.link}>
                        À propos
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.link}
                    >
                        Instagram
                    </a>
                    <a href="#contact" className={classes.link}>
                        Contact
                    </a>
                </Group>
            </div>
        </Box>
    );
};

export default Footer;
