import { Grid } from "@mui/material"
import { CardTicket } from "./cardTicket"

export const CardsTicket = () => {
    const cards = [
        { id: 1, nombre: "Total", cantidad: 18, color: "azul" },
        { id: 2, nombre: "Pendientes", cantidad: 5, color: "rojo" },
        { id: 3, nombre: "En curso", cantidad: 2, color: "amarillo" },
        { id: 4, nombre: "Cerrados", cantidad: 1, color: "violeta" },
        { id: 5, nombre: "Desestimados", cantidad: 6, color: "naranja" },
        { id: 6, nombre: "Resueltos", cantidad: 4, color: "verde" },
        { id: 12, nombre: "Total", cantidad: 18, color: "azul" },
        { id: 22, nombre: "Pendientes", cantidad: 5, color: "rojo" },
        { id: 32, nombre: "En curso", cantidad: 2, color: "amarillo" },
        { id: 42, nombre: "Cerrados", cantidad: 1, color: "violeta" },
        { id: 52, nombre: "Desestimados", cantidad: 6, color: "naranja" },
        { id: 62, nombre: "Resueltos", cantidad: 4, color: "verde" },
    ]

    return (
        <Grid container spacing={3} sx={{ height: "100%", width: "100%" }}>
            {cards.length > 0 && cards.map((data) => <CardTicket data={data} key={data.id} />)}
        </Grid>
    )
}
