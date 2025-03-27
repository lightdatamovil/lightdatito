import { createTheme, ThemeProvider } from "@mui/material/styles"
import { AppProvider } from "@toolpad/core/AppProvider"
import { DashboardLayout } from "@toolpad/core/DashboardLayout"
import { useDemoRouter } from "@toolpad/core/internal"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined"
import AddRoundedIcon from "@mui/icons-material/AddRounded"
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded"
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined"
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined"

import { Home } from "./views/home"
import { NuevoTicket } from "./views/nuevoTicket"
import { Listado } from "./views/listado"
import { NuevoUsuario } from "./views/nuevoUsuario"
import { ListadoLogisticas } from "./views/listadoLogisticas"

import LogoDark from "./utils/logoNavDark.svg"

import "./index.css"

const pageComponents = {
    "/home": <Home />,
    "/tiket": <NuevoTicket />,
    "/tiket/newTicket": <NuevoTicket />,
    "/tiket/listadoTicket": <Listado />,
    "/gestion": <NuevoUsuario />,
    "/gestion/newUser": <NuevoUsuario />,
    "/gestion/listadoLogisticas": <ListadoLogisticas />,
}

const NAVIGATION = [
    {
        segment: "home",
        title: "Inicio",
        icon: <HomeOutlinedIcon />,
    },
    {
        segment: "tiket",
        title: "Ticket",
        icon: <ConfirmationNumberOutlinedIcon />,
        children: [
            {
                segment: "newTicket",
                title: "Crear ticket",
                icon: <AddRoundedIcon />,
            },
            {
                segment: "listadoTicket",
                title: "Listado de tickets",
                icon: <FormatListBulletedRoundedIcon />,
            },
        ],
    },
    {
        segment: "gestion",
        title: "Gestión",
        icon: <ManageAccountsOutlinedIcon />,
        children: [
            {
                segment: "newUser",
                title: "Crear usuario",
                icon: <PersonAddAltOutlinedIcon />,
            },
            {
                segment: "listadoLogisticas",
                title: "Logisticas",
                icon: <PersonAddAltOutlinedIcon />,
            },
        ],
    },
]

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: "data-toolpad-color-scheme",
    },
    colorSchemes: {
        light: {
            palette: {
                background: {
                    default: "#ffffff",
                    paper: "#F9F9FE",
                },
            },
        },
        dark: {
            palette: {
                background: {
                    default: "#30334E",
                    paper: "#3D405D",
                },
            },
        },
    },
})

function DemoPageContent({ pathname }) {
    const content = pageComponents[pathname] || <Typography>Seleccione una página en la barra lateral.</Typography>

    return <Box sx={{ p: "20px", height: "100%", width: "100%" }}>{content}</Box>
}

function App({ window }) {
    const router = useDemoRouter("")
    const demoWindow = window !== undefined ? window() : undefined

    return (
        <AppProvider
            branding={{
                logo: <img src={LogoDark} alt="MUI logo" />,
                title: "",
                homeUrl: "/home",
            }}
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
            title="LightdaTito"
        >
            <DashboardLayout>
                <DemoPageContent pathname={router.pathname} />
            </DashboardLayout>
        </AppProvider>
    )
}

export default App
