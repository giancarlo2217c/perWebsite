import React from 'react'
import styles from './Presenter.module.css'
import MyNavbar  from '../navBar/myNavbar';
function Presenter() {

    return ( 
    <div className = {styles.presenter}>
        <MyNavbar/>
        <div className = {styles.titleContainer}>
            <div className = {styles.title}>
                <h1> Gian Carlo Lambert </h1>
                <h3>Computer Science Student</h3>
                <h3>&</h3>
                <h3>Web Developer</h3>
            </div>
        </div>
    </div>
    )
}

export default Presenter
