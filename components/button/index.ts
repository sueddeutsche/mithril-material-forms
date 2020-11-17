import m from "mithril";
import { THEME_DEFAULT } from "../types";


export type Attrs = {
    disabled?: boolean;
    raised?: boolean;
    class?: string;
    /** theme-type, added to classlist */
    theme?: string;
    onclick?(event: Event): void;
}

export type State = {
    getClassNames(attrs: Attrs): string;
}


export default {

    getClassNames(attrs: Attrs) {
        const classNames = [
            "mmf-button",
            attrs.theme ?? THEME_DEFAULT,
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

} as m.Component<Attrs, State>;
