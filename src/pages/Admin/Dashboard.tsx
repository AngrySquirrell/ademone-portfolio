// import { useAuthContext } from '@hydevs/hypb';
import { logoutPB } from '@hydevs/hypb';
import { Button, SimpleGrid, Title } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useNavigate } from 'react-router';
import galleryImage from '../../assets/forest_background.webp';
import textImage from '../../assets/forest_background_2.webp';
import carouselImage from '../../assets/forest_background_6.webp';
import BackgroundImageCard from '../../components/BackgroundImageCard';

const Dashboard = () => {
    const n = useNavigate();

    return (
        <>
            <Title order={2} mb={'lg'}>
                Panel d'administration
            </Title>
            <SimpleGrid
                cols={{
                    base: 1,
                    sm: 2,
                }}
                mb={'lg'}
                spacing="md"
            >
                <BackgroundImageCard
                    bgImageSrc={textImage}
                    label="Textes"
                    onClick={() => n('/admin/textes')}
                />
                <BackgroundImageCard
                    bgImageSrc={galleryImage}
                    label="Galerie"
                    onClick={() => n('/admin/gallery')}
                />
                <BackgroundImageCard
                    bgImageSrc={carouselImage}
                    label="Carousel"
                    onClick={() => n('/admin/carousel')}
                />
            </SimpleGrid>
            <Button
                onClick={() =>
                    modals.openConfirmModal({
                        title: 'Se déconnecter',
                        centered: true,
                        children: 'Êtes-vous sûr de vouloir vous déconnecter ?',
                        labels: { confirm: 'Se déconnecter', cancel: 'Annuler' },
                        onConfirm: () => {
                            logoutPB();
                        },
                    })
                }
            >
                Se déconnecter
            </Button>
        </>
    );
};

export default Dashboard;
