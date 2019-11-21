const m = require("mithril");


module.exports = {
    view(vnode) {
        return m("div.mmf-select__wrapper",
            {
                "class": vnode.attrs.disabled === true ? "is-disabled" : "is-enabled",
                oncreate: _vnode => (this.$wrapper = _vnode.dom)
            },
            m("select.mmf-select",
                {
                    id: vnode.attrs.id,
                    value: vnode.attrs.value,
                    disabled: vnode.attrs.disabled,
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
                    onchange: e => vnode.attrs.onchange(e.target.value)
                },
                vnode.attrs.options.map(value => {
                    const title = value.title || value;
                    // value must be a string or else is discarded
                    value = `${value.value == null ? value : value.value}`;
                    return m("option", { value }, title);
                })
            )
        );
    }
};
