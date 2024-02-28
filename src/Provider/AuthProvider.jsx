/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../friebase/friebase.config";





export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //  Create user 

    const createUser  = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // login User  

     const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword( auth, email, password)
     }


    //  logOut User 

    const logOut = () => { 
        setLoading(true);
        return signOut(auth)
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser);
            console.log('current user' , currentUser);
            setLoading(false);
        })
        return ()  => {
           return unsubscribe()
        }
    }, [])





    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut


    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;