import './modal.css'
import React, { useState } from 'react';
import { db, auth } from '../firebase';
import firebase from 'firebase';



function Modal({ closeModal}) {
  
    return (

        <div className="modalBackground">
            <div className="modalContainer">
                <div className='titleCloseBtn'>
                </div>
                <div className='title'>
                    <h1>Escolha o Dado</h1>
                </div>
                        <div className='body'>
         
                    <select name="Dados" onChange={e => alert(e.target.value)} id="dados">
                        <option value="4">D4</option>
                        <option value="6">D6</option>
                        <option value="8">D8</option>
                        <option value="10">D10</option>
                        <option value="12">D12</option>
                        <option value="20">D20</option>
                        <option value="100">D100</option>

                    </select>
                </div>

                <div className='footer'>
                    <button onClick={() => closeModal(false)} id='cancelBtn'> Cancel </button>
                </div>
            </div>
        </div>
    );



    




}




export default Modal;
