const m = require("mithril");
const Select = require("../select");
const Label = require("../label");
const Errors = require("../errors");


module.exports = {
    view(vnode) {
        const attrs = Object.assign({
            id: null,
            value: "",
            options: [{ title: "-", value: false }],
            errors: [],
            description: "",
            placeholder: "",
            onchange: Function.prototype
        }, vnode.attrs);

        return m(`.mmf-form.mmf-form--select.mmf-form--${attrs.disabled ? "disabled" : "enabled"}`,
            {
                "class": Errors.getErrorClass(attrs.errors)
            },
            m(Select, attrs),
            m(Label, Object.assign({ "class": "mmf-grow-2" }, attrs)),
            m(Errors, attrs),
            attrs.description ? m(".mmf-meta", attrs.description) : ""
        );
    }
};
