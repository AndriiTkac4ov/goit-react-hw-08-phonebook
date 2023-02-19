import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authLoginThunk = createAsyncThunk('login', async (values) => {
    const { data } = await axios.post('https://connections-api.herokuapp.com/users/login', values);
    return data;
})