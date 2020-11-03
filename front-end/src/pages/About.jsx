import React from 'react'
import MyNavbar  from '../components/navBar/myNavbar';
import Title from '../components/title/Title';
import Section from '../components/section/Section'
import Presenter from '../components/presenter/Presenter'
import Footer from '../components/footer/Footer';


function About() {

    const CStxt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    const WDtxt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
  
    return (
        <div className="App">
        <MyNavbar/>
        <Title title = {"I'm a:"} />
        <Section fontTitle1 = {"'Indie Flower', cursive"} imgHeight1 = {"300px"} imgWidth1 = {"300px"} title1 = {"Computer Science student:"} imgSrc1 = {"/ucd.png"} text1 = {CStxt}
                 fontTitle2 = {"'Montserrat', sans-serif;"} imgHeight2 = {"300px"} imgWidth2 = {"450px"} title2 = {"Web Developer:"} imgSrc2 = {'/laptop.jpg'} text2 = {WDtxt}
        /> 
        <Title title = {"I'm part of:"}/>
        <Section fontTitle1 = {"'Gugi', cursive"} imgHeight1 = {"300px"} imgWidth1 = {"450px"} title1 = {"Quantum Computing Club:"} imgSrc1 = {"/quantumcom.jpg"} text1 = {CStxt}
                 fontTitle2 = {"'Cinzel Decorative', cursive"} imgHeight2 = {"300px"} imgWidth2 = {"450px"} title2 = {"Computer sci Club:"} imgSrc2 = {'/csClub1.jpg'} text2 = {WDtxt}
        />
        <Title title = {"I like:"}/> 
        <Section fontTitle1 = {"'Playball', cursive"} imgHeight1 = {"300px"} imgWidth1 = {"300px"} title1 = {"Tennis:"} imgSrc1 = {"/tennis.jpg"} text1 = {CStxt}
                 fontTitle2 = {"'Press Start 2P', cursive"} imgHeight2 = {"300px"} imgWidth2 = {"450px"} title2 = {"video games:"} imgSrc2 = {'/videogames.jpg'} text2 = {WDtxt}
        /> 
        <Title title = {"I have experience in stem as:"}/>
        <Section fontTitle1 = {"'Sacramento', cursive"} imgHeight1 = {"300px"} imgWidth1 = {"300px"} title1 = {"Biology Tutor:"} imgSrc1 = {"/biology.jpg"} text1 = {CStxt}
                 fontTitle2 = {"'Cairo', sans-serif"} imgHeight2 = {"300px"} imgWidth2 = {"450px"} title2 = {"Math tutor:"} imgSrc2 = {'/math.jpg'} text2 = {WDtxt}
        /> 
        <Footer/>
        </div>
      );

}

export default About