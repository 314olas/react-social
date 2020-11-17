import React from 'react';
import {connect} from "react-redux";
import Loader from "../public/Loader";
import App from "./App";
import { authLoaderSelector, loginSelector} from "../../redux/selectors";

const AppContainer: React.FC = ({login, loader}) => {

  return (
    loader ? <Loader /> : <App login={login}  />
  );
};

const mapStateToProps = state =>({
  login: loginSelector(state),
  loader: authLoaderSelector(state),
})

export default connect(mapStateToProps )(AppContainer);
