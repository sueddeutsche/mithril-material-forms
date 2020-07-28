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
        const { invertOrder, id, title, class: classNames } = vnode.attrs;
        if (invertOrder === true) {
            return m("label.mmf-label",
                {
                    "for": id,
                    "class": classNames
                },
                vnode.children,
                m("span", title)
            );
        }

        return m("label.mmf-label",
            {
                "for": id,
                "class": classNames
            },
            m("span", title),
            vnode.children
        );
    }

} as m.Component<Attrs>;
