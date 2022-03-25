import React from 'react';
import firebase from 'firebase';
import { auth } from '../firebase';
import { Button } from '@material-ui/core';


function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            }
            return (
                <div className="signIn">
                    <Button className="buttonSignIn" onClick={signInWithGoogle}>Faça o Login com o Google</Button>
            
                </div>
            )

        }
        export default SignIn;