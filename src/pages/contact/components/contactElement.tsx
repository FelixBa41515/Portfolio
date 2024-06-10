import {FunctionComponent, PropsWithChildren} from 'react'
import {Grid, Paper} from '@mui/material'


interface ContactElementProps extends PropsWithChildren {
    width: number

}

const ContactElement: FunctionComponent<ContactElementProps> = ({children, width}) => {
    return (
        <Grid item  sm={12} md={width} marginBottom={2}>
            <Paper elevation={2} sx={{padding: 2}}>
                {children}
            </Paper>
        </Grid>
    )
}

export default ContactElement
