const m = require("mithril");
const Textarea = require("../textarea");
const Label = require("../label");
const Errors = require("../errors");


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

    onupdate(vnode) {
        this.updateClasses(vnode.attrs.value);
    },

    view(vnode) {
        const attrs = Object.assign({
            id: null,
            title: "",
            value: "",
            errors: [],
            disabled: false,
            description: "",
            placeholder: "",
            rows: 1,
            instantUpdate: false,
            onblur: Function.prototype,
            onfocus: Function.prototype,
            onchange: Function.prototype
        }, vnode.attrs);

        const disabled = attrs.disabled === true;

        return m(`.mmf-form.mmf-form--textarea.mmf-form--${disabled ? "disabled" : "enabled"}`,
            {
                "class": Errors.getErrorClass(attrs.errors)
            },
            m(Label, attrs),
            m(Textarea, {
                id: attrs.id,
                value: attrs.value,
                disabled,
                instantUpdate: attrs.instantUpdate,
                placeholder: attrs.placeholder,
                rows: attrs.rows,
                // onchange: m.withAttr("value", attrs.onchange),
                onchange: attrs.onchange,
                onblur: e => {
                    this.onblur(e.target.value);
                    attrs.onblur(e);
                },
                onfocus: e => {
                    this.onfocus();
                    attrs.onfocus(e);
                }
            }),
            m(Errors, attrs),
            attrs.description ? m(".mmf-meta", attrs.description) : ""
        );
    }
};
