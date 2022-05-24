import axios from "axios";
import { loginFailure, loginStart, loginSucess } from "./AuthAction";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8800/api/auth/login", user);
    dispatch(loginSucess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
