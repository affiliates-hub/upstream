import React, { createContext, useEffect, useState } from 'react';
import app from '../../assets/Firebase_sdk';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
export const contextProvier = createContext(null)
const Provider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [refetch, setRefetch] = useState(false)
    const [userRole, setUSerRole] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();
    const emailSignUP = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    const updateuser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    const logOut = () => {
        return signOut(auth)
    }
    let authData = {
        user, setUser, userRole, loading, refetch, setRefetch, emailSignUP, emailLogIn, signInWithGoogle, updateuser, logOut
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, newUser => {
            setUser(newUser);
            if (newUser) {
                fetch('').then(res => res.json()).then(data => {
                    setUSerRole(data)
                    setLoading(false);
                })
            }
        })
        return () => unSubscribe();
    }, [])





    return (
        <contextProvier.Provider value={authData}>
            {children}
        </contextProvier.Provider>
    );
};

export default Provider;