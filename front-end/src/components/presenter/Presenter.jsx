import React from 'react'
import { Grid, Box, Button, Paper } from '@material-ui/core';
import Carousel from 'react-bootstrap/Carousel'
import styles from './Presenter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Laptop from '@material-ui/icons/Laptop';
function Presenter() {

    return ( 
    <div className = {styles.presenter}>
        <div className = {styles.title}>
            <h1>Computer Science Student</h1>
            <h1>&</h1>
            <h1>Web Developer</h1>
        </div>
    </div>
    )
}

export default Presenter
