import React from 'react';
import firebase from 'firebase';
import { auth } from '../firebase';
import { Button } from '@material-ui/core';


function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider).then(function(result) {
         // This gives you a Google Access Token.
         var token = result.credential.accessToken;
         // The signed-in user info.
         var user = result.user;
        });
            }
            return (
                <div className="signIn">
                    <Button className="buttonSignIn" onClick={signInWithGoogle}>Faça o Login com o Google</Button>
            
                </div>
            )

        }
        export default SignIn;