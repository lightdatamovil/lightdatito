import { Grid } from "@mui/material"
import { CardsTicketCount } from "../components/cardsTicketCount"
import { FilterTicket } from "../components/filterTicket"
import { CardsTicket } from "../components/cardsTicket"

export const Home = () => {
    return (
        <Grid container spacing={3}>
            <Grid item size={12}>
                <CardsTicketCount />
            </Grid>
            <Grid item size={12}>
                <FilterTicket />
            </Grid>
            <Grid item size={12} sx={{ height: "50vh"}}>
                <CardsTicket/>
            </Grid>
            <Grid item size={12}></Grid>
        </Grid>
    )
}
