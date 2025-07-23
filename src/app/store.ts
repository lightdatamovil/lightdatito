import { configureStore, combineReducers } from "@reduxjs/toolkit"
import listReducerLogisticas from "../features/logisticas/listSlice"
import detailReducerLogisticas from "../features/logisticas/detailSlice"
import formReducerLogisticas from "../features/logisticas/formSlice"
import listReducerPlanes from "../features/planes/listSlice"
import detailReducerPlanes from "../features/planes/detailSlice"
import formReducerPlanes from "../features/planes/formSlice"
import listReducerEstadosLogistica from "../features/estadosLogistica/listSlice"
import detailReducerEstadosLogistica from "../features/estadosLogistica/detailSlice"
import formReducerEstadosLogistica from "../features/estadosLogistica/formSlice"
import listReducerPaises from "../features/paises/listSlice"

const logisticasReducer = combineReducers({
    list: listReducerLogisticas,
    detail: detailReducerLogisticas,
    form: formReducerLogisticas,
})

const planesReducer = combineReducers({
    list: listReducerPlanes,
    detail: detailReducerPlanes,
    form: formReducerPlanes,
})

const estadoLogisticaReducer = combineReducers({
    list: listReducerEstadosLogistica,
    detail: detailReducerEstadosLogistica,
    form: formReducerEstadosLogistica,
})

const paisesReducer = combineReducers({
    list: listReducerPaises,
})

export const store = configureStore({
    reducer: {
        logisticas: logisticasReducer,
        planes: planesReducer,
        estadosLogistica: estadoLogisticaReducer,
        paises: paisesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
