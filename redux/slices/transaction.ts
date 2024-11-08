import { covertToFormattedDate } from "@/lib/helper";
import { createSlice } from "@reduxjs/toolkit";

export type TTransaction = {
  accountName?: string;
  accountNumber?: string;
  transactionID?: string;
  date?: string;
  description?: string;
  amount?: string;
  transactionType?: string;
  status?: string;
};

type TIninitalState = {
  details: TTransaction;
  user: TTransaction[];
  all: TTransaction[];
};

const initialState: TIninitalState = {
  details: {},
  user: [],
  all: [],
};

export const TransactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    loadTransactionDetails: (state, action) => {
      state.details = action.payload;
    },
    loadPendingTransactions: (state, action) => {
    },
    updateTransactionDetails: (state, action) => {
      const { transactionID} = action.payload
      state.details = {...state.details, ...action.payload};
      const newTransaction = state.details 
      const newTransactions =  state.all.map((transaction) => {
        if(transaction.transactionID === transactionID){
          return {
            ...newTransaction
          }
        }
        return transaction
      })
      state.all = newTransactions
    },
    loadTransactions: (state, action) => {
      state.user = action.payload;
    },
    loadAllTransactions: (state, action) => {
      state.all = action.payload;
    },
  },
});

export const {
  loadAllTransactions,
  loadTransactionDetails,
  updateTransactionDetails, 
  loadTransactions
} = TransactionSlice.actions;
