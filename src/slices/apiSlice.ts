import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, SERVER_URL } from '../constants';

// const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
const baseQuery = fetchBaseQuery({ baseUrl: SERVER_URL });

export const apiSlice = createApi({
  baseQuery,
  credentials: 'include',
  tagTypes: ['User', 'Activity'],
  endpoints: (builder) => ({}),
});
