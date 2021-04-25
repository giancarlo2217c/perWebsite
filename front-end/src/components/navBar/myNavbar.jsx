import React from 'react';
import styles from './Navbar.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';

 function MyNavbar() {

    return (
            <div className = {styles.navbar}>
                <div className = {styles.logo}>
                    <h1> Gian Lambert </h1>
                </div>
                <div className = {styles.navigators} >
                    <h2> Projects </h2>
                    <h2> About </h2>
                    <h2> Skills </h2>
                    <h2> Contact </h2>
                </div>
                <div className = {styles.blurry} ></div>
            </div>            
    )
}

export default MyNavbar