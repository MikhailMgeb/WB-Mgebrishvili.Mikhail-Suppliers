import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SupplyData } from '../../models/models';

export const suppliesApi = createApi({
  reducerPath: 'suppliesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  endpoints: (build) => ({
    getSupplies: build.query<SupplyData[], void>({
      query: () => ({
        url: '/supplies',
      }),
    }),
  }),
});

export const { useGetSuppliesQuery } = suppliesApi;
