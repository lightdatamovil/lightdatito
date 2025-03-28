import { Grid, Typography } from "@mui/material"
import CircleIcon from "@mui/icons-material/Circle"
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import Avatar from "@mui/material/Avatar"

export const CardTicket = ({ data }) => {
    return (
        <Grid
            container
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{
                height: "280px",
                borderRadius: "12px",
                cursor: "pointer",
                backgroundColor: `var(--color-card${data.color})`,
                color: "white",
                position: "relative",
                boxShadow: 3,
                overflow: "hidden",
            }}
        >
            <Grid item container size={{ xs: 12 }} sx={{ height: "17.5%", background: "#FF4D49", justifyContent: "space-between", p: "0 15px", alignItems: "center" }}>
                <Grid item sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CircleIcon sx={{ fontSize: 12 }} />
                    <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>Pendiente</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <ConfirmationNumberOutlinedIcon sx={{ fontSize: 25 }} />
                    <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>100</Typography>
                    <ArrowForwardIosRoundedIcon sx={{ fontSize: 20 }} />
                </Grid>
            </Grid>
            <Grid item container size={{ xs: 12 }} sx={{ height: "65%", background: "#535688", p: "10px 15px" }}>
                <Grid item size={{ xs: 12 }} sx={{ height: "25%", display: "flex", gap: "10px", alignItems: "center" }}>
                    <Avatar alt="Procourrier" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQasLBHRMWfqglY4-jVfTD8Kk3OsdjjG16eA&s" sx={{ width: 35, height: 35 }} />
                    <Typography sx={{ fontSize: 15 }}>
                        <b>Procourrier</b> - Problemas con shopify
                    </Typography>
                </Grid>
                <Grid item size={{ xs: 12 }} sx={{ height: "50%", display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontSize: 13 }}>
                        <b>Descripción: </b>Consectetur adipiscing exxclit. dcdvvVivamus luctus urna sed urna ultricivves ac tempor dui
                    </Typography>
                </Grid>
                <Grid item size={{ xs: 12 }} sx={{ height: "25%", display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar alt="Procourrier" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQasLBHRMWfqglY4-jVfTD8Kk3OsdjjG16eA&s" sx={{ width: 35, height: 35 }} />
                    <ArrowForwardIosRoundedIcon sx={{ fontSize: 20, color: "#ABABAB" }} />
                    <Avatar alt="Procourrier" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQasLBHRMWfqglY4-jVfTD8Kk3OsdjjG16eA&s" sx={{ width: 35, height: 35 }} />
                    <Typography sx={{ fontSize: 12, display: "flex", alignItems: "center", fontWeight: "bold", gap: 0.3 }}>
                        Asignado a Agustin.S (<ConfirmationNumberOutlinedIcon sx={{ fontSize: 20 }} /> 28)
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container size={{ xs: 12 }} sx={{ height: "17.5%", background: "#FF4D49", display: "flex", alignItems: "center", gap: 1, p: "0 15px" }}>
                <CalendarMonthOutlinedIcon sx={{ fontSize: 22 }} />
                <Typography sx={{ fontSize: 15 }}>
                    Creación: <b>28/03/2025</b>
                </Typography>
            </Grid>
        </Grid>
    )
}
