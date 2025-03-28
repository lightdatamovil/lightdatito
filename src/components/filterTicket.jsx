import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded"
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"

export const FilterTicket = () => {
    return (
        <Grid container sx={{ height: "70px", width: "100%" }}>
            <Grid item size={{ xs: 12, sm: 4, md: 4, lg: 4 }} sx={{ height: "100%", display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>Hoy</Typography>
                <Typography sx={{ fontSize: "1.5rem" }}>28/03/2025</Typography>
                <GridViewRoundedIcon sx={{ fontSize: 30, marginLeft: 3, cursor: "pointer", "&:hover": { color: "#DA9000" } }} />
                <ViewListRoundedIcon sx={{ fontSize: 35, cursor: "pointer", "&:hover": { color: "#DA9000" } }} />
            </Grid>
            <Grid item size={{ xs: 12, sm: 8, md: 8, lg: 8 }} sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "end", gap: 2, flexWrap: "wrap" }}>
                <TextField id="outlined-basic" label="Empresa" variant="outlined" />
                <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker slotProps={{layout: {sx:{ background: "#3d405d" }}}} label="Fecha" />
                </LocalizationProvider>
                <IconButton aria-label="delete" size="large" sx={{ border: "3px solid #63FF00", background: "rgba(99,255,0,0.2)" , boxShadow: 2 }}>
                    <ArrowForwardIosRoundedIcon sx={{ color: "#63FF00" }} />
                </IconButton>
            </Grid>
        </Grid>
    )
}
