import { createSlice } from "@reduxjs/toolkit";
import { GetProductDetailsAction } from "../Network/ProductsApi";


export const productDetailsSlice = createSlice({
    name:"productDetails",
    initialState:{
        productDetails:null,
        loading:false,
        status:"idle",
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(GetProductDetailsAction.pending,(state,action)=>{
            state.status ="pending"
            state.loading = true
            state.error=null
        })
        .addCase(GetProductDetailsAction.rejected , (state,action)=>{
            state.error=action.payload
            state.status='rejected'
            state.loading = false
        })
        .addCase(GetProductDetailsAction.fulfilled , (state,action)=>{
            state.productDetails = action.payload
            state.status='success'
            state.loading = false

        })
    }
})