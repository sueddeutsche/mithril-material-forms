const m = require("mithril");


module.exports = {
    view(vnode) {
        return m("div.mmf-select__wrapper", { oncreate: (vnode) => (this.$wrapper = vnode.dom) },
            m("select.mmf-select",
                {
                    id: vnode.attrs.id,
                    value: vnode.attrs.value,
                    "class": vnode.attrs.class,
                    onfocus: () => {
                        this.$wrapper && this.$wrapper.classList.add("has-focus");
                        vnode.attrs.onfocus && vnode.attrs.onfocus(vnode);
                    },
                    onblur: () => {
                        this.$wrapper && this.$wrapper.classList.remove("has-focus");
                        vnode.attrs.onblur && vnode.attrs.onblur(vnode);
                    },
                    // @reminder will always be string, which must be specified in json-schema or else datatype must
                    // be passed to select-component
                    onchange: m.withAttr("value", vnode.attrs.onchange)
                },
                vnode.attrs.options.map((value) => {
                    const title = value.title || value;
                    value = `${value.value == null ? value : value.value}`; // value must be a string or else is discarded
                    return m("option", { value }, title);
                })
            )
        );
    }
};
