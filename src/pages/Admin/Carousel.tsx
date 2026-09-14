import { Hypb, useCollection } from '@hydevs/hypb';
import { config } from '../../config';
import {
    ActionIcon,
    Box,
    Container,
    Flex,
    Loader,
    Table,
    Text,
    TextInput,
    Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import { IconPlus, IconTrash, IconTriangleFilled } from '@tabler/icons-react';
import { useMemo } from 'react';
import Media from '../../components/Media';
import MediaInput from '../../components/MediaInput';

const tableWidths = {
    order: '5%',
    media: '90%',
    actions: '5%',
};

// TODO CREATE HIGHEST AVAILABLE INDEX |eg. if 0,1,2,4 exists, new = 5
const Carousel = () => {
    const { records, invalidate, loading } = useCollection(config.collections.carousel, {
        queryParams: {
            sort: 'order',
        },
    });

    const form = useForm({
        initialValues: {
            // name: '',
            image: null as File | null,
            order: -1,
        },
        validate: {
            // name: (value) => (value.length < 2 ? 'Le nom est trop court' : null),
            image: (value) => {
                if (!value) return 'Une image est requise';
            },
        },
    });

    const moveMedia = async (index: number, direction: 'up' | 'down') => {
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= records.length) return;
        const currentMedia = records[index]; // media being moved
        const targetMedia = records[targetIndex]; // media to swap with
        await Hypb.collection(config.collections.carousel).update(currentMedia.id, {
            order: targetMedia.order,
        });
        await Hypb.collection(config.collections.carousel).update(targetMedia.id, {
            order: currentMedia.order,
        });
        invalidate();
    };

    const handleSubmit = async (values: typeof form.values) => {
        form.reset();
        await Hypb.collection(config.collections.carousel).create({
            // name: values.name,
            media: values.image,
            order: records.length > 0 ? Math.max(...records.map((r) => r.order)) + 1 : 0,
        });
        invalidate();
    };

    const computeSrc = useMemo((): File | string => {
        const placeholder = 'https://placehold.co/256x144?text=Pas%20d%27illustration';
        if (form.values.image) return form.values.image;
        return placeholder;
    }, [form.values.image, records]);

    const deleteModal = (id: string) => {
        modals.openConfirmModal({
            title: 'Confirmer la suppression',
            centered: true,
            children: (
                <Text size="sm">
                    Êtes-vous sûr de vouloir supprimer ce prix ? Cette action est irréversible.
                </Text>
            ),
            labels: {
                confirm: 'Supprimer',
                cancel: 'Annuler',
            },
            confirmProps: { color: 'red' },
            onConfirm: async () => {
                await Hypb.collection(config.collections.carousel).delete(id);
                invalidate();
            },
        });
    };

    return (
        <Container>
            <Flex mb="md" gap={8} align={'center'}>
                <Title order={2}>Gestion des images du caroussel</Title>
                {loading && <Loader size="sm" />}
            </Flex>
            <Flex w={'100%'} justify={'center'}>
                <Box w="100%">
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <Table striped withColumnBorders withTableBorder>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>Ordre</Table.Th>
                                    <Table.Th>Image</Table.Th>
                                    <Table.Th>Action</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {records.map((media, index) => (
                                    <Table.Tr key={index}>
                                        <Table.Td w={tableWidths.order} p={0}>
                                            <Flex>
                                                <Flex
                                                    w={'100%'}
                                                    align={'center'}
                                                    justify={'center'}
                                                    gap={4}
                                                    px={'6px'}
                                                >
                                                    <ActionIcon.Group>
                                                        <ActionIcon
                                                            variant="light"
                                                            color="dark.2"
                                                            disabled={index === 0}
                                                            onClick={() => moveMedia(index, 'up')}
                                                        >
                                                            <IconTriangleFilled size={10} />
                                                        </ActionIcon>

                                                        <ActionIcon
                                                            variant="light"
                                                            color="dark.2"
                                                            disabled={index === records.length - 1}
                                                            onClick={() => moveMedia(index, 'down')}
                                                        >
                                                            <IconTriangleFilled
                                                                size={10}
                                                                style={{
                                                                    transform: 'rotate(180deg)',
                                                                }}
                                                            />
                                                        </ActionIcon>
                                                    </ActionIcon.Group>
                                                </Flex>
                                            </Flex>
                                        </Table.Td>
                                        <Table.Td w={tableWidths.media}>
                                            <Flex w={'100%'} gap={16} align={'center'}>
                                                {/* <Image
                                                    src={Hypb.pb.files.getURL(media, media.media)}
                                                    maw={96}
                                                    radius={'sm'}
                                                /> */}
                                                <Box
                                                    w={96}
                                                    h={64}
                                                    style={{ borderRadius: 4, overflow: 'hidden' }}
                                                    pos={'relative'}
                                                >
                                                    <Media
                                                        mediaSrc={Hypb.pb.files.getURL(
                                                            media,
                                                            media.media
                                                        )}
                                                        cover
                                                    />
                                                </Box>
                                                <Flex>{media.media}</Flex>
                                            </Flex>
                                        </Table.Td>
                                        <Table.Td w={tableWidths.actions}>
                                            <Flex
                                                gap="md"
                                                w={'100%'}
                                                align={'center'}
                                                justify={'center'}
                                            >
                                                {/* <ActionIcon
                                                    variant="light"
                                                    color="blue"
                                                    size="md"
                                                    // TODO onClick={() => modifyModal(media)}
                                                >
                                                    <IconPencil size={16} />
                                                </ActionIcon> */}
                                                <ActionIcon
                                                    variant="light"
                                                    color="red"
                                                    size="md"
                                                    onClick={() => deleteModal(media.id)}
                                                >
                                                    <IconTrash size={16} />
                                                </ActionIcon>
                                            </Flex>
                                        </Table.Td>
                                    </Table.Tr>
                                ))}
                                <Table.Tr>
                                    <Table.Td w={tableWidths.order} p={0}>
                                        <Flex>
                                            <Flex
                                                w={'100%'}
                                                align={'center'}
                                                justify={'center'}
                                                gap={4}
                                                px={'6px'}
                                            >
                                                {/* <ActionIcon.Group>
                                                    <ActionIcon
                                                        variant="light"
                                                        color="dark.2"
                                                        disabled
                                                    >
                                                        <IconTriangleFilled size={10} />
                                                    </ActionIcon>
                                                    <ActionIcon
                                                        variant="light"
                                                        color="dark.2"
                                                        disabled
                                                    >
                                                        <IconTriangleFilled
                                                            size={10}
                                                            style={{
                                                                transform: 'rotate(180deg)',
                                                            }}
                                                        />
                                                    </ActionIcon>
                                                </ActionIcon.Group> */}
                                            </Flex>
                                        </Flex>
                                    </Table.Td>
                                    <Table.Td w={tableWidths.media}>
                                        <Flex w={'100%'} gap={16} align={'center'}>
                                            <MediaInput
                                                form={form}
                                                media={computeSrc}
                                                loading={loading}
                                                style={{ width: 96, height: '100%' }}
                                                accept="image/*,video/mp4,video/webm,video/mpeg"
                                            />

                                            <TextInput
                                                disabled
                                                value={form.values.image?.name}
                                                placeholder="Cliquez sur l'image pour en ajouter une"
                                                flex={1}
                                            />
                                        </Flex>
                                    </Table.Td>
                                    <Table.Td w={tableWidths.actions}>
                                        <Flex gap="md">
                                            <ActionIcon
                                                type="submit"
                                                variant="light"
                                                color="green"
                                                size="md"
                                            >
                                                <IconPlus size={16} />
                                            </ActionIcon>
                                        </Flex>
                                    </Table.Td>
                                </Table.Tr>
                            </Table.Tbody>
                        </Table>
                    </form>
                </Box>
            </Flex>
        </Container>
    );
};

export default Carousel;
