import { useConversationContext } from "../../context/ConversationContext";
import { InputMessage } from "./InputMessage";
import "./Message.css";
import { Messages } from "./Messages";

export const MessageContainer = ()=>{
  const {selectedConversation} = useConversationContext();
  return (
    <div className={`MessageContainer ${!selectedConversation?"noChat":""}`}>
        {!selectedConversation?(
          <>      
            <h1>Hey, {JSON.parse(localStorage.getItem("chat-app")).username}</h1>
            <h2>Select a chat to start messaging...</h2>
          </>
        ):(
          <>
          <div className="chattingTo">
            To:<span>{selectedConversation.fullname}</span>
          </div>
          <Messages />
          <InputMessage/>
          </>
        )}
    </div>
  )
}
