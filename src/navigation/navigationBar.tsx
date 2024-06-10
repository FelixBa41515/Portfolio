import {FunctionComponent, useContext} from 'react'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import {NavLink} from 'react-router-dom'
import {DarkMode} from '../context/darkMode.tsx'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'


const pages = [
    {Name: 'Skills', Link: '/skills'},
    {Name: 'Experience', Link: '/experience'},
    {Name: 'Contact', Link: '/contact'},
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']


interface NavigationBarProps {

}

const NavigationBar: FunctionComponent<NavigationBarProps> = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
    const {dark, toggleTheme} = useContext(DarkMode)


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }
    const background = !dark ? 'bannerCrop' : 'space'

    const customNavLinkStyle = {
        textDecoration: 'none', /* Remove underline */
        color: 'inherit', /* Inherit the text color */
    }

    const customNavbar = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/assets/images/${background}.jpg")`, // Replace with the actual path to your image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingBlock:'1.5rem',
        marginBottom:'2rem',
    }

    return (
        <AppBar style={customNavbar}>
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    <NavLink to={'/'} style={customNavLinkStyle}>
                        <Typography
                            variant="h6"
                            noWrap


                            sx={{
                                mr: 3,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'inherit',
                                fontWeight: 600,
                                fontSize: 30,
                                letterSpacing: 'inherit',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Felix Bastijns
                        </Typography>
                    </NavLink>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <NavLink to={page.Link} key={page.Name} style={customNavLinkStyle}>
                                    <MenuItem onClick={handleCloseNavMenu}>

                                        <Typography textAlign="center">

                                            {page.Name}

                                        </Typography>

                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap

                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'inherit',
                            fontWeight: 600,
                            fontSize: 30,
                            letterSpacing: 'inherit',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <NavLink to={'/'}>
                            Felix Bastijns
                        </NavLink>
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <NavLink to={page.Link} key={page.Name} style={customNavLinkStyle}>
                                <Button

                                    onClick={handleCloseNavMenu}
                                    sx={{color: 'white', display: 'block'}}
                                >

                                    {page.Name}

                                </Button>
                            </NavLink>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>

                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        <IconButton sx={{ml: 1}} onClick={toggleTheme} color="inherit">
                            {dark ? <Brightness7Icon/> : <Brightness4Icon/>}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavigationBar
