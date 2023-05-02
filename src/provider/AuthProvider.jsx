import React, { createContext, useState } from 'react';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    
    const user = { name: "khalid"}

    const likedRecipes = (props) => {
        console.log(props)
    }

    const info = {
        user,
        likedRecipes,
    }
    
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;