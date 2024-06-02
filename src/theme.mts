import { ThemeOptions } from '@mui/material/styles';

export const mainColors = {
    primary: "#343A40",
    secondary: "#143f72"
}


export const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: "Montserrat"
    },
    palette: {
        mode: 'light',
        primary: {
            main: mainColors.primary,
        },
        secondary: {
            main: mainColors.secondary,
        },
    },
};