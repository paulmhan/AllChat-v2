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


// import { TRANSLATE_MESSAGE } from "../types";
// import axios from "axios";
// require('dotenv').config();
// const apiKey = process.env.REACT_APP_API_KEY;

// export const translateMessage = (message, language) => async dispatch => {
//     try {
//         const res = await axios.get(`https://translation.googleapis.com/language/translate/v2?target=${language}&q=${message.text}&key=AIzaSyCcKOjOcmviD6AZXTd9qHT19MPK3xULnNg`);
//         console.log(res, "res");
//         const translation = res.data.data.translations[0].translatedText;
//         const newMessage = message;
//         newMessage.text = translation;
//         dispatch({ type: TRANSLATE_MESSAGE, payload: newMessage });
//     } catch (error) {
//         throw error;
//     }

// }
