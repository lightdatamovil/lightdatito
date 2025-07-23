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
    const { list: listaLogistica, loadingList, errorList } = useAppSelector((state) => state.logisticas.list)
    const { list: listaPlanes } = useAppSelector((state) => state.planes.list)
    const { list: listaEstados } = useAppSelector((state) => state.estadosLogistica.list)
    const { list: listaPaises } = useAppSelector((state) => state.paises.list)

    const [search, setSearch] = useState({
        nombre: "",
        numero: "",
        plan: "",
        estado: "",
        pais: "",
    })

    const filteredList = useMemo(() => {
        return listaLogistica.filter(
            (item) =>
                item.nombre.toLowerCase().includes(search.nombre.toLowerCase()) &&
                item.did.toString().includes(search.numero) &&
                (search.plan ? item.plan_id.id == parseInt(search.plan) : true) &&
                (search.estado ? item.estado_logistica_id.id == parseInt(search.estado) : true) &&
                (search.pais ? item.pais.id == parseInt(search.pais) : true)
        )
    }, [search, listaLogistica])

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
                    {listaPlanes.map((plan) => (
                        <option key={plan.id} value={plan.id}>
                            {plan.nombre}
                        </option>
                    ))}
                </Select>
                <Select id="filtroEstado_logisticas" label="Estado" value={search.estado} onChange={(e) => setSearch({ ...search, estado: e.target.value })}>
                    <option value="">Todos</option>
                    {listaEstados.map((estado) => (
                        <option key={estado.id} value={estado.id}>
                            {estado.nombre}
                        </option>
                    ))}
                </Select>
                <Select id="filtroPais_logisticas" label="Pais" value={search.pais} onChange={(e) => setSearch({ ...search, pais: e.target.value })}>
                    <option value="">Todos</option>
                    {listaPaises.map((pais) => (
                        <option key={pais.id} value={pais.id}>
                            {pais.nombre}
                        </option>
                    ))}
                </Select>
            </div>

            <div className="mt-10 overflow-auto border border-tito-border-gray rounded-xl">
                <table className="w-full table-auto border-collapse p-5">
                    <thead className="sticky top-0 bg-tito-bg-primary z-10 ">
                        <tr className="text-left font-medium shadow-xl border-b border-tito-border-gray text-tito-gray">
                            <th>Logistica</th>
                            <th>País</th>
                            <th>URL</th>
                            <th>Contraseña</th>
                            <th>Codigo</th>
                            <th>Plan contratado</th>
                            <th>Estado</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody className="bg-tito-bg-secondary font-bold">
                        {filteredList.map((item: Logistica) => (
                            <tr key={item.did} className="border-b border-tito-border-gray hover:bg-tito-bg-primary transition-colors">
                                <td>
                                    <div className="flex items-center gap-3">
                                        <img src={item.url_imagen} alt="" className="bg-white h-10 w-10 rounded-full flex justify-center items-center object-contain" />
                                        <div>
                                            <p className="break-words whitespace-normal text-lg">{item.nombre}</p>
                                            <p className="text-sm leading-none">#{item.did}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <img src="" alt="" className="bg-white h-10 w-10 rounded-full flex justify-center items-center object-contain" />
                                        <div>
                                            <p className="break-words whitespace-normal text-lg">{item.pais.codigo_iso}</p>
                                            <p className="text-sm leading-none font-medium">{item.pais.nombre}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <p className="break-words whitespace-normal">URL</p>
                                        <ButtonCopy value={item.url_sistema} />
                                        <ButtonRedirect value={item.url_sistema} />
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-2/3">
                                            <p className="break-words whitespace-normal">{item.password_soporte}</p>
                                        </div>
                                        <div className="flex-1/3">
                                            <ButtonCopy value={item.password_soporte} />
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-2/3">
                                            <p className="break-words whitespace-normal">{item.codigo}</p>
                                        </div>
                                        <div className="flex-1/3">
                                            <ButtonCopy value={item.codigo} />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.plan_id.nombre}</td>
                                <td>{item.estado_logistica_id.nombre}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Logisticas
