import { Box, List } from '@mantine/core';
import PocketText from '../PocketText';

interface ASProfilListProps {
    TextListAS1: string;
    TextListAS2: string;
    TextListAS3: string;
    TextListAS4: string;
    TextListAS5: string;
    TextListAS6: string;
}

const ASProfilList = ({
    TextListAS1,
    TextListAS2,
    TextListAS3,
    TextListAS4,
    TextListAS5,
    TextListAS6,
}: ASProfilListProps) => {
    return (
        <Box>
            <List>
                <List.Item>
                    <PocketText fieldId={TextListAS1} size="lg" mb="xs" />
                </List.Item>
                <List.Item>
                    <PocketText fieldId={TextListAS2} size="lg" mb="xs" />
                </List.Item>
                <List.Item>
                    <PocketText fieldId={TextListAS3} size="lg" mb="xs" />
                </List.Item>
                <List.Item>
                    <PocketText fieldId={TextListAS4} size="lg" mb="xs" />
                </List.Item>
                <List.Item>
                    <PocketText fieldId={TextListAS5} size="lg" mb="xs" />
                </List.Item>
                <List.Item>
                    <PocketText fieldId={TextListAS6} size="lg" mb="xs" />
                </List.Item>
            </List>
        </Box>
    );
};

export default ASProfilList;
