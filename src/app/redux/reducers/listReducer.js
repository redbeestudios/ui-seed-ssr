export const listReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_LIST':
      return action.data;
    default:
      return state;
  }
};
