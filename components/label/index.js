const m = require("mithril");


module.exports = {
    view(vnode) {
        return m("label.mmf-label",
            {
                "for": vnode.attrs.id,
                "class": vnode.attrs.class
            },
            vnode.attrs.title
        );
    }
};
