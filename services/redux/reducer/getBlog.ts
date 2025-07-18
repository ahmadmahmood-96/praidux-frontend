import { createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "../middleware/getBlog";


const initialState = {
  loading: false,
  error: "",
  getBlogs: [],
};

const getBlogsSlice = createSlice({
  name: "getBlogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.getBlogs = action.payload || [];
    });

    builder.addCase(getBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error?.message || "Something went wrong";
    });
  },
});

export default getBlogsSlice.reducer;
