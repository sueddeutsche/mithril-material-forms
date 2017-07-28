const m = require("mithril");


module.exports = {
    value: null,
    hasFocus: false,

    updateValue(value) {
        this.value = value;
    },

    onupdate(vnode) {
        // @prevent redraw of input
        // updating the pointer dependend attributes outside of mithril
        vnode.dom.id = vnode.attrs.id;
    },

    view(vnode) {
        let value = vnode.attrs.value;
        if (this.hasFocus & this.value != null) {
            // this will remove any changes applied to this data from "outside"
            value = this.value;
        }

        this.value = value;

        return m("input.mmf-input",
            {
                // if the element is pointer sensitive it will be rebuild on pointer updates, loosing focus
                // id: vnode.attrs.id,
                type: vnode.attrs.type,
                value,
                oninput: m.withAttr("value", (currentValue) => (this.value = currentValue)),
                onchange: m.withAttr("value", vnode.attrs.onChange),
                onfocus: (event) => {
                    this.hasFocus = true;
                    vnode.attrs.onfocus && vnode.attrs.onfocus(event);
                },
                onblur: (event) => {
                    this.hasFocus = false;
                    vnode.attrs.onblur && vnode.attrs.onblur(event);
                }
            }
        );
    }
};
