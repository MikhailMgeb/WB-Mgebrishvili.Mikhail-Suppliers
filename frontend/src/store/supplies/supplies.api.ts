import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SupplyData } from '../../models/models';

export const suppliesApi = createApi({
  reducerPath: 'suppliesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getSupplies: builder.query<SupplyData[], void>({
      query: () => 'supplies',
    }),
    addSupply: builder.mutation<SupplyData, Partial<SupplyData>>({
      query: (newSupply) => ({
        url: 'supplies',
        method: 'POST',
        body: newSupply,
      }),
    }),
    updateSupply: builder.mutation<void, Partial<SupplyData> & Pick<SupplyData, 'id'>>({
      query: ({ id, ...updatedSupply }) => ({
        url: `supplies/${id}`,
        method: 'PUT',
        body: updatedSupply,
      }),
    }),
    deleteSupply: builder.mutation<void, string>({
      query: (id) => ({
        url: `supplies/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetSuppliesQuery,
  useAddSupplyMutation,
  useUpdateSupplyMutation,
  useDeleteSupplyMutation,
} = suppliesApi;
