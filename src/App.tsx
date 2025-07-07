import NavBar from "./components/NavBar/NavBar"

import "./App.css"

const navigation = [
    { name: "Inicio", href: "#inicio" },
    { name: "Ticket", href: "#ticket" },
    { name: "Gestion", href: "#gestion" },
]

function App() {
    return (
        <div className="relative">
            <NavBar navigation={navigation} />
        </div>
    )
}

export default App
