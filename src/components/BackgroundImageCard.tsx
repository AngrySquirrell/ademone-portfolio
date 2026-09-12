import { Box, Card, Image, Title } from '@mantine/core';

const BackgroundImageCard = ({
    disabled,
    bgImageSrc,
    label,
    onClick,
}: {
    disabled?: boolean;
    bgImageSrc: string;
    label: string;
    onClick: () => void;
}) => {
    return (
        <Card
            className="editable"
            onClick={() => {
                if (!disabled) onClick();
            }}
            style={{
                cursor: disabled ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.6 : 1,
                filter: disabled ? 'grayscale(100%)' : 'none',
            }}
            p={0}
            pos={'relative'}
        >
            <Image
                style={{
                    border: '1px solid #ccc',
                    top: 0,
                    left: 0,
                }}
                src={bgImageSrc}
                h={200}
            />
            <Box
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background:
                        'linear-gradient(135deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                }}
            ></Box>
            <Title
                order={1}
                c={'white'}
                pos={'absolute'}
                style={{
                    bottom: 10,
                    right: 15,
                }}
            >
                {label}
            </Title>
        </Card>
    );
};

export default BackgroundImageCard;
