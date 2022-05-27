import React from "react";
import './ProjectsSection.css';
import Cards from "./CardComponents/Cards";


const ProjectsSection = () => {

    return(
        <div className='projects-section-container' id='ProjectsSection'>
            <h1 className='projects-section-header'>Projects</h1>
            <div className='container-divider'/>
            <Cards/>
        </div>
    );

}

export default ProjectsSection;