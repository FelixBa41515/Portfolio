import { createTheme } from '@mui/material/styles';




const theme = createTheme({
    palette: {
        primary: {
            light: '#82d2fa',
            main: '#1EA5F3',
            dark: '#1b85cf',
            contrastText: '#fff',
        },
        secondary: {
            light: '#88d0b4',
            main: '#00b182',
            dark: '#009562',
            contrastText: '#fff',
        },
    },
});

export default theme;
