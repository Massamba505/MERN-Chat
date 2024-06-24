import { useState } from "react"
import toast from "react-hot-toast";
import {useAuthContext} from "../context/AuthContext.jsx";

export const useSignup = ()=>{
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();/*AuthUser,*/

    const signup = async({fullname,username,password,confirmPassword,gender})=>{
        const InputError = handleInputErrors(fullname,username,password,confirmPassword,gender);
        if(InputError){
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({fullname,username,password,confirmPassword,gender})
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

    return {loading,signup};

}

function handleInputErrors(fullname,username,password,confirmPassword,gender){
    if(!fullname || !username || !password || !confirmPassword || !gender){
        toast.error("Please enter all fields");
        return true;
    }
    if(confirmPassword != password){
        toast.error("Passwords don't match");
        return true;
    }
    if(password.length < 6){
        toast.error("Password too short");
        return true;
    }

    return false;
}