const m = require("mithril");


module.exports = {
    view(vnode) {
        return m("input.mmf-checkbox",
            {
                id: vnode.attrs.id,
                type: "checkbox",
                disabled: vnode.attrs.disabled === true,
                checked: vnode.attrs.value,
                onchange: e => vnode.attrs.onchange(e.target.checked)
            }
        );
    }
};
