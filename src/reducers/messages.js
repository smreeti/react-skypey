import {getMessages} from "../static-data";

export default function message(state = getMessages(10), action) {
    return state;
}

