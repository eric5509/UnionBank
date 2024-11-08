import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: '',
};

export const ModalSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.value = action.payload;
    },
    closeModal: (state) => {
      state.value = '';
    },
  },
});

export const { openModal, closeModal} = ModalSlice.actions
