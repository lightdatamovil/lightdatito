import type React from "react"

export type InputProps = {
    id: string
    label: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    defaulValue?: string
    disabled?: boolean
    type?: string
    className?: string
}
