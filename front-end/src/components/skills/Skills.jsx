import React from 'react'
import styles from './Skills.module.css'
import header from "./Rectangle.png"
import desk from './desk.jpeg'

function Skills() {

    return (
        <div className = {styles.skillsComp}>
            <img className = {styles.header} src = {header} />
            <h1>Skills</h1>
            <div className = {styles.skills}>
                <div className = {styles.info}>
                    <h2>Programming Languages</h2>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor 
                        incididunt ut labore 
                        et dolore magna aliqua. </p>
                </div>
                <div className = {styles.info}>
                <h2>Frameworks</h2>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor 
                        incididunt ut labore 
                        et dolore magna aliqua. </p>
                </div>
                <div className = {styles.info}>
                <h2>Computer science</h2>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor 
                        incididunt ut labore 
                        et dolore magna aliqua. </p>
                </div>
            </div>
            <div className = {styles.imageWrapper}>
                <img className = {styles.image} src = {desk}/>
            </div>
        </div>
    )
    
}

export default Skills