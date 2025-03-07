import { ItemNav } from "./itemNav"
import itemsNav from "../utils/itemsNav.json"
import { SubitemNav } from "./subitemNav"
import Logo from "../utils/logoNav.svg"
import "../assets/animaciones.css"
import "../assets/animacionDesplegable.css"

export const NavLeft = () => {
    return (
        <div className="bg-fondo h-full w-full shadow-2xl">
            <div className="h-1/9 shadow-xl relative flex justify-center p-7">
                <img src={Logo} alt="Logo" className="w-3xs object-contain" />
            </div>
            <div className="h-8/9">
                {itemsNav.map((item) => (
                    <div key={item.id}>
                        <ItemNav item={item} />
                        <div id={`item-${item["id"]}`} className="hidden containerSubItems">
                            {item.subCat && item.subCat.map((subItem) => <SubitemNav key={subItem.nombre} item={subItem} />)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
