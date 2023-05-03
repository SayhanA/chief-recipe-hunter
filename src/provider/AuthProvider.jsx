import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInAnonymously, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [resId, setResId] = useState(null);
    
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

    const handleSignOut = () => {
        signOut(auth);
    }

    // Google SignIn
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // GitHub SignIn
    const handleGitHubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
        })
        return () => unsubscribe();
    },[])

    const info = {
        user,
        resId,
        likedRecipes,
        signUp,
        singIn,
        handleSignOut,
        handleGoogleSignIn,
        handleGitHubSignIn,

    }
    
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;