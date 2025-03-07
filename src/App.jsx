import { Routes, Route } from "react-router-dom"

import { Home } from "./views/home"
import { Login } from "./views/login"
import { Listado } from "./views/listado"
import { NuevoTicket } from "./views/nuevoTicket"
import { NuevoUsuario } from "./views/nuevoUsuario"

import { NavLeft } from "./componenets/navLeft"

function App() {
    return (
        <div className="flex">
            <div className="h-screen w-1/6">
                <NavLeft />
            </div>
            <div className="p-10 h-screen w-5/6">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/listado" element={<Listado />} />
                    <Route path="/newTicket" element={<NuevoTicket />} />
                    <Route path="/newUsuario" element={<NuevoUsuario />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
