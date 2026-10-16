import { Box, Container, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconBrain, IconMoon, IconMovie } from '@tabler/icons-react';
import classes from './ApproachSection.module.css';

const inspirations = [
    {
        icon: IconMovie,
        title: 'Lorem Ipsum Primus',
        description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.',
        color: '#ff2a3f',
        bg: 'rgba(255, 42, 63, 0.12)',
        border: '1px solid rgba(255, 42, 63, 0.3)',
    },
    {
        icon: IconMoon,
        title: 'Secundus Dolor Sit',
        description:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        color: '#ffb783',
        bg: 'rgba(255, 183, 131, 0.12)',
        border: '1px solid rgba(255, 183, 131, 0.3)',
    },
    {
        icon: IconBrain,
        title: 'Tertius Consectetur',
        description:
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        color: '#00b4d8',
        bg: 'rgba(0, 180, 216, 0.12)',
        border: '1px solid rgba(0, 180, 216, 0.3)',
    },
];

const ApproachSection = () => {
    return (
        <Box component="section" id="demarche" className={classes.approachSection}>
            <Container size="xl">
                <Paper className={classes.glassContainer}>
                    <div className={classes.ambientBlob} />

                    <Stack gap="xl" pos="relative" style={{ zIndex: 1 }}>
                        {/* Section Header */}
                        <Box maw={680}>
                            <Text className={classes.sectionSubtitle}>
                                LOREM IPSUM & DOLOR SIT
                            </Text>
                            <Title order={2} className={classes.sectionTitle} mt={8}>
                                Lorem ipsum dolor: amet consectetur adipiscing elit
                            </Title>
                            <Text className={classes.sectionDescription} mt={12}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
                                ab illo.
                            </Text>
                        </Box>

                        {/* 3 Inspiration Cards */}
                        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mt="md">
                            {inspirations.map((item) => {
                                const IconComp = item.icon;
                                return (
                                    <Box key={item.title} className={classes.inspirationCard}>
                                        <Stack gap="md">
                                            <div
                                                className={classes.iconWrapper}
                                                style={{
                                                    backgroundColor: item.bg,
                                                    border: item.border,
                                                    color: item.color,
                                                }}
                                            >
                                                <IconComp size={22} />
                                            </div>
                                            <Text className={classes.cardTitle}>{item.title}</Text>
                                            <Text className={classes.cardText}>
                                                {item.description}
                                            </Text>
                                        </Stack>
                                    </Box>
                                );
                            })}
                        </SimpleGrid>
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
};

export default ApproachSection;
