const m = require("mithril");


module.exports = {
    view(vnode) {
        return m("button.mmf-button",
            Object.assign({
                "class": vnode.attrs.raised ? "mmf-button--raised" : "mmf-button--flat",
                onclick: vnode.attrs.onClick
            }, vnode.attrs),
            vnode.children
        );
    }
};
