import React from 'react'
import styles from './About.module.css'
import portrait from './portrait1.jpeg'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/src/all'
import { useRef } from 'react'
import { useEffect } from 'react'

function About() {

    let title = useRef(null)
    let text = useRef(null)
    let img = useRef(null)

    function hide(elem) {
        gsap.set(elem, {autoAlpha: 0});
    }

    function animate(elem) {

        let x = 0;
        let y = 0;

        if(elem.classList.contains("aText")) {

            x = -100

        } else if(elem.classList.contains("aTitle")) {

            y = -100

        } else if(elem.classList.contains("aImg")) {

            x = 100

        }

        elem.style.transform = "translate("+ x +"px, " + y + "px)"
        elem.style.opacity = "0"

        gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 2,
            delay: 0.5,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto"
        } )
    }   

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        let elems = [title.current, text.current, img.current]

        elems.forEach( (elem) => {
            hide(elem)

            ScrollTrigger.create({
                trigger: elem,
                onEnter: function() { animate(elem) },
                onEnterBack: function() { animate(elem) },
                onLeave: function() { hide(elem) }
            })

        } )

    }, [])


    return (
        <div id = "about" className = {styles.aboutComp}>
            <div ref = { title } className = {styles.aboutTxt + " aTitle"}>
                <h1>About</h1>
                <div  ref = { text } className = {styles.pContainer + " aText"}>
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
            <img ref = { img } className = "aImg" src = {portrait}></img>
        </div>
    )
}

export default About
