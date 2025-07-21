import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getLogisticaByDid } from "./api"
import type { LogisticaDetail } from "./types"

interface DetailState {
    detail: LogisticaDetail | null
    loadingDetail: boolean
    errorDetail: string | null
}

const initialState: DetailState = {
    detail: null,
    loadingDetail: false,
    errorDetail: null,
}

export const fetchLogisticaByDid = createAsyncThunk("logisticas/detail", async (did: number) => {
    const res = await getLogisticaByDid(did)
    return res.data
})

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLogisticaByDid.pending, (state) => {
            state.loadingDetail = true
            state.errorDetail = null
        })
        builder.addCase(fetchLogisticaByDid.fulfilled, (state, action) => {
            state.loadingDetail = false
            state.detail = action.payload
        })
        builder.addCase(fetchLogisticaByDid.rejected, (state, action) => {
            state.loadingDetail = false
            state.errorDetail = action.error.message || "Error"
        })
    },
})

export default detailSlice.reducer
