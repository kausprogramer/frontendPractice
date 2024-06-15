import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div className="App">
      <h1>Modal Use</h1>
      <button className='clickMe' onClick={()=>{setOpenModal(true)}}>Click me</button>
      {openModal && <Modal modalChange = {setOpenModal}/>}
    </div>
  );
}

export default App;
