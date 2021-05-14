import React from 'react' 
import { useState } from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles';
import styles from './contact.module.css'
import facebook from './facebook-circular-logo.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'
import instagram from './instagram.png'
import handshake from './hd.jpg'
// import gray from './RectangleGray.png'
import api from '../../api'

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

    const useStyles = makeStyles((theme) => ({
        message: {
            color: "white",
            marginTop: '30px',
            marginBottom: '30px'
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
                <TextField onChange = {writeEmail} required id="standard-required" label="Email" defaultValue="email@example.com" />
                <TextField 
                    onChange = {writeContent}
                    className = {styles.txtArea + " " + classes.message}
                    id="filled-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    defaultValue="Enter your message"
                    variant="filled"
                />
                <Button className = {styles.submitBtn} onClick = {sendMessage} variant="contained" color="primary">Send</Button>
            </div>
            <div className = {styles.socials}>
                <a href = "https://www.facebook.com/giancarlo.lambert1/" > <img className = {styles.social} src = {facebook} /> </a>
                <a href = "https://twitter.com/gian_lambert"> <img className = {styles.social} src = {twitter} /> </a>
               <a href = "https://www.linkedin.com/in/gian-carlo-lambert-4447b51b7/"> <img className = {styles.social} src = {linkedin} /> </a>
               <a href = "https://www.instagram.com/giancarlolambert/"> <img className = {styles.social} src = {instagram} /> </a>
            </div>
        </div>
        </div>
        {/* <img className = {styles.img1} src = {humansImage}/> */}
        </div>
    )
}

export default Contact
