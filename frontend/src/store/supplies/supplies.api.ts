import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SupplyData } from '../../models/models';

export const suppliesApi = createApi({
  reducerPath: 'suppliesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  tagTypes: ['Supply'],
  endpoints: (builder) => ({
    getSupplies: builder.query<SupplyData[], void>({
      query: () => 'supplies',
      providesTags: (result) => (result
        ? [...result.map(({ id }) => ({ type: 'Supply', id } as const)), { type: 'Supply', id: 'LIST' }]
        : [{ type: 'Supply', id: 'LIST' }]),
    }),
    addSupply: builder.mutation<SupplyData, Partial<SupplyData>>({
      query: (newSupply) => ({
        url: 'supplies',
        method: 'POST',
        body: newSupply,
      }),
      invalidatesTags: [{ type: 'Supply', id: 'LIST' }],
    }),
    updateSupply: builder.mutation<void, Partial<SupplyData> & { id: string }>({
      query: ({ id, ...updatedSupply }) => ({
        url: `supplies/${id}`,
        method: 'PUT',
        body: updatedSupply,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Supply', id }],
    }),
    deleteSupply: builder.mutation<void, string>({
      query: (id) => ({
        url: `supplies/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Supply', id }],
    }),
  }),
});

export const {
  useGetSuppliesQuery,
  useAddSupplyMutation,
  useUpdateSupplyMutation,
  useDeleteSupplyMutation,
} = suppliesApi;
