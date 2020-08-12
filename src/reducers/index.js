import contacts from "./contacts";
import user from "./user";
import activeUserId from "./activeUserId";
import {combineReducers} from "redux";
import messages from "./messages";
import typing from "./typing";

export default combineReducers({
        user,
        contacts,
        activeUserId,
        messages,
        typing
    }
);