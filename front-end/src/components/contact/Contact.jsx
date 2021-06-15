import React from 'react' 
import { useState } from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles';
import styles from './contact.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import api from '../../api'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';


function Contact() {


    // FOR SENDING THE MESSAGE
	const [content, setContent] = useState("");

    const [email, setEmail] = useState("")

    function writeContent(event) {
        console.log(event.target.value)
        setContent(event.target.value)
    }

    function writeEmail(event) {
        console.log(event.target.value)
        setEmail(event.target.value)
    }

	function sendMessage() {
        let message = {
            email: email,
            content: content
        }
		api.sendMessage(message)
	}

    // TEXTFIELD STYLING

    const theme = createMuiTheme({
        palette: {
          primary: green,
        },
      });

    const useStyles = makeStyles((theme) => ({
        message: {
            marginTop: '30px',
            marginBottom: '30px',
            borderColor: 'green'
        },
        input: {
            color: "white"
        }
    }))

    const classes = useStyles();

return (
    <div id = {styles.contactSection} >
        {/* <img className = {styles.handshake} src = {handshake} /> */}
        <div className = {styles.container} >
        <h1 id = {styles.contactTitle}>Contact</h1>
        <div className = {styles.contactComp}>
            <div className = {styles.inputSocial}>
                <ThemeProvider theme={theme}>
                    <TextField variant="outlined" InputProps={{className: classes.input }} className = {styles.emailField + " " + classes.message} onChange = {writeEmail} required id="standard-required" label="Email" defaultValue="email@example.com" />
                    <TextField 
                        onChange = {writeContent}
                        className = {styles.txtArea + " " + classes.message}
                        id="filled-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        defaultValue="Enter your message"
                        variant="filled"
                        InputProps={{
                            className: classes.input
                        }}
                    />
                </ThemeProvider>
                <Button className = {styles.submitBtn} onClick = {sendMessage} variant="contained" color="primary">Send</Button>
            </div>
            <div className = {styles.socials}>
                <a href = "https://www.facebook.com/giancarlo.lambert1/" > <FacebookIcon className = {styles.icon} /> </a>
                <a href = "https://twitter.com/gian_lambert"> <TwitterIcon className = {styles.icon} /> </a>
               <a href = "https://www.linkedin.com/in/gian-carlo-lambert-4447b51b7/"> <LinkedInIcon className = {styles.icon} /> </a>
               <a href = "https://www.instagram.com/giancarlolambert/"> <InstagramIcon className = {styles.icon} /> </a>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Contact
