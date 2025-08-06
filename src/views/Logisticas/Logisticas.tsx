import { useEffect, useMemo, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchLogisticas } from "../../features/logisticas/listSlice"

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { LuExpand } from "react-icons/lu"

import ButtonCopy from "../../components/ButtonCopy/ButtonCopy"
import ButtonRedirect from "../../components/ButtonRedirect/ButtonRedirect"
import Input from "../../components/Input/Input"
import Select from "../../components/Select/Select"
import Estado from "../../components/Estados/Estados"
import Planes from "../../components/Planes/Planes"
import Paises from "../../components/Paises/Paises"

import { acortarTexto } from "../../utils/funcionesGlobales"

import type { Logistica } from "../../features/logisticas/types"

import iconWorld from "../../assets/iconWorld.svg"
import "./Logisticas.css"
import DetailLogistica from "../DetailLogistica/DetailLogistica"

const Logisticas = () => {
    const dispatch = useAppDispatch()
    const { list: listaLogistica, loadingList, errorList } = useAppSelector((state) => state.logisticas.list)
    const { list: listaPlanes } = useAppSelector((state) => state.planes.list)
    const { list: listaEstados } = useAppSelector((state) => state.estadosLogistica.list)
    const { existente: listaPaises } = useAppSelector((state) => state.paises.list)

    const [search, setSearch] = useState({
        buscador: "",
        plan: "",
        estado: "",
        pais: "",
    })

    const [passwordVisible, setPasswordVisible] = useState<number[]>([]) // lista de IDs visibles

    const mostrarPassword = (did: number) => {
        setPasswordVisible((prev) => (prev.includes(did) ? prev.filter((id) => id !== did) : [...prev, did]))
    }

    const listaFiltrada = useMemo(() => {
        return listaLogistica.filter(
            (item) =>
                (item.nombre.toLowerCase().includes(search.buscador.toLowerCase()) || item.did.toString().includes(search.buscador) || item.url_sistema.toLowerCase().includes(search.buscador)) &&
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
            <DetailLogistica />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5">
                <div className="2xl:col-span-3">
                    <Input id="filtroNombre_logisticas" label="Nombre , ID, Url" value={search.buscador} onChange={(e) => setSearch({ ...search, buscador: e.target.value })} />
                </div>
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

            <div className="mt-7 overflow-auto border border-tito-border-gray rounded-xl">
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
                        {listaFiltrada.map((item: Logistica) => {
                            const isVisible = passwordVisible.includes(item.did)
                            return (
                                <tr key={item.did} className="border-b border-tito-border-gray hover:bg-tito-bg-primary transition-colors">
                                    <td>
                                        <div className="flex items-center gap-3 max-w-45">
                                            <img src={item.url_imagen} alt="" className="bg-white h-10 w-10 rounded-full flex justify-center items-center object-contain" />
                                            <div>
                                                <p className="break-words whitespace-normal text-lg text-wrap leading-5">{item.nombre}</p>
                                                <p className="text-sm">#{item.did}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <Paises codigo={item.pais.codigo_iso} nombre={item.pais.nombre} />
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <img className="h-[20px] w-auto" src={iconWorld} alt="" />
                                            <p className="break-words whitespace-normal w-[180px]">{acortarTexto(item.url_sistema, 25)}</p>
                                            <ButtonRedirect value={item.url_sistema} />
                                            <ButtonCopy value={item.url_sistema} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <p className={`break-words whitespace-normal w-[100px] ${isVisible ? "" : "hidden"}`}>{item.password_soporte}</p>
                                            <p className={`break-words whitespace-normal w-[100px] ${isVisible ? "hidden" : ""}`}>************</p>
                                            <button
                                                title={isVisible ? "Ocultar contraseña" : "Ver contraseña"}
                                                onClick={() => mostrarPassword(item.did)}
                                                className="h-7 min-w-7 hover:bg-tito-gray/20 text-tito-gray rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200"
                                            >
                                                {isVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                                            </button>
                                            <ButtonCopy value={item.password_soporte} />
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
                                    <td>
                                        <Planes plan={item.plan_id.id} color={item.plan_id.color} nombre={item.plan_id.nombre} />
                                    </td>
                                    <td>
                                        <Estado estado={item.estado_logistica_id.id} color={item.estado_logistica_id.color} nombre={item.estado_logistica_id.nombre} />
                                    </td>
                                    <td>
                                        <button title="Ver detalle" className="h-8 min-w-8 hover:bg-tito-gray/20 text-xl text-tito-gray rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200">
                                            <LuExpand />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Logisticas
