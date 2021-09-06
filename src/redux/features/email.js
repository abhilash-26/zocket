import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const allJobSlice = createSlice({
  name: "allJobs",
  initialState: {
    value: {
      allJobs: initialState,
    },
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.value.allJobs = action.payload;
    },
  },
});

export const { setAllJobs } = allJobSlice.actions;

export default allJobSlice.reducer;
