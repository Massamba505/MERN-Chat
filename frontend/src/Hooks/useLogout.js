import { useState } from "react"
import toast from "react-hot-toast";
import {useAuthContext} from "../context/AuthContext.jsx";
import { useConversationContext } from "../context/ConversationContext";


export const useLogout = ()=>{
    const [loading,setLoading] = useState(false);

    const {setAuthUser} = useAuthContext();
    const {setSelectedConversation} = useConversationContext();

    const logout = async()=>{
        setLoading(true);
        try {
            const res = await fetch("api/auth/logout",{
                method: "POST",
                headers: {"Content-Type":"application/json"}
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.removeItem("chat-app");
            setAuthUser(null);
            setSelectedConversation(null);
        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }

    return {loading, logout};
}