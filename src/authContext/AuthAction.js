export const loginStart = () => ({
  type: "LOGIN_START",
});

export const loginSucess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

//logout
export const logout = () => ({
  type: "LOGOUT",
});
