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
        primary: [
            '#FFEDEB', //0 T95
            '#FFDAD8', //1 T90
            '#FFB3B0', //2 T80
            '#FF8986', //3 T70
            '#FF5357', //4 T60
            '#FF2A3F', //5 MAIN
            '#EB1533', //6 T50
            '#930019', //7 T30
            '#68000F', //8 T20
            '#410006', //9 T0
        ],
        secondary: [
            '#F2F0F0', //0 T95
            '#E3E2E2', //1 T90
            '#C7C6C6', //2 T80
            '#ABABAB', //3 T70
            '#919191', //4 T60
            '#8C8C8C', //5 MAIN
            '#777777', //6 T50
            '#464747', //7 T30
            '#2F3031', //8 T20
            '#000000', //9 T0
        ],
        tertiary: [
            '#FFEDE4', //0 T95
            '#FFDCC5', //1 T90
            '#FFB783', //2 T80
            '#FF8E2C', //3 T70
            '#DF7300', //4 T60
            '#E67700', //5 MAIN
            '#B95F00', //6 T50
            '#713700', //7 T30
            '#4F2500', //8 T20
            '#000000', //9 T0
        ],
    },
    primaryShade: 5,
    black: '#0A0A0C',
    white: '#FFFFFF',
    primaryColor: 'primary',
    components: {
        Container: Container.extend({
            defaultProps: {
                size: 'xl',
            },
        }),
        Text: Text.extend({
            defaultProps: {
                c: '#e5e1e4',
            },
        }),
        Title: Title.extend({
            defaultProps: {
                fw: 700,
            },
        }),
        Button: Button.extend({
            defaultProps: {
                ff: '"Lexend", serif',
            },
        }),
    },
});
