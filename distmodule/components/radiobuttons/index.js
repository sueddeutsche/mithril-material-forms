import m from "mithril";
import Button from "../button";
export default {
    oncreate(vnode) {
        this.buttons = Array.from(vnode.dom.querySelectorAll("button"))
            .map(dom => ({ value: dom.value, dom: dom }));
    },
    view(vnode) {
        const { value, options, disabled, theme } = vnode.attrs;
        return m(".mmf-radio-btn-container", {
            disabled,
            class: theme || "",
            oncreate: _vnode => (this.$container = _vnode.dom),
        }, options.map((option) => {
            const icon = option.icon ?
                m("span.mmf-icon", {
                    value: option.value,
                }, option.icon)
                : undefined;
            const label = m("span", { class: "mmf-radio-label" }, option.title || option.value);
            const attrs = {
                theme,
                disabled: disabled ? disabled : option.disabled || false,
                title: option.title || option.value,
                class: `${option.value === value ? "selected" : ""} mmf-radio-btn`,
                value: option.value,
                // track button element and value
                onclick: () => {
                    if (disabled || option.disabled)
                        return;
                    this.buttons.forEach(button => button.dom.classList.toggle("selected", button.value === option.value));
                    vnode.attrs.onchange(option.value);
                }
            };
            return m(Button, attrs, icon, label);
        }));
    }
};
