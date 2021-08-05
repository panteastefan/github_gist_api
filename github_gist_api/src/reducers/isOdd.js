const oddReducer = (state = false, action) => {
  switch (action.payload) {
    case action.payload % 2 === 0:
      return state;
    case action.payload % 2 === 1:
      return !state;
    default:
      return state;
  }
};

export default oddReducer;
