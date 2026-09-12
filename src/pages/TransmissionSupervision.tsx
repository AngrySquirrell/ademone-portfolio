import TSHero from '../components/TransmissionSupervision/TSHero';
import { Box, Card, Container, Flex, List } from '@mantine/core';
import TitleComponent from '../components/TitleComponent';
import TSCardDefinition from '../components/TransmissionSupervision/TSCardDefinition';
import PocketMedia from '../components/PocketMedia';
import PocketText from '../components/PocketText';
import TSTimeline from '../components/TransmissionSupervision/TSTimeline';
import TSCard from '../components/TransmissionSupervision/TSCard';
import TSCardFormation from '../components/TransmissionSupervision/TSCardFormation';
import TSTemoignageCard from '../components/TransmissionSupervision/TSTemoignageCard';
import TSCTASection from '../components/TransmissionSupervision/TSCTASection';

const TransmissionSupervision = () => {
    return (
        <>
            <TSHero
                title="TransmissionSupervisionHeroTitle"
                description="TransmissionSupervisionHeroDescription"
                backgroundImage="TransmissionSupervisionHeroBackgroundImage"
            />
            <Container px={{ base: 'md', sm: 'xl' }} mt={{ base: 'xl', md: '50px' }}>
                <TitleComponent fieldId="TransmissionSupervisionFirstTitle" color="rosePoudre" />
                <TSCardDefinition />
            </Container>
            <Box mt={{ base: 'xl', md: '60px' }}>
                <PocketMedia
                    mediaId={'TransmissionSupervisionCardDefinitionBackgroundImage'}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    mt={{ base: '0', md: '-20px' }}
                    py={'xl'}
                >
                    <Card
                        my={'md'}
                        w={'auto'}
                        p={{ base: 'md', md: 'xl' }}
                        shadow="sm"
                        mx={{ base: 'md', md: '0' }}
                    >
                        <Flex
                            gap={{ base: 'lg', md: 'xl' }}
                            direction={{ base: 'column', md: 'row' }}
                        >
                            <Box flex={1}>
                                <Flex
                                    align="center"
                                    gap={{ base: 'xs', sm: 'sm' }}
                                    mb={{ base: 'sm', md: 'md' }}
                                >
                                    <Box
                                        bg={'framboise.5'}
                                        style={{
                                            width: '30px',
                                            height: '4px',
                                            borderRadius: '2px',
                                        }}
                                    />
                                    <PocketText
                                        fieldId="TransmissionSupervisionCardDefinitionTitle"
                                        fw={600}
                                        fz={{ base: 'md', md: 'lg' }}
                                    />
                                </Flex>
                                <List spacing="sm" size="sm">
                                    <List.Item>
                                        <PocketText fieldId="TransmissionSupervisionList1Item1" />
                                    </List.Item>
                                    <List.Item>
                                        <PocketText fieldId="TransmissionSupervisionList1Item2" />
                                    </List.Item>
                                    <List.Item>
                                        <PocketText fieldId="TransmissionSupervisionList1Item3" />
                                    </List.Item>
                                    <List.Item>
                                        <PocketText fieldId="TransmissionSupervisionList1Item4" />
                                    </List.Item>
                                    <List.Item>
                                        <PocketText fieldId="TransmissionSupervisionList1Item5" />
                                    </List.Item>
                                </List>
                            </Box>
                            <Box flex={1}>
                                <Flex
                                    align="center"
                                    gap={{ base: 'xs', sm: 'sm' }}
                                    mb={{ base: 'sm', md: 'md' }}
                                >
                                    <Box
                                        bg={'framboise.5'}
                                        style={{
                                            width: '30px',
                                            height: '4px',
                                            borderRadius: '2px',
                                        }}
                                    />
                                    <PocketText
                                        fieldId="TransmissionSupervisionCardDefinitionTitle2"
                                        fw={600}
                                        fz={{ base: 'md', md: 'lg' }}
                                    />
                                </Flex>
                                <List spacing="sm" size="sm">
                                    <List.Item>
                                        <PocketText fieldId="TransmissionSupervisionList2Item1" />
                                    </List.Item>
                                    <List.Item>
                                        <PocketText fieldId="TransmissionSupervisionList2Item2" />
                                    </List.Item>
                                    <List.Item>
                                        <PocketText fieldId="TransmissionSupervisionList2Item3" />
                                    </List.Item>
                                    <List.Item>
                                        <PocketText fieldId="TransmissionSupervisionList2Item4" />
                                    </List.Item>
                                </List>
                            </Box>
                        </Flex>
                    </Card>
                </PocketMedia>
            </Box>
            <Container px={{ base: 'md', sm: 'xl' }} mt={{ base: 'xl', md: '60px' }}>
                <TitleComponent fieldId="TransmissionSupervisionSecondTitle" color="rosePoudre" />
                <Box px={{ base: 'xs', sm: 'md' }} mt={{ base: 'lg', md: 'xl' }}>
                    <TSTimeline
                        items={[
                            {
                                titleField: 'TransmissionSupervisionTimelineItem1Title',
                                descriptionField: 'TransmissionSupervisionTimelineItem1Description',
                            },
                            {
                                titleField: 'TransmissionSupervisionTimelineItem2Title',
                                descriptionField: 'TransmissionSupervisionTimelineItem2Description',
                            },
                            {
                                titleField: 'TransmissionSupervisionTimelineItem3Title',
                                descriptionField: 'TransmissionSupervisionTimelineItem3Description',
                            },
                        ]}
                    />
                </Box>
                <Box mt={{ base: 'xl', md: '50px' }}>
                    <TitleComponent
                        fieldId="TransmissionSupervisionThirdTitle"
                        color="rosePoudre"
                    />
                </Box>
                <Box px={{ base: 'xs', sm: 'md' }} mt={{ base: 'lg', md: 'xl' }}>
                    <TSCard fieldId="TransmissionSupervisionCardText" />
                    <PocketMedia
                        mediaId={'TransmissionSupervisionCardBackgroundImage'}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            aspectRatio: '16/9',
                        }}
                        maw={{ base: '100%', md: '80%' }}
                        mx={{ base: '0', md: 'auto' }}
                        mt={{ base: 'md', md: 'xl' }}
                        p={{ base: 'md', md: 'xl' }}
                        video={{ controls: true, controlsList: 'nodownload' }}
                    ></PocketMedia>
                    <Box>
                        <TitleComponent fieldId="Somatiss" color="rosePoudre" />
                        <PocketMedia
                            mediaId={'SomatissVideo'}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                aspectRatio: '16/9',
                            }}
                            maw={{ base: '100%', md: '80%' }}
                            mx={{ base: '0', md: 'auto' }}
                            mt={{ base: 'md', md: 'xl' }}
                            p={{ base: 'md', md: 'xl' }}
                            video={{ controls: true, controlsList: 'nodownload' }}
                        ></PocketMedia>
                    </Box>
                    <PocketMedia
                        mediaId={'TransmissionSupervisionCardBackgroundImage2'}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            aspectRatio: '16/9',
                        }}
                        maw={{ base: '100%', md: '80%' }}
                        mx={{ base: '0', md: 'auto' }}
                        mt={{ base: 'md', md: 'xl' }}
                        p={{ base: 'md', md: 'xl' }}
                        video={{ controls: true, controlsList: 'nodownload' }}
                    ></PocketMedia>
                    <Flex
                        justify={{ base: 'center', md: 'space-evenly' }}
                        direction={{ base: 'column', md: 'row' }}
                        gap={{ base: 'lg', md: 'xl' }}
                        mt={{ base: 'md', md: 'lg' }}
                    >
                        <TSCardFormation
                            titleField="TransmissionSupervisionFormationTitle"
                            descriptionField="TransmissionSupervisionFormationDescription"
                            durationField="TransmissionSupervisionFormationDuration"
                            formatField="TransmissionSupervisionFormationFormat"
                            publicField="TransmissionSupervisionFormationPublic"
                            certificationField="TransmissionSupervisionFormationCertification"
                            programTitleField="TransmissionSupervisionFormationProgramTitle"
                            item1Field="TransmissionSupervisionFormationItem1"
                            item2Field="TransmissionSupervisionFormationItem2"
                            item3Field="TransmissionSupervisionFormationItem3"
                            item4Field="TransmissionSupervisionFormationItem4"
                            item5Field="TransmissionSupervisionFormationItem5"
                        />
                        <TSCardFormation
                            titleField="TransmissionSupervisionFormationTitle_2"
                            descriptionField="TransmissionSupervisionFormationDescription_2"
                            durationField="TransmissionSupervisionFormationDuration_2"
                            formatField="TransmissionSupervisionFormationFormat_2"
                            publicField="TransmissionSupervisionFormationPublic_2"
                            certificationField="TransmissionSupervisionFormationCertification_2"
                            programTitleField="TransmissionSupervisionFormationProgramTitle_2"
                            item1Field="TransmissionSupervisionFormationItem1_2"
                            item2Field="TransmissionSupervisionFormationItem2_2"
                            item3Field="TransmissionSupervisionFormationItem3_2"
                            item4Field="TransmissionSupervisionFormationItem4_2"
                            item5Field="TransmissionSupervisionFormationItem5_2"
                        />
                    </Flex>
                </Box>
                <Box mt={{ base: 'xl', md: '50px' }}>
                    <TitleComponent
                        fieldId="TransmissionSupervisionFourthTitle"
                        color="rosePoudre"
                    />
                </Box>
            </Container>
            <PocketMedia
                mediaId={'TransmissionSupervisionTestimonialsBackgroundImage'}
                style={{
                    minHeight: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                mt={{ base: 'xl', md: '60px' }}
                p={{ base: 'md', md: 'xl' }}
            >
                <Flex
                    gap={{ base: 'md', md: 'xl' }}
                    direction={{ base: 'column', md: 'row' }}
                    wrap="wrap"
                    justify="center"
                    w="100%"
                >
                    <TSTemoignageCard
                        nameField="TransmissionSupervisionTestimonial1Name"
                        roleField="TransmissionSupervisionTestimonial1Role"
                        testimonialField="TransmissionSupervisionTestimonial1Text"
                        avatarField="TransmissionSupervisionTestimonial1Avatar"
                    />
                    <TSTemoignageCard
                        nameField="TransmissionSupervisionTestimonial2Name"
                        roleField="TransmissionSupervisionTestimonial2Role"
                        testimonialField="TransmissionSupervisionTestimonial2Text"
                        avatarField="TransmissionSupervisionTestimonial2Avatar"
                    />
                    <TSTemoignageCard
                        nameField="TransmissionSupervisionTestimonial3Name"
                        roleField="TransmissionSupervisionTestimonial3Role"
                        testimonialField="TransmissionSupervisionTestimonial3Text"
                        avatarField="TransmissionSupervisionTestimonial3Avatar"
                    />
                </Flex>
            </PocketMedia>
            <Container
                px={{ base: 'md', sm: 'xl' }}
                mt={{ base: 'xl', md: '60px' }}
                mb={{ base: 'xl', md: '60px' }}
            >
                <TSCTASection
                    titleField="TransmissionSupervisionCTATitle"
                    descriptionField="TransmissionSupervisionCTADescription"
                    buttonTextField="TransmissionSupervisionCTAButton"
                />
            </Container>
        </>
    );
};
export default TransmissionSupervision;
