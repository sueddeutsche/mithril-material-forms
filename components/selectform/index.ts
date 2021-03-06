import m from "mithril";
import Select, { Attrs as SelecAttrs } from "../select";
import Label, { Attrs as LabelAttrs } from "../label";
import Errors, { getErrorClass } from "../errors";
import { DefaultFormAttrs, THEME_DEFAULT } from "../types";


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
            ...vnode.attrs
        };

        return m(`.mmf-form.mmf-form--select.is-${attrs.disabled ? "disabled" : "enabled"}`,
            {
                "class": `${attrs.theme ?? THEME_DEFAULT} ${getErrorClass(attrs.errors)}`
            },
            m(Label,
                {
                    "class": "mmf-grow-2",
                    ...attrs,
                    invertOrder: attrs.invertOrder
                },
                m(Select, attrs)
            ),
            m(Errors, attrs),
            attrs.description && m(".mmf-meta", attrs.description),
            vnode.children
        );
    }

} as m.Component<Attrs>;

