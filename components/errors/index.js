const m = require("mithril");


module.exports = {

    getErrorClass: require("./getErrorClass"),

    view(vnode) {
        if (vnode.attrs.errors == null || vnode.attrs.errors.length === 0) {
            return "";
        }

        return m("ul.mmf-form__errors",
            vnode.attrs.errors.map((error) => {
                if (error && typeof error === "object") {
                    if (error.severity === "warning") {
                        return m("li.mmf-form__error.mmf-form__error--warning", m.trust(error.message));
                    }
                    return m("li.mmf-form__error.mmf-form__error--error", m.trust(error.message));
                }
                return m("li.mmf-form__error.mmf-form__error--error", m.trust(error));
            })
        );
    }
};
