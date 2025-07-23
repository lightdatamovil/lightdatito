import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postEstadoLogistica, putEstadoLogistica, deleteEstadoLogistica } from "./api"
import type { EstadoLogistica } from "./types"

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

export const createEstadoLogistica = createAsyncThunk("estadoLogistica/post", async (data: EstadoLogistica) => {
    const res = await postEstadoLogistica(data)
    return res.data
})

export const updateEstadoLogistica = createAsyncThunk("estadoLogistica/put", async ({ did, data }: { did: number; data: EstadoLogistica }) => {
    const res = await putEstadoLogistica(did, data)
    return res.data
})

export const removeEstadoLogistica = createAsyncThunk("estadoLogistica/delete", async (did: number) => {
    await deleteEstadoLogistica(did)
    return did
})

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createEstadoLogistica.pending, (state) => {
            state.loadingPost = true
            state.errorPost = null
        })
        builder.addCase(createEstadoLogistica.rejected, (state, action) => {
            state.loadingPost = false
            state.errorPost = action.error.message || "Error"
        })
        builder.addCase(createEstadoLogistica.fulfilled, (state) => {
            state.loadingPost = false
        })

        builder.addCase(updateEstadoLogistica.pending, (state) => {
            state.loadingPut = true
            state.errorPut = null
        })
        builder.addCase(updateEstadoLogistica.rejected, (state, action) => {
            state.loadingPut = false
            state.errorPut = action.error.message || "Error"
        })
        builder.addCase(updateEstadoLogistica.fulfilled, (state) => {
            state.loadingPut = false
        })

        builder.addCase(removeEstadoLogistica.pending, (state) => {
            state.loadingDelete = true
            state.errorDelete = null
        })
        builder.addCase(removeEstadoLogistica.rejected, (state, action) => {
            state.loadingDelete = false
            state.errorDelete = action.error.message || "Error"
        })
        builder.addCase(removeEstadoLogistica.fulfilled, (state) => {
            state.loadingDelete = false
        })
    },
})

export default formSlice.reducer
