import { Box, Flex } from '@mantine/core';
import PocketMedia from '../PocketMedia';
import CardAccueil from './CardAccueil';

type ImagePosition = 'left' | 'right';

const SectionCardImage = ({
    imagePosition = 'right',
    titleField,
    imageField,
    contentField,
    contentButtonField,
    linkTo,
}: {
    imagePosition?: ImagePosition;
    imageField: string;
    titleField: string;
    contentField: string;
    contentButtonField: string;
    linkTo: string;
}) => {
    const imageElement = (
        <PocketMedia
            mediaId={imageField}
            style={{
                width: '100%',
                maxWidth: 600,
                height: 300,
                borderRadius: '8px',
                overflow: 'hidden',
            }}
        />
    );

    const cardElement = (
        <CardAccueil
            titleField={titleField}
            contentField={contentField}
            contentButtonField={contentButtonField}
            linkTo={linkTo}
            backgroundPosition={imagePosition === 'right' ? 'left' : 'right'}
        />
    );

    return (
        <Box>
            <Flex
                gap="xl"
                align="center"
                justify="space-between"
                direction={{ base: 'column', md: 'row' }}
            >
                {imagePosition === 'left' ? (
                    <>
                        {imageElement}
                        {cardElement}
                    </>
                ) : (
                    <>
                        {cardElement}
                        {imageElement}
                    </>
                )}
            </Flex>
        </Box>
    );
};

export default SectionCardImage;
