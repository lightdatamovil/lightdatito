import { Box, Grid } from "@mui/material"
import { CardTicketCount } from "./cardTicketCount"

export const CardsTicketCount = () => {
    const cards = [
        { id: 1, nombre: "Total", cantidad: 18, color: "azul" },
        { id: 2, nombre: "Pendientes", cantidad: 5, color: "rojo" },
        { id: 3, nombre: "En curso", cantidad: 2, color: "amarillo" },
        { id: 4, nombre: "Cerrados", cantidad: 1, color: "violeta" },
        { id: 5, nombre: "Desestimados", cantidad: 6, color: "naranja" },
        { id: 6, nombre: "Resueltos", cantidad: 4, color: "verde" },
    ]

    return (
        <Grid container spacing={2} sx={{ height: "100%", width: "100%" }}>
            {cards.length > 0 && cards.map((data) => <CardTicketCount data={data} key={data.id} />)}
        </Grid>
    )
}
