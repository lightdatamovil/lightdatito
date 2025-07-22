import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postLogistica, putLogistica, deleteLogistica } from "./api"
import type { LogisticaDetail } from "./types"

interface FormState {
    loadingPost: boolean
    errorPost: string | null
    loadingPut: boolean
    errorPut: string | null
    loadingDelete: boolean
    errorDelete: string | null
}

const initialState: FormState = {
    loadingPost: false,
    errorPost: null,
    loadingPut: false,
    errorPut: null,
    loadingDelete: false,
    errorDelete: null,
}

export const createLogistica = createAsyncThunk("logisticas/post", async (data: LogisticaDetail) => {
    const res = await postLogistica(data)
    return res.data
})

export const updateLogistica = createAsyncThunk("logisticas/put", async ({ did, data }: { did: number; data: LogisticaDetail }) => {
    const res = await putLogistica(did, data)
    return res.data
})

export const removeLogistica = createAsyncThunk("logisticas/delete", async (did: number) => {
    await deleteLogistica(did)
    return did
})

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createLogistica.pending, (state) => {
            state.loadingPost = true
            state.errorPost = null
        })
        builder.addCase(createLogistica.rejected, (state, action) => {
            state.loadingPost = false
            state.errorPost = action.error.message || "Error"
        })
        builder.addCase(createLogistica.fulfilled, (state) => {
            state.loadingPost = false
        })

        builder.addCase(updateLogistica.pending, (state) => {
            state.loadingPut = true
            state.errorPut = null
        })
        builder.addCase(updateLogistica.rejected, (state, action) => {
            state.loadingPut = false
            state.errorPut = action.error.message || "Error"
        })
        builder.addCase(updateLogistica.fulfilled, (state) => {
            state.loadingPut = false
        })

        builder.addCase(removeLogistica.pending, (state) => {
            state.loadingDelete = true
            state.errorDelete = null
        })
        builder.addCase(removeLogistica.rejected, (state, action) => {
            state.loadingDelete = false
            state.errorDelete = action.error.message || "Error"
        })
        builder.addCase(removeLogistica.fulfilled, (state) => {
            state.loadingDelete = false
        })
    },
})

export default formSlice.reducer
