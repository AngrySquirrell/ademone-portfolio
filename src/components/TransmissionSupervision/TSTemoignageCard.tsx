import { Avatar, Box, Card, Flex } from '@mantine/core';
import PocketText from '../PocketText';
import PocketMedia from '../PocketMedia';

interface TSTestimonialCardProps {
    nameField: string;
    roleField: string;
    testimonialField: string;
    avatarField?: string;
}

const TSTemoignageCard = ({
    nameField,
    roleField,
    testimonialField,
    avatarField,
}: TSTestimonialCardProps) => {
    return (
        <Card p="xl" shadow="sm" bg="white" maw={400} style={{ overflow: 'hidden' }}>
            <Flex gap="md" mb="lg" wrap="nowrap">
                <Box style={{ flexShrink: 0 }}>
                    {avatarField ? (
                        <Box
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                backgroundColor: '#e8a8a0',
                            }}
                        >
                            <PocketMedia
                                mediaId={avatarField}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>
                    ) : (
                        <Avatar
                            size={60}
                            radius="xl"
                            style={{
                                backgroundColor: '#e8a8a0',
                            }}
                        />
                    )}
                </Box>
                <Box style={{ minWidth: 0, flex: 1 }}>
                    <PocketText
                        fieldId={nameField}
                        fw={600}
                        fz="md"
                        c="rosePoudre.7"
                        mb={4}
                        style={{ wordBreak: 'break-word' }}
                    />
                    <PocketText
                        fieldId={roleField}
                        fz="sm"
                        c="dimmed"
                        style={{ wordBreak: 'break-word' }}
                    />
                </Box>
            </Flex>

            <PocketText
                fieldId={testimonialField}
                fz="sm"
                c="dark.7"
                lh={1.7}
                fs="italic"
                style={{ wordBreak: 'break-word' }}
            />
        </Card>
    );
};

export default TSTemoignageCard;
