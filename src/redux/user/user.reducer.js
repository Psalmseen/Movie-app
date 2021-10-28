import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer =
  () =>
  (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
      case userActionTypes.SET_CURRENT_USE:
        return {
          ...state,
          currentUser: payload,
        };
      default:
        return state;
    }
  };
export default userReducer;
