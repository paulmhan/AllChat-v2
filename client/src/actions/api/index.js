import { TRANSLATE_MESSAGE } from "../types";
import axios from "axios";


export const translateMessage = (messageData) => async dispatch => {
    try {
        console.log(messageData.message, "message")
        console.log(messageData.language,"language")
        const { data }  = await axios.post('/api/translate/message', messageData);
        console.log(data, "translated message");
        dispatch({ type: TRANSLATE_MESSAGE, payload: data });
    } catch (error) {
        throw error;
    }

}

