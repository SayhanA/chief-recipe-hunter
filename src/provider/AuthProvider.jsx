import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInAnonymously, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [resId, setResId] = useState(null);
    const [userName, setUserName] = useState('');
    const [userPhoto, setUerPhoto] = useState('');
    const [loading, setLoading] = useState(true);

    const likedRecipes = (props) => {
        setResId(props)
    }


    // Firebase user authorization
    const signUp = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singIn = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleSignOut = () => {
        setLoading(false);
        signOut(auth);
    }

    // Profile updated!

    const updateUser = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        }).then((result) => {
            
        }).catch((error) => {
    
        });
    }

   


    // Google SignIn
    const handleGoogleSignIn = () => {
        setLoading(false);
        return signInWithPopup(auth, googleProvider);
    }

    // GitHub SignIn
    const handleGitHubSignIn = () => {
        setLoading(false);
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    const info = {
        user,
        resId,
        likedRecipes,
        signUp,
        singIn,
        loading,
        handleSignOut,
        handleGoogleSignIn,
        handleGitHubSignIn,
        updateUser,

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;