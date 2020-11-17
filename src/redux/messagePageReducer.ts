export const ADD_POST = 'ADD_MESSAGE';

const initialState = {
    messages: [
      {message: 'Hi'},
      {message: 'mess'},
    ]
}

const messagePageReducer = (state= initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return ({...state,  messages: [...state.messages, {message: action.payload}] });
    default: return state;
  }
}

export const addMessageActionCreator = (msg) => {
  return {
    type: ADD_POST,
    payload: msg
  }
}


export  default messagePageReducer;
