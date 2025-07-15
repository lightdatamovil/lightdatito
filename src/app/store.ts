import { configureStore } from "@reduxjs/toolkit"
import logisticasReducer from "../features/logisticas/logisticasSlice"

export const store = configureStore({
    reducer: {
        logisticas: logisticasReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
