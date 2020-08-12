import React from "react";
import Empty from "./Empty";
import ChatWindow from "./ChatWindow";
import './Main.css'

const Main = ({user, activeUserId}) => {
    return (
        <main className="Main">
            {
                !(activeUserId) ?
                    <Empty user={user} activeUserId={activeUserId}/>
                    : <ChatWindow activeUserId={activeUserId}/>
            }
        </main>
    )
};

export default Main;