
const MessageRight = ({message,time,profilePic})=>{
    return(
        <div className={"Message-right"}>
            <img className="message-img-right" width={25} height={25} src={profilePic} />
            <div className="message-orange">
                <p className="message-content">{message}</p>
                <div className="message-timestamp-right">{time}</div>
            </div>
        </div>
    )
}

const MessageLeft = ({message,time,profilePic})=>{
    return(
        <div className={"Message-left"}>
            <img className="message-img-left" width={25} height={25} src={profilePic} />
            <div className="message-blue">
                <p className="message-content">{message}</p>
                <div className="message-timestamp-left">{time}</div>
            </div>
        </div>
    )
}

export const Message = ({side,message,time,profilePic})=>{
    if(side == "right"){
        return (
            <MessageRight profilePic={profilePic} time = {time} message={message}/>
        )
    }
    else{
        return (
            <MessageLeft profilePic={profilePic} time = {time} message={message}/>
        )
    }
}