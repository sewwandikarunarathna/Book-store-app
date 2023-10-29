import {
  BOOK_UPDATE_FAIL,
  BOOK_UPDATE_REQUEST,
  BOOK_UPDATE_SUCCESS,
} from "../../actions/actionTypes";

const updateBookReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case BOOK_UPDATE_SUCCESS:
      return {
        updatedBook: action.payload,
      };
    case BOOK_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { updateBookReducer };
