import React from 'react'
import styles from './Presenter.module.css'
import MyNavbar  from '../navBar/myNavbar';
function Presenter() {

    return ( 
    <div className = {styles.presenter}>
        <MyNavbar/>
        <div className = {styles.title}>
            <h1>Computer Science Student</h1>
            <h1>&</h1>
            <h1>Web Developer</h1>
        </div>
    </div>
    )
}

export default Presenter
