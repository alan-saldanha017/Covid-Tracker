import { configureStore } from '@reduxjs/toolkit';
import centerReducer from '../features/Center/centerSlice';
export const store = configureStore({
  reducer: {
    center: centerReducer,

  },
});
