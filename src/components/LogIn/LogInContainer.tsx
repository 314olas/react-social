import React from 'react';
import Login from "./LogIn";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/authReducer";
import {authErrorSelector} from "../../redux/selectors";

const LoginContainer = ({loginThunk, authError}) => {

  const login = (email, pass) => {
    loginThunk(email, pass);
  }

  return (
    <>
      <Login loginHandler={login} authError={authError}/>
    </>
  );
};

const mapStateTProps = state => ({
  authError: authErrorSelector(state)
})


export default connect(mapStateTProps,{loginThunk})(LoginContainer) ;
