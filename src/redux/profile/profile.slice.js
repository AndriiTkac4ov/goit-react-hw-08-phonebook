import { createSlice } from "@reduxjs/toolkit";
import { profileInitState } from "./profile.init-state";
import { getProfileThunk } from "./profile.thunk";

const profileSlice = createSlice({
    name: 'profile',
    initialState: profileInitState,
    extraReducers: builder => {
        builder
            .addCase(getProfileThunk.pending, state => {
                state.status = 'loading';
            })
            .addCase(getProfileThunk.fulfilled, (state, { payload }) => {
                state.status = 'fulfilled';
                state.data = payload;
            })
            .addCase(getProfileThunk.rejected, state => {
                state.status = 'rejected';
            })
    }
})

export const profileReducer = profileSlice.reducer;