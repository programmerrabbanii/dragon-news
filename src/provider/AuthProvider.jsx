import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    console.log(user);

    const createUSer=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signinUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOutUser=()=>{
        return signOut(auth)
    }

    const authInfo={
        user,
        setUser,
        createUSer,
        signinUser,
        logOutUser
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return()=>{
            unsubscribe()
        }
    },[])
   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;