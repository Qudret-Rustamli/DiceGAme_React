import React from 'react';
import './Die.css'
export default function Die({face,rolling}) {
  return (
    <>
        <i className={`die fas fa-dice-${face} ${rolling && "shaking"}`}/>
    </>

  );
}
