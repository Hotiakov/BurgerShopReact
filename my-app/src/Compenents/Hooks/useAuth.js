import { useEffect, useState } from "react";

export const useAuth = (authFirebase) => {
    const [authentication, setAuthentication] = useState(null);
    const provider = new authFirebase.GoogleAuthProvider();
    const auth = authFirebase();

    const logIn = () => auth.signInWithPopup(provider);
    const logOut = () => auth.signOut()
        .then()
        .catch(err => console.error(err));
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){
                setAuthentication(user);
            } else {
                setAuthentication(null);
            }
        })
    }, [auth, authentication]);

    return {authentication, logIn, logOut};
}