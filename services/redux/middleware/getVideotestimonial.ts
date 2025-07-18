import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../client";

export const getVideoTestimonial = createAsyncThunk(
  "video/getPublic",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}/videoTestimonial/view-listed-video-testimonials`);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
