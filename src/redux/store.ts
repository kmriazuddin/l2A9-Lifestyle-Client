import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "@/redux/features/cartSlice/cartSlice";
import compareSliceReducer from "@/redux/features/compareSlice/compareSlice";
export const store = configureStore({
  reducer: { cartSlice: cartSliceReducer, compareSlice: compareSliceReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
