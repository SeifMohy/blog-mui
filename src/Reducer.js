const posts = [];

const reducer = (state = posts, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
     return state.filter(a => +a.id !== +action.payload);
    case "SAVE":
      return action.payload;
      default:
        return state
  }
};


export default reducer;
