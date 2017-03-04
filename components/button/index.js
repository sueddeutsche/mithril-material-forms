const m = require("mithril");


module.exports = {
    view(vnode) {
        return m("button.mmf-button",
            Object.assign({
                onclick: vnode.attrs.onClick
            }, vnode.attrs),
            vnode.children
        );
    }
};
