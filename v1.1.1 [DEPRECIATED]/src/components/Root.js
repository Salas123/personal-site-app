import React from "react";
import Navbar from "./Navbar/Navbar";
import IntroSection from "./IntroSection";
import AboutMeSection from "./AboutMeSection";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";
import './Root.css';

const Root = () =>{
    return(
        <div className='root-container'>
            <Navbar/>
            <img alt='port-humeme-background' src='/images/port_humeme.png'/>
            <IntroSection/>
            <AboutMeSection/>
            <ProjectsSection/>
            <ContactMeSection/>
        </div>
    );
}

export default Root;