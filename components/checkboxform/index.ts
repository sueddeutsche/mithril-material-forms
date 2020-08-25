import m from "mithril";
import Checkbox, { Attrs as CheckboxAttrs } from "../checkbox";
import Label from "../label";
import Errors, { getErrorClass } from "../errors";
import { DefaultFormAttrs } from "../types";


export const defaultOptions = {
    id: null,
    title: "",
    disabled: false,
    value: "",
    errors: [],
    description: "",
    placeholder: "",
    onchange: Function.prototype
};


export type Attrs = CheckboxAttrs & DefaultFormAttrs & {
    invertOrder?: boolean;
}


export default {

    view(vnode) {
        const attrs = { ...defaultOptions, ...vnode.attrs };

        return m(`.mmf-form.mmf-form--checkbox.mmf-form--${attrs.disabled ? "disabled" : "enabled"}`,
            {
                "class": getErrorClass(attrs.errors)
            },
            m(Label,
                {
                    ...attrs,
                    invertOrder: attrs.invertOrder !== true
                },
                m(Checkbox,
                    {
                        id: vnode.attrs.id,
                        disabled: attrs.disabled,
                        value: vnode.attrs.value,
                        onchange: vnode.attrs.onchange,
                        onfocus: vnode.attrs.onfocus,
                        onblur: vnode.attrs.onblur
                    }
                )
            ),
            m(Errors, attrs),
            attrs.description && m(".mmf-meta", attrs.description),
            vnode.children
        );
    }

} as m.Component<Attrs>;
