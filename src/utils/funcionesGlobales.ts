export const acortarTexto = (texto: string | null | undefined, maxCaracteres: number = 30): string => {
    if (!texto) return ""
    return texto.length > maxCaracteres ? texto.slice(0, maxCaracteres).trim() + "..." : texto
}
