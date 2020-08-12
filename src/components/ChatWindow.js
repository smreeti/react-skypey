import React from "react";
import './ChatWindow.css'
import Header from "./Header";
import store from "../store";

const ChatWindow = ({activeUserId})=>{

    const state = store.getState();
    const activeUser = state.contacts[activeUserId];

    return(
        <div className="ChatWindow">

            <Header user = {activeUser}/>
            Conversation for user Id : {activeUserId}
        </div>
    )
};

export default ChatWindow;