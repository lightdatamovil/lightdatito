import type { JSX } from "react"

export type SidebarItem = {
    name: string
    href: string
    icon: JSX.Element
    hijos?: {
        name: string
        href: string
        icon: JSX.Element
    }[]
}

export type SidebarProps = {
    navigation: SidebarItem[]
    setSidebarWidth: (width: string) => void
    setModulo: (modulo: string) => void
}
