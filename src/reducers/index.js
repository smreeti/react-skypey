import contacts from "./contacts";
import user from "./user";
import activeUserId from "./activeUserId";
import {combineReducers} from "redux";
import messages from "./messages";

export default combineReducers({
        user,
        contacts,
        activeUserId,
        messages
    }
);