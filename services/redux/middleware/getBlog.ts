import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../client";

export const getBlogs = createAsyncThunk(
  "Blogs/getPublic",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}/blog/listed-blogs`);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
