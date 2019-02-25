const m = require("mithril");
const autosize = require("autosize");


module.exports = {

    onupdate(vnode) {
        autosize.update(vnode.dom);
    },

    view(vnode) {
        const attrs = Object.assign({
            id: null,
            value: "",
            rows: 1,
            instantUpdate: false,
            onblur: Function.prototype,
            onfocus: Function.prototype,
            onchange: Function.prototype,
            oncreate: Function.prototype,
            onbeforeremove: Function.prototype
        }, vnode.attrs);

        const textareaAttributes = {
            id: attrs.id,
            value: attrs.value,
            rows: attrs.rows,
            onblur: attrs.onblur,
            onfocus: attrs.onfocus,
            onupdate: (node) => autosize.update(node.dom),
            oncreate: (node) => {
                attrs.oncreate(node);
                autosize(node.dom);
                autosize.update(vnode.dom);
            },
            onbeforeremove: (node) => {
                attrs.onbeforeremove(node);
                autosize.destroy(node.dom);
            }
        };

        const updateEvent = attrs.instantUpdate === true ? "onkeyup" : "onchange";
        textareaAttributes[updateEvent] = attrs.onchange;

        return m("textarea.mmf-textarea", textareaAttributes);
    }
};
