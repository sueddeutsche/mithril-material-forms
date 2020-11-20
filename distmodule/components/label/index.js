import m from "mithril";
export default {
    view(vnode) {
        const { invertOrder, title, class: classNames } = vnode.attrs;
        if (invertOrder === true) {
            return m("label.order--label-last", {
                "class": classNames
            }, vnode.children, title && m("span.mmf-label", title));
        }
        return m("label.order--label-first", {
            "class": classNames
        }, title && m("span.mmf-label", title), vnode.children);
    }
};
