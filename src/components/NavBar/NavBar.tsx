import { useEffect, useState } from "react"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import type { NavBarProps } from "./types"

import "./NavBar.css"

const NavBar = ({ navigation }: NavBarProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY
        setScrolled(offset > 100)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="fixed flex items-center tamañoPagina inset-x-0 top-0 z-50 h-[100px]">
            <nav aria-label="Global" className={`flex items-center justify-between w-full h-17 rounded-3xl px-5 lg:px-3 navbar ${scrolled ? "scrolled" : ""}`}>
                {/* LOGO --------------------------------------------------------------- */}
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img alt="" src="" className="h-10 w-auto" />
                    </a>
                </div>
                {/* / LOGO --------------------------------------------------------------- */}

                {/* MENU MOBILE --------------------------------------------------------- */}
                <div className="flex lg:hidden">
                    <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                {/* / MENU MOBILE --------------------------------------------------------- */}

                {/* MENU DESKTOP -------------------------------------------------------- */}
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm/6 font-semibold leading-4.5 text-white hover:text-tito-secondary group">
                            {item.name}
                            <div className="w-full h-[2px] bg-gradient-to-tr from-tito-primary to-tito-secondary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                        </a>
                    ))}
                </div>
                {/* / MENU DESKTOP -------------------------------------------------------- */}

                <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-tito-black p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img alt="" src="" className="h-10 w-auto" />
                        </a>
                        <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-white">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-tito-secondary hover:text-tito-black">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-tito-secondary hover:text-tito-black">
                                    Transformar mi marca
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default NavBar
