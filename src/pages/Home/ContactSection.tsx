import { Box, Button, Container, Grid, Paper, Stack, Text, Title } from '@mantine/core';
import { IconCamera, IconSend } from '@tabler/icons-react';
import classes from './ContactSection.module.css';

const ContactSection = () => {
    return (
        <Box component="section" id="contact" className={classes.contactSection}>
            <Container size="xl">
                <Paper className={classes.glassContainer}>
                    <Grid gutter={{ base: 'xl', md: 48 }} align="center">
                        {/* Left Column: Heading & Info */}
                        <Grid.Col span={{ base: 12, lg: 7 }}>
                            <Stack gap="md">
                                <Box className={classes.badge}>
                                    <span className={classes.liveDot} />
                                    <span className={classes.badgeText}>
                                        Lorem ipsum dolor & sit amet
                                    </span>
                                </Box>

                                <Title order={2} className={classes.title}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                </Title>

                                <Text className={classes.description}>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat duis aute irure.
                                </Text>
                            </Stack>
                        </Grid.Col>

                        {/* Right Column: CTA Buttons */}
                        <Grid.Col span={{ base: 12, lg: 5 }}>
                            <Stack gap="md">
                                <Button
                                    component="a"
                                    href="mailto:contact@ademone.art"
                                    className={classes.primaryBtn}
                                    leftSection={<IconSend size={18} />}
                                >
                                    Envoyer un message
                                </Button>
                                <Button
                                    component="a"
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.secondaryBtn}
                                    leftSection={<IconCamera size={18} />}
                                >
                                    Me retrouver sur Instagram
                                </Button>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default ContactSection;
