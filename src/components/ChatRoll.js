import React, { useState, useEffect} from 'react';
import {db, auth} from '../firebase';

function ChatRoll() {
  
const [dado, setDado ]=  useState([])

    
useEffect(() => {
    db.collection('dados').orderBy('createdAt').limit(1000).onSnapshot (snapshot => {
        setDado(snapshot.docs.map(doc => doc.data()))
     
      
})

}, [])
return(
    <div className="msgs">
{dado.map(({idx, dados, photoURL,uid}) =>(
    <div>
    <div key={idx} className={`msg ${uid === auth.currentUser.uid ? 'sent': 'received'}`}>
         <img src={photoURL} alt="" />
         <p>{dados}</p>
     </div>
     </div>
 ))}
 </div>
)
}
export default ChatRoll;