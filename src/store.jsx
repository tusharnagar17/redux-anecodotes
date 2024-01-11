import { configureStore } from "@reduxjs/toolkit";

// reducers
import anecdoteReducer from "./reducers/anecdoteReducer";
import filterReducer from "./reducers/filterReducer";
import notificationReducer from "./reducers/notifyReducer";

const store = configureStore({
  reducer: {
    notes: anecdoteReducer,
    filters: filterReducer,
    notification: notificationReducer,
  },
});

export default store;
