const API_URL = "http://localhost:13000"

export const fetchLogisticas = async () => {
    const res = await fetch(`${API_URL}/api/logisticas`)
    if (!res.ok) throw new Error("Error al obtener logísticas")
    return await res.json()
}
