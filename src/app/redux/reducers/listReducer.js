import {GET_LIST_SUCCESS} from '../actions/ActionList';

const listReducer = (state = null, action) => {
  switch (action.type) {
    case GET_LIST_SUCCESS:
      return action.response.data;
    default:
      return state;
  }
};

export default listReducer;
