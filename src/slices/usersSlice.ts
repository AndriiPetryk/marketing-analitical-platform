import {USERS_URL} from '../constants';
import {apiSlice} from './apiSlice';

export const usersSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (id) => ({
                url: `${USERS_URL}/${id}`,
            }),
        }),
    }),
});

export const {
    useGetUsersQuery,
} = usersSlice;
