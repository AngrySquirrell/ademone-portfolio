import { Box, Flex, List, useMantineTheme } from '@mantine/core';
import PocketText from '../PocketText';

interface PPFormationInitialCardProps {
    TitleCard: string;
    Item1: string;
    Item2: string;
    Item3: string;
}

const PPFormationInitialCard = ({
    TitleCard,
    Item1,
    Item2,
    Item3,
}: PPFormationInitialCardProps) => {
    const theme = useMantineTheme();

    return (
        <Box
            bg={'white'}
            style={{
                borderLeft: `4px solid ${theme.colors.framboise[5]}`,
                borderRadius: '8px',
                boxShadow: theme.shadows.sm,
            }}
            w={'100%'}
            p={'xl'}
        >
            <PocketText fieldId={TitleCard} ff="The Seasons, serif" fz={'1.4em'} fw={700} />
            <Flex direction={{ base: 'column', sm: 'row' }} mt="md" gap="sm">
                <List>
                    <List.Item>
                        <PocketText fieldId={Item1} />
                    </List.Item>
                    <List.Item>
                        <PocketText fieldId={Item2} />
                    </List.Item>
                    <List.Item>
                        <PocketText fieldId={Item3} />
                    </List.Item>
                </List>
            </Flex>
        </Box>
    );
};

export default PPFormationInitialCard;
