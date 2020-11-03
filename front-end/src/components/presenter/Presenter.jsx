import React from 'react'
import ArrowIcon from "@material-ui/icons/ArrowUpward"
import ArrowDIcon from "@material-ui/icons/ArrowDownward"
import styles from './Presenter.module.css'


function Presenter() {
    return ( 
    <div className = {styles.presenter}>
        <ArrowIcon className = {styles.arrow} style= {{fontSize: 80}} />
        <h1 className = {styles.projects} > contact me! </h1>

        <div className = {styles.titleContainer}> 
        <h1> Hello, my name is Gian Carlo</h1>
        </div>

        <ArrowDIcon className = {styles.arrowD} style= {{fontSize: 80}} />
    </div>
    )
}

export default Presenter
