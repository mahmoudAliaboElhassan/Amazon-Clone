import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosClient from "./axiosClient";


export const LoginAction = createAsyncThunk("auth/login",async(userData,{rejectWithValue})=>{
    try{
        const response = await axiosClient.post("/auth/signin",userData)

        return response.data
    }
    catch(err){
        return rejectWithValue(err?.response?.data?.message)
    }
})

export const RegisterAction = createAsyncThunk("auth/register", async(userData,{rejectWithValue})=>{
    try{
        const response = await axiosClient.post("/auth/signup",userData)

        return response.data
    }
    catch(err){
        return rejectWithValue(err?.response?.data?.message)
    }
})