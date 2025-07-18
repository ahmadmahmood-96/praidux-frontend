import { createSlice } from "@reduxjs/toolkit";
import { getFaq } from "../middleware/getFaq";


const initialState = {
  loading: false,
  error: "",
  getFaq: [],
};

const getFaqSlice = createSlice({
  name: "getFaq",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFaq.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFaq.fulfilled, (state, action) => {
      state.loading = false;
      state.getFaq = action.payload || [];
    });

    builder.addCase(getFaq.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error?.message || "Something went wrong";
    });
  },
});

export default getFaqSlice.reducer;
