import { createSlice } from "@reduxjs/toolkit";
import { getStaticTestimonial } from "../middleware/getStaticTestimonial";


const initialState = {
  loading: false,
  error: "",
  getStaticTestimonial: [],
};

const getStaticTestimonialSlice = createSlice({
  name: "getStaticTestimonial",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStaticTestimonial.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStaticTestimonial.fulfilled, (state, action) => {
      state.loading = false;
      state.getStaticTestimonial = action.payload || [];
    });

    builder.addCase(getStaticTestimonial.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error?.message || "Something went wrong";
    });
  },
});

export default getStaticTestimonialSlice.reducer;
