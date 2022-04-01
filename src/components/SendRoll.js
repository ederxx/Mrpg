import React, {useState} from 'react';
import {db, auth} from '../firebase';
import firebase from 'firebase';
import { Button} from '@material-ui/core';




function SendRoll(){

    const [msg, setMsg] = useState(' ')
    async function SendRoll(e) {
        e.preventDefault()
        console.log(e)
        const { uid, photoURL } = auth.currentUser
        setMsg(Math.floor(Math.random() * SendRoll + 1))
        await db.collection('messages').add({
            
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()

        })
       
  
        //scroll.current.scrollIntoView({ behavior: 'smooth' })




    }
    return (
        <div>
                  <form onSubmit={SendRoll}>

                <div className="sendRoll">
                <button onClick={() => SendRoll()} id='cancelBtn'> Rolar </button>
                    <select name="Dados" onChange={e => SendRoll(e.target.value)} id="dados">
                        <option value="4">D4</option>
                        <option value="6">D6</option>
                        <option value="8">D8</option>
                        <option value="10">D10</option>
                        <option value="12">D12</option>
                        <option value="20">D20</option>
                        <option value="100">D100</option>

                    </select>
                

                </div>
            </form>
        </div>
    )


}

export default SendRoll;