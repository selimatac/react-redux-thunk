import { INSERT_CUSTOMER, INSERT_CUSTOMER_ERROR } from "../types";
import axios from "axios";

export const insertCustomer = (params) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:3306/insertCustomer', {
      "customer_info": params
    });
    dispatch({
      type: INSERT_CUSTOMER,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: INSERT_CUSTOMER_ERROR,
      payload: console.log(e)
    });
  }
};

