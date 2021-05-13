import React from 'react'
import styles from './Presenter.module.css'
import MyNavbar  from '../navBar/myNavbar';
function Presenter() {

    return ( 
    <div className = {styles.presenter}>
        <MyNavbar/>
        <div className = {styles.titleContainer}>
            <div className = {styles.title}>
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
