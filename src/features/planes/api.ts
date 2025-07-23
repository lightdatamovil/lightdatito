import axios from "axios"
import type { Plan } from "./types"
import type ResponseApi from "../../models/ResponseAPI"
const API_URL = import.meta.env.VITE_API_URL
const URL = `${API_URL}/api/planes`

export const getPlanes = () => axios.get<ResponseApi<Plan[]>>(URL)
export const getPlanByDid = (did: number) => axios.get<Plan>(`${URL}/${did}`)
export const postPlan = (data: Partial<Plan>) => axios.post(URL, data)
export const putPlan = (did: number, data: Partial<Plan>) => axios.put(`${URL}/${did}`, data)
export const deletePlan = (did: number) => axios.delete(`${URL}/${did}`)
