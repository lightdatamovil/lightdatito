import Flag from "react-world-flags"
import type { PaisesProps } from "./types"

const Paises = ({ codigo, nombre }: PaisesProps) => {
    return (
        <div className="flex items-center gap-3">
            <Flag code={codigo} className="bg-white h-10 w-10 rounded-full flex justify-center items-center object-cover" />
            <div>
                <p className="break-words whitespace-normal text-lg">{codigo}</p>
                <p className="text-sm leading-none font-medium">{nombre}</p>
            </div>
        </div>
    )
}
export default Paises
