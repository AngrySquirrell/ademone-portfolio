import { Box, Container, Flex } from '@mantine/core';
import AccueilHero from '../components/Accueil/AccueilHero';
import SectionCardImage from '../components/Accueil/SectionCardImage';
import AccueilContact from '../components/Accueil/AccueilContact';

const Accueil = () => {
    return (
        <Box>
            <AccueilHero />
            <Container py={64}>
                <Flex direction={'column'} gap={64}>
                    <SectionCardImage
                        imagePosition="right"
                        titleField="TitleAccueilCard1"
                        contentField="ContentAccueilCard1"
                        contentButtonField="ContentButtonAccueilCard1"
                        linkTo="parcours-presentation"
                        imageField="AccueilCard1Image"
                    />
                    <SectionCardImage
                        imagePosition="left"
                        titleField="TitleAccueilCard2"
                        contentField="ContentAccueilCard2"
                        contentButtonField="ContentButtonAccueilCard2"
                        linkTo="approche-soins"
                        imageField="AccueilCard2Image"
                    />
                    <SectionCardImage
                        imagePosition="right"
                        titleField="TitleAccueilCard3"
                        contentField="ContentAccueilCard3"
                        contentButtonField="ContentButtonAccueilCard3"
                        linkTo="transmission-supervision"
                        imageField="AccueilCard3Image"
                    />
                </Flex>
            </Container>
            <Flex justify="center">
                <AccueilContact
                    titleField="AccueilContactTitre"
                    descriptionField="AccueilContactDescription"
                    linkTo="/contact"
                />
            </Flex>
        </Box>
    );
};

export default Accueil;
