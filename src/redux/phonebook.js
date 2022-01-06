import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'https://618eb91150e24d0017ce1407.mockapi.io';

export const phonebookApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: builder => ({}),
});
