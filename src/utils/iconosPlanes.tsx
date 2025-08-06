import { TbPointFilled } from "react-icons/tb"
import { FaArrowUp } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6"
import { TiStarOutline } from "react-icons/ti"
import { LuCrown } from "react-icons/lu"
import { IoDiamondOutline } from "react-icons/io5"

type iconMapProps = {
    [key: number]: React.ComponentType
}

type IconosPlanesProps = {
    plan: number
}

const iconMap: iconMapProps = {
    1: FaArrowUp,
    2: FaPlus,
    3: TiStarOutline,
    4: IoDiamondOutline,
    5: LuCrown,
}

export const IconosPlanes = ({ plan, ...props }: IconosPlanesProps) => {
    const Icon = iconMap[plan] || TbPointFilled
    return Icon ? <Icon {...props} /> : null
}
