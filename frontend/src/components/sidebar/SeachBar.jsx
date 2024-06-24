import { useState } from "react"
import { useGetConversations } from "../../Hooks/useGetConvesations";
import { useConversationContext } from "../../context/ConversationContext";
import toast from "react-hot-toast";


export const SeachBar = ()=>{
    const {conversations} = useGetConversations();
    const [name,setName] = useState("");
    const {setSelectedConversation} = useConversationContext();
    const handleChangeName = (e)=>{
        setName(e.target.value);
    }
    const handleSearch = ()=>{
        if(!name.trim()) return;
        
        const conversation = conversations.find((c)=>c.fullname.toLowerCase().includes(name.toLowerCase()));

        if(conversation){
            setSelectedConversation(conversation);
            setName("");
        }
        else{
            toast.error("No such user found");
        }
    }
    return (
    <div className="search">
        <input 
            value={name}
            placeholder="search..."
            type="text"
            name = "search"
            onChange={handleChangeName}
        />
        <div>
            <button onClick={handleSearch}>search</button>
        </div>
    </div>
  )
}
