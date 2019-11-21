const m = require("mithril");


module.exports = {
    value: null,
    hasFocus: false,

    onupdate(vnode) {
        // @prevent redraw of input
        vnode.dom.id = vnode.attrs.id; // updating the pointer dependend attributes outside of mithril
    },

    view({ attrs }) {
        let value = attrs.value;
        if (this.hasFocus && this.value != null) {
            value = this.value; // this will remove any changes applied to this data from "outside"
        }

        this.value = value;

        const inputAttributes = {
            // id: attrs.id, // if the element is pointer sensitive it will be rebuild on pointer updates, loosing focus
            type: attrs.type,
            value,
            disabled: attrs.disabled === true,
            oninput: e => (this.value = e.target.value),
            // @fixme this might trigger updates, but ensures the property is always set (on initial rendering)
            oncreate: vnode => (vnode.dom.id = attrs.id),
            onfocus: event => {
                this.hasFocus = true;
                attrs.onfocus && attrs.onfocus(event);
            },
            onblur: event => {
                this.hasFocus = false;
                attrs.onblur && attrs.onblur(event);
            }
        };

        const updateEvent = attrs.instantUpdate === true ? "onkeyup" : "onchange";
        inputAttributes[updateEvent] = () => attrs.onchange(this.value);

        return m("input.mmf-input", inputAttributes);
    }
};
