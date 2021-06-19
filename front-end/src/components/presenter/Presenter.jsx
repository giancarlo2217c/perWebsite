import React from 'react'
import styles from './Presenter.module.css'
import MyNavbar  from '../navBar/myNavbar';
import background from './blackwhite.jpg'
import { useRef, useEffect, useState } from 'react'
import {TweenMax, Power3} from 'gsap'

function Presenter() {

    let text = useRef(null)
    let titleContainer = useRef(null)

    useEffect(() => {

        TweenMax.to(
            text,
            1,
            {
                opacity: 1,
                y: 100,
                ease: Power3.easeOut
            }
        )

        TweenMax.from(
            titleContainer,
            1,
            {
                opacity: 1,
                x: -100,
                ease: Power3.easeOut
            }
        )
        
    }, [])

    return ( 
    <div className = {styles.presenter}>
        <MyNavbar/>
        <div className = {styles.titleContainer} ref = { el => { titleContainer = el } } >
            <div className = {styles.display} />
            <div className = {styles.text} ref = { el => { text = el } } >
                <p id = {styles.hey} >Hey, I'm Gian</p>
                <p id = {styles.im} >A computer science student <br/> and web developer</p>
            </div>
        </div>
    </div>
    )
}

export default Presenter
