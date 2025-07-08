import { useState, useEffect } from "react"
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { IoIosMenu } from "react-icons/io"
import { IoCloseOutline } from "react-icons/io5"
import type { NavBarProps } from "./types"
import logo from "../../assets/logoLightdata.svg"

import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = ({ navigation }: NavBarProps) => {
    const [expandido, setExpandido] = useState(true)
    const [expandirHover, setExpandirHover] = useState(false)
    const [mobile, setMobile] = useState(false)

    const [openItem, setOpenItem] = useState<string | null>(null)

    const toggleDropdown = (name: string) => {
        setOpenItem((prev) => (prev === name ? null : name))
    }

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 1024
            if (isMobile) {
                setMobile(false)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div>
            <div className="absolute lg:hidden">
                <button
                    type="button"
                    onClick={() => {
                        setMobile(true)
                    }}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                >
                    <span className="sr-only">Open main menu</span>
                    <IoIosMenu aria-hidden="true" className="size-6" />
                </button>
            </div>

            {/* SIDEBAR */}
            <div
                onMouseEnter={() => !expandido && setExpandirHover(true)}
                onMouseLeave={() => !expandido && setExpandirHover(false)}
                className={`fixed inset-y-0 left-0 z-50 w-full overflow-y-auto shadow-2xl/70 bg-tito-bg-primary transition-all duration-500 ease-in-out  ${expandido ? "lg:max-w-sm" : expandirHover ? "lg:max-w-sm" : "lg:max-w-18"} ${
                    mobile ? "block" : "hidden"
                } lg:block lg:ring-1 hover:lg:max-w-sm lg:ring-gray-900/10`}
            >
                <div className="flex w-full h-30 items-center justify-between p-6 shadow-2xl">
                    <NavLink to="/inicio" className="flex items-center gap-4">
                        <img alt="" src={logo} className="h-8 w-auto" />
                        {(expandirHover || expandido) && <p className="text-2xl text-white">Lightdata</p>}
                    </NavLink>
                    {(expandirHover || expandido) && (
                        <button
                            type="button"
                            onClick={() => {
                                if (mobile) {
                                    setMobile(false)
                                } else {
                                    setExpandido(!expandido)
                                }
                            }}
                            className="-m-2.5 rounded-md p-2.5 text-white cursor-pointer"
                        >
                            {mobile ? <IoCloseOutline aria-hidden="true" className="size-6" /> : !expandido ? <GoSidebarCollapse aria-hidden="true" className="size-6" /> : <GoSidebarExpand aria-hidden="true" className="size-6" />}
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
                                            className={`-mx-3 flex ${(expandirHover || expandido || mobile) && "w-full"} items-center justify-between gap-3 rounded-lg px-3 py-2 text-base/7 font-semibold cursor-pointer text-white hover:bg-tito-bg-secondary ${
                                                openItem === item.name && "bg-tito-bg-secondary"
                                            }`}
                                        >
                                            <div className="flex w-full items-center gap-3">
                                                {item.icon}
                                                {(expandirHover || expandido || mobile) && item.name}
                                            </div>
                                            {(expandirHover || expandido || mobile) && (openItem === item.name ? <IoIosArrowUp aria-hidden="true" className="size-6" /> : <IoIosArrowDown aria-hidden="true" className="size-6" />)}
                                        </button>

                                        {openItem === item.name && (expandirHover || expandido || mobile) && (
                                            <div className="mt-2 flex w-full flex-col rounded-lg bg-tito-bg-primary z-50 dropdowns_NavBar ">
                                                {item.hijos.map((hijo) => (
                                                    <NavLink key={hijo.name} to={hijo.href} className="px-4 py-2 flex gap-2 items-center rounded-lg text-sm text-white hover:bg-tito-bg-secondary">
                                                        {hijo.icon}
                                                        {hijo.name}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <NavLink key={item.name} to={item.href} className="-mx-3 flex gap-3 rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-tito-bg-secondary">
                                        {item.icon}
                                        {(expandirHover || expandido || mobile) && item.name}
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

export default NavBar
