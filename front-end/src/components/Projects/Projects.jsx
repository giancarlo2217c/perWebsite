import React from 'react';
import styles from './Projects.module.css'
import database from './database.jpeg'
import macbookdesk from './macbook2.jpeg'
import ml from './ml1.jpeg'
import freeEdu from './girlCoffeTable.jpg'
import Project from './Project.jsx'

function Projects() {

    const projectOneDesc = "The LSTORE database system is a hybrid Transactional and Analytical Processing (HTAP) database. Following the lineage-based Data Store paradigm, the database combines the real-time processing of transactional and analytical workloads. This academic project was part of the ECS-165A course, instructed Mohammad Sadoghi. Building this database from scratch required hands-on experience on concepts such as a memory and disk management, synchronization and concurrency, logging and recovery, and query optimization and evaluation."
    const projectTwoDesc = "Education Is Free is a personal project with the aim to make online courses more accessible to students. Sometimes college professor do not have a teaching style that fits the students learning process. Therefore, I carefully selected various courses from different channels on youtube on different channels. These courses where later inserted into a database so that the front-end can easily display them. This web app was built with React, D3, NodeJS, Express, and MySQLite"
    const projectThreeDesc = "My Coding Journey is a personal project that is currently under development. The initial idea was to create a space where I could tell my experience about becoming a web developer and a computer science student. However, the idea evolved into a platform where softwares engineers could share their own experience. This concept, I think, could significantly help new comers assess the countless options when starting to learn programming."
    const projectFourDesc = "One of the mathematical milestones of the modern era is the adoption of the Bayes Theorem. The theorem formulated by Thomas Bayes is one the mathematical pieces that forms the foundations of Machine Learning and Artificial Intelligence. This Naive Bayes Classifier is among the simplest Bayesian network models but have the potential to achieve higher accuracy levels."

    

    return (
        <div id = "projects" className = {styles.projectsSection}>
            <div id = {styles.projectsTitle}>Projects</div>
            <Project direc = "gs_reveal_fromLeft" imgSrc = {database} title = "Lstore Database System" desc = {projectOneDesc} />
            <Project direc = "gs_reveal_fromRight" imgSrc = {freeEdu} title = "Education Is Free" desc = {projectTwoDesc} />
            <Project direc = "gs_reveal_fromLeft" imgSrc = {macbookdesk} title = "My Coding Journey" desc = {projectThreeDesc} />
            <Project  direc = "gs_reveal_fromRight" imgSrc = {ml} title = "Bayes Algorithm Classifier" desc = {projectFourDesc} />
        </div>
    )
}

export default Projects
