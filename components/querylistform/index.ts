import m from "mithril";
import QueryList, { Attrs as QueryListAttrs } from "../querylist";
import Label, { Attrs as LabelAttrs } from "../label";
import Errors, { getErrorClass } from "../errors";
import { DefaultFormAttrs, THEME_DEFAULT } from "../types";


export type Attrs = DefaultFormAttrs & QueryListAttrs & LabelAttrs;


export default {
    view(vnode) {
        const attrs = {
            id: null,
            value: "",
            errors: [],
            invertOrder: false,
            description: "",
            ...vnode.attrs
        };

        return m(`.mmf-form.mmf-form--query-list.is-${attrs.disabled ? "disabled" : "enabled"}`,
            {
                "class": `${attrs.theme ?? THEME_DEFAULT} ${getErrorClass(attrs.errors)}`
            },
            m(Label,
                {
                    "class": "mmf-grow-2",
                    ...attrs,
                    invertOrder: attrs.invertOrder
                },
                m(QueryList, attrs)
            ),
            m(Errors, attrs),
            attrs.description && m(".mmf-meta", attrs.description),
            vnode.children
        );
    }

} as m.Component<Attrs>;

