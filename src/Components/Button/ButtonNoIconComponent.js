import React from "react";
import './ButtonNoIconComponent.css';

const ButtonNoIconComponent = (props) => {
  return(
      <div className={'ButtonNoIconContainer'}>
          <div className={'ButtonNoIconWrapper'}>
              <p>{props.buttonText}</p>
          </div>
      </div>
  );
}

export default ButtonNoIconComponent;
