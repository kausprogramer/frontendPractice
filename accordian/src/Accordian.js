import React from 'react'
import './Accordian.css'
import { useState } from 'react'

const Accordian = () => {
    const [isOpen , SetIsOpen]= useState(false);
    function openHandle(){
        if(isOpen){
            SetIsOpen(false);
        }
        else{
            SetIsOpen(true);
        }
    }
  return (
    <div className='accordianContainer'>
        <div onClick={()=>{openHandle();}} 
        className='accordianHeader'>
            <h2>Click me</h2>
            {isOpen === false && <p className='plus'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
<path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
</svg></p>}
{isOpen === true && <img className='minus' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nO3PAQkAAAgEse9fWksIimxwAS4BAAAAgL9quTFvRgAAAAAghzRorz/Bir/K+QAAAABJRU5ErkJggg=="></img>}
        </div>
        {isOpen && <div className='accordianBody'>
            <p>
            This is Accordian Body.<br/>
            It will collapse when you click the header again.<br/>
            This is a very impoertant component.<br/>
            Accordian is also an instrument which compress and again getd to same size to produce music.<br/>
            </p>
        </div> }
    </div>
  )
}

export default Accordian