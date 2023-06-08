//reducer is the function that going to listen what kind of action that has been triggered.
//it will change the state accordingly.

import { CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS } from "../../actions/actionTypes";

const createBookReducer = (state={}, action) => {
    switch (action.type) {
        case CREATE_BOOK_REQUEST:
            return {
                loading: true //change the state like this
            };
        case CREATE_BOOK_SUCCESS:
            return {
                book: action.payload
            };
        case CREATE_BOOK_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export {createBookReducer};
