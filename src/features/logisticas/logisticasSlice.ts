import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchLogisticas } from "./logisticasAPI"
import type Logisticas from "./types"

const initialState: Logisticas = {
    logisticas: [],
}

export const getLogisticas = createAsyncThunk("logisticas/getAll", async () => {
    return await fetchLogisticas()
})

const logisticasSlice = createSlice({
    name: "logisticas",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getLogisticas.fulfilled, (state, action) => {
            state.logisticas = action.payload
        })
    },
})

export default logisticasSlice.reducer
