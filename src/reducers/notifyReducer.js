import { createSlice } from "@reduxjs/toolkit";

const notifySlicer = createSlice({
  name: "notification",
  initialState: { message: "" },
  reducers: {
    addMessage(state, action) {
      //   console.log(action.payload);
      state.message = action.payload;
    },
    clearMessage(state, action) {
      state.message = "";
    },
  },
});

export const { addMessage, clearMessage } = notifySlicer.actions;

export default notifySlicer.reducer;
