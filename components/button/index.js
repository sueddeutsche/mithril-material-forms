const m = require("mithril");


module.exports = {

    getClassNames(attrs) {
        const classNames = [];
        classNames.push(attrs.raised ? "mmf-button--raised" : "mmf-button--flat");
        classNames.push(attrs.disabled ? "is-disabled" : "is-enabled");
        if (attrs.class) {
            classNames.push(attrs.class);
        }
        return classNames.join(" ");
    },

    view(vnode) {
        const attrs = Object.assign({
            disabled: false,
            onclick: event => vnode.attrs.onclick(event)
        }, vnode.attrs);

        attrs.class = this.getClassNames(vnode.attrs);

        return m("button.mmf-button", attrs, vnode.children);
    }
};
