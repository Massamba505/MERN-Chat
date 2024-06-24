import { useState } from "react"
import { useSendMessage } from "../../Hooks/useSendMessage";



export const InputMessage = ()=>{
  const [message,setMessage] = useState("");
  const {loading,sendMessage} = useSendMessage();

  const handleSendMessage = async()=>{
    if(!message.trim()){
      return;
    }
    await sendMessage({message});
    setMessage("");
  }

  return (
    <div className="inputMessage">
        <input onChange={(e)=>setMessage(e.target.value)} value={message} type="text" name="message" placeholder="message..." />
        <div>
            <button onClick={handleSendMessage} disabled={loading}>{loading?"...": "Send"}</button>
        </div>
    </div>
  )
}
