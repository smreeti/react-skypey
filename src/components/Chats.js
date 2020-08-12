import React, {Component} from "react";
import './Chats.css'

class Chats extends Component {

    constructor(props) {
        super(props);
        this.chatsRef = React.createRef();
    }

    componentDidMount() {
        this.scrolltoBottom();
    }
    componentDidUpdate() {
        this.scrolltoBottom();
    }

    scrolltoBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    };

    render() {
        return (
            <div className="Chats" ref={this.chatsRef}>
                {
                    this.props.messages.map(message => (
                        <Chat message={message} key={message.number}/>
                    ))
                }
            </div>
        )
    }
}

const Chat = ({message}) => {
    const {text, is_user_msg} = message;
    return (
        <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
    );
};

export default Chats;