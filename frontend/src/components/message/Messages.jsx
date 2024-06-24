import { useGetMessages } from "../../Hooks/useGetMessages"
import { Message } from "./Message";
import { useConversationContext } from "../../context/ConversationContext";
import { extractTime } from "../../utils/extractTime";
import { useEffect, useRef } from "react";
import {useAuthContext} from "../../context/AuthContext.jsx";

export const Messages = ()=>{
    const {loading, messages} = useGetMessages();
    // console.log("messages",messages);
    const {selectedConversation} = useConversationContext();
    const {authUser} = useAuthContext();

    const lastMessage = useRef();
    useEffect(()=>{
      setTimeout(()=>{  
        lastMessage.current?.scrollIntoView({behavior:"smooth"});
      },100);
    },[messages]);
    
  return (
    <div className="Messages">
        {!loading && messages.length > 0 && messages.map((message)=>{
            const me = JSON.parse(authUser);
            const side = message.senderId == me._id?"right":"left";
            const profilePic = message.senderId == me._id?me.profilePic:selectedConversation.profilePic;
            const sentmessage = message.message;
            const time = extractTime(message.createdAt);
            return <div key={message._id} ref={lastMessage}><Message  time={time} profilePic={profilePic} side={side} message={sentmessage}/></div>
          })
        }
          
          

        {!loading && messages.length === 0 && (
            <h1>Say Hi👋</h1>
        )}

    </div>
  )
}
