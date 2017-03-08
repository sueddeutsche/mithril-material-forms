const m = require("mithril");


module.exports = {
    view(vnode) {
        return m("input.mmf-input",
            {
                id: vnode.attrs.id,
                type: vnode.attrs.type,
                value: vnode.attrs.value,
                onchange: m.withAttr("value", vnode.attrs.onChange),
                onfocus: vnode.attrs.onfocus,
                onblur: vnode.attrs.onblur
            }
        );
    }
};
