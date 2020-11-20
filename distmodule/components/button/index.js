import m from "mithril";
import { THEME_DEFAULT } from "../types";
export default {
    getClassNames(attrs) {
        var _a;
        const classNames = [
            "mmf-button",
            (_a = attrs.theme) !== null && _a !== void 0 ? _a : THEME_DEFAULT,
            attrs.raised ? "mmf-button--raised" : "mmf-button--flat",
            attrs.disabled ? "is-disabled" : "is-enabled"
        ];
        if (attrs.class) {
            classNames.push(attrs.class);
        }
        return classNames.join(" ");
    },
    view(vnode) {
        const attrs = {
            // onclick is assigned via mithril
            ...vnode.attrs,
            theme: undefined,
            class: this.getClassNames(vnode.attrs)
        };
        return m("button", attrs, vnode.children);
    }
};
