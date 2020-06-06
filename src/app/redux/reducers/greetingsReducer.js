const greetingsReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_GREETING":
      return action.data;
    default:
      return state;
  }
};

export default greetingsReducer;
