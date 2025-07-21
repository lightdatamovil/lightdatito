import { configureStore, combineReducers } from "@reduxjs/toolkit"
import listReducer from "../features/logisticas/listSlice"
import detailReducer from "../features/logisticas/detailSlice"
import formReducer from "../features/logisticas/formSlice"

const logisticasReducer = combineReducers({
    list: listReducer,
    detail: detailReducer,
    form: formReducer,
})

export const store = configureStore({
    reducer: {
        logisticas: logisticasReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
