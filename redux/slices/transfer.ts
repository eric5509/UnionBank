import { createSlice } from "@reduxjs/toolkit";

export type TTransfer = {
  senderAccountName?: string;
  senderAccountNumber?: string;
  senderBankName?: string;
  recipientAccountName?: string;
  recipientAccountNumber?: string;
  recipientBankName?: string;
  senderID?: string;
  recipientID?: string;
  date?: string;
  transferID?: string;
  amount?: string;
  transferType?: string;
  status?: string;
};

type TIninitalState = {
  transferDetails: TTransfer;
  transfers: TTransfer[];
  pendingTransfers: TTransfer[];
  allTransfers: TTransfer[];
};

const initialState: TIninitalState = {
  transferDetails: {},
  transfers: [],
  pendingTransfers: [],
  allTransfers: [],
};

export const TransferSlice = createSlice({
  name: "transfer",
  initialState,
  reducers: {
    loadTransferDetails: (state, action) => {
      state.transferDetails = action.payload;
    },
    updateTransferDetails: (state, action) => {
      const { transferID } = state.transferDetails;
      state.transferDetails = { ...state.transferDetails, ...action.payload };
      const newTransfer = state.transferDetails;
      const newTransfers = state.allTransfers.map((transfer) => {
        if (transfer.transferID === transferID) {
          return {
            ...newTransfer,
          };
        }
        return transfer;
      });
      state.allTransfers = newTransfers;
    },
    loadAllTransfers: (state, action) => {
      state.allTransfers = action.payload;
    },
    loadTransfers: (state, action) => {
      state.transfers = state.allTransfers.filter(
        (transfer) => transfer.status === "pending"
      );
    },
    loadPendingTransfers: (state) => {
      state.pendingTransfers = state.allTransfers.filter(
        (transfer) => transfer.status === "pending"
      );
    },
  },
});

export const {
  loadTransferDetails,
  loadAllTransfers,
  loadPendingTransfers,
  loadTransfers,
  updateTransferDetails,
} = TransferSlice.actions;
