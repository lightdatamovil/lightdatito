import "./Modal.css"
import type { ModalProps } from "./types"

const Modal = ({ children, className = "" }: ModalProps) => {
    return (
        <div className="backgroundModal">
            <div className={`containerModal ${className}`}>{children}</div>
        </div>
    )
}

export default Modal
