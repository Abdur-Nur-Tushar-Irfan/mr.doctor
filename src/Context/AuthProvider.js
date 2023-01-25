import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../Firebase/firebase.init'


export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading,setLoading]=useState(true)

    //FOR CREATE USER
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //FOR SIGN IN
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //FOR LOGOUT
    const logOut=()=>{
        return signOut(auth)
    }
    //FOR GOOGLE SIGN IN
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    //FOR UPDATE USER
    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    //FOR USER OBSERVER
    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubsribe();
        }
    }, [])
    const authInfo = {
        createUser,
        signIn,
        user,
        logOut,
        updateUserProfile,
        loading,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;