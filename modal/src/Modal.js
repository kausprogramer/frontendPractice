import React from 'react'
import './Modal.css'

const Modal = (props) => {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button className='X' onClick={() => {props.modalChange(false)}}>X</button>
            <div className='title'>
            <h1> Modal</h1>
            </div>
            <div className='body'>This is a Sample modal</div>
            <div className='footer'><button className='close' onClick={() => {props.modalChange(false)}}  >Close</button></div>
        </div>
    </div>
  )
}

export default Modal