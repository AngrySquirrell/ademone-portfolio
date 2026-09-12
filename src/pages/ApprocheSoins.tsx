import { Box, Card, Container, Flex, useMantineTheme } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import ASBienFaitHoli from '../components/ApprochesSoins/ASBienFaitHoli';
import ASCadreList from '../components/ApprochesSoins/ASCadreList';
import ASDeroulement from '../components/ApprochesSoins/ASDeroulement';
import ASHero from '../components/ApprochesSoins/ASHero';
import ASProfilHoli from '../components/ApprochesSoins/ASProfilHoli';
import ASProfilList from '../components/ApprochesSoins/ASProfilList';
import PocketButton from '../components/PocketButton';
import PocketMedia from '../components/PocketMedia';
import PocketText from '../components/PocketText';
import TitleComponent from '../components/TitleComponent';
import './ApprocheSoins.scss';

const ApprocheSoins = () => {
    const theme = useMantineTheme();
    return (
        <>
            <ASHero
                title="ASHeroTitle"
                description="descriptionField"
                backgroundImage="backgroundImageField"
                titleField="titleField"
                textField="textField"
            />
            <Container>
                <TitleComponent fieldId="ASCadreTitle" color="rosePoudre" />
                <Flex
                    gap="xl"
                    justify="space-between"
                    direction={{
                        base: 'column',
                        md: 'row',
                    }}
                >
                    <Box flex={1}>
                        <ASCadreList
                            TextListCadreAS1="TextListCadreAS1"
                            TextListCadreAS2="TextListCadreAS2"
                            TextListCadreAS3="TextListCadreAS3"
                            TextListCadreAS4="TextListCadreAS4"
                        />
                        <Card bdrs={'2rem 0.5rem 2rem 0.5rem'} w={'100%'} mt={'xl'}>
                            <Box py={'sm'}>
                                <Flex gap="md" align="flex-end" direction="row" wrap="wrap">
                                    <Box
                                        w={50}
                                        h={4}
                                        bg="framboise.5"
                                        mb="sm"
                                        style={{ borderRadius: '2px' }}
                                    />
                                    <PocketText fieldId="ASCadreCardTitle1" size="xl" />
                                </Flex>
                                <PocketText fieldId="ASCadreCardText1" />
                            </Box>
                            <Box py={'sm'}>
                                <Flex gap="md" align="flex-end" direction="row" wrap="wrap">
                                    <Box
                                        w={50}
                                        h={4}
                                        bg="framboise.5"
                                        mb="sm"
                                        style={{ borderRadius: '2px' }}
                                    />
                                    <PocketText fieldId="ASCadreCardTitle2" size="xl" />
                                </Flex>
                                <PocketText fieldId="ASCadreCardText2" />
                            </Box>
                            <Box py={'sm'}>
                                <Flex gap="md" align="flex-end" direction="row" wrap="wrap">
                                    <Box
                                        w={50}
                                        h={4}
                                        bg="framboise.5"
                                        mb="sm"
                                        style={{ borderRadius: '2px' }}
                                    />
                                    <PocketText fieldId="ASCadreCardTitle3" size="xl" />
                                </Flex>
                                <PocketText fieldId="ASCadreCardText3" />
                            </Box>
                        </Card>
                    </Box>
                    <PocketMedia mediaId="ASCadreImage" flex={1} />
                </Flex>
            </Container>

            <Box mt={'xl'} bg={theme.colors.rosePoudre[3] + '50'}>
                <Container py={'3rem'} px={'xl'}>
                    <Card>
                        <Flex gap="md" align="center" direction="row" wrap="wrap">
                            <Box
                                w={50}
                                h={4}
                                bg="framboise.5"
                                mb="sm"
                                style={{ borderRadius: '2px' }}
                            />
                            <PocketText
                                fieldId="ASCardArtTransmissionTitle"
                                size="lg"
                                mb="md"
                                fw={'500'}
                                c={'rosePoudre.7'}
                            />
                        </Flex>
                        <Flex>
                            <PocketText
                                fieldId="ASCardArtTransmissionText"
                                size="md"
                                mb="md"
                                ml={'5rem'}
                            />
                            <PocketMedia mediaId="ASCardArtTransmissionImage" />
                        </Flex>
                    </Card>
                </Container>
                <Container>
                    <Flex justify="center" className="accompagnement-section">
                        <PocketButton
                            fieldId="ASAccompagnementButton"
                            to={'/contact'}
                            size="lg"
                            variant="light"
                            color="white"
                            rightSection={<IconArrowRight size={18} />}
                            radius="xl"
                            px="xl"
                            bg="rosePoudre.7"
                            className="accompagnement-button"
                            c={'white'}
                        />
                    </Flex>
                </Container>
            </Box>
            <ASProfilHoli
                titleASProfil="ASProfilHoliTitle"
                descriptionASProfil="ASProfilHoliDescription"
            />
            <Container my="xl">
                <Flex wrap="wrap" gap={'2rem'} justify="space-between">
                    <Box flex={1} miw={320}>
                        <ASProfilList
                            TextListAS1="TextListAS1"
                            TextListAS2="TextListAS2"
                            TextListAS3="TextListAS3"
                            TextListAS4="TextListAS4"
                            TextListAS5="TextListAS5"
                            TextListAS6="TextListAS6"
                        />

                        <Card
                            w="auto"
                            mt="md"
                            p="30px "
                            style={{ display: 'inline-block', height: 'auto' }}
                        >
                            <PocketText fieldId="ASCitationProfil" fz={'h4'} c={'rosePoudre.7'} />
                        </Card>
                    </Box>
                </Flex>
                <Flex justify="center" mt="md" pb={'md'}>
                    <PocketButton
                        fieldId="ASProfilButton"
                        to={'/contact'}
                        size="lg"
                        variant="light"
                        color="dark"
                        rightSection={<IconArrowRight size={18} />}
                        radius="xl"
                        px="xl"
                        bg="rosePoudre.7"
                        c={'white'}
                        className="rebozo-button"
                    />
                </Flex>
            </Container>
            <ASBienFaitHoli
                titleField="ASBienFaitHoliTitle"
                descriptionField="ASBienFaitHoliDescription"
                backgroundImageField="ASBienFaitHoliBackgroundImage"
                card1TitleField="ASBienFaitHoliCard1Title"
                card1Item1Field="ASBienFaitHoliCard1Item1"
                card1Item2Field="ASBienFaitHoliCard1Item2"
                card1Item3Field="ASBienFaitHoliCard1Item3"
                card1Item4Field="ASBienFaitHoliCard1Item4"
                card2TitleField="ASBienFaitHoliCard2Title"
                card2Item1Field="ASBienFaitHoliCard2Item1"
                card2Item2Field="ASBienFaitHoliCard2Item2"
                card2Item3Field="ASBienFaitHoliCard2Item3"
                card2Item4Field="ASBienFaitHoliCard2Item4"
                card3TitleField="ASBienFaitHoliCard3Title"
                card3Item1Field="ASBienFaitHoliCard3Item1"
                card3Item2Field="ASBienFaitHoliCard3Item2"
                card3Item3Field="ASBienFaitHoliCard3Item3"
                card3Item4Field="ASBienFaitHoliCard3Item4"
            />
            <Container mt={'5rem'} mb={'5rem'}>
                <Card mt={'xl'} shadow="sm" p={{ base: 'lg', md: 'xl' }} withBorder>
                    <Flex align="stretch" gap={{ base: 'sm', md: 'md' }}>
                        <Box w={4} h={'auto'} bg={'framboise.5'} style={{ borderRadius: '4px' }} />
                        <Box style={{ flex: 1 }}>
                            <Flex align="center" gap="sm" mb="md">
                                <PocketText
                                    fieldId={'titleField'}
                                    fw={'500'}
                                    fz={{ base: '1.5em', md: '1.7em' }}
                                    c="charbon.6"
                                    ff="The Seasons, serif"
                                />
                            </Flex>
                            <PocketText
                                fieldId={'textField'}
                                fz={{ base: 'sm', md: 'md' }}
                                c="charbon.7"
                                lh={1.6}
                            />
                        </Box>
                    </Flex>
                </Card>
                <ASDeroulement
                    titleField="ASDeroulementTitle"
                    descriptionField="ASDeroulementDescription"
                    step1TitleField="ASDeroulementStep1Title"
                    step1DescriptionField="ASDeroulementStep1Description"
                    step2TitleField="ASDeroulementStep2Title"
                    step2DescriptionField="ASDeroulementStep2Description"
                    step3TitleField="ASDeroulementStep3Title"
                    step3DescriptionField="ASDeroulementStep3Description"
                    step4TitleField="ASDeroulementStep4Title"
                    step4DescriptionField="ASDeroulementStep4Description"
                />
            </Container>
        </>
    );
};

export default ApprocheSoins;
