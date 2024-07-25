import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-setup"
import { authUser } from "./store";


export function signInWithCreds(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            authUser.set(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
}