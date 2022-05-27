import React from 'react';
import './AboutMeSection.css';
import ButtonIconComponent from "./Button/ButtonIconComponent";
import {API} from 'aws-amplify';


function AboutMeSection(){
    async function download_resume() {

        let windowInstance = window.open();

        await API.get('DownloadResumeAPI', '/downloadresume',{})
            .then(res =>{
                console.log(res);
                windowInstance.location = res.result})
            .catch(err =>
            {
                console.error(err);
                windowInstance.close();
            });

    }

    return(
        <div className={'AboutMeSectionContainer'}>
            <div className={'AboutMeTopContainer'}>
                <div className={'AboutMeLeftContainer'}>
                    <div className={'AboutMeTextWrapper'}>
                        <h1 className={'AboutMeParagraphHeader'}>Hey there,</h1>
                        <p className={'AboutMeParagraph'}>
                            My name is Jesus Salas II. I made this page initially as a resume buffer, however, upon further reflection I realize I
                            have the chance to create a platform around myself. I am proud to say that I graduated with my bachelors of science in computer science from
                            UC Riverside and along with graduating I worked on some great embedded systems projects as
                            well as worked on some non-CS work like photography,cl and video editing. As I'm slowly progressing in my career with Software Engineering,
                            I am also still working on other side projects.
                        </p>
                        <p className={'AboutMeParagraph'}>
                            I love to create and I love the collaborative process that comes with it. I find the idea of a shared vision and optimism to create
                            something that generates inspiration in others to do same to be a very rewarding endeavor. My goal in this platform is to hopefully at least get
                            close to that endeavor and to hopefully meet with others down the line and collaborate on shared projects.
                        </p>
                    </div>
                </div>
                <div className={'AboutMeRightContainer'}>
                    <h1 className={'AboutMeHeader'}>About Me</h1>
                    <div className={'ButtonHolder'}>
                        <ButtonIconComponent buttonText={'Download Resume'} src={'artifacts/file-download-icon.svg'} alt={'download icon'} onClick={download_resume}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMeSection;
