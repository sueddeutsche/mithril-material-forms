/**
 * returns class for existing errors, warnings or no-error
 */
export default function getErrorClass(errors: Array<{ severity?: string }|string>): string {
    if (errors == null || errors.length === 0) {
        return "no-error";
    }

    for (let i = 0, l = errors.length; i < l; i += 1) {
        const error = errors[i];
        if (typeof error === "string") {
            return "has-error";
        } else if (error && error.severity !== "warning") {
            return "has-error";
        }
    }

    return "has-warning";
}
