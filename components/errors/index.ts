import m from "mithril";
import getErrorClass from "./getErrorClass";
import { Error } from "../types";


function isVNode(object): object is m.Vnode<Error> {
    return typeof object.tag === "string" && object.attrs != null && typeof object.attrs === "object";
}

function isError(object): object is Error {
    return object && object.message;
}


export { getErrorClass };


export type Attrs = {
    errors: Array<m.Vnode|Error|string>;
}


export default {

    view(vnode) {
        const { errors } = vnode.attrs;

        if (errors == null || errors.length === 0) {
            return "";
        }

        return m("ul.mmf-form__errors",
            errors.map(error => {
                if (isVNode(error)) {
                    return m(`li.mmf-form__error.mmf-form__error--${error.attrs.severity}`, error);
                }

                if (isError(error)) {
                    if (error.severity === "warning") {
                        return m("li.mmf-form__error.mmf-form__error--warning", m.trust(error.message));
                    }
                    return m("li.mmf-form__error.mmf-form__error--error", m.trust(error.message));
                }

                return m("li.mmf-form__error.mmf-form__error--error", m.trust(<string>error));
            })
        );
    }

} as m.Component<Attrs>;
