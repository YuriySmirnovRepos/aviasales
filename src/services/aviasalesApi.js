import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const AVIASALES_API_URL = "https://aviasales-test-api.kata.academy";

export const aviasalesApi = createApi({
  reducerPath: "aviasalesApi",
  baseQuery: fetchBaseQuery({ baseUrl: AVIASALES_API_URL }),
  endpoints: (builder) => ({
    getSearchId: builder.query({
      query: () => "/search",
    }),
    getTickets: builder.query({
      query: (searchId) => `/tickets?searchId=${searchId}`,
    }),
  }),
});

export const { useGetSearchIdQuery, useLazyGetTicketsQuery } = aviasalesApi;
