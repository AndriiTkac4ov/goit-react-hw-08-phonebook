import { createSlice } from "@reduxjs/toolkit";
import { authInitState } from "./auth.init-state";
import { authLoginThunk } from "./auth.thunk";

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitState,
    extraReducers: builder => {
        builder
            .addCase(authLoginThunk.pending, state => {
                state.status = 'loading';
            })
            .addCase(authLoginThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(authLoginThunk.rejected, state => {
                state.status = 'rejected';
            });
    }
})

export const authReducer = authSlice.reducer;