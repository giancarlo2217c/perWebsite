import React from 'react'
import styles from './About.module.css'
import portrait from './portrait1.jpeg'

function About() {
    return (
        <div id = "about" className = {styles.aboutComp}>
            <div className = {styles.aboutTxt}>
                <h1>About</h1>
                <div className = {styles.pContainer}>
                    <p>
                        Hello! I'm Gian Carlo. I'm a computer science student currently going through my third year at UC Davis.
                        In my spare time, I also like working on personal projects in various areas on computer science. Lately, I have been
                        exploring the fields of web development, data science, and game development. As many other students in my major, I 
                        have had a passion for coding from an early age. However, I think that what distinguishes me for the rest is that I like 
                        working on projects that are impactful because they either help people or they advance the field of computer science.
                        I would also consider myself a fast learner and friendly person who is always willing to learn from others and to offer guidance
                        and leadership when needed.  

                    </p>
                </div>
            </div>
            <img src = {portrait}></img>
        </div>
    )
}

export default About
