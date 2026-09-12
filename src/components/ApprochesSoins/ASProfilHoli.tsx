import { Box, Container, useMantineTheme } from '@mantine/core';
import PocketText from '../PocketText';

interface ASProfilHoliProps {
    titleASProfil: string;
    descriptionASProfil: string;
}

const ASProfilHoli = ({ titleASProfil, descriptionASProfil }: ASProfilHoliProps) => {
    const theme = useMantineTheme();
    return (
        <Box pt="xl" pb={'md'}>
            <Box
                bg={
                    'linear-gradient(90deg, ' +
                    theme.colors.rosePoudre[7] +
                    ' 50%, ' +
                    'transparent' +
                    ' 50%)'
                }
            >
                <Container px={0}>
                    <Box
                        py="md"
                        px="lg"
                        w={'fit-content'}
                        bg="rosePoudre.7"
                        bdrs={'0rem 5rem 5rem 0rem'}
                    >
                        <PocketText
                            fieldId={titleASProfil}
                            fz={'h1'}
                            mb="xs"
                            fw={'900'}
                            c={'white'}
                            ff="The Seasons, serif"
                        />
                        <PocketText
                            fieldId={descriptionASProfil}
                            size="sm"
                            mb="xs"
                            c={'white'}
                            maw={'900'}
                        />
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default ASProfilHoli;
