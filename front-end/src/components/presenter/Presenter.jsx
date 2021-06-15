import React from 'react'
import styles from './Presenter.module.css'
import MyNavbar  from '../navBar/myNavbar';
import background from './blackwhite.jpg'
import { useRef, useEffect } from 'react'
import {TweenMax, Power3} from 'gsap'

function Presenter() {

    let title = useRef(null)
    let backgroundCtn = useRef(null)

    useEffect(() => {
        TweenMax.to(
            title,
            1,
            {
                opacity: 1,
                y: 100,
                ease: Power3.easeOut
            }
        )

        TweenMax.from(
            backgroundCtn,
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
        <div className = {styles.titleContainer} ref = {el => {backgroundCtn = el}} >
            <div id = {styles.backgroundCtn} >
                <div id = {styles.opaque} />
                <img id = {styles.background} src = {background} />
            </div>
            <div className = {styles.title} ref = {el => {title = el}} >
                <div id = {styles.leftSpace} />
                <div id = {styles.rightSpace} >
                    <div id = {styles.hey} >Hey there!</div>
                    <div id = {styles.im} >I'm Gian Carlo, a web developer <br/>and computer sience student</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Presenter
