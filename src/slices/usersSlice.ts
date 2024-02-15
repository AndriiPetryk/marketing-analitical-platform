import { USERS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const usersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: USERS_URL
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Users'],
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
  useGetUsersQuery,
  // useGetProductDetailsQuery,
  // useCreateProductMutation,
  // useUpdateProductMutation,
  // useUploadProductImageMutation,
  // useDeleteProductMutation,
  // useCreateReviewMutation,
  // useGetTopProductsQuery,
} = usersSlice;
