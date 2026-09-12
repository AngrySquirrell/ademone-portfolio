import { Box, Card, Container, Flex, useMantineTheme } from '@mantine/core';
import PocketMedia from '../PocketMedia';
import PocketText from '../PocketText';

interface PPPresentationCardProps {
    imageField: string;
    quoteField: string;
    textField: string;
}

const PPPresentationCard = ({ imageField, quoteField, textField }: PPPresentationCardProps) => {
    const theme = useMantineTheme();
    return (
        <Container>
            <Card shadow="md" p={0} withBorder>
                <Flex
                    direction={{
                        base: 'column-reverse',
                        sm: 'row',
                    }}
                >
                    <Box
                        style={{
                            position: 'relative',
                            alignSelf: 'end',
                            width: '350px',
                            height: '350px',
                            overflow: 'hidden',
                            zIndex: 1,
                        }}
                    >
                        <Box
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: theme.colors.rosePoudre[4],
                                zIndex: 1,
                                borderRadius: '50%',
                                transform: 'scale(0.8) translateY(-10%)',
                            }}
                        />
                        <PocketMedia
                            mediaId={imageField}
                            cover={false}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 2 }}
                        />
                    </Box>
                    <Flex
                        flex={1}
                        px={'md'}
                        py={'xl'}
                        justify={'center'}
                        direction={'column'}
                        pr={'xl'}
                    >
                        <Flex>
                            <Box
                                style={{
                                    width: '6px',
                                    backgroundColor: theme.colors.framboise[5],
                                    marginRight: theme.spacing.md,
                                }}
                            />
                            <PocketText
                                c={'charbon.6'}
                                fs={'italic'}
                                lh={'1.5em'}
                                fieldId={quoteField}
                            />
                        </Flex>
                        <Box>
                            <PocketText fz={'1.1em'} fieldId={textField} mt="md" />
                        </Box>
                    </Flex>
                </Flex>
            </Card>
        </Container>
    );
};

export default PPPresentationCard;
