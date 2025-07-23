import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getEstadoLogisticaByDid } from "./api"
import type { EstadoLogistica } from "./types"

interface DetailState {
    detail: EstadoLogistica | null
    loadingDetail: boolean
    errorDetail: string | null
}

const initialState: DetailState = {
    detail: null,
    loadingDetail: false,
    errorDetail: null,
}

export const fetchEstadoLogisticaByDid = createAsyncThunk("estadoLogisticas/detail", async (did: number) => {
    const res = await getEstadoLogisticaByDid(did)
    return res.data
})

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEstadoLogisticaByDid.pending, (state) => {
            state.loadingDetail = true
            state.errorDetail = null
        })
        builder.addCase(fetchEstadoLogisticaByDid.fulfilled, (state, action) => {
            state.loadingDetail = false
            state.detail = action.payload
        })
        builder.addCase(fetchEstadoLogisticaByDid.rejected, (state, action) => {
            state.loadingDetail = false
            state.errorDetail = action.error.message || "Error"
        })
    },
})

export default detailSlice.reducer
