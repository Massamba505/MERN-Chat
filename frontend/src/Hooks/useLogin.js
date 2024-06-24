import { useState } from "react"
import toast from "react-hot-toast";
import {useAuthContext} from "../context/AuthContext.jsx";


export const useLogin = ()=>{
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async({username,password})=>{
        console.log(username,password);
        const InputError = handleError(username,password);
        if(InputError){
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username,password})
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            //need to set local storage
            localStorage.setItem("chat-app",JSON.stringify(data)); // has the userId in database
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }
    return {loading, login};
}

function handleError(username,password){
    if(!username || !password){
        toast.error("Please enter your credintials2");
        return true;
    }
    return false;
}