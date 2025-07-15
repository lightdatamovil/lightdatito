interface Logistica {
    id: number
    did: number
    nombre: string
    url_imagen: string
    plan_id: number
    estado_logistica_id: number
    codigo: string
    password_soporte: string
    cuit: string
    email: string
    url_sistema: string
    eliminado: number
    pais_id: number
}

export default interface Logisticas {
    logisticas: Logistica[]
}
