import { Box, Flex, List } from '@mantine/core';
import PocketText from '../PocketText';

interface TimelineItem {
    titleField: string;
    descriptionField: string;
}

interface TSTimelineProps {
    items: TimelineItem[];
}

const TSTimeline = ({ items }: TSTimelineProps) => {
    return (
        <Box py={{ base: 'md', md: 'xl' }}>
            <Box>
                <Flex>
                    <List spacing="md">
                        {items.map((item, index) => (
                            <List.Item key={index} c={'rosePoudre.7'}>
                                <Box>
                                    <PocketText
                                        fieldId={item.titleField}
                                        fw={600}
                                        fz={{ base: 'sm', md: 'md', lg: 'lg' }}
                                        c={'rosePoudre.7'}
                                        mb="xs"
                                    />
                                    <PocketText
                                        fieldId={item.descriptionField}
                                        fz={{ base: 'xs', lg: 'sm' }}
                                        c="dimmed"
                                        style={{ lineHeight: 1.5 }}
                                    />
                                </Box>
                            </List.Item>
                        ))}
                    </List>
                </Flex>
            </Box>
        </Box>
    );
};

export default TSTimeline;
