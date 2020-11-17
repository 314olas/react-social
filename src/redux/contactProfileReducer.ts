export const SET_CONTACT_PROFILE = 'SET_CONTACT_PROFILE';
export const SET_ISFETCHING_PROFILE = 'SET_ISFETCHING_PROFILE';
export const UNSET_ISFETCHING_PROFILE = 'UNSET_ISFETCHING_PROFILE';

const initilState = {
  contactProfile: {},
  isFetching: []
};

const contactProfileReducer = (state = initilState, action) => {
  switch (action.type) {
    case SET_CONTACT_PROFILE:
      return {...state, contactProfile: action.payload}
    case SET_ISFETCHING_PROFILE:
      return { ...state, isFetching: action.payload}
    case UNSET_ISFETCHING_PROFILE :
      return {...state, isFetching: state.isFetching.filter(id => id !== action.payload)}
    default:
      return state;
  }
}

export const setContactProfile = (contactProfile) => {
  return {
    type: SET_CONTACT_PROFILE,
    payload: contactProfile
  }
}

export const setIsFetchingProfile = (id) => {
  return {
    type: SET_ISFETCHING_PROFILE,
    payload: id
  }
}
export const unSetIsFetchingProfile = (id) => {
  return {
    type: UNSET_ISFETCHING_PROFILE,
    payload: id
  }
}

export default contactProfileReducer;
