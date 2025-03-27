import { Box } from "@mui/material"
import { CardsTicketCount } from "../components/cardsTicketCount"

export const Home = () => {
    return (
        <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column" }}>
            <Box sx={{ flex: 2, display: "flex" }}>
                <CardsTicketCount />
            </Box>
            <Box sx={{ flex: 1 }}></Box>
            <Box sx={{ flex: 7 }}></Box>
            <Box sx={{ flex: 1 }}></Box>
        </Box>
    )
}
