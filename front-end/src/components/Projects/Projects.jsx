import React from 'react';
import styles from './Projects.module.css'
import database from './database.jpeg'
import macbookdesk from './macbook2.jpeg'
import ml from './ml1.jpeg'
import macbook from './macbook.jpeg'

function Projects() {

    return (
        <div className = {styles.projectsSection}>
            <div className = {styles.title}>
                <h2>Projects</h2>
                <img src = {macbook} />
            </div>
            <div className = {styles.projects}>
                <div className = {styles.project_one}>
                    <div class = {styles.imgWrapper}>
                        <img className = {styles.pImg} src = {database} />
                    </div>
                    <div className = {styles.txt}>
                        <h2> Lstore Database System </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className = {styles.project_two}>
                    <div className = {styles.txt}>
                        <h2> Web and Mobile Development </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. 
                        </p>
                    </div>
                    <div class = {styles.imgWrapper}>
                        <img className = {styles.pImg} src = {macbookdesk} />
                    </div>
                </div>
                <div className = {styles.project_three}>
                    <div class = {styles.imgWrapper}>
                        <img className = {styles.pImg} src = {ml} />
                    </div>
                    <div className = {styles.txt}>
                        <h2> Selector </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects