const API_URL = "../../utils/logisticas.json"

export const fetchLogisticas = async () => {
    const res = await fetch(API_URL)
    if (!res.ok) throw new Error("Error al obtener logísticas")
    return await res.json()
}
