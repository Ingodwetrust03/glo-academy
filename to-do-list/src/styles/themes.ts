import {Theme, Themes} from '../models/theme';

const light: Theme = {
    name: 'light',
    colors: {
        backgroundPrimary: 'rgb(70, 130, 180)',
        backgroundSecondary: 'rgb(237, 240, 241)'
    },
    label: 'Switch Dark Theme'
}

const dark: Theme = {
    name: 'dark',
    colors: {
        backgroundPrimary: 'black',
        backgroundSecondary: 'gray'
    },
    label: 'Back to Light Theme'
}

export const themes: Themes = {light, dark}
