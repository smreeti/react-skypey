import React from "react";
import store from "../store";
import {sendMessage, setTypingValue} from "../actions";
import "./MessageInput.css";

const MessageInput = ({ value }) => {

    //first retrieve the current state object
    const state = store.getState();

    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const { typing, activeUserId } = state;
        store.dispatch(sendMessage(typing, activeUserId));
    };

    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input type="text"
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="write a message"
            />
        </form>
    );
};

export default MessageInput;