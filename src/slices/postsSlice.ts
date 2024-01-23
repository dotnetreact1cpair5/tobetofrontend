import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response.data);

  // return response.data as Post[];
  return response.data;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;

      state.error = action.error.message || "Failed to fetch courses";
    });
  },
});
export default postsSlice.reducer;
export const selectAllPosts = (state: RootState) => state.posts.posts;
