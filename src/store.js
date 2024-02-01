import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./Features/todo/todoSlice";
import sliceCounter from "./Features/counter/CounterSlice"
// import todoReducer from "./features/todo/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
    counter : sliceCounter 
  },
});

export default store;