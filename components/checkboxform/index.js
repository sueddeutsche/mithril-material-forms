const m = require("mithril");
const Checkbox = require("../checkbox");
const Label = require("../label");
const Errors = require("../errors");


const defaultOptions = {
    id: null,
    title: "",
    disabled: false,
    value: "",
    errors: [],
    description: "",
    placeholder: "",
    onchange: Function.prototype
};


module.exports = {
    view(vnode) {
        const attrs = Object.assign({}, defaultOptions, vnode.attrs);

        return m(`.mmf-form.mmf-form--checkbox.mmf-form--${attrs.disabled ? "disabled" : "enabled"}`,
            {
                "class": Errors.getErrorClass(attrs.errors)
            },
            m(Checkbox,
                {
                    id: vnode.attrs.id,
                    disabled: attrs.disabled,
                    value: vnode.attrs.value,
                    onchange: vnode.attrs.onchange,
                    onfocus: vnode.attrs.onfocus,
                    onblur: vnode.attrs.onblur
                }
            ),
            m(Label, attrs),
            m(Errors, attrs),
            attrs.description ? m(".mmf-meta", attrs.description) : ""
        );
    }
};
