import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from './../../firebase/firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 

    const createUser = (email , password) => {

        return createUserWithEmailAndPassword (auth,email,password)
    }

    const signIn = (email,password) => {
         setLoading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth); 
    }
   
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
              
            console.log("User in Auth changed", currentUser)
            setUser(currentUser),
            setLoading(false)

        }); 

        return () => {
            unsubscribe ();
        }
    },[])
    const authInfo = { 
        user,
        loading,
        createUser, 
        logOut, 
        signIn
    
    
    
    }
    return (
        <AuthContext.Provider value = { authInfo }>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;