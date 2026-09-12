import { Card, Container, Flex } from '@mantine/core';
import PocketText from '../PocketText';

const ASPresentationCard = () => {
    return (
        <Container px={{ base: 'md', sm: 'xl' }}>
            <Card>
                <Flex direction={'column'}>
                    <PocketText
                        fieldId="ASVisionCardTitle"
                        size="xl"
                        fw={'500'}
                        mb="md"
                        c={'rosePoudre.7'}
                    />
                    <PocketText fieldId="ASVisionCardCitation" size="md" mb="md" />
                    <PocketText fieldId="ASVisionCardText" size="md" mb="md" />
                </Flex>
            </Card>
        </Container>
    );
};

export default ASPresentationCard;
