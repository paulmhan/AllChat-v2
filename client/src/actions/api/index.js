import { TRANSLATE_MESSAGE } from "../types";
import axios from "axios";

export const translateMessage = (message, language) => async dispatch => {
    try {
        const res = await axios.get(`https://translation.googleapis.com/language/translate/v2?target=${language}&q=${message.text}&key=AIzaSyCcKOjOcmviD6AZXTd9qHT19MPK3xULnNg`);
        console.log(res, "res");
        const translation = res.data.data.translations[0].translatedText;
        const newMessage = message;
        newMessage.text = translation;
        // console.log(newMessage);
        // console.log(translation);
        dispatch({ type: TRANSLATE_MESSAGE, payload: newMessage });
    } catch (error) {
        throw error;
    }

}