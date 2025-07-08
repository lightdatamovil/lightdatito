import type { JSX } from "react"

export type NavBarItem = {
    name: string
    href: string
    icon: JSX.Element
    hijos?: {
        name: string
        href: string
        icon: JSX.Element
    }[]
}

export type NavBarProps = {
    navigation: NavBarItem[]
}
