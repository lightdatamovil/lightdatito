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
        <button onClick={handleCopy} title="Copiar" className="h-7 w-7 bg-tito-btn-gray border border-white rounded-lg flex items-center justify-center cursor-pointer">
            <MdContentCopy />
        </button>
    )
}

export default ButtonCopy
