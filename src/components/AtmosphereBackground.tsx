import { Box } from '@mantine/core';
import classes from './AtmosphereBackground.module.css';

const AtmosphereBackground = () => {
    return (
        <Box aria-hidden="true" className={classes.wrapper}>
            {/* <div className={classes.blob1} />
            <div className={classes.blob2} />
            <div className={classes.blob3} />
            <div className={classes.scrim} /> */}
            <div className={classes.dotGrid} />
        </Box>
    );
};

export default AtmosphereBackground;
