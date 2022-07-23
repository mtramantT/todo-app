import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import categoryReducer from './category';
import todoReducer from './todo';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    categories: categoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
