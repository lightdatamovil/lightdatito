import { MdContentCopy } from "react-icons/md"
import "./ButtonCopy.css"
import type { ButtonCopyProps } from "./types"

const ButtonCopy = ({ value }: ButtonCopyProps) => {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value)
        } catch (err) {
            console.error("Error al copiar", err)
        }
    }

    return (
        <button onClick={handleCopy} title="Copiar" className="h-7 min-w-7 hover:bg-tito-gray/20 text-tito-gray rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200">
            <MdContentCopy />
        </button>
    )
}

export default ButtonCopy
