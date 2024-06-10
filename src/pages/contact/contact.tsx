import {FunctionComponent, useRef, useState} from 'react'
import {Alert, Collapse, Grid, LinearProgress, List} from '@mui/material'
import Container from '@mui/material/Container'
import Textbox from './components/textbox.tsx'
import MultilineTextbox from './components/multilineTextbox.tsx'
import ContactElement from './components/contactElement.tsx'
import Button from '@mui/material/Button'
import ContactDetailsListItem from './components/contactDetailsListItem.tsx'
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';



interface ContactProps {

}


const Contact: FunctionComponent<ContactProps> = () => {
    const form = useRef<HTMLFormElement | null>(null)
    const [success, setSucces] = useState<boolean>(false)
    const [fail, setFail]= useState(false)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsloading] = useState(false);

    const sendEmail = (evt: React.FormEvent) => {
        evt.preventDefault();
        setIsloading(true)
        if(form.current === null)
            return
        emailjs.sendForm('service_qdur9ew', 'template_23idrsa', form.current as HTMLFormElement, 'W4H40nPHS7eLc6beU')
            .then(() => {
                setSucces(true)
                setFail(false)

                setFirstName('');
                setLastName('');
                setEmail('');
                setMessage('');
                setIsloading(false)

            }, () => {
                setFail(true)
                setSucces(false)
                setIsloading(false)
            });

    }
    return (

        <Container maxWidth={'md'} sx={{marginTop:'12rem', marginBottom:'4rem'}}>
            <Box sx={{ width: '100%' }}>
                <Collapse in={success}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setSucces(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        Your message was successfully sent! We will try to reply as soon as possible!
                    </Alert>
                </Collapse>
            </Box>

                <Box sx={{ width: '100%' }}>
                    <Collapse in={fail}>
                        <Alert severity="error"
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setFail(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mb: 2 }}
                        >
                            Your message could not be sent. please try again
                        </Alert>
                    </Collapse>
                </Box>
            <Grid container spacing={2}>

                <ContactElement width={7}>
                    <form ref={form} onSubmit={sendEmail}>
                    <h2>Contact me</h2>
                    <Textbox type={'text'} label={'First name'} placeholder={'Enter your first name'} name={'firstname'} value={firstName} changeHandler={setFirstName}/>
                    <Textbox type={'text'} label={'Last name'} placeholder={'Enter your last name'} name={'lastname'} value={lastName} changeHandler={setLastName}/>
                    <Textbox type={'email'} label={'Email'} placeholder={'Enter your Email'} name={'email'} value={email} changeHandler={setEmail}/>
                    <MultilineTextbox label={'Message'} placeholder={'Enter your message here'} name={'message'}value={message} changeHandler={setMessage}/>
                        <Button sx={{marginY: 2}} fullWidth variant="contained"  type={'submit'}>
                            Send

                        </Button>
                        {isLoading && <LinearProgress/>}
                    </form>
                </ContactElement>

                <ContactElement width={5}>
                    <List sx={{width: '100%', maxWidth: 360}}>
                        <a href="tel:+32476302173"><ContactDetailsListItem content={'0476 30 21 73'} type={1}/></a>
                        <a href="mailto:felixbastijns@hotmail.com"><ContactDetailsListItem content={'Felixbastijns@hotmail.com'} type={2}/></a>
                        <a href="https://github.com/Felix5746" target="_blank" rel="noopener noreferrer"><ContactDetailsListItem content={'My GitHub'} type={3}/></a>
                        <a href="https://www.linkedin.com/in/felix-bastijns-a9994796/" target="_blank" rel="noopener noreferrer"><ContactDetailsListItem content={'My Linkedin'} type={4}/></a>
                    </List>
                </ContactElement>

            </Grid>
        </Container>
    )
}

export default Contact
