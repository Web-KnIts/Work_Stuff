import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth,Db } from "./firebase";
import {doc,setDoc} from 'firebase/firestore'


export const createUserUsingEmailAndPassword = async (data) => {
    console.log(data)
    let { firstName, lastName, email, password } = data;
    if(!firstName || !lastName || !email || !password)
    {
        return {
            success:false,
            message:"fields missing"
        }
    }
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);        
        if (res.user) {
            await setDoc(doc(Db, "User", res.user.uid), {
                email: email,
                firstName: firstName,
                lastName: lastName,
                role:"user"
            });
        }
        
        return {
            success: true,  
            message: "User registered successfully",
            userId: res.user.uid,
        };
    } catch (err) {
        console.error(err);  
        
        return {
            success: false,
            error:err.message,
            message: "Failed to register user",
        };
    }
};

export const signinUserUsingEmailAndPassword = async(data)=>{
    let {email,password} = data;
    try
    {
    const res = await signInWithEmailAndPassword(auth,email,password);
    console.log("firebase sigin ",res);
    return {
        success: true,  
        message: "User signed successfully",
        userId: res.user.uid,
    };
    }catch(err)
    {
        console.log(err)
        return {
            success: false,
            error:err.message,
            message: "Failed to Signin user",
        };
    }
}

export const signOutUser = ()=>{
    return auth.signOut();
}
