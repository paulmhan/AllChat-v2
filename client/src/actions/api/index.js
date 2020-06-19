import { TRANSLATE_MESSAGE } from "../types";
import axios from "axios";


export const translateMessage = (messageData) => async dispatch => {
    try {
        const { data }  = await axios.post('/api/translate/message', messageData);
        dispatch({ type: TRANSLATE_MESSAGE, payload: data });
    } catch (error) {
        throw error;
    }
}

