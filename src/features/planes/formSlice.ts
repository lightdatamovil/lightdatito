import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postPlan, putPlan, deletePlan } from "./api"
import type { Plan } from "./types"

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

export const createPlan = createAsyncThunk("planes/post", async (data: Plan) => {
    const res = await postPlan(data)
    return res.data
})

export const updatePlan = createAsyncThunk("planes/put", async ({ did, data }: { did: number; data: Plan }) => {
    const res = await putPlan(did, data)
    return res.data
})

export const removePlan = createAsyncThunk("planes/delete", async (did: number) => {
    await deletePlan(did)
    return did
})

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createPlan.pending, (state) => {
            state.loadingPost = true
            state.errorPost = null
        })
        builder.addCase(createPlan.rejected, (state, action) => {
            state.loadingPost = false
            state.errorPost = action.error.message || "Error"
        })
        builder.addCase(createPlan.fulfilled, (state) => {
            state.loadingPost = false
        })

        builder.addCase(updatePlan.pending, (state) => {
            state.loadingPut = true
            state.errorPut = null
        })
        builder.addCase(updatePlan.rejected, (state, action) => {
            state.loadingPut = false
            state.errorPut = action.error.message || "Error"
        })
        builder.addCase(updatePlan.fulfilled, (state) => {
            state.loadingPut = false
        })

        builder.addCase(removePlan.pending, (state) => {
            state.loadingDelete = true
            state.errorDelete = null
        })
        builder.addCase(removePlan.rejected, (state, action) => {
            state.loadingDelete = false
            state.errorDelete = action.error.message || "Error"
        })
        builder.addCase(removePlan.fulfilled, (state) => {
            state.loadingDelete = false
        })
    },
})

export default formSlice.reducer
