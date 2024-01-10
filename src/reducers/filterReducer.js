const filterReducer = (state = { params: "" }, action) => {
  switch (action.type) {
    case "SET_FILTER": {
      return { params: action.payload };
    }
    default:
      return state;
  }
};

export const searchedText = (data) => {
  return {
    type: "SET_FILTER",
    payload: data,
  };
};

export default filterReducer;
