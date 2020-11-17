import m from "mithril";
import { Error } from "../types";


function isVNode(object): object is m.Vnode<Error> {
    return typeof object.tag === "string" && object.attrs != null && typeof object.attrs === "object";
}


/**
 * returns class for existing errors, warnings or no-error
 */
export default function getErrorClass(errors: Array<Error|string|m.Vnode<Error>>): string {
    if (errors == null || errors.length === 0) {
        return "no-error";
    }

    for (let i = 0, l = errors.length; i < l; i += 1) {
        const error = errors[i];
        if (isVNode(error) || typeof error === "string") {
            return "has-error";
        } else if (error && error.severity !== "warning") {
            return "has-error";
        }
    }

    return "has-warning";
}
