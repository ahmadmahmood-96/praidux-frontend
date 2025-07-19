import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../client";

// Accepts { limit, skip } as parameters
export const getProjects = createAsyncThunk(
  "projects/getPublic",
  async ({ limit, skip }: { limit: number; skip: number }, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${API_URL}/project/public-projects?limit=${limit}&skip=${skip}`
      );
      return res.data; // array of projects
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
