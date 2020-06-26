import {GET_GREETING_SUCCESS} from '../actions/ActionGreetings';

const greetingsReducer = (state = null, action) => {
  switch (action.type) {
    case GET_GREETING_SUCCESS:
      return action.response.data;
    default:
      return state;
  }
};

export default greetingsReducer;
