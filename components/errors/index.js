const m = require("mithril");

function isVNode(object) {
    return typeof object.tag === "string" && object.attrs != null && typeof object.attrs === "object";
}


module.exports = {

    getErrorClass: require("./getErrorClass"),

    view(vnode) {
        if (vnode.attrs.errors == null || vnode.attrs.errors.length === 0) {
            return "";
        }

        return m("ul.mmf-form__errors",
            vnode.attrs.errors.map((error) => {
                if (isVNode(error)) {
                    return m(`li.mmf-form__error.mmf-form__error--${error.attrs.severity}`, error);
                }

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
