export function assertDefined<T>(v: T | undefined, message: string): asserts v is T {
    if (v === undefined) {
        throw new Error(message)
    }
}