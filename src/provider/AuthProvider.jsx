import React, {useEffect, useState} from 'react';
import {createContext} from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null);
   const [loading,setLoading] = useState(true);
   const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password) => {
        setLoading();
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) => {
        setLoading()
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = ()=>{
        setLoading()
       return signOut(auth);
    }
    const googleRegister = () =>{
        return signInWithPopup(auth,googleProvider);

    } 


    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
                setUser(loggedUser);
                setLoading(false)
        })
            return ()=>{
                unsubscribe()
            }
    },[]);
    
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        googleRegister
        
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;