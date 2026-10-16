import { Box } from '@mantine/core';
import AtmosphereBackground from '../../components/AtmosphereBackground';
import ApproachSection from './ApproachSection';
import ContactSection from './ContactSection';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';

const HomePage = () => {
    return (
        <Box pos="relative" style={{ minHeight: '100vh', overflowX: 'hidden' }}>
            {/* Ambient background with animated blobs and glass scrim */}
            <AtmosphereBackground />

            {/* Main Sections */}
            <HeroSection />
            <ProjectsSection />
            {/* <ApproachSection /> */}
            <ContactSection />
        </Box>
    );
};

export default HomePage;
