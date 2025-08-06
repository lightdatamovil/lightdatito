import { IconosPlanes } from "../../utils/iconosPlanes"
import type { PlanesProps } from "./types"

const Planes = ({ plan, color, nombre }: PlanesProps) => {
    return (
        <div className="rounded-xl py-1 px-2 flex items-center gap-2" style={{ border: `1px solid #${color}`, color: `#${color}`, background: `#${color}30` }}>
            <div className="flex items-center">
                <IconosPlanes plan={plan} />
            </div>
            <div>{nombre}</div>
        </div>
    )
}
export default Planes
