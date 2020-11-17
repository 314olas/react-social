import React, {useEffect} from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import MessageContent from "./components/MessageContent/MessageContent";
import {BrowserRouter, Route} from "react-router-dom";
import ContactProfileContainer from "./components/Profile/ContactProfile/ContactProfileContainer";
import firebase from "./firebase";
import {connect} from "react-redux";
import LoginContainer from "./components/LogIn/LogInContainer";
import {setAuth} from "./redux/authReducer";
import {disableLoader, enableLoader} from "./redux/loaderReducer";
import Loader from "./components/public/Loader";


// firebase.firestore().collection('users').add({
//   fullName: 'Vova Pupkin',
//   photoUrl: null,
//   status: null,
// })

const App = (props) => {

  useEffect(()=> {
    props.enableLoader();
    firebase.auth().signInWithEmailAndPassword('cam@ne.google.com', 'password').then(()=>{
      console.log(firebase.auth().currentUser);
      if (firebase.auth().currentUser) {
        props.setAuth();
      }
      props.disableLoader();
    });

  }, [])

  return (

    <BrowserRouter>

      {props.login
        ? <div id='wrapper'>
          <Sidebar/>

          <Route exact path='/calls/:id'
                 render={() =>
                   <MessageContent/>

                 }
          />

          <Route exact path='/contacts/profile/:contactId'
                 render={() =>
                   <ContactProfileContainer/>
                 }
          />

        </div>
        : <LoginContainer />
      }
    </BrowserRouter>

  );
};

const mapStateToProps = state =>({
  login: state.auth.login,
  loader: state.loader.isLoad
})

export default connect(mapStateToProps, {setAuth, enableLoader, disableLoader} )(App);

