import React from 'react'
import Presenter from '../components/presenter/Presenter'
import Skills from '../components/skills/Skills'
import About from '../components/about/about'
import Projects from '../components/Projects/Projects'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import styles from './main.module.css'

function Main() {

    return (
        <div id = {styles.main} >
        <Presenter/>
        <Projects/>
        <hr/>
        <Skills/> 
        <About/>
        <Contact/>
        <Footer/>
        </div>
    )

}

export default Main