const m = require("mithril");
const autosize = require("autosize");


module.exports = {

    view(vnode) {
        const attrs = Object.assign({
            id: null,
            value: "",
            rows: 1,
            onblur: Function.prototype,
            onfocus: Function.prototype,
            onchange: Function.prototype,
            oncreate: Function.prototype,
            onbeforeremove: Function.prototype
        }, vnode.attrs);

        return m("textarea", {
            id: attrs.id,
            value: attrs.value,
            rows: attrs.rows,
            onchange: attrs.onchange,
            onblur: attrs.onblur,
            onfocus: attrs.onfocus,
            onupdate: (node) => autosize.update(node.dom),
            oncreate: (node) => {
                attrs.oncreate(node);
                autosize(node.dom);
            },
            onbeforeremove: (node) => {
                attrs.onbeforeremove(node);
                autosize.destroy(node.dom);
            }
        });
    }
};
