import React from 'react'
import styles from './Skills.module.css'
import header from "./Rectangle.png"
import desk from './desk.jpeg'
import hardSkillsSrc from './dode.jpg'
import softSkillsSrc from './devTeam.jpg'

function Skills() {

    return (
        <div id = "Skills" className = {styles.skillsComp}>
            {/* <img className = {styles.header} src = {header} /> */}
	    <div className = {styles.skillsTitle}>
            	<h1>Skills</h1>
	    </div>
            <div className = {styles.skills}>
                <div id = {styles.hardSkills}>
                    <img id = {styles.hardSkillsImg} src = {hardSkillsSrc} />
                    <div className = {styles.hardSkillsText}>
                        <p className = {styles.subTitle}>Hard Skills</p>
                        <div className ={styles.info}>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                            <hr/>
                            <ul>
                                <li>Programming languages: C++, Java, Javascript, Pyhton, R</li>
                                <li>Web Development: React, Redux, NodeJS, Bootstrap, MaterialUI, etc</li>
                                <li>DataBases: SQLite 3, MongoDB</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id = {styles.softSkills}>
                    <div className = {styles.softSkillsText}>
                        <p className = {styles.subTitle}>Soft Skills</p>
                        <div className ={styles.info}>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                            <hr/>
                            <ul>
                                <li>Programming languages: C++, Java, Javascript, Pyhton, R</li>
                                <li>Web Development: React, Redux, NodeJS, Bootstrap, MaterialUI, etc</li>
                                <li>DataBases: SQLite 3, MongoDB</li>
                            </ul>
                        </div>
                    </div>
                    <img id = {styles.softSkillsImg} src = {softSkillsSrc} />
                </div>
            </div>
        </div>
    )
    
}

export default Skills

