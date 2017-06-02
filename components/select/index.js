const m = require("mithril");


module.exports = {
    view(vnode) {
        return m("select.mmf-select",
            {
                id: vnode.attrs.id,
                value: vnode.attrs.value,
                class: vnode.attrs.class,
                onfocus: vnode.attrs.onfocus,
                onblur: vnode.attrs.onblur,
                onchange: m.withAttr("value", vnode.attrs.onchange)
            },
            vnode.attrs.options.map((value) => {
                const title = value.title || value;
                value = `${value.value == null ? value : value.value}`; // value must be a string or else is discarded
                return m("option", { value }, title);
            })
        );
    }
};
