import { configureStore } from "@reduxjs/toolkit";
import shoppingItemReducer from "./shoppingItemSlice";

export const store = configureStore({
  reducer: {
    shoppingItem: shoppingItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
