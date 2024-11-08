import { configureStore } from '@reduxjs/toolkit'
import { ModalSlice } from '../slices/modal'
import { BackDropSlice } from '../slices/backdrop'
import { TransactionSlice } from '../slices/transaction'
import { AccountSlice } from '../slices/account'
import { TransferSlice } from '../slices/transfer'

export const store = configureStore({
    reducer: {
        modal: ModalSlice.reducer,
        backdrop: BackDropSlice.reducer,
        transaction: TransactionSlice.reducer,
        account: AccountSlice.reducer,
        transfer: TransferSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch