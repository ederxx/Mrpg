import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";
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
        setMsg(Math.floor(Math.random() * {selectedValue}))
        scroll.current.scrollIntoView({ behavior: 'smooth' })


    
    }

const dados = ["D3", "D4", "D6", "D8", "D10", "D12", "D20", "D100"];

SimpleDialogProps ({
    open: boolean,
    selectedValue: string,
});
  
 

function SimpleDialog({ SimpleDialogProps}) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = () => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Escolha o Dado a jogar</DialogTitle>
      <List sx={{ pt: 0 }}>
        {dados.map((dados) => (
          <ListItem
            button
            onClick={() => handleListItemClick(dados)}
            key={dados}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dados} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

 function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(dados[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
    <form onSubmit={SendRoll}>
       <div className="sendRoll">
       <Button className="buttonSendRoll" type="submit">Rolar</Button>
       </div>
    </form>

      
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
}
