import { SINGLE_BOOK_FAIL, SINGLE_BOOK_REQUEST, SINGLE_BOOK_SUCCESS } from "../../actions/actionTypes";

const singleBookReducer = (state = {}, action) => {
    switch (action.type) {
      case SINGLE_BOOK_REQUEST:
        return {
          loading: true,
        };
      case SINGLE_BOOK_SUCCESS:
        return {
          singleBook: action.payload,
          loading: false,
        };
      case SINGLE_BOOK_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default singleBookReducer;