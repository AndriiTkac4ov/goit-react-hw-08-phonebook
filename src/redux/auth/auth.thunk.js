import { publicApi, token } from "http/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authLoginThunk = createAsyncThunk('login', async (values) => {
    const { data } = await publicApi.post('/users/login', values);
    token.set(data.token);
    
    return data;
});

export const authLogoutThunk = createAsyncThunk('logout', async () => {
    await publicApi.post('/users/logout');
    token.remove();
});
