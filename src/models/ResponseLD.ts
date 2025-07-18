import { CustomException } from "./CustomException"

export class ResponseLD<T> {
    /** The response status */
    public success?: boolean

    /** The response body */
    public body?: T

    /** The response message */
    public message: string

    constructor(message: string, success?: boolean, body?: T) {
        this.message = message
        this.success = success
        this.body = body
    }

    /**
     * Create a ResponseLD from a raw JSON object
     * @param json - raw JSON
     * @param fromJsonT - function to deserialize the generic body
     */
    static fromJson<T>(json: unknown, fromJsonT: (body: unknown) => T): ResponseLD<T> {
        try {
            if (typeof json !== "object" || json === null || !("message" in json)) {
                throw new Error("Respuesta inválida")
            }

            const raw = json as { success?: boolean; message: string; body?: unknown }

            const success = typeof raw.success === "boolean" ? raw.success : undefined

            const message = typeof raw.message === "string" ? raw.message : ""

            const body = "body" in raw ? fromJsonT(raw.body) : undefined

            return new ResponseLD<T>(message, success, body)
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new CustomException("Error in response", `Error parsing response: ${error.message}`, error.stack)
            }
            throw error
        }
    }
}
