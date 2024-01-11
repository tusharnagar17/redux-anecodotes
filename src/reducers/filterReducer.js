import { createSlice } from "@reduxjs/toolkit";

const filterReducer = createSlice({
  name: "filter",
  initialState: { params: "" },
  reducers: {
    searchedText(state, action) {
      // console.log("at search text", action.payload);

      state.params = action.payload;
    },
  },
});

export const { searchedText } = filterReducer.actions;

export default filterReducer.reducer;
