import axios from "axios"
import type { EstadoLogistica } from "./types"
import type ResponseApi from "../../models/ResponseAPI"
const API_URL = import.meta.env.VITE_API_URL
const URL = `${API_URL}/api/estados-logisticas`

export const getEstadosLogistica = () => axios.get<ResponseApi<EstadoLogistica[]>>(URL)
export const getEstadoLogisticaByDid = (did: number) => axios.get<EstadoLogistica>(`${URL}/${did}`)
export const postEstadoLogistica = (data: Partial<EstadoLogistica>) => axios.post(URL, data)
export const putEstadoLogistica = (did: number, data: Partial<EstadoLogistica>) => axios.put(`${URL}/${did}`, data)
export const deleteEstadoLogistica = (did: number) => axios.delete(`${URL}/${did}`)
