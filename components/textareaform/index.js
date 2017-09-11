const m = require("mithril");
const Textarea = require("../textarea");
const Label = require("../label");

function isEmpty(value) {
    return value == null || value === "";
}

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
        const hasValue = isEmpty(value) === false;
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

        return m(".mmf-form.mmf-form--textarea",
            {
                "class": (attrs.errors && attrs.errors.length > 0) ? "hasError" : "hasNoError"
            },
            m(Label, attrs),
            m(Textarea, {
                id: attrs.id,
                value: attrs.value,
                onchange: m.withAttr("value", attrs.onchange),
                onblur: (e) => {
                    this.onblur(e.target.value);
                    attrs.onblur(e);
                },
                onfocus: (e) => {
                    this.onfocus();
                    attrs.onfocus(e);
                }
            }),
            m("ul.mmf-form__errors", attrs.errors.map((error) =>
                m("li", error)
            )),
            m(".mmf-meta",
                attrs.description
            )
        );
    }
};
