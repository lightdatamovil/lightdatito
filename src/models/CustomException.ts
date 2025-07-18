export class CustomException extends Error {
    public title: string
    public message: string
    public stackTrace?: string

    constructor(title: string, message: string, stackTrace?: string) {
        super(message)
        this.title = title
        this.message = message
        this.stackTrace = stackTrace
    }
}
