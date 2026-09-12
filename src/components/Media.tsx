import { Image } from '@mantine/core';

const isVideo = (src: string) => {
    return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mpeg');
};

const Media = ({
    mediaSrc,
    cover,
    video = {
        autoplay: true,
        sound: false,
        loop: true,
        controls: false,
    },
}: {
    mediaSrc: string;
    cover?: boolean;
    video?: {
        autoplay?: boolean;
        sound?: boolean;
        loop?: boolean;
        controls?: boolean;
        controlsList?: string;
    };
}) => {
    const media = isVideo(mediaSrc) ? (
        <video
            muted={!video?.sound}
            loop={video?.loop}
            autoPlay={video?.autoplay}
            controls={video?.controls}
            controlsList={video?.controlsList}
            onContextMenu={(e) => e.preventDefault()}
            playsInline
            webkit-playsinline="true"
            style={{
                zIndex: 0,
                width: '100%',
                height: '100%',
                objectFit: cover ? 'cover' : 'contain',
                position: 'absolute',
                top: 0,
                left: 0,
            }}
        >
            <source src={mediaSrc} />
        </video>
    ) : (
        <Image
            src={mediaSrc}
            alt=""
            pos={'absolute'}
            top={0}
            left={0}
            width={'100%'}
            height={'100%'}
            fit={cover ? 'cover' : 'contain'}
        />
    );
    return <>{media}</>;
};

export default Media;
