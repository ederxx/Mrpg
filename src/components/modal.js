import './modal.css'
import * as React from 'react';
import SendRoll from './SendRoll';


function Modal ({ closeModal }) {
    return (
        <div className="modalBackground">
        <div className="modalContainer">
        <div className='titleCloseBtn'>
       </div>
        <div className='title'>
            <h1>Escolha o Dado</h1>
                </div>
          
        <div className='body'>

      <button onClick={ SendRoll  } id='cancelBtn'> Rolar </button> <select name="Dados" id="dados">
  <option value="D4">D4</option>
  <option value="D6">D6</option>
  <option value="D8">D8</option>
  <option value="D10">D10</option>
  <option value="D12">D12</option>
  <option value="D20">D20</option>
  <option value="D100">D100</option>

</select>
     
 

        </div>
  
        <div className='footer'>
            <button onClick={() => closeModal (false)} id='cancelBtn'> Cancel </button>
        </div>
        </div>
        </div>
        );
}

export default Modal;