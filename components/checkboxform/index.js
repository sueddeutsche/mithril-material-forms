const m = require("mithril");
const Checkbox = require("../checkbox");
const Label = require("../label");


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
                "class": attrs.errors.length > 0 ? "hasError" : "hasNoError"
            },
            m(Checkbox,
                {
                    id: vnode.attrs.id,
                    value: vnode.attrs.value,
                    onChange: vnode.attrs.onchange
                }
            ),
            m(Label, attrs),
            m("ul.mmf-form__errors", attrs.errors.map((error) =>
                m("li", error)
            )),
            m(".mmf-meta",
                attrs.description
            )
        );
    }
};
