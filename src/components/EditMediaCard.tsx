import { Card, Flex, Image, Overlay } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { IconEdit } from '@tabler/icons-react';
import { useEffect, useMemo, useState } from 'react';
import { usePocketField } from '../providers/usePocketField';
import type { site_medias } from '../types/globals';

const EditMediaCard = ({ media, onClick }: { media: site_medias; onClick: () => void }) => {
    const { hovered, ref } = useHover();
    const { lookupMediaId } = usePocketField();
    const [mediaSrc, setMediaSrc] = useState<string>('');

    useEffect(() => {
        setMediaSrc(lookupMediaId(media.mediaId) ?? '');
    }, [lookupMediaId, media.mediaId]);

    return (
        <Card key={media.mediaId} shadow="sm" padding="0" className="editable" withBorder ref={ref}>
            <Overlay opacity={hovered ? 0.5 : 0} color="#000" zIndex={5} onClick={onClick}>
                <Flex w={'100%'} h={'100%'} align={'center'} justify={'center'}>
                    <IconEdit size={48} color="white" />
                </Flex>
            </Overlay>
            {useMemo(() => {
                if (
                    mediaSrc.endsWith('.mp4') ||
                    mediaSrc.endsWith('.webm') ||
                    mediaSrc.endsWith('.mpeg')
                ) {
                    return (
                        <video
                            autoPlay
                            loop
                            muted
                            width={'100%'}
                            height={200}
                            style={{ objectFit: 'cover' }}
                        >
                            <source src={mediaSrc} type={`video/${mediaSrc.split('.').pop()}`} />
                        </video>
                    );
                } else {
                    return (
                        <Image
                            fallbackSrc="https://placehold.co/200x200?text=Choisisez%20un%20media"
                            width={'100%'}
                            height={200}
                            fit="cover"
                            src={mediaSrc ?? ''}
                        />
                    );
                }
            }, [mediaSrc])}
        </Card>
    );
};

export default EditMediaCard;
