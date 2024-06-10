import {FunctionComponent} from 'react'
import {Card, CardActions, CardContent, CardMedia, Grid} from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'

interface FeaturedCardProps {
    image: string
    title: string
    content: string
    buttonTitle: string
    link: string
}


const FeaturedCard: FunctionComponent<FeaturedCardProps> = ({link, image, title, content, buttonTitle}) => {
    const linkComponent = () =>{
        if (link.includes('#')){
            return <a href={link}>
                <Button size="large">{buttonTitle}</Button>
            </a>
        }else{
            return <Link to={link}>
                <Button size="large">{buttonTitle}</Button>
            </Link>
        }

    }

    return (
        <Grid item xs={10} md={4} lg={4}>
            <Card>
                <CardMedia
                    sx={{ height: 300 }}
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>
                    {linkComponent()}
                </CardActions>
            </Card>
        </Grid>
    )
}

export default FeaturedCard
