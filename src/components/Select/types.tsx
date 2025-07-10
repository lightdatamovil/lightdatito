import type { ReactNode } from "react"

export type SelectProps = {
    id: string
    label: string
    children: ReactNode
    disabled?: boolean
    className?: string
}
