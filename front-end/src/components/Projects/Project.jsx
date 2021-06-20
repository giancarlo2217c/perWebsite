import React from 'react';
import { useEffect, useRef } from 'react';
import styles from  './Projects.module.css';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactDOM from 'react-dom';


function Project(props) {

    let image = useRef(null)
    
    function hide(elem) {
        gsap.set(elem, {autoAlpha: 0});
    }

    function animateFrom(elem, direction) {
        direction = direction || 1;
        var x = 0, y = direction * 100;

        if(elem.classList.contains("gs_reveal_fromLeft")) {
            x = -100;
            y = 0;
        } else if (elem.classList.contains("gs_reveal_fromRight")) {
            x = 100;
            y = 0;
        }

        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0"

        gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0 }, {
            duration: 1.25,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto"
        }  )
    }

    useEffect( ()=> {

        const renImg = image.current;
        gsap.fromTo(renImg, 3,
            {
                scaleX: 1, transformOrigin: "left"
            }, 
            {
                scaleX: 0, transformOrigin: "right"
            } 
        );

        gsap.registerPlugin(ScrollTrigger);
        console.log("nowListening")
        gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
            hide(elem);

            ScrollTrigger.create({
                trigger: elem,
                onEnter: function() { animateFrom(elem) },
                onEnterBack: function() { animateFrom(elem, -1) },
                onLeave: function() { hide(elem)}
            })
        })

    }, [])

    console.log(props.direc)



    return (
        <div className = {styles.container + " " + props.direc + " gs_reveal"}>
            <div className = {styles.left} ></div>
            <div className = {styles.content} >
                <div className = {styles.projectTitle} >{props.title}</div>
                <div className = {styles.imgCont} >
                    <div className = {styles.imgWrap}>
                        <img src = {props.imgSrc} id = {styles.pImg}></img>
                    </div>
                    <div ref = {image} className = {styles.cover}/>
                </div> 
                <p id = {styles.dbTxt}>
                    {props.desc}
                </p>
            </div>
        </div>
    )

}

export default Project