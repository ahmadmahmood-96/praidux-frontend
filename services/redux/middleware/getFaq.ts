import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../client";

export const getFaq = createAsyncThunk(
  "Faq/getPublic",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}/faq/view-faqs`);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
