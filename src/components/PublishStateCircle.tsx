import { getThemeColor, Tooltip, useMantineTheme } from '@mantine/core';
import './PublishStateCircle.scss';

const stateToColor = {
    draft: 'yellow.9',
    published: 'lime.6',
    archived: 'gray.6',
};

const PublishStateCircle = ({
    isPublished,
    tooltip,
}: {
    isPublished: keyof typeof stateToColor;
    tooltip: string;
}) => {
    const theme = useMantineTheme();

    return (
        <>
            <Tooltip label={tooltip}>
                <div
                    style={{
                        minWidth: 16,
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        className={isPublished === 'published' ? 'animated ' + isPublished : ''}
                        style={{
                            backgroundColor: getThemeColor(stateToColor[isPublished], theme),
                            borderRadius: '100%',
                            width: 8,
                            height: 8,
                        }}
                    />
                </div>
            </Tooltip>
        </>
    );
};

export default PublishStateCircle;
