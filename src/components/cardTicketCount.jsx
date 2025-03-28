import { Box, Grid, Paper, Typography } from "@mui/material"
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
export const CardTicketCount = ({ data }) => {
    return (
            <Grid
                className={`card${data.color}`}
                container
                size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
                sx={{
                    height: "100px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    backgroundColor: data.color,
                    p: "15px",
                    color: "white",
                    position: "relative",
                    boxShadow: 3
                }}
            >
                <Grid item container size={{ xs: 7 }}>
                    <Grid item size={{ xs: 12 }} sx={{ textAlign: "center" }}>
                        <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
                            <ConfirmationNumberOutlinedIcon sx={{ fontSize: 35 }} />
                        </Box>
                    </Grid>
    
                    <Grid item size={{ xs: 12 }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>{data.nombre}</Typography>
                    </Grid>
                </Grid>
    
                <Grid item size={{ xs: 5 }} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "4.5rem", width: "4.5rem", background: `var(--color-card${data.color}oscuro)`, borderRadius: "12px" }}>
                        <Typography sx={{ fontWeight: "bold", textAlign: "center", fontSize: "40px" }}>{data.cantidad}</Typography>
                    </Box>
                </Grid>
                <ArrowForwardIosRoundedIcon sx={{ position: "absolute", right: "-3px", top: "40px", fontSize: 20, color: `var(--color-card${data.color}oscuro)` }} />
            </Grid>
        )
}
