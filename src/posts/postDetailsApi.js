import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://jsonplaceholder.typicode.com' 
  }),
  endpoints: (builder) => ({
    getPostById: builder.query({
      query: (id,)=> `posts/${id}`,
      
    }),
    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostByIdQuery } = postApi