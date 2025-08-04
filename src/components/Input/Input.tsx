import "./Input.css"
import type { InputProps } from "./types"

const Input = ({ id, label, value, onChange, disabled = false, type = "text", className = "" }: InputProps) => {
    return (
        <div className="w-full relative pt-2.5">
            <input id={id} type={type} value={value} onChange={onChange} placeholder={label} disabled={disabled} className={`peer h-[45px] w-full border bg-tito-bg-secondary border-tito-border-gray rounded-md px-4 text-lg focus:outline-none focus:border-tito-primary ${className}`} />
            <label htmlFor={id} className="hidden">
                {label}
            </label>
        </div>
    )
}

export default Input
