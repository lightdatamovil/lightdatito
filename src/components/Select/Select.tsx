import "./Select.css"
import type { SelectProps } from "./types"

const Select = ({ id, label, value, onChange, disabled = false, className = "", children }: SelectProps) => {
    return (
        <div className="w-full relative pt-2.5">
            <select id={id} value={value} onChange={onChange} disabled={disabled} className={`peer select_select h-[45px] w-full border border-tito-gray bg-tito-bg-primary rounded-xl px-4 text-[12px] focus:outline-none focus:border-tito-lila ${className}`}>
                {children}
            </select>
            <label htmlFor={id} className="absolute top-0 left-4 bg-tito-bg-primary px-1.5 text-tito-gray text-[12px] peer-focus:text-tito-lila transition-colors duration-200">
                {label}
            </label>
        </div>
    )
}

export default Select
