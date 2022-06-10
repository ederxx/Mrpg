import React, {useState} from 'react';
import {db, auth} from '../firebase';

import { Button} from '@material-ui/core';
import Modal from '../components/modal'


function ButtonModal () {
    const [ openModal, setOpenModal] = useState(false);

    const[msg] = useState(' ')
        async function ButtonModal(e) {
            e.preventDefault()
            const { uid, photoURL} = auth.currentUser
            await db.collection('messages').add({
                text: msg,
                photoURL,
                uid,
    
    
            })
         
    
        
  
    
        
        }
     return (
         <div>
             <form onSubmit={ButtonModal}>
                 
                <div className="sendRoll">
                 <Button className="openModalBtn" onClick={()=>{setOpenModal(true);}} type="submit">Rolar</Button>
                 {openModal && <Modal  closeModal ={setOpenModal} /> }
                </div>
             </form>
        </div>
     )


}

export default ButtonModal;