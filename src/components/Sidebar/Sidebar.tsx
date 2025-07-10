import { useState, useEffect } from "react"
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go"
import { IoIosArrowDown, IoIosArrowUp, IoIosMenu } from "react-icons/io"
import { IoCloseOutline } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import type { SidebarProps } from "./types"
import logo from "../../assets/logoLightdata.svg"
import "./Sidebar.css"

const Sidebar = ({ navigation, setSidebarWidth, setModulo }: SidebarProps) => {
    const [expandido, setExpandido] = useState(true)
    const [expandirHover, setExpandirHover] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openItem, setOpenItem] = useState<string | null>(null)

    const toggleDropdown = (name: string) => {
        setOpenItem((prev) => (prev === name ? null : name))
    }

    const moduloActual = (modulo: string) => {
        setModulo(modulo)
    }

    useEffect(() => {
        const handleResize = () => {
            const isNowMobile = window.innerWidth < 1024
            setIsMobile(isNowMobile)
            if (!isNowMobile) setMobileMenuOpen(false)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        if (isMobile) {
            setSidebarWidth("0px")
        } else if (expandido || expandirHover) {
            setSidebarWidth("22rem")
        } else {
            setSidebarWidth("4.5rem")
        }
    }, [expandido, expandirHover, isMobile, mobileMenuOpen, setSidebarWidth])

    return (
        <div>
            <div className="absolute lg:hidden z-50 right-10 top-5">
                <button type="button" onClick={() => setMobileMenuOpen(true)} className="text-white cursor-pointer">
                    <IoIosMenu className="size-6" />
                </button>
            </div>

            <div
                onMouseEnter={() => !expandido && setExpandirHover(true)}
                onMouseLeave={() => !expandido && setExpandirHover(false)}
                className={`fixed inset-y-0 left-0 z-60 w-full overflow-y-auto transition-all duration-500 ease-in-out bg-tito-bg-primary
                ${isMobile ? (mobileMenuOpen ? "block" : "hidden") : "block"}
                ${expandido || expandirHover ? `lg:max-w-[22rem]` : `lg:max-w-[4.5rem]`}
                hover:lg:max-w-[22rem] shadow-2xl/70`}
            >
                <div className="flex w-full h-30 items-center justify-between p-6 shadow-2xl">
                    <NavLink to="/" className="flex items-center gap-4">
                        <img alt="Logo" src={logo} className="h-8 w-auto" />
                        {(expandirHover || expandido || isMobile) && <p className="text-2xl text-white">Lightdata</p>}
                    </NavLink>

                    {(expandirHover || expandido || isMobile) && (
                        <button
                            type="button"
                            onClick={() => {
                                if (isMobile) {
                                    setMobileMenuOpen(false)
                                } else {
                                    setExpandido(!expandido)
                                }
                            }}
                            className="rounded-md p-2.5 text-white cursor-pointer"
                        >
                            {isMobile ? <IoCloseOutline className="size-6" /> : !expandido ? <GoSidebarCollapse className="size-6" /> : <GoSidebarExpand className="size-6" />}
                        </button>
                    )}
                </div>

                <div className="p-6 flow-root">
                    <div className="-my-6 divide-y divide-white">
                        <div className="space-y-2 py-6">
                            {navigation.map((item) =>
                                item.hijos && item.hijos.length > 0 ? (
                                    <div key={item.name} className="relative w-full">
                                        <button
                                            onClick={() => toggleDropdown(item.name)}
                                            className={`-mx-3 flex ${expandirHover || expandido || isMobile ? "w-full" : ""} items-center justify-between gap-3 rounded-lg px-3 py-2 text-base text-white hover:bg-tito-bg-secondary ${openItem === item.name ? "bg-tito-bg-secondary" : ""}`}
                                        >
                                            <div className="flex w-full items-center gap-3">
                                                {item.icon}
                                                {(expandirHover || expandido || isMobile) && item.name}
                                            </div>
                                            {(expandirHover || expandido || isMobile) && (openItem === item.name ? <IoIosArrowUp className="size-6" /> : <IoIosArrowDown className="size-6" />)}
                                        </button>

                                        {openItem === item.name && (expandirHover || expandido || isMobile) && (
                                            <div className="mt-2 flex w-full flex-col rounded-lg bg-tito-bg-primary z-50 dropdowns_sidebar">
                                                {item.hijos.map((hijo) => (
                                                    <NavLink key={hijo.name} to={hijo.href} onClick={() => moduloActual(hijo.name)} className="px-4 py-2 flex gap-2 items-center rounded-lg text-sm text-white hover:bg-tito-bg-secondary">
                                                        {hijo.icon}
                                                        {hijo.name}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <NavLink key={item.name} to={item.href} onClick={() => moduloActual(item.name)} className="-mx-3 flex gap-3 rounded-lg px-3 py-2 text-base text-white hover:bg-tito-bg-secondary">
                                        {item.icon}
                                        {(expandirHover || expandido || isMobile) && item.name}
                                    </NavLink>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
