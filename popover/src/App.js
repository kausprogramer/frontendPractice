
import './App.css';
import Popover from './Popover';
import React from 'react'
import { useState } from 'react';
function App() {
  const [hoverCheck , setHoverCheck] = useState(false);
  function hoverOn(){
    setHoverCheck(true);
  }
  function hoverOff() {
    setHoverCheck(false);
  }
  return (
    <div className="App">
      <h1 onMouseOver={()=>{hoverOn();}}
        onMouseOut={()=>{hoverOff();}}>Hover On Me</h1>
      {
        hoverCheck && <Popover/>}
    </div>
  );
}

export default App;
