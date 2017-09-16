const m = require("mithril");
const Checkbox = require("../checkbox");
const Label = require("../label");
const Errors = require("../errors");


module.exports = {
    view(vnode) {
        const attrs = Object.assign({
            id: null,
            title: "",
            value: "",
            errors: [],
            description: "",
            placeholder: "",
            onchange: Function.prototype
        }, vnode.attrs);

        return m(".mmf-form.mmf-form--checkbox",
            {
                "class": Errors.getErrorClass(attrs.errors)
            },
            m(Checkbox,
                {
                    id: vnode.attrs.id,
                    value: vnode.attrs.value,
                    onChange: vnode.attrs.onchange
                }
            ),
            m(Label, attrs),
            m(Errors, attrs),
            attrs.description ? m(".mmf-meta", attrs.description) : ""
        );
    }
};
