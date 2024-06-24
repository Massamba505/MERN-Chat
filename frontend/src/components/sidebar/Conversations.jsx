import { Conversation } from "./Conversation";
import { useGetConversations } from "../../Hooks/useGetConvesations";

export const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="convos">
      {conversations.length > 0?(conversations.map((conversation) => (
        <Conversation
        key={conversation._id} 
        conversation={conversation} />
      ))):(<h1>Hi👋 no users are in yet</h1>)}
      {loading ? <h1>Loading</h1> : null}
    </div>
  );
};
