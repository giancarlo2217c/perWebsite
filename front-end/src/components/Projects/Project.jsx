import React from 'react';
import { useEffect, useRef } from 'react';
import styles from  './Projects.module.css';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Project(props) {

    let image = useRef(null)

    useEffect( ()=> {
        const renImg = image.current;
        gsap.fromTo(renImg, 1.5,
            {
                scaleX: 1, transformOrigin: "left"
            }, 
            {
                scaleX: 0, transformOrigin: "right"
            } 
        );
    }, [])

    return (
        <div className = {styles.container}>
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