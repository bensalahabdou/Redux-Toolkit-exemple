import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./posts/postDetailsApi";
import postsReducer from "./posts/postsSlice";



const store = configureStore({
    reducer: {
        posts: postsReducer,
        [postApi.reducerPath]: postApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(postApi.middleware),

})

export default store;