import { ThemeOptions } from '@mui/material/styles';

export const mainColors = {
    primary: "#343A40",
    secondary: "#143f72"
}


export const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: "#343A40", // Your primary color
            contrastText: "#FFFFFF", // White text for contrast
        },
        secondary: {
            main: "#143f72", // Your secondary color
            contrastText: "#FFFFFF", // White text for contrast
        },
        error: {
            main: "#f44336", // Red for error messages
        },
        warning: {
            main: "#ff9800", // Orange for warnings
        },
        info: {
            main: "#FFFFFF", // White for informational messages
        },
        success: {
            main: "#4caf50", // Green for success messages
        },
        background: {
            default: "#f2f2f2",
            paper: "#ffffff",
        },
        text: {
            primary: "#212529", // Dark gray text
            secondary: "#6c757d", // Medium gray text
        },
    },
    typography: {
        fontFamily: "Montserrat",
        h1: {
            fontWeight: 600,
            fontSize: "2.5rem",
        },
        h2: {
            fontWeight: 600,
            fontSize: "2rem",
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.5,
        },
    },
};
