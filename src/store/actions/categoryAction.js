import { GET_GATEGORY, CATEGORY_ERROR  } from "../types";
import axios from "axios";

export const getCategory = () => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:3306/category`);

    dispatch({
      type: GET_GATEGORY,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: console.log(e)
    });
  }
};
