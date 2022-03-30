import React, {useState} from 'react';
import {db, auth} from '../firebase';
import firebase from 'firebase';
import { Button} from '@material-ui/core';
import Modal from '../components/modal'


function SendRoll ({scroll}) {
    const [ openModal, setOpenModal] = useState(false);
    const[msg, setMsg] = useState(' ')

    async function SendRoll(e) {
        e.preventDefault()
        const { uid, photoURL} = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()

        })
        setMsg( Math.floor(Math.random() * 6+1))
        scroll.current.scrollIntoView({ behavior: 'smooth' })


    
    }
     return (
         <div>
             <form onSubmit={SendRoll}>
                 
                <div className="sendRoll">
                 <Button className="openModalBtn" onClick={()=>{setOpenModal(true);}} type="submit">Rolar</Button>
                 {openModal && <Modal  closeModal ={setOpenModal} /> }
                </div>
             </form>
        </div>
     )


}

export default SendRoll;