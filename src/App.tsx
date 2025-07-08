import NavBar from "./components/NavBar/NavBar"
import navigation from "./utils/navigation"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Inicio from "./views/Inicio/Inicio"
import CrearTickets from "./views/CrearTickets/CrearTickets"
import ListadoTickets from "./views/ListadoTickets/ListadoTickets"
import Logisticas from "./views/Logisticas/Logisticas"
import NuevoUsuario from "./views/NuevoUsuario/NuevoUsuario"

function App() {
    return (
        <div className="relative">
            <NavBar navigation={navigation} />
            <Routes>
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/crear-ticket" element={<CrearTickets />} />
                <Route path="/listado-tickets" element={<ListadoTickets />} />
                <Route path="/crear-usuario" element={<NuevoUsuario />} />
                <Route path="/logisticas" element={<Logisticas />} />
            </Routes>
        </div>
    )
}

export default App
