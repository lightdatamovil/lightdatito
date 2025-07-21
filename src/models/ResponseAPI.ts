export default interface ResponseApi<T> {
    body: T
    message: string
    success: boolean
}
