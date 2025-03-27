import { Box, Grid } from "@mui/material"
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined"

export const CardTicketCount = ({ data }) => {
    return (
        <Grid
            className={`card${data.color}`}
            item
            container
            size={{ xs: 6, sm: 6, md: 4, lg: 2 }}
            sx={{
                height: "85%",
                borderRadius: "15px",
                cursor: "pointer",
                backgroundColor: data.color,
                p: "15px",
            }}
        >
            <Grid item container size={{ xs: 7 }}>
                <Grid item size={{ xs: 12 }} sx={{ textAlign: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
                        <ConfirmationNumberOutlinedIcon sx={{ fontSize: 40 }} />
                    </Box>
                </Grid>

                <Grid item size={{ xs: 12 }}>
                    <p>Total</p>
                </Grid>
            </Grid>

            <Grid item size={{ xs: 5 }}>
                <Box>
                    <p>Hola</p>
                </Box>
            </Grid>
        </Grid>
    )
}
