import { MdOutlineOpenInNew } from "react-icons/md"
import "./ButtonRedirect.css"
import type { ButtonRedirectProps } from "./types"

const ButtonRedirect = ({ value }: ButtonRedirectProps) => {
    return (
        <a href={value} target="_blank" rel="noopener noreferrer" title="Abrir URL" className="h-7 min-w-7 hover:bg-tito-gray/20 text-tito-gray rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200">
            <MdOutlineOpenInNew />
        </a>
    )
}

export default ButtonRedirect
