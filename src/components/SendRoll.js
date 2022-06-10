import React, {useState} from 'react';
import {db, auth} from '../firebase';
import firebase from 'firebase';





function SendRoll({scroll}){

    const [dado, setDado] = useState( )
    async function SendRoll(ex) {
        ex.preventDefault()
        console.log(dado)
        const { uid, photoURL } = auth.currentUser
  

        await db.collection('dados').add({
            
           dados: dado,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()

        })
        setDado(`Rolou um D${dado} e tirou  ` + Math.floor(Math.random() * dado + 1))
        scroll.current.scrollIntoView({ behavior: 'smooth' })




    }
    return (
        <div>
                  <form onSubmit={SendRoll}>

                <div className="sendRoll">
                <button onClick={() => SendRoll()} type="submit" id='cancelBtn'> Rolar </button>
                    <select name="Dados" onChange={ex => setDado(ex.target.value)} id="dados">
                        <option value ="4">D4</option>
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