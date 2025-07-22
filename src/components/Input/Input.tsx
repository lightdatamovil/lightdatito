import "./Input.css"
import type { InputProps } from "./types"

const Input = ({ id, label, value, onChange, defaulValue = "", disabled = false, type = "text", className = "" }: InputProps) => {
    return (
        <div className="w-full relative pt-2.5">
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={`Buscar por ${label.toLowerCase()}`}
                defaultValue={defaulValue}
                disabled={disabled}
                className={`peer h-[45px] w-full border bg-tito-bg-primary border-tito-gray rounded-xl px-4 text-[12px] focus:outline-none focus:border-tito-lila ${className}`}
            />
            <label htmlFor={id} className="absolute top-0 left-4 bg-tito-bg-primary px-1.5 text-tito-gray text-[12px] peer-focus:text-tito-lila transition-colors duration-200">
                {label}
            </label>
        </div>
    )
}

export default Input
