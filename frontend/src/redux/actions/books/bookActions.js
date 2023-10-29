import axios from "axios";
import {
  BOOK_UPDATE_FAIL,
  BOOK_UPDATE_REQUEST,
  BOOK_UPDATE_SUCCESS,
  CREATE_BOOK_FAIL,
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  DELETE_BOOK_FAIL,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  FETCH_BOOK_FAIL,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
  SINGLE_BOOK_FAIL,
  SINGLE_BOOK_REQUEST,
  SINGLE_BOOK_SUCCESS,
} from "../actionTypes";

const createBookAction = ({category, author, title}) => {
  //return the result of above function into another function and dispatch is an argument of 2nd function
  return async (dispatch, getState) => {
    const { userInfo } = getState().userLogin;
    try {
      dispatch({
        type: CREATE_BOOK_REQUEST,
      });

      const config = {
        "Content-type": "application/json", //data sending as json to the backend, this is a good practice
        authorization: `Bearer ${userInfo.token}`
      };

      //due to setting  "proxy": "http://localhost:5000" in package.json, no need to type whole url here
      const { data } = await axios.post("http://localhost:5000/api/books", { category, author, title }, config);

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

//fetch single book action
const fetchBookAction = (id) => {
  return async dispatch => {
    try {
      dispatch({
        type: SINGLE_BOOK_REQUEST,
        loading: true,
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.get(`http://localhost:5000/api/books/${id}`, config);

      dispatch({
        type: SINGLE_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_BOOK_FAIL,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//update book by its id
const updateBookAction = (id, bookData) => {
  return async (dispatch, getState) => {
    const { userInfo } = getState().userLogin;
    try {
      dispatch({
        type: BOOK_UPDATE_REQUEST,
        loading: true,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${userInfo.token}`
        },
      };
      const { data } = await axios.put(`http://localhost:5000/api/books/${id}`, bookData, config);
      dispatch({
        type: BOOK_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_UPDATE_FAIL,
        loading: false,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//delete book by its id
const deleteBookAction = id => {
  return async dispatch => {
    try {
      dispatch({
        type: DELETE_BOOK_REQUEST,
        loading: true,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.delete(`http://localhost:5000/api/books/${id}`, config);
      dispatch({
        type: DELETE_BOOK_SUCCESS,
        payload: data,
      });

      dispatch({
        type: FETCH_BOOK_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BOOK_FAIL,
        loading: false,
        error: error.response && error.response.data.message,
      });
    }
  };
};
export { createBookAction, fetchBooksAction, updateBookAction, fetchBookAction, deleteBookAction };
