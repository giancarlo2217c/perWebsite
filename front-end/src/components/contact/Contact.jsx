import React from 'react' 
import { Form } from 'react-bootstrap'
import styles from './contact.module.css'
import humansImage from './humansChat.png'
import facebook from './facebook-circular-logo.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'
import instagram from './instagram.png'
import gray from './RectangleGray.png'

function Contact() {
return (
    <div>
        <img className = {styles.gray} src = {gray} />
        <div className = {styles.contactComp}>
            <div className = {styles.inputSocial} >
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className = {styles.label} >Contact</Form.Label>
                <Form.Control className = {styles.txtArea} as="textarea" rows={3} />
                </Form.Group>
                <div className = {styles.socials}>
                    <img className = {styles.social} src = {facebook} />
                    <img className = {styles.social} src = {twitter} /> 
                    <img className = {styles.social} src = {linkedin} />
                    <img className = {styles.social} src = {instagram} />
                </div>
            </div>
            <img className = {styles.img1} src = {humansImage}/>
        </div>
    </div>
    )
}

export default Contact