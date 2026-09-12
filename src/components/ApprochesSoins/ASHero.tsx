import { Box, Container, Flex } from '@mantine/core';
import type { ReactNode } from 'react';
import PocketMedia from '../PocketMedia';
import PocketText from '../PocketText';
import ASPresentationCard from './ASPresentationCard';
interface ASHeroProps {
    title: string;
    description: string;
    backgroundImage: string;
    children?: ReactNode;
    titleField: string;
    textField: string;
}

const ASHero = ({ title, description, backgroundImage, children }: ASHeroProps) => {
    return (
        <Box style={{ position: 'relative' }}>
            <PocketMedia mediaId={backgroundImage} style={{ minHeight: '550px' }}>
                <Box>
                    <Container>
                        <Flex
                            style={{ minHeight: '550px' }}
                            h={'100%'}
                            w="100%"
                            justify="center"
                            align="center"
                            direction={'column'}
                            px={'xl'}
                            py={{ base: 'xl', sm: 0 }}
                        >
                            <PocketText
                                c={'white'}
                                fieldId={title}
                                fz={{ base: 25, sm: 32, md: 40 }}
                                mb={0}
                                fw={700}
                                ta="center"
                                ff="The Seasons, serif"
                            />
                            <PocketText
                                mt={'xs'}
                                c={'white'}
                                fieldId={description}
                                fz={{ base: 20, sm: 22, md: 24 }}
                                maw={1000}
                                fw={600}
                                ta="center"
                            />
                            {children}
                        </Flex>
                    </Container>
                </Box>
            </PocketMedia>

            <Box
                style={{
                    position: 'relative',
                    marginTop: '-100px',
                    zIndex: 10,
                }}
            >
                <ASPresentationCard />
            </Box>
        </Box>
    );
};

export default ASHero;
