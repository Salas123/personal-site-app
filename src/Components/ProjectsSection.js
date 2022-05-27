import React from "react";
import './ProjectsSection.css';
import CardComponent from "./Cards/CardComponent";
import CardButtonComponent from "./Cards/CardButtonComponent";

const ProjectsSection = () =>{




    return(
        <div className={'ProjectsSectionContainer'}>
            <div className={'ProjectsBoxContainer'}>
                <div className={'ProjectsTopBoxContainer'}>
                    <h1 className={'ProjectsHeader'}>Projects</h1>
                </div>
                <div className={'ProjectsMiddleBoxContainer'}>
                    <h2 className={'ProjectsSubHeader'}>Photography</h2>
                    <ul className={'ProjectsListWrapper'}>
                        <li className={'ProjectsElement'}><CardComponent photoUrl={'artifacts/brooklyn-apts1.png'} alt={'apartments in brooklyn'} buttonText={'Full Image'}>Location: Brooklyn, NYC. Camera: Sony Alpha 6000.</CardComponent></li>
                        <li className={'ProjectsElement'}><CardComponent photoUrl={'artifacts/nyc-apartments1.png'} alt={'apartments in nyc'} buttonText={'Full Image'}> Location: Manhattan, NYC. Camera: Sony Alpha 6000.</CardComponent></li>
                        <li className={'ProjectsElement'}><CardComponent photoUrl={'artifacts/nyc-street-art.png'} alt={'mural in the nyc street'} buttonText={'Full Image'}> Location: Manhattan, NYC. Camera: Sony Alpha 6000.</CardComponent></li>
                        <li className={'ProjectsElement'}><CardComponent photoUrl={'artifacts/sheep-england.png'} alt={'sheep near stone hedge'} buttonText={'Full Image'}>Location: Stone Hedge, England. Camera: Sony Alpha 6000.</CardComponent></li>
                        <li className={'ProjectsElement'}><CardComponent photoUrl={'artifacts/barcelona-streets.png'} alt={'streets of barcelona'} buttonText={'Full Image'}> Location: Barcelona, Spain. Camera: Sony Alpha 6000.</CardComponent></li>
                        <li className={'ProjectsElement'}><CardComponent photoUrl={'artifacts/barcelona-overview.png'} alt={'overview of Barcelona'} buttonText={'Full Image'}> Location: Barcelona, Spain. Camera: Sony Alpha 6000.</CardComponent></li>
                    </ul>
                    <h2 className={'ProjectsSubHeader'}>Engineering</h2>
                    <ul className={'ProjectsListWrapper'}>
                        <li className={'ProjectsElement'}><CardButtonComponent photoUrl={'artifacts/smartTripodApp.png'} alt={'virtual snapshot of ui'} buttonText={'Github Repo'} githubUrl={'https://github.com/Salas123/CS179J-Team10'}> Project: Smart Tripod. Purpose: Wirelessly Controlling How You Capture Photos </CardButtonComponent></li>
                        <li className={'ProjectsElement'}><CardButtonComponent photoUrl={'artifacts/scheduler.png'} alt={'scheduler initial ui'} buttonText={'Github Repo'} githubUrl={'https://github.com/Salas123/Medical-Scheduler'}> Project: Scheduler. Purpose: Optimizing Schedules for the Emergency Room Department </CardButtonComponent></li>

                    </ul>
                </div>
                <div className={'ProjectsBottomBoxContainer'}>

                </div>
            </div>

        </div>
    );
}


export default ProjectsSection;
