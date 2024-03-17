import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Components/Utils/Firebase/firebase.config";


export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
 

    const info = {
        user,
        loading,
        createUser,
        singIn,

    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setLoading(false)
                console.log('Current logged in user from auth state', currentUser?.email);
            }
        })

        return ()=>{
            unsubscribe()
        }
    },[])


    return (
       <AuthContext.Provider value={info}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;