import { NavLink } from "react-router-dom"
import { RenderSVG } from "./renderSVG"
import flechaDownItemNav from "../utils/flechaDownItemNav.svg"
import flechaUpItemNav from "../utils/flechaUpItemNav.svg"

export const ItemNav = ({ item }) => {
    const openSubItemsNav = (id) => {
        let containerSubItems = document.querySelectorAll(".containerSubItems")
        let containerFlechaItems = document.querySelectorAll(".containerFlechaItems")

        let subItems = document.getElementById("item-" + id)
        let flecha = document.getElementById("flechaItem-" + id)

        console.log(flecha)
        console.log(subItems)

        if (subItems.style.display == "block") {
            containerSubItems.forEach((subItem) => {
                subItem.style.display = "none"
            })

            flecha.src = flechaDownItemNav
        } else {
            containerSubItems.forEach((subItem) => {
                subItem.style.display = "none"
            })

            containerFlechaItems.forEach((flechaItem) => {
                flechaItem.src = flechaDownItemNav
            })

            subItems.style.display = "block"
            flecha.src = flechaUpItemNav
        }
    }

    return (
        <NavLink to={item["url"] || "#"}>
            <div className="bg-fondo w-full h-15  flex gap-3 px-4 items-center cursor-pointer hover:bg-fondo2" onClick={() => openSubItemsNav(item["id"])}>
                <div className="w-1/10">{item["icon"] ? <RenderSVG svg={item["icon"]} w={25} h={25} /> : ""}</div>
                <div className="w-7/10">
                    <p className="text-lg">{item["nombre"]}</p>
                </div>
                <div className="w-2/10">{item["subCat"].length > 0 && <img id={`flechaItem-${item["id"]}`} src={flechaDownItemNav} className="containerFlechaItems w-4 object-contain justify-self-end" />}</div>
            </div>
        </NavLink>
    )
}
