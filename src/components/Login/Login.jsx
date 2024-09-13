import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const Login = () => {
    // user log in
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const LoggedInUser = result.user;
                console.log(LoggedInUser);
                setUser(LoggedInUser);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handleSingOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            {
                user ?
                    <button onClick={handleSingOut}>SignOut</button> :
                    <button onClick={handleGoogleSingIn}>Google Login</button>

            }
            {user &&
                <div>
                    <h3>User: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;