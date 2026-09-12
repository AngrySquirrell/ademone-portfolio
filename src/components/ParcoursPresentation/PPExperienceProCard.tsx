import { Box, Flex, List, useMantineTheme } from '@mantine/core';
import PocketText from '../PocketText';

interface PPExperienceProCardProps {
    TitleCard: string;
    TextCard: string;
    Item1: string;
    Item2: string;
}

const PPExperienceProCard = ({ TitleCard, TextCard, Item1, Item2 }: PPExperienceProCardProps) => {
    const theme = useMantineTheme();

    return (
        <Box
            bg={'white'}
            p={'xl'}
            style={{
                borderRadius: '8px',
                boxShadow: theme.shadows.sm,
                borderLeft: `4px solid ${theme.colors.framboise[5]}`,
                position: 'relative',
            }}
        >
            <Flex direction="column" gap="xs">
                <PocketText fieldId={TitleCard} fz={'h4'} />
                <PocketText fieldId={TextCard} />
                <List>
                    <List.Item>
                        <PocketText fieldId={Item1} />
                    </List.Item>
                    <List.Item>
                        <PocketText fieldId={Item2} />
                    </List.Item>
                </List>
            </Flex>
        </Box>
    );
};

export default PPExperienceProCard;
