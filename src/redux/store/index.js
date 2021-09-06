import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user";
import profilePopupReducer from "../features/propfilePopup";
import signInPopupReducer from "../features/signInPopup";
import allJobs from "../features/allJobs";
import savedJob from "../features/getSavedJobs";
import searchedJob from "../features/searchedJob";
import searchLoading from "../features/searchLoading";

const store = configureStore({
  reducer: {
    user: userReducer,
    profilePopup: profilePopupReducer,
    signInPopup: signInPopupReducer,
    allJobs: allJobs,
    savedJob: savedJob,
    searchedJob: searchedJob,
    searchLoading: searchLoading,
  },
});

export default store;
