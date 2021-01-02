import { GET_PRODUCTS, PRODUCTS_ERROR } from "../types";
import axios from "axios";

export const getProducts = (params) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:3306/products/${(params?params:"")}`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: console.log(e)
    });
  }
};

