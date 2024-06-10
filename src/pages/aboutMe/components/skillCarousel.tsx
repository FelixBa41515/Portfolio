import {FunctionComponent, useState} from 'react'
import {skillCarouselContent} from '../../../data/carouselContent.ts'
import {Grid} from '@mui/material'
import ArrowBack from '@mui/icons-material/ArrowBackIos'
import ArrowForward from '@mui/icons-material/ArrowForwardIos'
import SkillCarouselContent from './skillCarouselContent.tsx'

interface SkillCarouselProps {

}

const SkillCarousel: FunctionComponent<SkillCarouselProps> = () => {
    const [loaded, setLoaded] = useState(true);
    const [currentContent, setCurrentContent] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    const carouselStyle = {
        transition: 'opacity 1s ease-in-out',
        opacity: loaded ? 1 : 0,
    };

    const handleForward = () => {
        if (!transitioning) {
            setTransitioning(true);
            changeContent((currentContent + 1) % skillCarouselContent.length);
        }
    };

    const handleBack = () => {
        if (!transitioning) {
            setTransitioning(true);
            changeContent((currentContent - 1 + skillCarouselContent.length) % skillCarouselContent.length);
        }
    };

    const changeContent = (newContent: number) => {
        setLoaded(false);

        setTimeout(() => {
            setCurrentContent(newContent);
            setLoaded(true);
            setTimeout(() => {
                setTransitioning(false);
            }, 1000);
        }, 1000);
    };



    return (
        <Grid container spacing={2} justifyContent={'center'} alignItems={'center'} sx={{paddingY:'1rem'}}>
            <Grid item xs={1}></Grid>
            <Grid item xs={1} onClick={handleBack} style={{ cursor: 'pointer', opacity: transitioning ? 0.5 : 1 }}>
                <ArrowBack />
            </Grid>
            <Grid item xs={8} style={carouselStyle}>
                <SkillCarouselContent
                    title={skillCarouselContent[currentContent].title}
                    items={skillCarouselContent[currentContent].items}
                />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1} onClick={handleForward} style={{ cursor: 'pointer', opacity: transitioning ? 0.5 : 1 }}>
                <ArrowForward />
            </Grid>
        </Grid>
    );
}

export default SkillCarousel
