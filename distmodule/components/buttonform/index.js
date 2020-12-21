import { THEME_DEFAULT } from "../types";
import Button from '../button';
import Errors, { getErrorClass } from "../errors";
import Label from "../label";
import m from "mithril";
export const defaultFormOptions = {
    theme: THEME_DEFAULT,
    errors: [],
    description: "",
};
export default {
    view(vnode) {
        const attrs = { ...defaultFormOptions, ...vnode.attrs };
        return m(`.mmf-form.mmf-form--button.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${getErrorClass(attrs.errors)} ${attrs.theme}`
        }, m(Label, { ...attrs }), m(Button, { ...attrs }, vnode.children), m(Errors, attrs), attrs.description && m(".mmf-meta", attrs.description));
    }
};
