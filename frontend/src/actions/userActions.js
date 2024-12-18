// actions/userActions.js
import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("/api/users/login", { email, password }, config);

    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });

    // Save user info to localStorage for persistence
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload: error.response?.data?.message || "Failed to login.",
    });
  }
};
