import {CSSProperties, FunctionComponent, useEffect, useState} from 'react'
import Box from '@mui/material/Box'
import {Grid} from '@mui/material'
import Container from '@mui/material/Container'
import ProjectCard from '../components/projectCard.tsx'
import {cardData} from '../data/cardData.ts'


interface ExperienceProps {

}
const heroStyles: CSSProperties = {
    background: `
        linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)), 
        url('/assets/images/experience_2.jpg')`,
    backgroundSize: '100% auto',
    backgroundPosition: 'top',
    height: 'auto',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    flexDirection: 'column',
    marginTop:'5rem',
    padding:'8vw'
};

const textStyles = {
    fontSize: '36px',
    display: 'block', // Add this to make it a block-level element
};

const subTextStyles = {
    fontSize: '24px',
    display: 'block', // Add this to make it a block-level element
};


const Experience: FunctionComponent<ExperienceProps> = () => {
    const [currentItem, setCurrentItem] = useState<number>(1);
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true);

    const changeSelection = (id: number) => {
        setCurrentItem(id);
    };

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < 1280) {
                setIsLargeScreen(false);
            } else {
                setIsLargeScreen(true);
            }
        };

        handleResize(); // Check the screen size when the component mounts

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (

        <div>

            <div style={heroStyles}>
                <h2 style={textStyles}>Experience</h2>
                <h3 style={subTextStyles}>Take a look at these projects i made</h3>
            </div>
            <Container maxWidth={'lg'}>
                <Box>
                    <Grid container spacing={2} justifyContent="center" alignItems="center" marginTop={10} marginBottom={10}>
                        {cardData.map((card) => (
                            <Grid item xs={12} sm={10} md={9} lg={4} key={card.id} marginTop={2} marginBottom={2}>
                                <div className={card.id !== currentItem ? 'small-card' : 'big-card'}>
                                    <ProjectCard
                                        buttonTitle={card.buttonTitle}
                                        content={card.content}
                                        image={card.image}
                                        title={card.title}
                                        setItem={changeSelection}
                                        id={card.id}
                                        active={card.id === currentItem}
                                        isLargeScreen={isLargeScreen}
                                        link ={card.link}
                                    />
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Experience
