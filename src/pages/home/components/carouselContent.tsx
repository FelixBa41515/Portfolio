import {FunctionComponent} from 'react'
import {Grid, useMediaQuery, useTheme} from '@mui/material'

interface CarouselContentProps {
    title: string;
    content: string;
    image: string;

}

const CarouselContent: FunctionComponent<CarouselContentProps> = ({title, image, content}) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

    const imageStyles = {
        maxWidth: '100%',
        height: 'auto',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '8px',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
    }


    return (
        <Grid container spacing={2}>
            {!isSmallScreen && (
                <Grid item xs={12} lg={6}>
                    <img
                        src={image}
                        alt="Nature"
                        style={imageStyles}
                    />
                </Grid>
            )}
            <Grid item xs={10} lg={6}>
                <h2 >{title}</h2>
                <p>
                    {content}
                </p>
            </Grid>
        </Grid>
    )
}

export default CarouselContent
