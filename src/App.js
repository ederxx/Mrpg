import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'firebase/auth';
import 'firebase/firestore';


function App() {
  const [user] = useAuthState(auth)
  return (
    <>
   {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default App;
