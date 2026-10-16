import { Box, Container, Grid, Group, Stack, Text, Title } from '@mantine/core';
import { useState } from 'react';
import PocketCarousel from '../../components/PocketCarousel';
import PocketMedia from '../../components/PocketMedia';
import classes from './ProjectsSection.module.css';

interface ProjectItem {
    id?: string;
    mediaId: string;
    category: string;
    title: string;
    year: string;
    color: string;
    glowClass: string;
    isSerif?: boolean;
    height: number;
    span: { base: number; md: number };
}

/** TODO
 * Once the POCKETBASE link is done, the 4 images should be pulled from pocketbase
 * Policy, the 4 most recent pictures shall be displayed here
 *  */

const projects: ProjectItem[] = [
    {
        // id: 'portraits-ombres',
        mediaId: 'project_portraits_ombres',
        category: 'Personnel • portraits ombrages',
        title: 'Lorem Ipsum Dolor',
        year: '2024',
        color: '#FFB783',
        glowClass: classes.glowAmber,
        isSerif: true,
        height: 460,
        span: { base: 12, md: 8 },
    },
    {
        // id: 'brutalisme',
        mediaId: 'project_brutalisme',
        category: 'Personnel • Brutalisme',
        title: 'Consectetur Adipiscing',
        year: '2024',
        color: '#00B4D8',
        glowClass: classes.glowCyan,
        isSerif: false,
        height: 460,
        span: { base: 12, md: 4 },
    },
    {
        // id: 'solitudes-urbaines',
        mediaId: 'project_solitudes_urbaines',
        category: 'Serie • Solitudes urbaines',
        title: 'Tempor Incididunt',
        year: '2026',
        color: '#2EC4B6',
        glowClass: classes.glowEmerald,
        isSerif: false,
        height: 400,
        span: { base: 12, md: 5 },
    },
    {
        // id: 'choc-lumineux',
        mediaId: 'project_choc_lumineux',
        category: 'Serie • Choc lumineux',
        title: 'Magna Aliqua Enim',
        year: '2025',
        color: '#FF2A3F',
        glowClass: classes.glowCrimson,
        isSerif: true,
        height: 400,
        span: { base: 12, md: 7 },
    },
];

const filterCategories = ['Tous les projets', 'Japon 2026', 'Projet 1', 'Projet 2'];

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState('Tous les projets');

    return (
        <Box component="section" id="projets" className={classes.projectsSection}>
            <Container size="xl">
                {/* Section Header with filter buttons */}
                <Group justify="space-between" align="flex-end" mb="xl" wrap="wrap" gap="md">
                    <Stack gap={4}>
                        <Text className={classes.sectionSubtitle}>
                            PROJETS & SERIES PERSONNELLES
                        </Text>
                        <Title order={2} className={classes.sectionTitle}>
                            Lorem Ipsum Dolor & Sit Amet
                        </Title>
                    </Stack>

                    {/* Filter buttons */}
                    <Group gap="xs">
                        {filterCategories.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setActiveFilter(cat)}
                                className={`${classes.filterPill} ${
                                    activeFilter === cat ? classes.filterPillActive : ''
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </Group>
                </Group>

                {/* Asymmetrical Editorial Portfolio Grid */}
                <Grid gutter="xl">
                    {projects.map((project) => (
                        <Grid.Col key={project.id} span={project.span}>
                            <Box className={`${classes.cardFrame} ${project.glowClass}`}>
                                {/* Media container using PocketMedia */}
                                <Box className={classes.pocketMediaWrapper}>
                                    <PocketMedia
                                        mediaId={project.mediaId}
                                        // fallbackSrc={project.fallbackSrc}
                                        h={project.height}
                                        radius="lg"
                                        cover
                                    >
                                        <Box className={classes.cardOverlay}>
                                            <Text
                                                className={classes.cardCategory}
                                                style={{ color: project.color }}
                                            >
                                                {project.category}
                                            </Text>
                                            <Text
                                                className={
                                                    project.isSerif
                                                        ? classes.cardTitleSerif
                                                        : classes.cardTitleSans
                                                }
                                            >
                                                {project.title}
                                            </Text>
                                        </Box>
                                    </PocketMedia>
                                </Box>

                                {/* Card bottom footer metadata */}
                                <div className={classes.cardFooter}>
                                    <span className={classes.cardYear}>{project.year}</span>
                                    <div className={classes.colorIndicator}>
                                        <span
                                            className={classes.colorDot}
                                            style={{
                                                backgroundColor: project.color,
                                                boxShadow: `0 0 8px ${project.color}`,
                                            }}
                                        />
                                        <span
                                            className={classes.colorHex}
                                            style={{ color: project.color }}
                                        >
                                            {project.color}
                                        </span>
                                    </div>
                                </div>
                            </Box>
                        </Grid.Col>
                    ))}
                </Grid>

                {/* Dynamic PocketCarousel integration */}
                {/* <Box mt={64}>
                    <PocketCarousel />
                </Box> */}
            </Container>
        </Box>
    );
};

export default ProjectsSection;
