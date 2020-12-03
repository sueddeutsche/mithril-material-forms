import m from "mithril";
import RadioButtons from "../radiobuttons";
import Label from "../label";
import Errors, { getErrorClass } from "../errors";
export const defaultOptions = {
    title: "",
    disabled: false,
    theme: "the-default",
    value: "",
    errors: [],
    description: "",
    placeholder: "",
    onchange: Function.prototype
};
export default {
    view(vnode) {
        const attrs = { ...defaultOptions, ...vnode.attrs };
        return m(`.mmf-form.mmf-form--radio-buttons.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${getErrorClass(attrs.errors)} ${attrs.theme}`
        }, m(Label, {
            ...attrs,
        }, m(RadioButtons, {
            value: vnode.attrs.value,
            disabled: vnode.attrs.disabled,
            title: vnode.attrs.title,
            options: vnode.attrs.options,
            onchange: vnode.attrs.onchange
        })), m(Errors, attrs), attrs.description && m(".mmf-meta", attrs.description), vnode.children);
    }
};
