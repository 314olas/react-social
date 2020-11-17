import {contactsAPI} from "../api/api";

export const SET_CONTACTS = 'SET_CONTACTS';
export const ENABLE_LOADER = 'ENABLE_LOADER';
export const DISABLE_LOADER = 'DISABLE_LOADER';

const initialState = {
    users: [],
    loader: false
}

const contactsReducer = (state = initialState, action) =>  {

  switch (action.type) {
    case SET_CONTACTS:
      return  {...state, users: action.payload}
    case ENABLE_LOADER :
      return {...state, loader: true}
    case DISABLE_LOADER :
      return {...state, loader: false}
    default: return state;
  }
};

export const setContacts = (contacts) => ({
  type: SET_CONTACTS,
  payload: contacts
})

export const enableLoader = () => ({
  type: ENABLE_LOADER
})

export const disableLoader = () => ({
  type: DISABLE_LOADER
})


export const setContactsMiddleware =() => {

  return function(dispatch) {
    dispatch(enableLoader());

    contactsAPI.contacts
      .onSnapshot((snapshot) => {

        const contacts = snapshot.docs.map( doc => ({
            id: doc.id,
            ...doc.data()
          }
        ))

        dispatch(setContacts(contacts));
        dispatch( disableLoader() );
      })
  }
}

export default contactsReducer;
