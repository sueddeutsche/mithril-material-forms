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
            options: [{ title: "Keine Optionen angegeben", value: false }],
            errors: [],
            description: "",
            placeholder: "",
            onchange: Function.prototype
        }, vnode.attrs);

        return m(".mmf-textarea-form",
            m(Label, attrs),
            m("textarea", {
                id: vnode.attrs.id,
                onchange: m.withAttr("value", vnode.attrs.onchange),
                value: vnode.attrs.value,
                onblur: m.withAttr("value", (value) => this.onblur(value)),
                onfocus: () => this.onfocus(),
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
