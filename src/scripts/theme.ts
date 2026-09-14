import { Button, Container, createTheme, Text, Title } from '@mantine/core';

/**
 * Mantine theme configuration.
 *
 * TODO: Customize the color palettes below to match your project's branding.
 * Each color array contains 10 shades (index 0 = lightest, index 9 = darkest).
 * Use https://mantine.dev/colors-generator/ to generate palettes from a hex value.
 */
export const theme = createTheme({
    fontFamily: '"Comfortaa", serif',
    headings: {
        fontFamily: '"Lexend", sans-serif',
        fontWeight: '700',
    },
    defaultRadius: 'md',
    colors: {
        // === PRIMARY COLOR ===
        // TODO: Replace with your brand color
        primary: [
            '#f5f5f5',
            '#e8e8e8',
            '#d1d1d1',
            '#bababa',
            '#a3a3a3',
            '#8c8c8c',
            '#757575',
            '#5e5e5e',
            '#4a4a4a',
            '#333333',
        ],
        // === SECONDARY COLOR ===
        // TODO: Replace with your secondary brand color
        secondary: [
            '#faf9f4',
            '#f5f3e9',
            '#ebe7d3',
            '#e1dbbd',
            '#d6cfa8',
            '#cbbd93',
            '#ab9f7c',
            '#8b8165',
            '#6b634e',
            '#4b4537',
        ],
    },
    primaryShade: 5,
    black: '#4a4a4a',
    white: '#ffffff',
    primaryColor: 'primary',
    components: {
        Container: Container.extend({
            defaultProps: {
                size: 'xl',
            },
        }),
        Text: Text.extend({
            defaultProps: {
                c: '#4a4a4a',
            },
        }),
        Title: Title.extend({
            defaultProps: {
                fw: 700,
            },
        }),
        Button: Button.extend({
            defaultProps: {
                ff: '"Comfortaa", serif',
            },
        }),
    },
});
