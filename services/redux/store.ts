// store/index.ts or store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import themeReducer from "./features/theme-slice";
import getProjects from "./reducer/getProject";
import getBlogs from "./reducer/getBlog";
import getFaq from "./reducer/getFaq";
import getVideoTestimonial from "./reducer/getVideoTestimonial";
import getStaticTestimonial from "./reducer/getStaticTestimonial";

export const createStore = () =>
  configureStore({
    reducer: {
      theme: themeReducer,
      getProjects: getProjects,
      getBlogs: getBlogs,
      getFaq: getFaq,
      getVideoTestimonial: getVideoTestimonial,
      getStaticTestimonial: getStaticTestimonial,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
