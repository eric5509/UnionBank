import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const BackDropSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    openBackdrop: (state) => {
      state.value = true;
    },
    closeBackdrop: (state) => {
      state.value = false;
    },
  },
});

export const { openBackdrop, closeBackdrop} = BackDropSlice.actions
