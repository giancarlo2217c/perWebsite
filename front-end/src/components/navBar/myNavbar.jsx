import React from 'react';
import styles from './Navbar.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';

 function MyNavbar() {

    return (
            <div className = {styles.navbar}>
                
                <div className = {styles.navigators} >
                   <a href = "#projects" > <h2> Projects </h2> </a>
                   <a href = "#about" > <h2> About </h2> </a> 
                   <a href = "#Skills"> <h2> Skills </h2> </a>
                   <a href = "#Contact"> <h2> Contact </h2> </a>
                </div>
                <div className = {styles.blurry} ></div>
            </div>            
    )
}

export default MyNavbar