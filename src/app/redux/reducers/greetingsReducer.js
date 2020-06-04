export const greetingsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_GREETING':
      return action.data;
    default:
      return state;
  }
};
