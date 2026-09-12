import { Box, List } from '@mantine/core';
import PocketText from '../PocketText';

interface ASCadreListProps {
    TextListCadreAS1: string;
    TextListCadreAS2: string;
    TextListCadreAS3: string;
    TextListCadreAS4: string;
}

const ASCadreList = ({
    TextListCadreAS1,
    TextListCadreAS2,
    TextListCadreAS3,
    TextListCadreAS4,
}: ASCadreListProps) => {
    return (
        <Box>
            <PocketText fieldId="ASCadreListTitle" c={'rosePoudre.7'} size="lg" fw={'500'} />
            <List ml={'md'} mt={'sm'}>
                <List.Item>
                    <PocketText fieldId={TextListCadreAS1} size="lg" mb="xs" />
                </List.Item>
                <List.Item>
                    <PocketText fieldId={TextListCadreAS2} size="lg" mb="xs" />
                </List.Item>
                <List.Item>
                    <PocketText fieldId={TextListCadreAS3} size="lg" mb="xs" />
                </List.Item>
                <List.Item>
                    <PocketText fieldId={TextListCadreAS4} size="lg" mb="xs" />
                </List.Item>
            </List>
        </Box>
    );
};

export default ASCadreList;
