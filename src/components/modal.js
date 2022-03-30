import React from 'react';
import './modal.css'


function Modal ({ closeModal }) {
    return (
        <div className="modalBackground">
        <div className="modalContainer">
        <div className='titleCloseBtn'>
        <button onClick={() => closeModal (false)}> x </button>
       </div>
        <div className='title'>
            <h1>Escolha o Dado</h1>
        </div>
        <div className='body'>
            <p> AQUI VAO OS DADOS</p>
        </div>
        <div className='footer'>
            <button onClick={() => closeModal (false)} id='cancelBtn'> Cancel </button>
        </div>
        </div>
        </div>
        );
}

export default Modal;