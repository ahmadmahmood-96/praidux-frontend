import { createSlice } from "@reduxjs/toolkit";
import { getProjects } from "../middleware/getProjects";

const initialState = {
  loading: false,
  error: "",
  projects: [], // ✅ renamed from getProjects to projects for clarity
};

const getProjectsSlice = createSlice({
  name: "getProjects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProjects.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.loading = false;
      state.projects = action.payload || []; // ✅ save directly
    });

    builder.addCase(getProjects.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error?.message || "Something went wrong";
    });
  },
});

export default getProjectsSlice.reducer;
