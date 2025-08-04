import "./Select.css"
import type { SelectProps } from "./types"

const Select = ({ id, label, value, onChange, disabled = false, className = "", children }: SelectProps) => {
    return (
        <div className="w-full relative pt-2.5">
            <select id={id} value={value} onChange={onChange} disabled={disabled} className={`peer select_select h-[45px] w-full border border-tito-border-gray text-tito-gray bg-tito-bg-secondary rounded-md px-4 text-lg focus:outline-none focus:border-tito-primary ${className}`}>
                <option value=""> {label}</option>
                {children}
            </select>
            <label htmlFor={id} className="hidden">
                {label}
            </label>
        </div>
    )
}

export default Select
