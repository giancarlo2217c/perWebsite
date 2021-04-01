import React from 'react';
import styles from './Projects.module.css'
import database from './database.jpeg'
import macbookdesk from './macbook2.jpeg'
import ml from './ml1.jpeg'

function Projects() {

    return (
        <div className = {styles.projects}>
            <h2>Projects</h2>

            <div className = {styles.project_one}>
                <img className = {styles.img1} src = {database} />
                <div className = {styles.txt}>
                    <h2> Lstore Database System </h2>
                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua.
                    </b>
                </div>
            </div>
            <div className = {styles.project_two}>
                <img className = {styles.img2} src = {macbookdesk} />
                <div className = {styles.txt}>
                    <h2> Web and Mobile Development </h2>
                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. 
                    </b>
                </div>
            </div>
            <div className = {styles.project_three}>
                <img className = {styles.img3} src = {ml} />
                <div className = {styles.txt}>
                    <h2> Selector </h2>
                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. 
                    </b>
                </div>
            </div>
        </div>

    )
}

export default Projects