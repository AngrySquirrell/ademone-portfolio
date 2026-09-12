import { Box, Card, Flex, useMantineTheme } from '@mantine/core';
import PocketText from '../PocketText';

const TSCardDefinition = () => {
    const theme = useMantineTheme();

    return (
        <Card
            w={{ base: '100%', sm: 'fit-content' }}
            p={{ base: 'md', sm: 'lg', md: 'xl' }}
            shadow="sm"
            style={{ zIndex: 1 }}
        >
            <Flex gap={{ base: 'xs', sm: 'sm' }}>
                <Box
                    style={{
                        position: 'relative',
                        width: '10px',
                        height: 'auto',
                        backgroundColor: theme.colors.framboise[5],
                        borderRadius: '10px',
                    }}
                />
                <Flex direction={'column'} gap={{ base: 'xs', sm: 'sm' }}>
                    <PocketText
                        fieldId="TransmissionSupervisionCardDefinitionTitle"
                        fz={{ base: 'lg', sm: 'xl', md: 'h3' }}
                        c={'rosePoudre.7'}
                        fw={500}
                    />
                    <PocketText
                        fieldId="TransmissionSupervisionCardDefinitionDescription"
                        fz={{ base: 'sm', sm: 'md', md: 'h5' }}
                        c={'charbon.7'}
                    />
                </Flex>
            </Flex>
        </Card>
    );
};

export default TSCardDefinition;
