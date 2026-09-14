import { Box, Flex, useMantineTheme } from '@mantine/core';
import PocketText from './PocketText';

interface TitleComponentProps {
    fieldId: string;
    color?: string;
}

const TitleComponent = ({ fieldId, color }: TitleComponentProps) => {
    const theme = useMantineTheme();

    return (
        <Box w={'fit-content'} my={{ base: 'md', md: 'xl' }}>
            <Flex
                align="center"
                gap={{ base: 'sm', md: 'md' }}
                px={{ base: 'md', md: 'lg' }}
                bg={color ? theme.colors[color]?.[6] : theme.colors.primary[6]}
                style={{ borderRadius: '1rem' }}
            >
                <PocketText
                    fieldId={fieldId}
                    c={'white'}
                    fz={{ base: 'lg', sm: 'xl', md: '1.75rem' }}
                    ff="Cormorant Garamond, serif"
                />
            </Flex>
        </Box>
    );
};

export default TitleComponent;
