import React from "react";
import './CardButtonComponent.css';
import CardButton from "../Button/CardButton";

const CardButtonComponent = (props) =>{
    return(
        <div className={'CardContainer'}>
            <div className={'cardOverlay'}/>
            <div className={'cardOverlayTextWrapper'}>
                {props.children}
                <CardButton buttonText={props.buttonText} link={props.githubUrl}/>
            </div>
            <div className={'imageCardContainer'}>
                <img src={props.photoUrl} alt={props.alt}/>
            </div>
        </div>
    );
}


export default CardButtonComponent;
