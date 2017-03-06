const m = require("mithril");
const Input = require("../input");
const Label = require("../label");
const sanitizeValue = require("./sanitizeValue");

const TYPES = {
    string: "text",
    integer: "number",
    number: "number"
};


module.exports = {
    oncreate(vnode) {
        this.$form = vnode.dom;
        this.updateClasses(vnode.attrs.value || "");
        this.onblur(vnode.attrs.value);
    },

    updateClasses(value) {
        const hasValue = value !== "";
        this.$form.classList.remove(hasValue ? "isEmpty" : "isNotEmpty");
        this.$form.classList.add(hasValue === false ? "isEmpty" : "isNotEmpty");
    },

    onfocus() {
        this.$form.classList.add("hasFocus");
        this.$form.classList.remove("hasNoFocus");
    },

    onblur(value) {
        this.$form.classList.add("hasNoFocus");
        this.$form.classList.remove("hasFocus");
        this.updateClasses(value);
    },

    view(vnode) {
        const inputType = TYPES[vnode.attrs.type] || "text";
        const attrs = Object.assign({
            id: null,
            title: "",
            value: "",
            errors: [],
            description: "",
            placeholder: "",
            onchange: Function.prototype
        }, vnode.attrs);
        const view = m(".mmf-input-form",
            {
                "class": attrs.errors.length > 0 ? "hasError" : "hasNoError"
            },
            m(Label, attrs),
            m(Input,
                {
                    type: inputType,
                    id: attrs.id,
                    onChange: (value) => (attrs.onchange && attrs.onchange(sanitizeValue(inputType, value))),
                    value: attrs.value,
                    onFocus: () => this.onfocus(),
                    onBlur: (e) => this.onblur(e.target.value)
                }
            ),
            m("ul", attrs.errors.map((error) =>
                m("li", error)
            )),
            m(".mmf-meta",
                attrs.description
            )
        );

        return view;
    }
};
