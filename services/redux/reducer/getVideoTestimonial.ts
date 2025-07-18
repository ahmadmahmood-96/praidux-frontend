import { createSlice } from "@reduxjs/toolkit";
import { getVideoTestimonial } from "../middleware/getVideotestimonial";


const initialState = {
  loading: false,
  error: "",
  getVideoTestimonial: [],
};

const getVideoTestimonialSlice = createSlice({
  name: "getVideoTestimonial",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVideoTestimonial.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVideoTestimonial.fulfilled, (state, action) => {
      state.loading = false;
      state.getVideoTestimonial = action.payload || [];
    });

    builder.addCase(getVideoTestimonial.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error?.message || "Something went wrong";
    });
  },
});

export default getVideoTestimonialSlice.reducer;
