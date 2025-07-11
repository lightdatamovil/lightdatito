import { MdOutlineOpenInNew } from "react-icons/md"
import "./ButtonRedirect.css"
import type { ButtonRedirectProps } from "./types"

const ButtonRedirect = ({ value }: ButtonRedirectProps) => {
    return (
        <a href={value} target="_blank" rel="noopener noreferrer" title="Abrir URL" className="h-7 w-7 bg-tito-btn-green border border-tito-btn-border-green text-tito-btn-border-green rounded-lg flex items-center justify-center cursor-pointer">
            <MdOutlineOpenInNew />
        </a>
    )
}

export default ButtonRedirect
