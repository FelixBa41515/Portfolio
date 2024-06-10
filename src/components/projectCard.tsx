import {FunctionComponent} from 'react'
import {Card, CardActions, CardContent, CardMedia} from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
    image: string
    id: number
    title: string
    content: string
    buttonTitle: string
    setItem: (id: number) => void
    active: boolean
    isLargeScreen:boolean
    link:string
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({link, isLargeScreen, active, image, id, title, content, buttonTitle, setItem}) => {

    return (
        <>
            <Card  onClick={() => setItem(id)}>
                <CardMedia
                    sx={{height: 300}}
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
                        {active && title ==='Internship' &&<a download="Eindrapport_Werkplekleren_FelixBastijns.pdf" href={link}><Button size="medium">{buttonTitle}</Button></a>}
                        {active && title !=='Internship' &&<Link target={'_blank'} to={link}><Button size="medium">{buttonTitle}</Button></Link>}
                        {!active && isLargeScreen && <Button size="medium" disabled={true}>{buttonTitle}</Button>}
                        {!active && !isLargeScreen && <Link target={'_blank'} to={link}><Button size="medium">{buttonTitle}</Button></Link>}
                    </CardActions>



            </Card>
        </>
    )
}

export default ProjectCard
