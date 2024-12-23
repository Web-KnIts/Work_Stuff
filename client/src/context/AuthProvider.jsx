import { useContext,createContext,useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, Db } from "../Firebase/firebase";
import { doc, getDoc } from "firebase/firestore";


const AuthContext = createContext();

const AuthContextProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const [userLoggedIn,setUserLoggedIn] = useState(false);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,initializeUser);
        return unsubscribe;
    },[])

    async function initializeUser(value) {
            if(value)
            {
                const docRef =  doc(Db,"User",value.uid) 
                const docSnap = await getDoc(docRef);
                if(docSnap.exists())
                {
                    setUser(docSnap.data());
                    setUserLoggedIn(true)
                }
            }
            else
            {
                setUser(null);
                setUserLoggedIn(false)
            }
    }
    console.log(user,userLoggedIn);
    const transport = {user,userLoggedIn}
    return (
        <AuthContext.Provider value={transport}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;


export const useAuth = ()=>{
    return useContext(AuthContext);
}