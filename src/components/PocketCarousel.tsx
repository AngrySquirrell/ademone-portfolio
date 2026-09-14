import { Hypb, useCollection } from '@hydevs/hypb';
import { Carousel } from '@mantine/carousel';
import Media from './Media';
import { LoadingOverlay, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { config } from '../config';

const PocketCarousel = ({
    video,
}: {
    video?: {
        autoplay?: boolean;
        sound?: boolean;
        loop?: boolean;
        controls?: boolean;
        controlsList?: string;
    };
}) => {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const { records, loading } = useCollection(config.collections.carousel, {
        queryParams: {
            sort: 'order',
        },
    });
    if (loading || !records || records.length === 0) {
        return null;
    }
    return (
        <Carousel
            withIndicators
            height={400}
            w="100%"
            emblaOptions={{
                loop: true,
                align: 'start',
                slidesToScroll: mobile ? 1 : 2,
            }}
            slideSize={{ base: '101%', sm: '50%' }}
            slideGap={{ base: 'xl', sm: 4 }}
            styles={{
                // aspectRatio: '32/9',
                root: { aspectRatio: '32/9' },
                // container: {
                //     aspectRatio: '16/9',
                // },
                control: {
                    '&[data-inactive]': {
                        opacity: 0,
                        cursor: 'default',
                    },
                },
                indicator: {
                    width: 10,
                    height: 10,
                    transition: 'width 250ms ease',
                    backgroundColor: 'white',
                    '&[data-active]': {
                        width: 30,
                        backgroundColor: 'var(--mantine-primary-6)',
                    },
                },
            }}
        >
            {!loading &&
                records.map((media, index) => (
                    <Carousel.Slide key={index}>
                        <Media
                            video={video}
                            mediaSrc={Hypb.pb.files.getURL(media, media.media)}
                            cover
                        />
                    </Carousel.Slide>
                ))}
            {loading && (
                <Carousel.Slide>
                    <LoadingOverlay visible={true} />
                </Carousel.Slide>
            )}
        </Carousel>
    );
};

export default PocketCarousel;
