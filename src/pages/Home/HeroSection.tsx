import { Box, Button, Container, Grid, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <Box component="section" id="accueil" className={classes.heroSection}>
            <Container size="xl">
                <Grid gutter={{ base: 'xl', md: 48 }} align="center">
                    {/* Left Column: Personal Statement & Vision */}
                    <Grid.Col span={{ base: 12, lg: 7 }}>
                        <Stack gap="xl">
                            {/* Eyebrow badge */}
                            {/* <Box className={classes.badge}>
                                <span className={classes.badgeDot} />
                                <span className={classes.badgeText}>
                                    Lorem Ipsum • Dolor Sit Amet
                                </span>
                            </Box> */}

                            {/* Editorial Main Title */}
                            <Title order={1} className={classes.heroTitle}>
                                Lorem ipsum dolor sit amet.{' '}
                                <span className={classes.heroTitleItalic}>
                                    Consectetur adipiscing elit
                                </span>{' '}
                                sed do eiusmod tempor.
                            </Title>

                            {/* Narrative Subtitle */}
                            <Text className={classes.heroDescription}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate.
                            </Text>

                            {/* Action Buttons */}
                            <Group gap="md" pt="xs">
                                <Button
                                    component="a"
                                    href="#projets"
                                    className={classes.primaryCta}
                                    rightSection={<IconArrowRight size={18} />}
                                >
                                    Découvrir mes Projets
                                </Button>
                                <Button
                                    component="a"
                                    href="#contact"
                                    className={classes.secondaryCta}
                                >
                                    Collaborer
                                </Button>
                            </Group>
                        </Stack>
                    </Grid.Col>

                    {/* Right Column: Glassmorphic Note Card */}
                    <Grid.Col span={{ base: 12, lg: 5 }}>
                        <Paper className={classes.noteCard}>
                            <Stack gap="lg">
                                {/* Header */}
                                <Group justify="space-between" align="center">
                                    <Text className={classes.noteCategory}>REGARD & PRATIQUE</Text>
                                    <span className={classes.noteLocation}>Basée à Paris</span>
                                </Group>

                                {/* Quote */}
                                <Text className={classes.noteQuote}>
                                    &laquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. &raquo;
                                </Text>

                                {/* Meta details */}
                                <div className={classes.metaGrid}>
                                    <div>
                                        <Text className={classes.metaLabel}>OBSESSIONS</Text>
                                        <Text className={classes.metaValue}>
                                            Lorem ipsum, dolor sit, consectetur
                                        </Text>
                                    </div>
                                    <div>
                                        <Text className={classes.metaLabel}>DISPONIBILITÉ</Text>
                                        <Group gap={6} mt={4}>
                                            <span className={classes.liveDot} />
                                            <Text size="xs" c="#ffb3b0" fw={600}>
                                                Lorem Ipsum 2025
                                            </Text>
                                        </Group>
                                    </div>
                                </div>
                            </Stack>
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
