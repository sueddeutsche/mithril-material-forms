import m from "mithril";


export type Attrs = {
    /** id of target input-element */
    id?: string;
    /** additional classnames */
    class?: string;
    /** label value */
    title?: string;
    /** set to true, if label-title should be placed last */
    invertOrder?: boolean;
}


export default {
    view(vnode) {
        const { invertOrder, title, class: classNames } = vnode.attrs;
        if (invertOrder === true) {
            return m("label.order--label-last",
                {
                    "class": classNames
                },
                vnode.children,
                title && m("span.mmf-label", title)
            );
        }

        return m("label.order--label-first",
            {
                "class": classNames
            },
            title && m("span.mmf-label", title),
            vnode.children
        );
    }

} as m.Component<Attrs>;
