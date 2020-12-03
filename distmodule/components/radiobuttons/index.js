import m from "mithril";
export default {
    view(vnode) {
        const { value, options, disabled } = vnode.attrs;
        return m(".mmf-radio-btn-container", {
            disabled,
            oncreate: _vnode => (this.$container = _vnode.dom),
        }, options.map((option) => {
            const icon = option.icon ?
                m("span.mmf-icon", {
                    value: option.value,
                }, option.icon)
                : undefined;
            return m(".mmf-radio-btn", {
                class: `${option.value === value ? "selected" : ""}`,
                value: option.value,
                disabled: disabled ? disabled : option.disabled || false,
                onclick: event => {
                    var _a, _b, _c, _d;
                    event.target.focus();
                    if (disabled || option.disabled)
                        return;
                    Array.from((_a = this.$container) === null || _a === void 0 ? void 0 : _a.children).forEach(el => el.classList.remove("selected"));
                    (_d = (_c = (_b = event.target) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.classList) === null || _d === void 0 ? void 0 : _d.add("selected");
                    vnode.attrs.onchange(event.target.value || event.target.getAttribute("value"));
                },
            }, icon, m("label.mmf-label", {
                disabled: disabled ? disabled : option.disabled || false,
                value: option.value,
            }, option.title || option.value));
        }));
    }
};
