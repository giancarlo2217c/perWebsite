import React from 'react';
import './App.css';
import MyNavbar  from './components/navBar/myNavbar';
import Title from './components/title/Title';
import Section from './components/section/Section'
import Presenter from './components/presenter/Presenter'
import Footer from './components/footer/Footer';
import About from './pages/About';
import Main from './pages/main';

import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';


function App() {

  const CStxt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
  const WDtxt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "

  return (
    <div className="App">
    {/* <About/> */}
    <Main/>
    </div>
  );
}

export default App;
