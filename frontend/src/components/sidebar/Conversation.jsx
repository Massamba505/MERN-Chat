import { useConversationContext } from "../../context/ConversationContext";


export const Conversation = ({ conversation}) => {
  const {selectedConversation,setSelectedConversation} = useConversationContext()
  const selected = selectedConversation?._id == conversation._id;
  return (
    <>
      <hr/> 
      <div className={`convo ${selected?"selected":""}`} onClick={()=>setSelectedConversation(conversation)}>
        <img width={50} height={50} src={conversation.profilePic} alt="avatar" />
        <span className="name">{conversation.fullname}</span>
      </div>
    </>
  );
};
