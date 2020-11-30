import m from "mithril";
import Select from "../select";
import Label from "../label";
import Errors, { getErrorClass } from "../errors";
import { THEME_DEFAULT } from "../types";
export default {
    view(vnode) {
        var _a;
        const attrs = {
            id: null,
            value: "",
            options: [{ title: "-", value: false }],
            errors: [],
            invertOrder: false,
            description: "",
            ...vnode.attrs
        };
        return m(`.mmf-form.mmf-form--select.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${(_a = attrs.theme) !== null && _a !== void 0 ? _a : THEME_DEFAULT} ${getErrorClass(attrs.errors)}`
        }, m(Label, {
            "class": "mmf-grow-2",
            ...attrs,
            invertOrder: attrs.invertOrder
        }, m(Select, attrs)), m(Errors, attrs), attrs.description && m(".mmf-meta", attrs.description), vnode.children);
    }
};
