import React, {useState} from 'react';
import {db, auth} from '../firebase';
import firebase from 'firebase';
import { Button} from '@material-ui/core';



function SendRoll ({scroll}) {

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
                <Button className="sendRoll" type="submit">Rolar</Button>
            
               </div>
            </form>
       </div>
    )


}

export default SendRoll;