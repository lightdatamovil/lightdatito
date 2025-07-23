import type EstadoLogistica from "../../models/EstadoLogistica"
import type { Pais } from "../paises/types"
import type { Plan } from "../planes/types"

export interface Logistica {
    id: number
    did: number
    nombre: string
    historial_nombres: string[]
    url_imagen: string
    plan_id: Plan
    estado_logistica_id: EstadoLogistica
    codigo: string
    password_soporte: string
    cuit: string
    email: string
    url_sistema: string
    pais: Pais
}

export interface LogisticaDetail {
    id: number
    did: number
    nombre: string
    historial_nombres: string[]
    url_imagen: string
    plan_id: Plan
    estado_logistica_id: EstadoLogistica
    codigo: string
    password_soporte: string
    cuit: string
    email: string
    url_sistema: string
    pais: Pais
}
