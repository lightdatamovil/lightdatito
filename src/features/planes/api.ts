import axios from "axios"
import type { Logistica, LogisticaDetail } from "./types"
import type ResponseApi from "../../models/ResponseAPI"
const API_URL = import.meta.env.VITE_API_URL
const URL = `${API_URL}/api/planes`

export const getLogisticas = () => axios.get<ResponseApi<Logistica[]>>(URL)

export const getLogisticaByDid = (did: number) => axios.get<LogisticaDetail>(`${URL}/${did}`)
export const postLogistica = (data: Partial<LogisticaDetail>) => axios.post(URL, data)
export const putLogistica = (did: number, data: Partial<LogisticaDetail>) => axios.put(`${URL}/${did}`, data)
export const deleteLogistica = (did: number) => axios.delete(`${URL}/${did}`)
