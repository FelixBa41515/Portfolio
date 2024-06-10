import {CSSProperties, FunctionComponent} from 'react'
import {Grid, Paper} from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import SkillCarousel from './components/skillCarousel.tsx'
import Button from '@mui/material/Button'

interface AboutMeProps {

}


const photoStyle: CSSProperties = {
    background: `
        linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)), 
        url('/assets/images/me.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    height: '30rem',
    width: '100%',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
const workStyle: CSSProperties = {
    background: `
        linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)), 
        url('/assets/images/theater.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    height: '20rem',
    color: 'white',
    display: 'flex',
}
const internshipStyle: CSSProperties = {
    background: `
        linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)), 
        url('/assets/images/code.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    height: '20rem',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
const textStyles = {
    fontSize: '36px',
    display: 'block', // Add this to make it a block-level element
};
const titleStyles:CSSProperties = {
    textAlign:'center',
    borderBlock: "1px solid darkgray",
    paddingBlock:'1rem'
};
const AboutMe: FunctionComponent<AboutMeProps> = () => {
    return (
        <div>

                <h2 style={textStyles}>Skills</h2>


        <Container>
            <Grid container justifyContent="center" alignItems='stretch' spacing={2}>
                <Grid item sm={7} xs={10} md={4}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: '100%',
                                marginTop: '6rem',
                                padding: '0.5rem',
                            },
                        }}
                    >
                        <Paper sx={{width: '100%', height: '100%'}}>
                            <div style={photoStyle}></div>
                        </Paper>

                    </Box>
                </Grid>
                <Grid item sm={7} xs={10} md={8} sx={{ display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: '100%',
                        height: '21rem',
                        marginTop: '5rem',
                        padding: '0.5rem',
                    },}}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: '100%',
                                padding: '0.5rem',
                            },
                        }}
                    >
                        <Paper>
                            <SkillCarousel></SkillCarousel>
                        </Paper>
                        <Paper sx={{display:'flex' }}>
                            <Button href="/assets/files/CV_FelixBastijns.pdf"
                                    download="CV_FelixBastijns.pdf"
                                    sx={{color: 'white', padding: 2, fontSize:20, height:'3rem', width:'100%'}}
                                    variant="contained">
                               My resume
                            </Button>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item sm={7} xs={10} md={12} sx={{ display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {

                        width: '100%',
                        marginBottom: '10rem',
                    },}}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: '100%',
                            },
                        }}
                    >
                        <Paper sx={{paddingInline:'2rem', paddingBlock:'1rem'}}>
                            <h2 style={titleStyles}>Experience</h2>
                            <Grid container spacing={2} >
                                <Grid item md={6} sm={12} xs={10}>
                                    <div style={internshipStyle}></div>
                                </Grid>
                                <Grid item md={6} sm={12} xs={10}>
                                    <h3>Internship</h3>
                                    <p>My internship at dotNET lab was highly educational for me. Despite having some prior work experience, I learned a great deal about what it's like to be a programmer in a professional setting. I had the opportunity to contribute to a project from analysis to deployment, which provided me with insight into every step of application development.</p>
                                </Grid>

                                <Grid item md={6} sm={12} xs={10}>
                                    <h3>Work</h3>
                                    <p>After completing my secondary education, I worked as a theater technician for a while. Initially, I worked as a freelancer, which allowed me to work in various places. This helped me develop strong networking skills and learn other communication skills necessary for collaborating with different personalities. Later on, I worked in a theater venue, where my favorite task was programming light and sound consoles.</p>
                                </Grid>
                                <Grid item md={6} sm={12} xs={10}>
                                    <div style={workStyle}></div>
                                </Grid>
                            </Grid>



                        </Paper>
                    </Box>
                </Grid>

            </Grid>

        </Container>



        </div>
    )
}

export default AboutMe