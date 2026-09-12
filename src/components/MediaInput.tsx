import { Box, FileButton, Image } from '@mantine/core';
import type { UseFormReturnType } from '@mantine/form';

// const isVideo = (src: string) => {
//     return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mpeg');
// };

const isVideo = (src: File | string) => {
    if (typeof src !== 'string') {
        return src.type.includes('video');
    }
    return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mpeg');
};

const MediaInput = ({
    form,
    // props,
    accept = 'image/png,image/jpeg,image/jpg,image/webp',
    media,
    style,
}: {
    form: UseFormReturnType<any>;
    // props?: FileButtonProps;
    accept?: string;
    media: File | string;
    loading?: boolean;
    style?: React.CSSProperties;
}) => {
    return (
        <Box style={{ ...style, position: 'relative' }}>
            <FileButton accept={accept} {...form.getInputProps('image', { type: 'input' })}>
                {(props) => (
                    <>
                        <Box {...props}>
                            {isVideo(media) ? (
                                <video
                                    width="100%"
                                    // controls
                                    autoPlay
                                    muted
                                    loop
                                    style={{ borderRadius: '8px', border: '1px solid #ccc' }}
                                >
                                    <source
                                        src={
                                            typeof media === 'string'
                                                ? media
                                                : URL.createObjectURL(media)
                                        }
                                        type={typeof media === 'string' ? undefined : media.type}
                                    />
                                </video>
                            ) : (
                                <Image
                                    src={
                                        media &&
                                        (typeof media === 'string'
                                            ? media
                                            : URL.createObjectURL(media))
                                    }
                                    alt="Preview"
                                    width={200}
                                    // height={200}
                                    fallbackSrc="https://placehold.co/200x200?text=Choisisez%20un%20media"
                                    style={{ border: '1px solid #ccc' }}
                                />
                            )}
                        </Box>
                    </>
                )}
            </FileButton>
            <Box
                style={{
                    // position: 'absolute',
                    // bottom: 0,
                    // right: 0,
                    color: 'red',
                    fontSize: 10,
                    textAlign: 'right',
                    textWrap: 'nowrap',
                }}
            >
                {form.errors.image ? form.errors.image : ''}
            </Box>
        </Box>
    );
};

export default MediaInput;
