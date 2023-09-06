import {
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../../actions/actionTypes";

const updateUserProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case USER_UPDATE_SUCCESS:
      return {
        user: action.payload,
        success: true,
      };
    case USER_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default updateUserProfileReducer;
