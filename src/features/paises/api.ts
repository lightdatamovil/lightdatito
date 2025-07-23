import axios from "axios"
import type { Pais } from "./types"
import type ResponseApi from "../../models/ResponseAPI"
const API_URL = import.meta.env.VITE_API_URL
const URL = `${API_URL}/api/paises`

export const getPaises = () => axios.get<ResponseApi<Pais[]>>(URL)
