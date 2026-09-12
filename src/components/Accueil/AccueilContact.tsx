import { Box, Container, useMantineTheme } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import PocketButton from '../PocketButton';
import PocketText from '../PocketText';
import './AccueilContact.scss';

const AccueilContact = ({
    titleField = 'AccueilContactTitre',
    descriptionField = 'AccueilContactDescription',
    linkTo = '/contact',
}: {
    titleField?: string;
    descriptionField?: string;
    linkTo?: string;
}) => {
    const theme = useMantineTheme();

    return (
        <Box
            bg={theme.colors.rosePoudre[3] + '50'}
            pt={{ base: 50, sm: 70, md: 100 }}
            pb={{ base: 30, sm: 35, md: 40 }}
            px={{ base: 15, sm: 20 }}
            className="accueil-contact-box"
            style={{
                textAlign: 'center',
                justifyContent: 'center',
            }}
        >
            <Container size="md">
                <PocketText
                    fieldId={titleField}
                    size="2rem"
                    fw={500}
                    c="Charbon.5"
                    mb="md"
                    ff="The Seasons, serif"
                />

                <PocketText
                    fieldId={descriptionField}
                    size="lg"
                    c="charbon.7"
                    maw={700}
                    mx="auto"
                    mb="xl"
                    style={{ lineHeight: 1.6 }}
                />
                <PocketButton
                    fieldId="AccueilContactButton"
                    to={linkTo}
                    size="lg"
                    variant="light"
                    color="dark"
                    rightSection={<IconArrowRight size={18} />}
                    px="xl"
                    bg="rosePoudre.7"
                    c={'white'}
                    className="contact-button"
                />
            </Container>
        </Box>
    );
};

export default AccueilContact;
