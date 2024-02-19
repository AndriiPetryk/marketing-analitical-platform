import {USERS_URL} from '../constants';
import {apiSlice} from './apiSlice';

export const usersSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (id) => ({
                url: `${USERS_URL}`,
                // method: 'GET',
                // headers: {
                //     sameSite: "None",
                //     secure: true,
                //     cookie: 'connect.sid=s%3A78sD7hqDakGkiiO3pHk4kJVd7g8bmAnF.qfX7Wg0CClCT6X1biM7gEhTIMhfFA2JZsk6xl3U%2FhDk; Path=/; HttpOnly; Expires=Mon, 19 Feb 2024 19:37:43 GMT;',
                // },
                // credentials: 'include',
            }),
        }),
    }),
});

export const {
    useGetUsersQuery,
} = usersSlice;
