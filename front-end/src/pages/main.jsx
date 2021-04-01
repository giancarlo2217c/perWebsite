import React from 'react'
import MyNavbar  from '../components/navBar/myNavbar';
import Title from '../components/title/Title';
import Section from '../components/section/Section'
import Presenter from '../components/presenter/Presenter'
import Skills from '../components/skills/Skills'
import Footer from '../components/footer/Footer';
import styles from './main.module.css'
import Projects from '../components/Projects/Projects'

function Main() {

    return (
        <div className = {styles.main_area} >
        <MyNavbar/>
        <Presenter/>
        <Projects/>
        {/* <Skills/> */}
        </div>
    )

}

export default Main