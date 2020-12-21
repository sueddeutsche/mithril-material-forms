import m from "mithril";
import RadioButtons from "../radiobuttons";
import Label from "../label";
import Errors, { getErrorClass } from "../errors";
import { THEME_DEFAULT } from "../types";
export const defaultFormOptions = {
    theme: THEME_DEFAULT,
    errors: [],
    description: "",
};
export default {
    view(vnode) {
        const attrs = { ...defaultFormOptions, ...vnode.attrs };
        return m(`.mmf-form.mmf-form--radio-buttons.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${getErrorClass(attrs.errors)} ${attrs.theme}`
        }, m(Label, { ...attrs }), m(RadioButtons, { ...attrs }), m(Errors, attrs), attrs.description && m(".mmf-meta", attrs.description), vnode.children);
    }
};
