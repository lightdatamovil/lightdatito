import ButtonCopy from "../../components/ButtonCopy/ButtonCopy"
import Input from "../../components/Input/Input"
import Select from "../../components/Select/Select"
import data from "../../utils/logisticas.json"
import "./Logisticas.css"

const Logisticas = () => {
    return (
        <div className="global-container flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5">
                <Input id="filtroNombre_logisticas" label="Nombre" />
                <Input id="filtroNumero_logisticas" label="Numero de logistica" />
                <Select id="filtroPlan_logisticas" label="Plan">
                    <option value="">Todos</option>
                    <option value="1">Basico</option>
                    <option value="2">Plus</option>
                    <option value="3">Estandar</option>
                    <option value="4">Premium</option>
                    <option value="5">Gran Logistica</option>
                </Select>
                <Select id="filtroEstado_logisticas" label="Estado">
                    <option value="">Todos</option>
                    <option value="1">Alta</option>
                    <option value="2">Baja</option>
                </Select>
                <Select id="filtroPais_logisticas" label="Pais">
                    <option value="">Todos</option>
                    <option value="1">Argentina</option>
                    <option value="2">Chile</option>
                    <option value="3">Uruguay</option>
                    <option value="4">Colombia</option>
                    <option value="5">Mexico</option>
                    <option value="6">Ecuador</option>
                </Select>
            </div>
            <div></div>
            <div className="flex-1 mt-10 overflow-y-auto pe-2 py-2">
                <ul className="flex flex-col gap-7">
                    {data.map((item) => {
                        return (
                            <li key={item.did}>
                                <div className="min-h-14 bg-tito-bg-3 rounded-xl grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-9 px-3 sm:px-10 hover:border border-white">
                                    <div className="flex items-center gap-3">
                                        {item.did}
                                        <ButtonCopy value={item.did.toString()} />
                                    </div>
                                    <div className="flex items-center gap-3 col-span-3 sm:col-span-3 lg:col-span-2">
                                        <img src={item.url_imagen} alt="" className="bg-white h-10 w-10 rounded-full flex justify-center items-center object-contain" />
                                        <p className="break-words whitespace-normal">{item.nombre}</p>
                                    </div>
                                    <div className="hidden lg:flex items-center gap-2">
                                        <p className="break-words whitespace-normal">URL</p>
                                        <ButtonCopy value={item.url_sistema} />
                                    </div>
                                    <div className="hidden sm:flex justify-around items-center gap-2">
                                        <p className="break-words whitespace-normal">{item.codigo}</p>
                                        <ButtonCopy value={item.codigo} />
                                    </div>
                                    <div className="hidden sm:flex items-center justify-center">{item.pais_id}</div>
                                    <div className="hidden sm:flex items-center justify-center">{item.plan_id}</div>
                                    <div className="hidden sm:flex items-center justify-center">{item.estado_logistica_id}</div>
                                    <div className="flex items-center"></div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Logisticas
