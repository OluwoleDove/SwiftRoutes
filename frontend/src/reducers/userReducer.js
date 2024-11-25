// reducers/userReducer.js
const userReducer = (state = { userInfo: null, loading: false, error: null }, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { ...state, loading: true, error: null };
    case "USER_LOGIN_SUCCESS":
      return { loading: false, userInfo: action.payload, error: null };
    case "USER_LOGIN_FAIL":
      return { loading: false, userInfo: null, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
