const m = require("mithril");
const Select = require("../select");
const Label = require("../label");


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

        return m(".mmf-form.mmf-form--select",
            {
                "class": (attrs.errors && attrs.errors.length > 0) ? "hasError" : "hasNoError"
            },
            m(Select, attrs),
            m(Label, Object.assign({ "class": "mmf-grow-2" }, attrs)),
            m("ul.mmf-form__errors", attrs.errors.map((error) =>
                m("li", error)
            )),
            m(".mmf-meta",
                attrs.description
            )
        );
    }
};
