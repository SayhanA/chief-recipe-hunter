import React, { createContext, useState } from 'react';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [resId, setResId] = useState(null);
    
    const user = { name: "khalid"}

    const likedRecipes = (props) => {
        setResId(props)
    }

    const info = {
        user,
        resId,
        likedRecipes,
        
    }
    
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;