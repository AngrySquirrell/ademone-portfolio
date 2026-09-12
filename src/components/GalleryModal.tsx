import { Button, Divider, FileButton, Flex, Image } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useState } from "react";
import { usePocketField } from "../providers/usePocketField";
import type { audrey_medias } from "../types/globals";

const GalleryModal = ({ img: media }: { img: audrey_medias }) => {
    const [mediaFile, setMediaFile] = useState<File | null>(null);
    const { updateMedia, mediaInvalidate } = usePocketField();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <div style={{ padding: "4px 0 0 0" }}>
            <FileButton
                accept="image/*,video/mp4,video/mpeg,video/webm"
                onChange={(file) => {
                    if (file) {
                        setMediaFile(file);
                    }
                }}
            >
                {(props) => (
                    <Flex gap={10} w={"100%"} justify={"space-between"}>
                        <Button {...props}>Choisir un media</Button>
                        {media && (
                            <Button
                                loading={isLoading}
                                onClick={async () => {
                                    if (!mediaFile) return;
                                    setIsLoading(true);
                                    await updateMedia(media.mediaId, mediaFile);
                                    setIsLoading(false);
                                    mediaInvalidate();
                                    modals.closeAll();
                                }}
                            >
                                Envoyer
                            </Button>
                        )}
                    </Flex>
                )}
            </FileButton>
            <Divider my="sm" />
            {mediaFile?.type.includes("video") ? (
                <video
                    width="100%"
                    controls
                    muted
                    loop
                    style={{ borderRadius: "8px", border: "1px solid #ccc" }}
                >
                    <source
                        src={URL.createObjectURL(mediaFile)}
                        type={mediaFile.type}
                    />
                </video>
            ) : (
                <Image
                    src={mediaFile && URL.createObjectURL(mediaFile)}
                    alt="Preview"
                    width={200}
                    height={200}
                    fallbackSrc="https://placehold.co/200x200?text=Choisisez%20un%20media"
                    style={{ border: "1px solid #ccc" }}
                />
            )}
        </div>
    );
};

export default GalleryModal;
