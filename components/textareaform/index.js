const m = require("mithril");
const autosize = require("autosize");
const Label = require("../label");


module.exports = {

    oncreate(vnode) {
        this.$form = vnode.dom;
        this.onblur(vnode.attrs.value);
    },

    onfocus() {
        this.$form.classList.remove("hasNoFocus");
        this.$form.classList.add("hasFocus");
    },

    onblur(value) {
        this.$form.classList.remove("hasFocus");
        this.$form.classList.add("hasNoFocus");
        this.updateClasses(value);
    },

    updateClasses(value) {
        const hasValue = value !== "";
        this.$form.classList.remove(hasValue ? "isEmpty" : "isNotEmpty");
        this.$form.classList.add(hasValue === false ? "isEmpty" : "isNotEmpty");
    },

    view(vnode) {
        const attrs = Object.assign({
            id: null,
            title: "",
            value: "",
            errors: [],
            description: "",
            placeholder: "",
            onblur: Function.prototype,
            onfocus: Function.prototype,
            onchange: Function.prototype
        }, vnode.attrs);

        return m(".mmf-textarea-form",
            m(Label, attrs),
            m("textarea", {
                id: vnode.attrs.id,
                value: vnode.attrs.value,
                rows: 1,
                onchange: m.withAttr("value", vnode.attrs.onchange),
                onblur: (e) => {
                    this.onblur(e.target.value);
                    attrs.onblur(e);
                },
                onfocus: (e) => {
                    this.onfocus();
                    attrs.onfocus(e);
                },
                oncreate: (node) => autosize(node.dom),
                onupdate: (node) => autosize.update(node.dom),
                onbeforeremove: (node) => autosize.destroy(node.dom)
            }),
            m("ul", attrs.errors.map((error) =>
                m("li", error)
            )),
            m(".mmf-meta",
                attrs.description
            )
        );
    }
};
