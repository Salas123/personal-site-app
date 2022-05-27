import React from "react";
import './IntroSection.css';

const IntroSection = () => {
    return(
        <div className={"IntroSectionContainer"}>
            <div className={"topContainer"}>
                <div className={"leftContainer"}>
                    <h1 className={"fullNameHeader"}>Jesus Salas II</h1>
                    <p  className={"personParaDescriptor"}>Software Engineer / Photographer</p>
                </div>
                <div className={"rightContainer"}>
                    <img className={'profilePic'} src={'artifacts/profilePic.png'} alt="profile pic"></img>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
