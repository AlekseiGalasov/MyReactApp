import { useState, useEffect } from 'react';


export function useAuth(authFirebase) {
    const [authentication, setAuthentication] = useState(null);
    
    const auth = authFirebase();
    const provider = new authFirebase.GoogleAuthProvider();

    const logIn = () => auth.signInWithPopup(provider);
    const logOut = () => auth.signOut()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                setAuthentication(user);
            } else {
                setAuthentication(null);
            }
        })
    })

    return {authentication, logIn, logOut};
}