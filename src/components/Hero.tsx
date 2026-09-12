import { Box, Container, Flex } from '@mantine/core';
import type { ReactNode } from 'react';
import PocketMedia from './PocketMedia';
import PocketText from './PocketText';

interface AccueilCardProps {
    title: string;
    description: string;
    backgroundImage: string;
    children?: ReactNode;
    leftSection?: ReactNode;
}

const Hero = ({ title, description, backgroundImage, children, leftSection }: AccueilCardProps) => {
    return (
        <>
            <PocketMedia mediaId={backgroundImage} style={{ minHeight: '550px' }}>
                <Box>
                    <Container>
                        <Flex
                            py={{
                                base: 'xl',
                                sm: 0,
                            }}
                            direction={{
                                sm: 'row',
                                base: 'column',
                            }}
                            align={'center'}
                        >
                            {leftSection}
                            <Flex
                                style={{ minHeight: '550px' }}
                                h={'100%'}
                                w="100%"
                                justify="center"
                                direction={'column'}
                                px={'xl'}
                            >
                                <PocketText
                                    c={'white'}
                                    fieldId={title}
                                    fz={{ base: 25, sm: 32, md: 40 }}
                                    mb={0}
                                    fw={700}
                                    ff="The Seasons, serif"
                                />
                                <PocketText
                                    mt={'xs'}
                                    c={'white'}
                                    fieldId={description}
                                    fz={{ base: 20, sm: 22, md: 24 }}
                                    maw={1000}
                                    fw={500}
                                />
                                {children}
                            </Flex>
                        </Flex>
                    </Container>
                </Box>
            </PocketMedia>
        </>
    );
};

export default Hero;
