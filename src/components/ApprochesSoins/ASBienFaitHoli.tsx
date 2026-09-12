import { Box, Card, Container, Flex, List } from '@mantine/core';
import PocketText from '../PocketText';
import PocketMedia from '../PocketMedia';

interface ASBienFaitHoliProps {
    titleField: string;
    descriptionField: string;
    backgroundImageField: string;
    card1TitleField: string;
    card1Item1Field: string;
    card1Item2Field: string;
    card1Item3Field: string;
    card1Item4Field: string;
    card2TitleField: string;
    card2Item1Field: string;
    card2Item2Field: string;
    card2Item3Field: string;
    card2Item4Field: string;
    card3TitleField: string;
    card3Item1Field: string;
    card3Item2Field: string;
    card3Item3Field: string;
    card3Item4Field: string;
}

const ASBienFaitHoli = ({
    titleField,
    descriptionField,
    backgroundImageField,
    card1TitleField,
    card1Item1Field,
    card1Item2Field,
    card1Item3Field,
    card1Item4Field,
    card2TitleField,
    card2Item1Field,
    card2Item2Field,
    card2Item3Field,
    card2Item4Field,
    card3TitleField,
    card3Item1Field,
    card3Item2Field,
    card3Item3Field,
    card3Item4Field,
}: ASBienFaitHoliProps) => {
    return (
        <Box>
            <PocketMedia
                mediaId={backgroundImageField}
                py={'xl'}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                pos={'relative'}
            >
                <Box
                    pos={'absolute'}
                    // bg={theme.colors.rosePoudre[0] + '90'}
                    style={{
                        inset: 0,
                        zIndex: -1,
                    }}
                />
                <Container
                    style={{
                        zIndex: 2,
                    }}
                >
                    <Box style={{ alignSelf: 'flex-start' }}>
                        <PocketText
                            fieldId={titleField}
                            fw={'bolder'}
                            fz={{ base: 'xl', md: '2rem' }}
                            c="white"
                            mb={{ base: 'sm', md: 'md' }}
                            ff="The Seasons, serif"
                        />
                        <PocketText
                            fieldId={descriptionField}
                            fz={{ base: 'sm', md: 'md' }}
                            c="white"
                            fw={'500'}
                            mb={{ base: 'lg', md: 'xl' }}
                            lh={1.6}
                        />
                    </Box>
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        gap="xl"
                        justify="space-between"
                    >
                        <Card
                            shadow="sm"
                            p={{ base: 'md', md: 'lg' }}
                            bg="rosePoudre.7"
                            style={{ flex: 1 }}
                        >
                            <PocketText
                                fieldId={card1TitleField}
                                fw={600}
                                fz={{ base: 'md', md: 'lg' }}
                                c="white"
                                mb="xs"
                            />
                            <Box w={50} h={4} bg="white" mb="sm" style={{ borderRadius: '2px' }} />
                            <List
                                spacing="xs"
                                size="sm"
                                icon={
                                    <Box
                                        w={6}
                                        h={6}
                                        bg="white"
                                        mt={8}
                                        style={{ borderRadius: '50%' }}
                                    />
                                }
                            >
                                <List.Item>
                                    <PocketText fieldId={card1Item1Field} fz="sm" c="white" />
                                </List.Item>
                                <List.Item>
                                    <PocketText fieldId={card1Item2Field} fz="sm" c="white" />
                                </List.Item>
                                <List.Item>
                                    <PocketText fieldId={card1Item3Field} fz="sm" c="white" />
                                </List.Item>
                                <List.Item>
                                    <PocketText fieldId={card1Item4Field} fz="sm" c="white" />
                                </List.Item>
                            </List>
                        </Card>

                        <Card
                            shadow="sm"
                            p={{ base: 'md', md: 'lg' }}
                            bg="rosePoudre.7"
                            style={{ flex: 1 }}
                        >
                            <PocketText
                                fieldId={card2TitleField}
                                fw={600}
                                fz={{ base: 'md', md: 'lg' }}
                                c="white"
                                mb="xs"
                            />
                            <Box w={50} h={4} bg="white" mb="sm" style={{ borderRadius: '2px' }} />
                            <List
                                spacing="xs"
                                size="sm"
                                icon={
                                    <Box
                                        w={6}
                                        h={6}
                                        bg="white"
                                        mt={8}
                                        style={{ borderRadius: '50%' }}
                                    />
                                }
                            >
                                <List.Item>
                                    <PocketText fieldId={card2Item1Field} fz="sm" c="white" />
                                </List.Item>
                                <List.Item>
                                    <PocketText fieldId={card2Item2Field} fz="sm" c="white" />
                                </List.Item>
                                <List.Item>
                                    <PocketText fieldId={card2Item3Field} fz="sm" c="white" />
                                </List.Item>
                                <List.Item>
                                    <PocketText fieldId={card2Item4Field} fz="sm" c="white" />
                                </List.Item>
                            </List>
                        </Card>

                        <Card
                            shadow="sm"
                            p={{ base: 'md', md: 'lg' }}
                            bg="rosePoudre.7"
                            style={{ flex: 1 }}
                        >
                            <PocketText
                                fieldId={card3TitleField}
                                fw={600}
                                fz={{ base: 'md', md: 'lg' }}
                                c="white"
                                mb="xs"
                            />
                            <Box w={50} h={4} bg="white" mb="sm" style={{ borderRadius: '2px' }} />
                            <List
                                spacing="xs"
                                size="sm"
                                icon={
                                    <Box
                                        w={6}
                                        h={6}
                                        bg="white"
                                        mt={8}
                                        style={{ borderRadius: '50%' }}
                                    />
                                }
                            >
                                <List.Item>
                                    <PocketText fieldId={card3Item1Field} fz="sm" c="white" />
                                </List.Item>
                                <List.Item>
                                    <PocketText fieldId={card3Item2Field} fz="sm" c="white" />
                                </List.Item>
                                <List.Item>
                                    <PocketText fieldId={card3Item3Field} fz="sm" c="white" />
                                </List.Item>
                                <List.Item>
                                    <PocketText fieldId={card3Item4Field} fz="sm" c="white" />
                                </List.Item>
                            </List>
                        </Card>
                    </Flex>
                </Container>
            </PocketMedia>
        </Box>
    );
};

export default ASBienFaitHoli;
