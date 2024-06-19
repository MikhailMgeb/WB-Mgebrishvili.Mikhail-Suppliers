import { configureStore } from '@reduxjs/toolkit';

import { suppliesApi } from './supplies/supplies.api';

export const store = configureStore({
  reducer: {
    [suppliesApi.reducerPath]: suppliesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(suppliesApi.middleware),
});
