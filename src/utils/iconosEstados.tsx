import { TbPointFilled } from "react-icons/tb"
import { FaRegThumbsUp, FaRegThumbsDown, FaRegHandPaper } from "react-icons/fa"

type iconMapProps = {
    [key: number]: React.ComponentType
}

type IconosEstadosProps = {
    estado: number
}

const iconMap: iconMapProps = {
    1: FaRegThumbsDown,
    2: FaRegHandPaper,
    3: FaRegThumbsUp,
}

export const IconosEstados = ({ estado, ...props }: IconosEstadosProps) => {
    const Icon = iconMap[estado] || TbPointFilled
    return Icon ? <Icon {...props} /> : null
}
