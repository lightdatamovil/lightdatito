import { NavLink } from "react-router-dom"
import { RenderSVG } from "./renderSVG"

export const SubitemNav = ({ item }) => {
    return (
        <NavLink to={item["url"] || "#"}>
            <div className="bg-fondo2 w-full h-13  flex gap-2 px-8 items-center">
                {item["icon"] ? <RenderSVG svg={item["icon"]} w={18} h={18} /> : ""}
                <div>
                    <p className="text-base">{item["nombre"]}</p>
                </div>
            </div>
        </NavLink>
    )
}
