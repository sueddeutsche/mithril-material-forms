import m from "mithril";
import Select, { Attrs as SelecAttrs } from "../select";
import Label, { Attrs as LabelAttrs } from "../label";
import Errors, { getErrorClass } from "../errors";
import { DefaultFormAttrs } from "../types";


export type Attrs = DefaultFormAttrs & SelecAttrs & LabelAttrs;


export default {
    view(vnode) {
        const attrs = {
            id: null,
            value: "",
            options: [{ title: "-", value: false }],
            errors: [],
            invertOrder: false,
            description: "",
            placeholder: "",
            onchange: Function.prototype,
            ...vnode.attrs
        };

        return m(`.mmf-form.mmf-form--select.mmf-form--${attrs.disabled ? "disabled" : "enabled"}`,
            {
                "class": getErrorClass(attrs.errors)
            },
            m(Label,
                {
                    "class": "mmf-grow-2",
                    ...attrs,
                    invertOrder: attrs.invertOrder !== true
                },
                m(Select, attrs)
            ),
            m(Errors, attrs),
            attrs.description && m(".mmf-meta", attrs.description),
            vnode.children
        );
    }

} as m.Component<Attrs>;

