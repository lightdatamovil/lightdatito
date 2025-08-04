import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"

import Sidebar from "./components/Sidebar/Sidebar"
import navigation from "./utils/navigation"

import Inicio from "./views/Inicio/Inicio"
import CrearTickets from "./views/CrearTickets/CrearTickets"
import ListadoTickets from "./views/ListadoTickets/ListadoTickets"
import Logisticas from "./views/Logisticas/Logisticas"
import NuevoUsuario from "./views/NuevoUsuario/NuevoUsuario"

import { fetchPlanes } from "./features/planes/listSlice"
import { fetchEstadosLogistica } from "./features/estadosLogistica/listSlice"
import { fetchPaises } from "./features/paises/listSlice"

import { useAppDispatch } from "./app/hooks"

import "./App.css"

function App() {
    const dispatch = useAppDispatch()

    const [sidebarWidth, setSidebarWidth] = useState("22rem")
    const [modulo, setModulo] = useState("Inicio")

    useEffect(() => {
        dispatch(fetchPlanes())
        dispatch(fetchEstadosLogistica())
        dispatch(fetchPaises())
    }, [dispatch])

    return (
        <div className="relative w-screen h-screen flex overflow-hidden">
            <Sidebar navigation={navigation} setSidebarWidth={setSidebarWidth} setModulo={setModulo} />
            <div className="h-full flex flex-col transition-all duration-300 ease-in-out" style={{ marginLeft: sidebarWidth, width: `calc(100% - ${sidebarWidth})` }}>
                <div className="w-full h-7/100 px-10 pt-3 text-4xl font-bold flex items-center bg-gradient-to-br from-tito-primary to-tito-secondary bg-clip-text text-transparent">{modulo}</div>
                <div className="h-93/100 p-10 pt-3">
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/crear-ticket" element={<CrearTickets />} />
                        <Route path="/listado-tickets" element={<ListadoTickets />} />
                        <Route path="/crear-usuario" element={<NuevoUsuario />} />
                        <Route path="/logisticas" element={<Logisticas />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App
