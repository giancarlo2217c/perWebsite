import React from 'react'
import styles from './About.module.css'
import portrait from './portrait1.jpeg'

function About() {
    return (
        <div className = {styles.aboutComp}>
            <div className = {styles.aboutTxt}>
                <h1>About</h1>
                <div className = {styles.pContainer}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Rutrum tellus pellentesque eu tincidunt tortor. Pulvinar neque laoreet suspendisse interdum consectetur. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Lacus vel facilisis volutpat est velit egestas dui id ornare. Massa id neque aliquam vestibulum morbi blandit. Amet aliquam id diam maecenas ultricies mi. Dui id ornare arcu odio.
                    </p>
                </div>
            </div>
            <img src = {portrait}></img>
        </div>
    )
}

export default About
