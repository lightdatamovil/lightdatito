import { IconosEstados } from "../../utils/iconosEstados"
import type { EstadosProps } from "./types"
import "./Estados.css"

const Estados = ({ estado, color, nombre }: EstadosProps) => {
    return (
        <div className="flex items-center gap-1" style={{ color: `#${color}` }}>
            <IconosEstados estado={estado} />
            <p>{nombre}</p>
        </div>
    )
}
export default Estados
