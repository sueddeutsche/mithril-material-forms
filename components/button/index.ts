import m from "mithril";


export type Attrs = {
    disabled?: boolean;
    raised?: boolean;
    class?: string;
    onclick?(event: Event): void;
}

export type State = {
    getClassNames(attrs: Attrs): string;
}


export default {

    getClassNames(attrs: Attrs) {
        const classNames = [];
        classNames.push(attrs.raised ? "mmf-button--raised" : "mmf-button--flat");
        classNames.push(attrs.disabled ? "is-disabled" : "is-enabled");
        if (attrs.class) {
            classNames.push(attrs.class);
        }
        return classNames.join(" ");
    },

    view(vnode) {
        const attrs = {
            disabled: false,
            // onclick is assigned via mithril
            ...vnode.attrs,
            class: this.getClassNames(vnode.attrs)
        };
        return m("button.mmf-button", attrs, vnode.children);
    }

} as m.Component<Attrs, State>;
