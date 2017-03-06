const m = require("mithril");


module.exports = {
    view(vnode) {
        return m("label.mmf-label",
            {
                "for": vnode.attrs.id
            },
            vnode.attrs.title
        );
    }
};
