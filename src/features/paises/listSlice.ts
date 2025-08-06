import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPaises } from "./api"
import type { Pais } from "./types"
import axios from "axios"

// La estructura real que devuelve la API
interface Body {
    existente_en_sistema: Pais[]
    no_existente_en_sistema: Pais[]
}

// El estado del slice, con los arrays separados
interface ListState {
    existente: Pais[]
    noExistente: Pais[]
    loadingList: boolean
    errorList: string | null
}

// Estado inicial
const initialState: ListState = {
    existente: [],
    noExistente: [],
    loadingList: false,
    errorList: null,
}

// Async thunk para obtener los países
export const fetchPaises = createAsyncThunk<Body, void, { rejectValue: string }>("paises/list", async (_, thunkAPI) => {
    try {
        const res = await getPaises()

        if (!res.data.success) {
            return thunkAPI.rejectWithValue(res.data.message || "Error del servidor")
        }

        return res.data.body as unknown as Body
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

// Slice
const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPaises.pending, (state) => {
            state.loadingList = true
            state.errorList = null
        })
        builder.addCase(fetchPaises.fulfilled, (state, action) => {
            state.loadingList = false
            state.existente = action.payload.existente_en_sistema
            state.noExistente = action.payload.no_existente_en_sistema
        })
        builder.addCase(fetchPaises.rejected, (state, action) => {
            state.loadingList = false
            state.errorList = action.payload || "Error"
        })
    },
})

export default listSlice.reducer
