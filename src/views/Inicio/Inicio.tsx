import Input from "../../components/Input/Input"
import Select from "../../components/Select/Select"
import "./Inicio.css"

const Inicio = () => {
    return (
        <div className="global-container grid grid-cols-3 gap-5">
            <Input id="inputNombre" label="Nombre" />
            <Select id="inputApellido" label="Apellido">
                <option value="1">hola</option>
                <option value="2">Chau</option>
            </Select>
            <Input id="inputEmpresa" label="Empresa" />
        </div>
    )
}

export default Inicio
