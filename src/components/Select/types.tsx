import type React from "react"
import type { ReactNode } from "react"

export type SelectProps = {
    id: string
    label: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    children: ReactNode
    disabled?: boolean
    className?: string
}
