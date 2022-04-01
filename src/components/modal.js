import './modal.css'
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { db, auth } from '../firebase';
import firebase from 'firebase';


function Modal({ closeModal, SendRoll }) {
    return (

        <div className="modalBackground">
            <div className="modalContainer">
                <div className='titleCloseBtn'>
                </div>
                <div className='title'>
                    <h1>Escolha o Dado</h1>
                </div>

                <div className='body'>

                    <button onClick={() => SendRoll()} id='cancelBtn'> Rolar </button>
                    <select name="Dados" onChange={e => SendRoll(e.target.value)} id="dados">
                        <option value="4">D4z</option>
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
function SendRoll(dado) {

    const [msg, setMsg] = useState(' ')
    setMsg(Math.floor(Math.random() * dado + 1))
    async function SendRoll(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()

        })

       // scroll.current.scrollIntoView({ behavior: 'smooth' })



    }
    return (
        <div>
            <form >

                <div className="sendRoll">
                    <Button className="sendRoll" onClick={() => SendRoll()} type="button">Rolar</Button>

                </div>
            </form>
        </div>
    )




}




export default Modal;
