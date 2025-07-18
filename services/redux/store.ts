// store/index.ts or store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Import your reducers
import themeReducer from "./features/theme-slice";
// In the future, import other reducers here
// import userReducer from "./features/user-slice";
// import settingsReducer from "./features/settings-slice";

const dummyReducer = (state = {}) => state;

export const createStore = () =>
  configureStore({
    reducer: {
      dummy: dummyReducer, // Optional: useful placeholder
      theme: themeReducer, // use meaningful key (e.g. theme)

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
