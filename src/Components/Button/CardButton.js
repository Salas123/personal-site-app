import React from "react";
import './CardButton.css';

const CardButton = (props) => {
    async function openLink(){
        await window.open(props.link);
    }

  return(
      <div className={'CardButtonContainer'} onClick={e => openLink()}>
          <div className={'CardButtonWrapper'}><p className={'CardButtonText'}>{props.buttonText}</p></div>
      </div>
  );
}


export default CardButton;
