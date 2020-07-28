import m from "mithril";
import Select, { Option } from "../select";
import Label from "../label";
import Errors, { getErrorClass } from "../errors";


export type Attrs = {
    description?: string;
    disabled?: boolean;
    id?: string;
    placeholder?: string;
    options: Array<string|Option>;
    value?: string|number;
    onchange: (event) => void;
}


export default {
    view(vnode) {
        const attrs = {
            id: null,
            value: "",
            options: [{ title: "-", value: false }],
            errors: [],
            description: "",
            placeholder: "",
            onchange: Function.prototype,
            ...vnode.attrs
        };

        return m(`.mmf-form.mmf-form--select.mmf-form--${attrs.disabled ? "disabled" : "enabled"}`,
            {
                "class": getErrorClass(attrs.errors)
            },
            m(Select, attrs),
            m(Label, Object.assign({ "class": "mmf-grow-2" }, attrs)),
            m(Errors, attrs),
            attrs.description ? m(".mmf-meta", attrs.description) : "",
            vnode.children
        );
    }

} as m.Component<Attrs>;

