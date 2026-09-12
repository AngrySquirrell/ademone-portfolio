import { Box, Card, List, useMantineTheme } from '@mantine/core';
import PocketText from '../PocketText';

interface TSCardFormationProps {
    titleField: string;
    descriptionField: string;
    durationField: string;
    formatField: string;
    publicField: string;
    certificationField: string;
    programTitleField: string;
    item1Field: string;
    item2Field: string;
    item3Field: string;
    item4Field: string;
    item5Field: string;
}

const TSCardFormation = ({
    titleField,
    descriptionField,
    durationField,
    formatField,
    publicField,
    certificationField,
    programTitleField,
    item1Field,
    item2Field,
    item3Field,
    item4Field,
    item5Field,
}: TSCardFormationProps) => {
    const theme = useMantineTheme();

    return (
        <Card
            p={{ base: 'md', sm: 'lg', md: 'xl' }}
            radius="lg"
            w={{ base: '100%', md: 'fit-content' }}
            shadow="sm"
            style={{
                borderLeft: `4px solid ${theme.colors.framboise[5]}`,
                backgroundColor: 'white',
            }}
        >
            <Box>
                <PocketText
                    fieldId={titleField}
                    fw={600}
                    fz={{ base: 'lg', sm: 'xl' }}
                    c="rosePoudre.7"
                    mb={{ base: 'md', md: 'lg' }}
                />

                <PocketText
                    fieldId={descriptionField}
                    fz={{ base: 'sm', sm: 'md' }}
                    c="dark.8"
                    mb={{ base: 'sm', md: 'md' }}
                    lh={1.6}
                />

                <Box mb={{ base: 'xs', sm: 'xs' }}>
                    <PocketText
                        fieldId={durationField}
                        fz={{ base: 'xs', sm: 'sm' }}
                        fw={600}
                        c="dark.8"
                    />
                </Box>
                <Box mb={{ base: 'xs', sm: 'xs' }}>
                    <PocketText
                        fieldId={formatField}
                        fz={{ base: 'xs', sm: 'sm' }}
                        fw={600}
                        c="dark.8"
                    />
                </Box>
                <Box mb={{ base: 'xs', sm: 'xs' }}>
                    <PocketText
                        fieldId={publicField}
                        fz={{ base: 'xs', sm: 'sm' }}
                        fw={600}
                        c="dark.8"
                    />
                </Box>
                <Box mb={{ base: 'md', md: 'lg' }}>
                    <PocketText
                        fieldId={certificationField}
                        fz={{ base: 'xs', sm: 'sm' }}
                        fw={600}
                        c="dark.8"
                    />
                </Box>

                <PocketText
                    fieldId={programTitleField}
                    fw={600}
                    fz={{ base: 'sm', sm: 'md' }}
                    c="dark.8"
                    mb={{ base: 'xs', sm: 'sm' }}
                />

                <List spacing="xs" size="sm">
                    <List.Item>
                        <PocketText fieldId={item1Field} c="dark.7" />
                    </List.Item>
                    <List.Item>
                        <PocketText fieldId={item2Field} c="dark.7" />
                    </List.Item>
                    <List.Item>
                        <PocketText fieldId={item3Field} c="dark.7" />
                    </List.Item>
                    <List.Item>
                        <PocketText fieldId={item4Field} c="dark.7" />
                    </List.Item>
                    <List.Item>
                        <PocketText fieldId={item5Field} c="dark.7" />
                    </List.Item>
                </List>
            </Box>
        </Card>
    );
};

export default TSCardFormation;
