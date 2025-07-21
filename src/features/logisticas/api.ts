import axios from "axios"
import type { Logistica, LogisticaDetail } from "./types"
import type ResponseApi from "../../models/ResponseAPI"
const API_URL = "http://localhost:13000"

export const getLogisticas = () => axios.get<ResponseApi<Logistica[]>>(`${API_URL}/api/logisticas`)

export const getLogisticaByDid = (did: number) => axios.get<LogisticaDetail>(`${API_URL}/api/logisticas/${did}`)
export const postLogistica = (data: Partial<LogisticaDetail>) => axios.post(`${API_URL}/api/logisticas`, data)
export const putLogistica = (did: number, data: Partial<LogisticaDetail>) => axios.put(`${API_URL}/api/logisticas/${did}`, data)
export const deleteLogistica = (did: number) => axios.delete(`${API_URL}/api/logisticas/${did}`)
