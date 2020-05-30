import { AUTH_USER, GET_USER, GET_USER_ERROR } from "../types";
import axios from "axios";


export const signOut = () => {
    localStorage.removeItem("token");
    console.log("hit sign out");
    return {
        type: AUTH_USER,
        payload: ""
    };
}

export const loadUser = () => async dispatch => {
    if(localStorage.getItem("token")){
      try {
        const { data } = await axios.get("/api/getuser", { headers: { 'authorization': localStorage.getItem('token')}});
        console.log(data);
        dispatch({ type: GET_USER, payload: data });
      } catch (error) {
        dispatch({ type: GET_USER_ERROR, payload: error });
        signOut();
      }
    } else {
        return;
    }
  }