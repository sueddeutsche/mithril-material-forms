import m from "mithril";
import Switch from "../switch";
import Label from "../label";
import Errors, { getErrorClass } from "../errors";
export const defaultOptions = {
    id: null,
    title: "",
    disabled: false,
    theme: "the-default",
    value: "",
    errors: [],
    description: "",
    onchange: Function.prototype
};
export default {
    view(vnode) {
        const attrs = { ...defaultOptions, ...vnode.attrs };
        return m(`.mmf-form.mmf-form--switch.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${getErrorClass(attrs.errors)} ${attrs.theme}`
        }, m(Label, {
            ...attrs,
            invertOrder: attrs.invertOrder !== true
        }, m(Switch, {
            id: vnode.attrs.id,
            disabled: attrs.disabled,
            theme: attrs.theme,
            value: vnode.attrs.value,
            onchange: vnode.attrs.onchange,
            onfocus: vnode.attrs.onfocus,
            onblur: vnode.attrs.onblur
        })), m(Errors, attrs), attrs.description && m(".mmf-meta", attrs.description), vnode.children);
    }
};
