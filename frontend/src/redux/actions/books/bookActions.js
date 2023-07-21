import axios from "axios";
import {
  CREATE_BOOK_FAIL,
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  FETCH_BOOK_FAIL,
  FETCH_BOOK_SUCCESS,
} from "../actionTypes";
import { FETCH_BOOK_REQUEST } from "../actionTypes";

const createBookAction = (bookData) => {
  //return the result of above function into another function and dispatch is an argument of 2nd function
  return async (dispatch) => {
    try {
      dispatch({
        type: CREATE_BOOK_REQUEST,
      });

      const config = {
        "Content-type": "application/json", //data sending as json to the backend, this is a good practice
      };

      //due to setting  "proxy": "http://localhost:5000" in package.json, no need to type whole url here
      const { data } = await axios.post("/api/books", bookData, config);

      dispatch({
        type: CREATE_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_BOOK_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

//fetch all books action
const fetchBooksAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_BOOK_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      //make http request to backend
      const { data } = await axios.get(
        "http://localhost:5000/api/books",
        config
      );

      dispatch({
        type: FETCH_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_BOOK_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

export { createBookAction, fetchBooksAction };
