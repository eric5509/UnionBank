import { covertToFormattedDate } from "@/lib/helper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TAccount = {
  accountID?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  email?: string;
  phone?: string;
  residentialAddress?: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
  birthDate?: string;
  gender?: string;
  accountNumber?: string;
  imf?: string;
  cot?: string;
  currentBalance?: number;
  availableBalance?: number;
  image?: string;
  accountType?: string;
  status?: string;
  active?: boolean;
  blocked?: boolean;
  admin?: boolean;
};

type TInitialState = {
  account: TAccount;
  allAccounts: TAccount[];
  activeAccounts: TAccount[];
  inactiveAccounts: TAccount[];
  displayedAccount: TAccount[]
  active: string
  pendingAccounts: TAccount[];
};

const initialState: TInitialState = {
  account: {},
  allAccounts: [],
  activeAccounts: [],
  displayedAccount: [],
  active: "",
  inactiveAccounts: [],
  pendingAccounts: [],
};

export const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    loadAccount: (state, action) => {
      state.account = action.payload;
    },
  
    updateAccountDetails: (state, action) => {
      state.account = { ...state.account, ...action.payload };
      const newAccount = state.account;
      console.log(newAccount);
      const newAccounts = state.activeAccounts.map((account) => {
        if (account.accountID === newAccount.accountID) {
          return {
            ...account,
            ...newAccount,
          };
        }
        return account;
      });
      state.activeAccounts = newAccounts;
    },
    loadAllAccounts: (state, action: PayloadAction<TAccount[]>) => {
      state.allAccounts = action.payload;
    },
    loadactiveAccounts: (state) => {
      state.activeAccounts = state.allAccounts.filter((el) => el.active);
    },
    loadInactiveAccounts: (state) => {
      state.inactiveAccounts = state.allAccounts.filter((el) => !el.active);
    },
    pendingAccounts: (state) => {
      state.pendingAccounts = state.allAccounts.filter(
        (account) => account.status === "pending"
      );
    },
    setDisplayedAccounts: (state, action: PayloadAction<string>) => {
      let value = action.payload
      value = value.toLowerCase()
      if(value === 'all'){
        state.displayedAccount = state.allAccounts
        state.active = "all"
      }
      else if(value === 'inactive'){
        state.displayedAccount = state.allAccounts.filter(el => !el.active)
        state.active = "inactive"

      }
      else if(value === 'active'){
        state.displayedAccount = state.allAccounts.filter(el => el.active)
        state.active = "active"
      }
      else{
        state.displayedAccount = state.allAccounts.filter(el => el.status == value)
        state.active = value
      }
    }
  },
});

export const {
  loadAccount,
  loadactiveAccounts,
  loadAllAccounts,
  loadInactiveAccounts,
  pendingAccounts,
  setDisplayedAccounts,
  updateAccountDetails,
} = AccountSlice.actions;
