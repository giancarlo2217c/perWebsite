import React from 'react';
import styles from './Projects.module.css'
import database from './database.jpeg'
import macbookdesk from './macbook2.jpeg'
import ml from './ml1.jpeg'
import macbook from './macbook.jpeg'

function Projects() {

    return (
        <div id = "projects" className = {styles.projectsSection}>
            <h1 id = {styles.projectsTitle}>Projects</h1>
            <div className = {styles.projects}>
                <div className = {styles.projectContainer}>
                    <div className = {styles.project}>
                        <div className = {styles.txt}>
                            <p className = {styles.pTitle}> Lstore Database System </p>
                            <p className = {styles.desc}>
                            Lorem ipsum dolor sit amet, consectetur <br/>
                             adipiscing elit, sed do eiusmod tempor incididunt <br/> 
                            ut labore et dolore magna aliqua. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className = {styles.projectContainer}>
                    <div className = {styles.project}>
                        <div className = {styles.txt}>
                            <p className = {styles.pTitle}> Web and Mobile Development </p>
                            <p className = {styles.desc}>
                            Lorem ipsum dolor sit amet, consectetur <br/>
                             adipiscing elit, sed do eiusmod tempor incididunt <br/> 
                            ut labore et dolore magna aliqua. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className = {styles.projectContainer}>
                    <div className = {styles.project}>
                        <div className = {styles.txt}>
                            <p className = {styles.pTitle}> Selector </p>
                            <p className = {styles.desc}>
                            Lorem ipsum dolor sit amet, consectetur <br/>
                             adipiscing elit, sed do eiusmod tempor incididunt <br/> 
                            ut labore et dolore magna aliqua. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
