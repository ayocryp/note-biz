import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  SET_SESSION_TOKEN,
  REMOVE_SESSION_TOKEN,
  SOCIAL_LOGIN,
  // HANDLE_SESSION,
  // SET_COOKIE,
  // GET_COOKIE,
  // REMOVE_COOKIE,
  // AUTHENTICATE_SUCCESS,
  // AUTHENTICATE_FAILURE,
  // AUTHENTICATE,
  // BROWSER_GET,
  // BROWSER_SET,
  // GET_REQUEST,
  // POST_REQUEST,
  // AUTHORIZATION,
  // AUTHORIZATION_FAILURE,
  // POST_DATA_FAILURE,
  // GET_DATA_FAILURE
} from "./actionTypes"

import {
  handleSession,
  logout,
  setCookie,
  getCookie,
  removeCookie,
  authenticate,
  browserGet,
  browserSet,
  getData,
  postData,
  authorization,
} from "../../../constants/authConstants"

export const loginUser = (user, history) => {
  return {
    type: LOGIN_USER,
    payload: { user, history },
  }
}

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  }
}

export const setSessionToken = (sessionToken) => ({
  type: SET_SESSION_TOKEN,
  sessionToken,
});

export const removeSessionToken = (sessionToken) => ({
  type: REMOVE_SESSION_TOKEN,
  sessionToken,
});

export const logoutUser = history => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  }
}

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  }
}

export const apiError = (error) => ({
  type: API_ERROR,
  payload: error.message,
});

export const socialLogin = (type, history) => {
  return {
    type: SOCIAL_LOGIN,
    payload: { type, history },
  };
};

// // Action creators
// // export const handleSession = (res) => ({
// //   type: HANDLE_SESSION,
// //   payload: handleSession(res),
// // });


// export const setCookie = (key, value) => ({
//   type: SET_COOKIE,
//   payload: setCookie(key, value),
// });

// export const getCookie = (key, value) => ({
//   type: GET_COOKIE,
//   payload: getCookie(key, value),
// });

// export const removeCookie = (key) => ({
//   type: REMOVE_COOKIE,
//   payload: removeCookie(key),
// });

// export const authenticateSuccess = (data) => ({
//   type: AUTHENTICATE_SUCCESS,
//   payload: authenticate(data)
// });

// export const browserGetSuccess = (data) => ({
//   type: BROWSER_GET,
//   payload: browserGet(data)
// });

// export const browserSetSuccess = () => ({
//   type: BROWSER_SET,
//   payload: browserSet(data)
// });

// export const getRequest = (data) => ({
//   type: GET_REQUEST,
//   payload: getData(data),
// });

// export const postRequest = (data) => ({
//   type: POST_REQUEST,
//   payload: postData(data),
// });

// export const authorizationSuccess = (url, token) => ({
//   type: AUTHORIZATION,
//   payload: authorization(url, token)
// });

// export const authenticateFailure = (error) => ({
//   type: AUTHENTICATE_FAILURE,
//   payload: error,
// });

// export const getsDataFailure = (error) => ({
//   type: GET_DATA_FAILURE,
//   payload: error,
// });

// export const postDataFailure = (error) => ({
//   type: POST_DATA_FAILURE,
//   payload: error,
// });

// export const authorizationFailure = (error) => ({
//   type: AUTHORIZATION_FAILURE,
//   payload: error,
// });