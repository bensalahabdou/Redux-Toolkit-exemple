import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


// First, create the thunk
export const fetchPostDtails = createAsyncThunk(
  'posts/userDetail',
  async ({userId}) => { 
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const data = response.json()
    return data
  }
)

// Then, handle actions in your reducers:
const postSlice = createSlice({
  name: 'post',
  initialState: { user: {}, status: null },

  extraReducers:  {
    
    [fetchPostDtails.pending]: (state, actions) => {
      
      state.status = 'loading'
    },
    [fetchPostDtails.fulfilled]: (state, {payload}) => {
      state.status = 'success'
      state.user = payload
    },
    [fetchPostDtails.rejected]: (state, actions) => {
      
      state.status = 'failed'
    }
  },
})



export default postSlice.reducer;