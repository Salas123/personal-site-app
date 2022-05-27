import React from 'react';
import './AboutMeSection.css';

const AboutMeSection = () =>{
    return(
        <div className='about-me-container' id="AboutMeSection">
            <h1 className='about-me-header'>ABOUT ME</h1>
            <div className='container-divider'/>
            <div className='about-me-text-container'>
                <p>
                    I am a son of two Mexican immigrants and both of which worked hard to give my brothers and I a better future than they could have imagined for themselves. I grew up both in California and Minnesota.
                    In my time in academics, some of my proudest accomplishments include receiving a scholarship for Latinos In Technology and
                    attending/graduating from UC Riverside with a Bachelors in Science: Computer Science. While I have a background in engineering, I hold my
                    short videos and photography very close to me as I am always trying to create and express myself through these different mediums.
                </p>
            </div>
        </div>
    );
}


export default AboutMeSection;