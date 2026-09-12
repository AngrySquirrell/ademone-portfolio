import { Box, Card, Container, Flex, List, useMantineTheme } from '@mantine/core';
import PPHero from '../components/ParcoursPresentation/PPHero';
import TitleComponent from '../components/TitleComponent';
import PocketText from '../components/PocketText';
import PPFormationInitialCard from '../components/ParcoursPresentation/PPFormationInitialCard';
import PPExperienceProCard from '../components/ParcoursPresentation/PPExperienceProCard';
import '../pages/ParcousPresentation.css';
import PocketMedia from '../components/PocketMedia';

const ParcoursPresentation = () => {
    const theme = useMantineTheme();

    return (
        <>
            <PPHero
                title="PPHeroTitre"
                description="PPHeroDescription"
                backgroundImage="PPBackgroundImage"
                imageField="PPImageCardPresentation"
                quoteField="PPQuoteCardPresentation"
                textField="PPTextCardPresentation"
            />
            <Container>
                <PocketText
                    fieldId="PPVisionAccompagnementTitle"
                    my={'xl'}
                    style={{ textAlign: 'center' }}
                    fz={'h1'}
                    fw={900}
                    ff="The Seasons, serif"
                />
                <Card shadow="sm" radius={'8px'}>
                    <Flex direction={'column'} align={'center'} gap={'sm'}>
                        <PocketText
                            fieldId="PPVisionAccompagnementCitation"
                            c={'charbon.7'}
                            fw={500}
                        />
                        <Box
                            w={'40%'}
                            h={'4px'}
                            bg={theme.colors.framboise[5]}
                            style={{ borderRadius: '1rem' }}
                        />
                        <PocketText fieldId="PPVisionAccompagnementText1" fz={'h4'} />
                        <PocketText fieldId="PPVisionAccompagnementText2" fz={'h4'} />
                        <PocketText fieldId="PPVisionAccompagnementText3" fz={'h4'} />
                    </Flex>
                </Card>
                <Box py={'xl'}>
                    <TitleComponent fieldId="PPFormationInitialTitle" color="rosePoudre" />
                    <Container mx={'sm'}>
                        <PocketText fieldId="PPFormationInitialText" mt="md" mb="xl" fz={'h4'} />
                        <Flex direction={{ base: 'column', sm: 'row' }} mt="md" gap="xl">
                            <PPFormationInitialCard
                                TitleCard="PPFormationInitialCard1Title"
                                Item1="PPFormationInitialCard1Item1"
                                Item2="PPFormationInitialCard1Item2"
                                Item3="PPFormationInitialCard1Item3"
                            />
                            <PPFormationInitialCard
                                TitleCard="PPFormationInitialCard2Title"
                                Item1="PPFormationInitialCard2Item1"
                                Item2="PPFormationInitialCard2Item2"
                                Item3="PPFormationInitialCard2Item3"
                            />
                        </Flex>
                    </Container>
                </Box>
                <Box py={'xl'}>
                    <TitleComponent fieldId="PPExperienceProTitle" color="rosePoudre" />
                    <Container>
                        <PocketText fieldId="PPExperienceProText" mt="md" mb="xl" fz={'h4'} />
                        <Flex gap="lg" direction={'column'}>
                            <PPExperienceProCard
                                TitleCard="PPExperienceProCard1Title"
                                TextCard="PPExperienceProCard1Text"
                                Item1="PPExperienceProCard1Item1"
                                Item2="PPExperienceProCard1Item2"
                            />
                            <PPExperienceProCard
                                TitleCard="PPExperienceProCard2Title"
                                TextCard="PPExperienceProCard2Text"
                                Item1="PPExperienceProCard2Item1"
                                Item2="PPExperienceProCard2Item2"
                            />
                            <PPExperienceProCard
                                TitleCard="PPExperienceProCard3Title"
                                TextCard="PPExperienceProCard3Text"
                                Item1="PPExperienceProCard3Item1"
                                Item2="PPExperienceProCard3Item2"
                            />
                        </Flex>
                    </Container>
                </Box>
                <Box py={'sm'} maw={800} mx={'auto'}>
                    <PocketMedia
                        mediaId="PPVideoPresentation"
                        style={{ aspectRatio: '16/9' }}
                        // video={{ controls: true, controlsList: 'nodownload' }}
                    />
                </Box>
                <Box pb={'xl'}>
                    <TitleComponent fieldId="PPCertifTitle" color="rosePoudre" />
                    <Container>
                        <Card p={'xl'} shadow="sm" radius={'8px'}>
                            <Flex justify={'center'} ta={'start'} direction={'column'}>
                                <PocketText fieldId="PPCertifText" mt="md" mb="sm" fz="h4" />
                                <Flex
                                    gap={'xl'}
                                    direction={{
                                        base: 'column',
                                        sm: 'row',
                                    }}
                                >
                                    <Flex direction={'column'} ta={'start'}>
                                        <PocketText
                                            fieldId="PPFormationInitial1Text"
                                            mt="md"
                                            mb="sm"
                                            c={'rosePoudre.7'}
                                            fw={'500'}
                                            fz={'h4'}
                                        />
                                        <List className="DotColor">
                                            <List.Item>
                                                <PocketText fieldId="PPCertif1Item1" />
                                            </List.Item>
                                            <List.Item>
                                                <PocketText fieldId="PPCertif1Item2" />
                                            </List.Item>
                                            <List.Item>
                                                <PocketText fieldId="PPCertif1Item3" />
                                            </List.Item>
                                        </List>
                                    </Flex>
                                    <Flex direction={'column'} ta={'start'}>
                                        <PocketText
                                            fieldId="PPFormationInitial2Text"
                                            mt="md"
                                            mb="sm"
                                            c={'rosePoudre.7'}
                                            fw={'500'}
                                            fz={'h4'}
                                        />
                                        <List className="DotColor">
                                            <List.Item>
                                                <PocketText fieldId="PPCertif2Item1" />
                                            </List.Item>
                                            <List.Item>
                                                <PocketText fieldId="PPCertif2Item2" />
                                            </List.Item>
                                            <List.Item>
                                                <PocketText fieldId="PPCertif2Item3" />
                                            </List.Item>
                                        </List>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Card>
                    </Container>
                </Box>
            </Container>
        </>
    );
};

export default ParcoursPresentation;
