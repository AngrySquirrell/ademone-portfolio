import { SimpleGrid, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import GalleryModal from "../../components/GalleryModal";
import { usePocketField } from "../../providers/usePocketField";
import type { site_medias } from "../../types/globals";
import EditMediaCard from "../../components/EditMediaCard";

const Gallery = () => {
    const { media } = usePocketField();
    const handleFileModal = (media: site_medias) => {
        modals.open({
            title: (
                <Text>
                    <Text fz={"h3"} fw={700} span>
                        Modifier le media
                    </Text>{" "}
                    -{" "}
                    <Text span style={{ fontSize: "0.875rem", color: "#666" }}>
                        {media.mediaId}
                    </Text>
                </Text>
            ),
            children: <GalleryModal img={media} />,
        });
    };

    return (
        <>
            <Title order={2} mb={20}>
                Admin Dashboard
            </Title>
            <SimpleGrid
                mb={"xl"}
                cols={{
                    base: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                }}
            >
                {media.map((media) => (
                    <EditMediaCard
                        key={media.mediaId}
                        media={media}
                        onClick={() => handleFileModal(media)}
                    />
                ))}
            </SimpleGrid>
        </>
    );
};

export default Gallery;
