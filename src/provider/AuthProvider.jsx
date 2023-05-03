import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInAnonymously, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [resId, setResId] = useState(null);
    
    const user = { name: "khalid"}

    const likedRecipes = (props) => {
        setResId(props)
    }


    // Firebase user authorization
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            
        })
    },[])

    const info = {
        user,
        resId,
        likedRecipes,
        signUp,
        singIn,
        
    }
    
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;