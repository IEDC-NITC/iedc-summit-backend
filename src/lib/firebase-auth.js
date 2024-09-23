import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-setup"
import { authUser } from "./store";


export async function signInWithCreds(email, password) {

    let res = false;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
            authUser.set(user)
            res = true
            // ...
        })
        .catch((error) => {
            console.log(error)
            authUser.set(null)
            const errorCode = error.code;
            const errorMessage = error.message;
            res = false
        });
    return res;
}