import React from "react";
import './ChatWindow.css'

const ChatWindow = ({activeUserId})=>{

    return(
        <div className="ChatWindow"> Conversation for user Id : {activeUserId}
        </div>
    )
};

export default ChatWindow;