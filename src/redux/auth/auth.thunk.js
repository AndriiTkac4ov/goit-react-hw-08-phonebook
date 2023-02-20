import { publicApi, privateApi, token } from "http/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authLoginThunk = createAsyncThunk('login', async (values) => {
    const { data } = await publicApi.post('/users/login', values);
    token.set(data.token);
    
    return data;
});

export const authLogoutThunk = createAsyncThunk('logout', async () => {
    await privateApi.post('/users/logout');
});
