import { GrHomeRounded } from "react-icons/gr"
import { LuTicket } from "react-icons/lu"
import { IoAdd } from "react-icons/io5"
import { IoIosList } from "react-icons/io"
import { FiUserPlus } from "react-icons/fi"
import { FaRegAddressCard } from "react-icons/fa"
import { LuTruck } from "react-icons/lu"

const navigation = [
    { name: "Inicio", href: "/", icon: <GrHomeRounded className="size-6" /> },
    {
        name: "Ticket",
        href: "",
        icon: <LuTicket className="size-6" />,
        hijos: [
            { name: "Crear ticket", href: "crear-ticket", icon: <IoAdd className="size-6" /> },
            { name: "Listado ticket", href: "listado-tickets", icon: <IoIosList className="size-6" /> },
        ],
    },
    {
        name: "Gestion",
        href: "",
        icon: <FaRegAddressCard className="size-6" />,
        hijos: [
            { name: "Crear usuario", href: "crear-usuario", icon: <FiUserPlus className="size-6" /> },
            { name: "Logisticas", href: "logisticas", icon: <LuTruck className="size-6" /> },
        ],
    },
]

export default navigation
