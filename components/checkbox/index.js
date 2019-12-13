const m = require("mithril");


module.exports = {
    view({ attrs }) {
        return m("input.mmf-checkbox",
            {
                id: attrs.id,
                type: "checkbox",
                disabled: attrs.disabled === true,
                checked: attrs.value,
                onchange: e => attrs.onchange(e.target.checked),
                onfocus: attrs.onfocus,
                onblur: attrs.onblur
            }
        );
    }
};
