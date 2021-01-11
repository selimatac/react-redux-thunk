import { CUSTOMER_LOGIN, CUSTOMER_LOGIN_ERROR } from "../types";
import axios from "axios";

export const customerLogin = (params) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:3306/customerLogin', {
       ...params
    });
    dispatch({
      type: CUSTOMER_LOGIN,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: CUSTOMER_LOGIN_ERROR,
      payload: console.log(e)
    });
  }
};

