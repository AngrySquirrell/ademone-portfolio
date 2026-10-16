import { Box, Card, Loader, type CardProps } from '@mantine/core';
import { useEffect, useState, type ReactNode } from 'react';
import { usePocketField } from '../providers/usePocketField';
import Media from './Media';

const FALLBACK_SRC = 'https://placehold.co/600x400?text=MISSING+IMAGE+ID';

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
    const [mediaSrc, setMediaSrc] = useState<string>(FALLBACK_SRC);

    useEffect(() => {
        const found = lookupMediaId(mediaId);
        // Si l'image existe dans PocketBase et n'est pas le placeholder par défaut de création vide
        if (found && !found.includes('media%20vide')) {
            setMediaSrc(found);
        } else {
            setMediaSrc(FALLBACK_SRC);
        }
    }, [lookupMediaId, mediaId]);

    return (
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

            <Box style={{ zIndex: 1, position: 'relative', height: '100%' }}>{children}</Box>
        </Card>
    );
};

export default PocketMedia;
