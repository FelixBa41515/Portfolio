import {FunctionComponent, useEffect, useState} from 'react'

import FeaturedCard from '../../components/featuredCard.tsx'
import {Fab, Grid, Paper} from '@mui/material'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import InterestsCarousel from './components/interestsCarousel.tsx'
import NavigationIcon from '@mui/icons-material/Navigation';

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {

    const paperStyles = {
        borderRadius: 0,
        height: 'auto',
        borderTop: '1px solid rgba(0, 0, 0, 0.2)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        marginBottom:'50px',
    }
    const [showFab, setShowFab] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setShowFab(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling animation
        });
    };

    return (
        <>
            {showFab && (
                <Fab sx={{ position: 'fixed', top: 150, right: 16 }}  onClick={scrollToTop}>
                    <NavigationIcon />
                </Fab>
            )}
            <Container maxWidth={'lg'}>
                <Box sx={{marginTop: '200px', marginBottom:'100px;'}}>
                    <Grid container spacing={2} alignItems={'center'} justifyContent={'center'}>
                        <FeaturedCard
                            buttonTitle={'Look at projects'}
                            content={'Check out these projects i made.'}
                            image={'/assets/images/code.jpg'}
                            title={'Projects'}
                            link={'/experience'}
                        />
                        <FeaturedCard
                            buttonTitle={'Learn more'}
                            content={'Want to learn more about me?'}
                            image={'/assets/images/forest_1.jpg'}
                            title={'Personal interests'}
                            link={'#interests'}
                        />
                        <FeaturedCard
                            buttonTitle={'Ask your question'}
                            content={'Feel free to ask any question you might have.'}
                            image={'/assets/images/contact_1.jpg'}
                            title={'Contact'}
                            link={'/contact'}
                        />
                    </Grid>
                </Box>
            </Container>
            <Box
                sx={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("/assets/images/forest_2.jpg")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '40vh',
                    marginTop: '100px',
                    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'Left',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    paddingLeft: '8vw',
                    marginBottom: 5,

                }}
            >

                <h2>
                    Download my resume here!
                </h2>
                <Button href="/assets/files/CV_FelixBastijns.pdf"
                        download="CV_FelixBastijns.pdf"
                        sx={{marginLeft: 3, color: 'white', padding: 2, fontSize:20}}
                        variant="contained">
                    Download
                </Button>


            </Box>
            <div id={'interests'}>
                <Box sx={{
                    textAlign: 'center',
                    fontSize: 30,
                }}>
                    <h2>
                        Interests
                    </h2>
                </Box>
                <Paper elevation={0} sx={paperStyles}>
                    <InterestsCarousel/>
                </Paper>
            </div>

        </>
    )
}

export default Home
