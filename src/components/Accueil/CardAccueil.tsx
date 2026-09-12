import { Card, Box, Flex, useMantineTheme } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import PocketText from '../PocketText';
import PocketButton from '../PocketButton';

type BackgroundPosition = 'left' | 'right';

const CardAccueil = ({
    titleField,
    contentField,
    contentButtonField,
    linkTo,
    backgroundPosition = 'left',
}: {
    titleField: string;
    contentField: string;
    contentButtonField: string;
    linkTo: string;
    icon?: React.ReactNode;
    backgroundPosition?: BackgroundPosition;
}) => {
    const theme = useMantineTheme();

    return (
        <Box style={{ position: 'relative', maxWidth: 500 }}>
            <Box
                bg={theme.colors.rosePoudre[3] + '90'}
                style={{
                    position: 'absolute',
                    top: -15,
                    right: backgroundPosition === 'left' ? 15 : -15,
                    left: backgroundPosition === 'left' ? -15 : 15,
                    bottom: 15,
                    borderRadius: '8px',
                    zIndex: 0,
                }}
            />

            <Card
                shadow="sm"
                padding="lg"
                withBorder
                style={{
                    position: 'relative',
                    zIndex: 1,
                    backgroundColor: 'white',
                }}
            >
                <Flex gap={'xs'}>
                    <Box>
                        <PocketText
                            mt={4}
                            fieldId={titleField}
                            ff="The Seasons, serif"
                            c="rosePoudre.7"
                            fw="900"
                            fz="1.4rem"
                        />
                        <PocketText mt={'md'} fieldId={contentField} c="black" />
                        <Flex align={'center'}>
                            <PocketButton
                                mt={'md'}
                                mr={'auto'}
                                variant="white"
                                radius={'md'}
                                color="white"
                                bg={'rosePoudre.7'}
                                rightSection={<IconArrowRight size={14} />}
                                size="sm"
                                fieldId={contentButtonField}
                                to={`/${linkTo}`}
                            />
                        </Flex>
                    </Box>
                </Flex>
            </Card>
        </Box>
    );
};

export default CardAccueil;
