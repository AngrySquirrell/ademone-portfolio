import { Box, Card, Loader, type CardProps } from '@mantine/core';
import { useEffect, useState, type ReactNode } from 'react';
import backgroundDefault from '../assets/background_1.webp';
import { usePocketField } from '../providers/usePocketField';
import Media from './Media';
import { useAuthContext } from '@hydevs/hypb';

interface PocketMediaProps {
    mediaId: string;
    children?: ReactNode;
    cover?: boolean;
    video?: {
        autoplay?: boolean;
        sound?: boolean;
        loop?: boolean;
        controls?: boolean;
        controlsList?: string;
    };
}

const PocketMedia = ({
    mediaId,
    children,
    p = 0,
    radius = 0,
    cover = true,
    video,
    ...rest
}: PocketMediaProps & CardProps) => {
    const { lookupMediaId } = usePocketField();
    const [mediaSrc, setMediaSrc] = useState<string>(backgroundDefault);

    useEffect(() => {
        setMediaSrc(lookupMediaId(mediaId) ?? backgroundDefault);
    }, [lookupMediaId, mediaId]);

    const { userData } = useAuthContext();

    if (!userData?.id && mediaSrc.startsWith('https://placehold.co/')) {
        return null;
    }
    return (
        <>
            <Card p={p} bg={'transparent'} radius={radius} {...rest} pos="relative">
                {mediaSrc ? (
                    <Media mediaSrc={mediaSrc} cover={cover} video={video} />
                ) : (
                    <Loader
                        pos={'absolute'}
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                )}

                <Box style={{ zIndex: 1 }}>{children}</Box>
            </Card>
        </>
    );
};

export default PocketMedia;
