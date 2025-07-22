import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getLogisticas } from "./api"
import type { Logistica } from "./types"
import axios from "axios"

interface ListState {
    list: Logistica[]
    loadingList: boolean
    errorList: string | null
}

const initialState: ListState = {
    list: [],
    loadingList: false,
    errorList: null,
}

export const fetchLogisticas = createAsyncThunk<Logistica[], void, { rejectValue: string }>("logisticas/list", async (_, thunkAPI) => {
    try {
        const res = await getLogisticas()
        if (!res.data.success) {
            return thunkAPI.rejectWithValue(res.data.message || "Error del servidor")
        }
        return res.data.body
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            if (error.response?.data?.message) {
                return thunkAPI.rejectWithValue(error.response.data.message)
            }
            return thunkAPI.rejectWithValue(error.message)
        }
        return thunkAPI.rejectWithValue("Error inesperado")
    }
})

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLogisticas.pending, (state) => {
            state.loadingList = true
            state.errorList = null
        })
        builder.addCase(fetchLogisticas.fulfilled, (state, action) => {
            state.loadingList = false
            state.list = action.payload
        })
        builder.addCase(fetchLogisticas.rejected, (state, action) => {
            state.loadingList = false
            state.errorList = action.payload || "Error"
        })
    },
})

export default listSlice.reducer
