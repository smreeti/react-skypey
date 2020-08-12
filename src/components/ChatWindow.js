import React from "react";
import './ChatWindow.css'
import Header from "./Header";
import Chats from "./Chats"
import store from "../store";
import _ from "lodash"

const ChatWindow = ({activeUserId})=>{

    const state = store.getState();
    const activeUser = state.contacts[activeUserId];

    const messages = state.messages[activeUserId];

    return(
        <div className="ChatWindow">

            <Header user = {activeUser}/>
            <Chats messages = {_.values(messages)}/>

            Conversation for user Id : {activeUserId}
        </div>
    )
};

export default ChatWindow;