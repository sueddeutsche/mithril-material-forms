import m from "mithril";
const isOptionValue = (option) => option && option.value !== undefined;
const transformOptions = (options) => {
    return options.map(option => typeof option === "string" ? { value: option } : option);
};
export default {
    view(vnode) {
        var _a;
        const { attrs } = vnode;
        const { theme = "the-default" } = vnode.attrs;
        const option = (_a = transformOptions(attrs.options)) === null || _a === void 0 ? void 0 : _a.find(o => o.value === attrs.value);
        const activeClass = attrs.disabled === true ? "is-disabled" : "is-enabled";
        return m(".mmf-select__wrapper", {
            "class": `${theme} ${activeClass} ${(option === null || option === void 0 ? void 0 : option.color) ? "with-color" : ""}`,
            oncreate: _vnode => (this.$wrapper = _vnode.dom)
        }, m("span.select-icon", {
            style: `background-color: ${option === null || option === void 0 ? void 0 : option.color}`,
            oncreate: _vnode => (this.$icon = _vnode.dom)
        }), m("select.mmf-select", {
            "data-id": attrs.id,
            value: attrs.value,
            disabled: attrs.disabled,
            "class": attrs.class,
            onfocus: () => {
                this.$wrapper && this.$wrapper.classList.add("has-focus");
                attrs.onfocus && attrs.onfocus(vnode);
            },
            onblur: () => {
                this.$wrapper && this.$wrapper.classList.remove("has-focus");
                attrs.onblur && attrs.onblur(vnode);
            },
            onchange: (e) => {
                var _a;
                const option = (_a = transformOptions(attrs.options)) === null || _a === void 0 ? void 0 : _a.find(o => o.value === e.target.value);
                this.$wrapper.classList.toggle("with-color", (option === null || option === void 0 ? void 0 : option.color) != null);
                this.$icon.style.setProperty("background-color", option === null || option === void 0 ? void 0 : option.color);
                if (attrs.onchange)
                    attrs.onchange(e.target.value);
            }
        }, attrs.options.map(value => {
            if (isOptionValue(value)) {
                // value must be a string or else is discarded
                return m("option", { value: `${value.value}` }, value.title || value.value);
            }
            return m("option", { value: `${value}` }, value);
        })));
    }
};
