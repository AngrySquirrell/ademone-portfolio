import { Button, Container, createTheme, Text, Title } from '@mantine/core';

export const theme = createTheme({
    fontFamily: '"Poppins", sans-serif',
    headings: {
        fontFamily: '"Cormorant Garamond", serif',
        fontWeight: '700',
    },
    defaultRadius: 'md',
    colors: {
        // === COULEURS PRINCIPALES (alias pour compatibilité) ===
        // Primary = Taupe #a38585
        primary: [
            '#f7f2f2',
            '#ede4e4',
            '#dbc9c9',
            '#c9aeae',
            '#b79393',
            '#a38585',
            '#8a7070',
            '#715c5c',
            '#584848',
            '#3f3434',
        ],
        // Secondary = Sable #cbbd93
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

        // === COULEURS PRINCIPALES ===
        // Taupe #a38585
        taupe: [
            '#f7f2f2',
            '#ede4e4',
            '#dbc9c9',
            '#c9aeae',
            '#b79393',
            '#a38585',
            '#8a7070',
            '#715c5c',
            '#584848',
            '#3f3434',
        ],
        // Terra Cotta #c58c6e
        terraCotta: [
            '#faf4f1',
            '#f5e9e3',
            '#ebd3c7',
            '#e1bdab',
            '#d3a58c',
            '#c58c6e',
            '#a6765d',
            '#87604c',
            '#684a3b',
            '#49342a',
        ],
        // Sauge #b8b7a3
        sauge: [
            '#f7f7f5',
            '#efefeb',
            '#dfdfd7',
            '#cfcfc3',
            '#c3c3b3',
            '#b8b7a3',
            '#9c9b8a',
            '#807f71',
            '#646358',
            '#48473f',
        ],

        // === COULEURS SECONDAIRES (fonds) ===
        // Rose poudré #c08f99
        rosePoudre: [
            '#fbf6f7',
            '#f4e8ea',
            '#ead2d7',
            '#dcb6bd',
            '#cea3ab',
            '#c08f99',
            '#a9767f',
            '#8f6068',
            '#754d54',
            '#5b3b41',
        ],
        // Lin #fff0d6
        lin: [
            '#ffffff',
            '#fffcf5',
            '#fff8eb',
            '#fff4e0',
            '#fff0d6',
            '#f5e5c8',
            '#e8d4af',
            '#dbc396',
            '#ceb27d',
            '#c1a164',
        ],
        // Menthe glacée #e7efe6
        menthe: [
            '#f9fbf9',
            '#f3f7f3',
            '#edf3ec',
            '#e7efe6',
            '#dce8db',
            '#cfdcce',
            '#b5c9b4',
            '#9bb69a',
            '#81a380',
            '#679066',
        ],

        // === COULEURS D'ACCENTUATION ===
        // Framboise #a54f6b
        framboise: [
            '#f9eef1',
            '#f3dde3',
            '#e7bbc7',
            '#db99ab',
            '#c8748c',
            '#a54f6b',
            '#8c435a',
            '#733749',
            '#5a2b38',
            '#411f27',
        ],
        // Or #ae7a0c
        or: [
            '#faf5e8',
            '#f5ebd1',
            '#ebd7a3',
            '#e1c375',
            '#d4ac42',
            '#ae7a0c',
            '#92670a',
            '#765408',
            '#5a4106',
            '#3e2e04',
        ],
        // Feuillage #818d47
        feuillage: [
            '#f4f5ee',
            '#e9ebdd',
            '#d3d7bb',
            '#bdc399',
            '#a3af70',
            '#818d47',
            '#6d773c',
            '#596131',
            '#454b26',
            '#31351b',
        ],

        // === FONDS SUPPLÉMENTAIRES ===
        // Sable #cbbd93
        sable: [
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
        // Terre #a38f85
        terre: [
            '#f7f4f3',
            '#efe9e7',
            '#dfd3cf',
            '#cfbdb7',
            '#b9a69e',
            '#a38f85',
            '#8a7970',
            '#71635b',
            '#584d46',
            '#3f3731',
        ],

        // === TEXTE ===
        // Charbon #4a4a4a
        charbon: [
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
                ff: '"Poppins", sans-serif',
            },
        }),
    },
});
