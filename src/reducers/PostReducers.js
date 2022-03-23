const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "ADD_POST":
      return action.payload;
    case "UPDATE_POST":
    case "DELETE_POST":
      return action.payload;
      // case "ADD-COMMENT":
      //   return action.payload;
    default:
      return state;
  }
};

export default reducer;
