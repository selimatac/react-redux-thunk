import { GET_PRODUCTS_BY_PARAMS, GET_PRODUCTS_BY_PARAMS_ERROR } from "../types";
import axios from "axios";

export const getProductsByParams = (params) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:3306/product/${params}`);
    dispatch({
      type: GET_PRODUCTS_BY_PARAMS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_PRODUCTS_BY_PARAMS_ERROR,
      payload: console.log(e)
    });
  }
};
