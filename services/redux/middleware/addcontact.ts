// services/redux/thunks/addContact.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ContactPayload } from "../type";
import { API_URL } from "../../client";

export const AddContact = createAsyncThunk(
  "contact/add",
  async (data: ContactPayload, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("countryCode", data.countryCode);
      formData.append("countryName", data.countryName);
      formData.append("description", data.description);
      formData.append("services", JSON.stringify(data.services)); // send as string
      if (data.file) formData.append("attachment", data.file);

      const response = await axios.post(`${API_URL}/contact/add-contact`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || "Something went wrong");
    }
  }
);
