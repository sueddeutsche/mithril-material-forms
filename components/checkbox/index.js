const m = require("mithril");


module.exports = {
    view(vnode) {
        return m("input.mmf-checkbox",
            {
                id: vnode.attrs.id,
                type: "checkbox",
                checked: vnode.attrs.value,
                onchange: m.withAttr("checked", vnode.attrs.onChange)
            }
        );
    }
};
