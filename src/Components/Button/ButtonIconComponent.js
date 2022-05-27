import React from "react";
import './ButtonIconComponent.css';

const ButtonIconComponent = (props) => {
  return(
      <div className={"buttonContainer"} onClick={props.onClick}>
          <div className={"buttonTextContainer"}>
              <p className={"buttonText"}>{props.buttonText}</p>
          </div>
          <div className={"buttonIconContainer"}>
              <img className={'buttonIcon'} src={props.src} alt={props.alt}/>
          </div>
      </div>
  );
}

export default ButtonIconComponent;
