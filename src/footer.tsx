
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {FunctionComponent, useContext} from 'react'
import {DarkMode} from './context/darkMode.tsx'

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Home
            </Link>{' - '}
            <Link color="inherit" href="/skills">
                Skills
            </Link>{' - '}
             <Link color="inherit" href="/experience">
                Experience
            </Link>{' - '}
            <Link color="inherit" href="/contact">
                Contact
            </Link>


        </Typography>
    );
}

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () =>{
    const {dark} = useContext(DarkMode)
    const background:string = !dark? 'footerCrop': 'space'
    const footerStyle = {
        backgroundImage: `url('/assets/images/${background}.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };


    return (
        <Box
            component="footer"
            sx={{py: 8,}}
            style={footerStyle} // Apply the background image
        >
            <Container maxWidth="lg">
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                >
                    Felix Bastijns
                    <Copyright />
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer