import { ACTIVITIES_URL, STATISTICS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const activitiesSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getActivities: builder.query({
      query: () => ({
        url: ACTIVITIES_URL
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Activities'],
    }),
    getStatistics: builder.query({
      query: () => ({
        url: STATISTICS_URL
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Statistics'],
    }),
    // getProductDetails: builder.query({
    //   query: (productId) => ({
    //     url: `${USERS_URL}/${productId}`,
    //   }),
    //   keepUnusedDataFor: 5,
    // }),
    // createProduct: builder.mutation({
    //   query: () => ({
    //     url: `${USERS_URL}`,
    //     method: 'POST',
    //   }),
    //   invalidatesTags: ['Product'],
    // }),
    // updateProduct: builder.mutation({
    //   query: (data) => ({
    //     url: `${USERS_URL}/${data.productId}`,
    //     method: 'PUT',
    //     body: data,
    //   }),
    //   invalidatesTags: ['Products'],
    // }),
    // uploadProductImage: builder.mutation({
    //   query: (data) => ({
    //     url: `/api/upload`,
    //     method: 'POST',
    //     body: data,
    //   }),
    // }),
    // deleteProduct: builder.mutation({
    //   query: (productId) => ({
    //     url: `${USERS_URL}/${productId}`,
    //     method: 'DELETE',
    //   }),
    //   providesTags: ['Product'],
    // }),
    // createReview: builder.mutation({
    //   query: (data) => ({
    //     url: `${USERS_URL}/${data.productId}/reviews`,
    //     method: 'POST',
    //     body: data,
    //   }),
    //   invalidatesTags: ['Product'],
    // }),
    // getTopProducts: builder.query({
    //   query: () => `${USERS_URL}/top`,
    //   keepUnusedDataFor: 5,
    // }),
  }),
});

export const {
  useGetActivitiesQuery,
  useGetStatisticsQuery,
  // useGetProductDetailsQuery,
  // useCreateProductMutation,
  // useUpdateProductMutation,
  // useUploadProductImageMutation,
  // useDeleteProductMutation,
  // useCreateReviewMutation,
  // useGetTopProductsQuery,
} = activitiesSlice;
