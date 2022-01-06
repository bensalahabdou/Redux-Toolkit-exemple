
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


// First, create the thunk
export const fetchPosts = createAsyncThunk(
  'posts/getPosts',
  async ({limit}) => { 
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    const data = response.json()
    return data
  }
)

// Then, handle actions in your reducers:
const postsSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], status: null },
 
  extraReducers:  {
    
    [fetchPosts.pending]: (state, actions) => {
      
      state.status = 'loading'
    },
    [fetchPosts.fulfilled]: (state, {payload}) => {
      state.status = 'success'
      state.posts = payload
    },
    [fetchPosts.rejected]: (state, actions) => {
      
      state.status = 'failed'
    }
  },
})



export default postsSlice.reducer;