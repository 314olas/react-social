import {loginAPI} from "../api/api";
import firebase from "../firebase";

export const SET_AUTH = 'AUTH/SET_AUTH';
export const UNSET_AUTH = 'AUTH/UNSET_AUTH';
export const AUTH_ENABLE_LOADER = 'AUTH/AUTH_ENABLE_LOADER';
export const AUTH_DISABLE_LOADER = 'AUTH/AUTH_DISABLE_LOADER';
export const AUTH_ADD_ERROR = 'AUTH/AUTH_ADD_ERROR';

const initialState = {
  login: false,
  userData: {},
  loader: false,
  errorMessage: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {...state, login: true, userData: action.payload }
    case UNSET_AUTH:
      return {...state, login: false, userData: {}}
    case AUTH_ENABLE_LOADER:
      return {...state, loader: true}
    case AUTH_DISABLE_LOADER:
      return {...state, loader: false}
    case AUTH_ADD_ERROR:
      return {...state, errorMessage: action.payload}
    default:
      return state;
  }
}

type setAuthType = {
  type: typeof SET_AUTH,
  payload: any
}

export const setAuth: setAuthType = (userData) => {
  return {
    type: SET_AUTH,
    payload: userData
  }
}

export const authEnableLoader = () => ({
  type: AUTH_ENABLE_LOADER
})

export const authDisableLoader = () => ({
  type: AUTH_DISABLE_LOADER
})

export const logout = () => ({
  type: UNSET_AUTH
})

export const addError = (msg) => ({
  type: AUTH_ADD_ERROR,
  payload: msg

})

export const loginThunk = (email, pass) => {
  return function (dispatch) {
    dispatch( authEnableLoader()  );
    loginAPI.loginWithEmailPassword(email,  pass)
      .then( ()=> {
        const user = firebase.auth().currentUser;
        const {displayName, email, photoUrl, emailVerified, uid } = user;
        // console.log(displayName, email, photoUrl, emailVerified, uid, user)
        if (user) {
          dispatch( setAuth({displayName, email, photoUrl, emailVerified, uid}) );
        }
        dispatch(addError(null))
       dispatch( authDisableLoader() );
      })
      .catch( err => {
        dispatch(addError(err.message))
        dispatch( authDisableLoader() );
      });
  }
}

export const logoutThunk = () => (dispatch) => {
  loginAPI.logout()
    .then( () => {
      dispatch(logout())
    })
}

export default authReducer;
