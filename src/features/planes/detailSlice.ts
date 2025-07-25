import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPlanByDid } from "./api"
import type { Plan } from "./types"

interface DetailState {
    detail: Plan | null
    loadingDetail: boolean
    errorDetail: string | null
}

const initialState: DetailState = {
    detail: null,
    loadingDetail: false,
    errorDetail: null,
}

export const fetchPlanByDid = createAsyncThunk("planes/detail", async (did: number) => {
    const res = await getPlanByDid(did)
    return res.data
})

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPlanByDid.pending, (state) => {
            state.loadingDetail = true
            state.errorDetail = null
        })
        builder.addCase(fetchPlanByDid.fulfilled, (state, action) => {
            state.loadingDetail = false
            state.detail = action.payload
        })
        builder.addCase(fetchPlanByDid.rejected, (state, action) => {
            state.loadingDetail = false
            state.errorDetail = action.error.message || "Error"
        })
    },
})

export default detailSlice.reducer
