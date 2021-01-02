import { SEARCH_PRODUCTS, SEARCH_PRODUCTS_ERROR } from "../types";
import axios from "axios";

export const searchProducts = (params) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:3306/search', {
      "text": params
    });
    dispatch({
      type: SEARCH_PRODUCTS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: SEARCH_PRODUCTS_ERROR,
      payload: console.log(e)
    });
  }
};

