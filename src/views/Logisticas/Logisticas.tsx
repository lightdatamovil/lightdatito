import { useEffect, useMemo, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import ButtonCopy from "../../components/ButtonCopy/ButtonCopy"
import ButtonRedirect from "../../components/ButtonRedirect/ButtonRedirect"
import Input from "../../components/Input/Input"
import Select from "../../components/Select/Select"
import "./Logisticas.css"
import { fetchLogisticas } from "../../features/logisticas/listSlice"
import type { Logistica } from "../../features/logisticas/types"

const Logisticas = () => {
    const dispatch = useAppDispatch()
    const { list, loadingList, errorList } = useAppSelector((state) => state.logisticas.list)
    const [search, setSearch] = useState({
        nombre: "",
        numero: "",
        plan: "",
        estado: "",
        pais: "",
    })

    console.log(list)

    const filteredList = useMemo(() => {
        return list.filter(
            (item) =>
                item.nombre.toLowerCase().includes(search.nombre.toLowerCase()) &&
                item.did.toString().includes(search.numero) &&
                (search.plan ? item.plan_id.id == parseInt(search.plan) : true) &&
                (search.estado ? item.estado_logistica_id.id == parseInt(search.estado) : true) &&
                (search.pais ? item.pais.id == parseInt(search.pais) : true)
        )
    }, [search, list])

    useEffect(() => {
        dispatch(fetchLogisticas())
    }, [dispatch])

    if (loadingList) return <p>Cargando logísticas...</p>
    if (errorList) return <p>Error: {errorList}</p>

    return (
        <div className="global-container flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5">
                <Input id="filtroNombre_logisticas" label="Nombre" value={search.nombre} onChange={(e) => setSearch({ ...search, nombre: e.target.value })} />
                <Input id="filtroNumero_logisticas" label="Numero de logistica" value={search.numero} onChange={(e) => setSearch({ ...search, numero: e.target.value })} />
                <Select id="filtroPlan_logisticas" label="Plan" value={search.plan} onChange={(e) => setSearch({ ...search, plan: e.target.value })}>
                    <option value="">Todos</option>
                    <option value="1">Basico</option>
                    <option value="2">Plus</option>
                    <option value="3">Estandar</option>
                    <option value="4">Premium</option>
                    <option value="5">Gran Logistica</option>
                </Select>
                <Select id="filtroEstado_logisticas" label="Estado" value={search.estado} onChange={(e) => setSearch({ ...search, estado: e.target.value })}>
                    <option value="">Todos</option>
                    <option value="1">Alta</option>
                    <option value="2">Baja</option>
                </Select>
                <Select id="filtroPais_logisticas" label="Pais" value={search.pais} onChange={(e) => setSearch({ ...search, pais: e.target.value })}>
                    <option value="">Todos</option>
                    <option value="1">Argentina</option>
                    <option value="2">Chile</option>
                    <option value="3">Uruguay</option>
                    <option value="4">Colombia</option>
                    <option value="5">Mexico</option>
                    <option value="6">Ecuador</option>
                </Select>
            </div>
            <div className="mt-10 shadow-xl">
                <div className="min-h-14 grid grid-cols-6 sm:grid-cols-9 lg:grid-cols-10 px-3 sm:px-10">
                    <div className="flex items-center">N° de Log</div>
                    <div className="flex items-center col-span-3 sm:col-span-3 lg:col-span-2">Foto y Nombre</div>
                    <div className="hidden lg:flex items-center">URL</div>
                    <div className="hidden sm:flex items-center ">Contraseña</div>
                    <div className="hidden sm:flex items-center ">Codigo</div>

                    <div className="hidden sm:flex items-center justify-center">País</div>
                    <div className="hidden sm:flex items-center justify-center">Plan contratado</div>
                    <div className="hidden sm:flex items-center justify-center">Estado</div>
                    <div className="flex items-center">Detalle</div>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto pe-2 py-7">
                <ul className="flex flex-col gap-7">
                    {filteredList.map((item: Logistica) => {
                        return (
                            <li key={item.did}>
                                <div className="min-h-14 bg-tito-bg-3 rounded-xl grid grid-cols-6 sm:grid-cols-9 lg:grid-cols-10 px-3 sm:px-10 border border-transparent hover:border-white">
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
                                        <ButtonRedirect value={item.url_sistema} />
                                    </div>
                                    <div className="hidden sm:flex items-center gap-2">
                                        <p className="break-words whitespace-normal">{item.password_soporte}</p>
                                        <ButtonCopy value={item.password_soporte} />
                                    </div>
                                    <div className="hidden sm:flex items-center gap-2">
                                        <p className="break-words whitespace-normal">{item.codigo}</p>
                                        <ButtonCopy value={item.codigo} />
                                    </div>
                                    <div className="hidden sm:flex items-center justify-center">{item.pais.nombre}</div>
                                    <div className="hidden sm:flex items-center justify-center">{item.plan_id.nombre}</div>
                                    <div className="hidden sm:flex items-center justify-center">{item.estado_logistica_id.nombre}</div>
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
