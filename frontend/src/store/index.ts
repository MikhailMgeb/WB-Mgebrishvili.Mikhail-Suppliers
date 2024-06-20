import { configureStore } from '@reduxjs/toolkit';

import { suppliesApi } from './supplies/supplies.api';
import suppliesReducer from './supplies/suppliesSlice';

export const store = configureStore({
  reducer: {
    [suppliesApi.reducerPath]: suppliesApi.reducer,
    supplies: suppliesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(suppliesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
