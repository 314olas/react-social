import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import messagePageReducer from "./messagePageReducer";
import contactsReducer from "./contactsReducer";
import contactProfileReducer from "./contactProfileReducer";
import authReducer from "./authReducer";
import  thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
   messagePage: messagePageReducer,
   contacts: contactsReducer,
   contactProfile: contactProfileReducer,
   auth: authReducer
})

// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

window.store = store;

export default store;
