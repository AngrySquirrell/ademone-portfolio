import { Box, Card, Flex, useMantineTheme } from '@mantine/core';
import PocketText from '../PocketText';

interface TSCardProps {
    fieldId: string;
}

const TSCard = ({ fieldId }: TSCardProps) => {
    const theme = useMantineTheme();

    return (
        <Card w={'fit-content'} p={'lg'} shadow="sm" style={{ zIndex: 1 }} mb={'xl'}>
            <Flex>
                <Box
                    style={{
                        position: 'relative',
                        width: '5px',
                        height: 'auto',
                        backgroundColor: theme.colors.framboise[5],
                        borderRadius: '10px',
                    }}
                />
                <PocketText fieldId={fieldId} ml={'sm'} fz={'h5'} />
            </Flex>
        </Card>
    );
};

export default TSCard;
