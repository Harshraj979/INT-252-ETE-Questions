/* eslint-disable react-refresh/only-export-components */
// Implement an authentication context that  provides login,log out,isAuthenticated values to the entire APP use UseContext to allow any component to access any authentication state

import {createContext,useState,useContext} from "react";
const AuthContext=createContext();

export function AuthProvider({children}){
    const [isAuthenticated,setIsAuthenticated]=useState(false);

    const login=()=>{
        setIsAuthenticated(true);
    }
    const logout=()=>{
        setIsAuthenticated(false);
    }

    return(
        <AuthContext.Provider value={{login,logout,isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext);
}