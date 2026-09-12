import { Box, Card, Flex, Text, useMantineTheme } from '@mantine/core';
import PocketText from '../PocketText';
import TitleComponent from '../TitleComponent';
import PocketMedia from '../PocketMedia';

interface ASDeroulementProps {
    titleField: string;
    descriptionField: string;
    step1TitleField: string;
    step1DescriptionField: string;
    step2TitleField: string;
    step2DescriptionField: string;
    step3TitleField: string;
    step3DescriptionField: string;
    step4TitleField: string;
    step4DescriptionField: string;
}

const ASDeroulement = ({
    titleField,
    descriptionField,
    step1TitleField,
    step1DescriptionField,
    step2TitleField,
    step2DescriptionField,
    step3TitleField,
    step3DescriptionField,
    step4TitleField,
    step4DescriptionField,
}: ASDeroulementProps) => {
    const theme = useMantineTheme();

    const steps = [
        { number: 1, titleField: step1TitleField, descriptionField: step1DescriptionField },
        { number: 2, titleField: step2TitleField, descriptionField: step2DescriptionField },
        { number: 3, titleField: step3TitleField, descriptionField: step3DescriptionField },
        { number: 4, titleField: step4TitleField, descriptionField: step4DescriptionField },
    ];

    return (
        <>
            <Box mb={{ base: 'lg', md: 'xl' }}>
                <TitleComponent fieldId={titleField} color="rosePoudre" />
                <PocketText
                    fieldId={descriptionField}
                    fz={{ base: 'sm', md: 'md' }}
                    c="rosePoudre.7"
                    lh={1.6}
                    style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
                />

                <PocketMedia
                    mediaId={'ASDeroulementVideo'}
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

            <Card
                shadow="sm"
                p={{ base: 'md', sm: 'lg', md: 'xl' }}
                withBorder
                bg="white.0"
                style={{ overflow: 'hidden' }}
            >
                <Flex direction="column" gap={{ base: 'md', md: 'lg' }}>
                    {steps.map((step) => (
                        <Flex
                            key={step.number}
                            gap={{ base: 'sm', md: 'md' }}
                            align="flex-start"
                            wrap="nowrap"
                        >
                            <Box
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    minWidth: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: theme.colors.rosePoudre[step.number + 5],
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}
                            >
                                <Text c="white" fw={600} fz={{ base: 'md', md: 'lg' }}>
                                    {step.number}
                                </Text>
                            </Box>
                            <Box style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                                <PocketText
                                    fieldId={step.titleField}
                                    fw={600}
                                    fz={{ base: 'md', md: 'lg' }}
                                    c="rosePoudre.7"
                                    mb={{ base: 'xs', sm: 'xs' }}
                                    style={{
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word',
                                        hyphens: 'auto',
                                    }}
                                />
                                <PocketText
                                    fieldId={step.descriptionField}
                                    fz={{ base: 'sm', md: 'md' }}
                                    c="charbon.7"
                                    lh={1.6}
                                    style={{
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word',
                                        hyphens: 'auto',
                                    }}
                                />
                            </Box>
                        </Flex>
                    ))}
                </Flex>
            </Card>
        </>
    );
};

export default ASDeroulement;
