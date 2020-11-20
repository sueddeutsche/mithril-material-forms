import m from "mithril";
const isOptionValue = (option) => option && option.value !== undefined;
export default {
    view(vnode) {
        const { attrs } = vnode;
        const { theme = "the-default" } = vnode.attrs;
        return m(".mmf-select__wrapper", {
            "class": `${theme} ${attrs.disabled === true ? "is-disabled" : "is-enabled"}`,
            oncreate: _vnode => (this.$wrapper = _vnode.dom)
        }, m("select.mmf-select", {
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
            // @reminder will always be string, which must be specified in json-schema or else datatype must
            // be passed to select-component
            onchange: e => attrs.onchange(e.target.value)
        }, attrs.options.map(value => {
            if (isOptionValue(value)) {
                // value must be a string or else is discarded
                return m("option", { value: `${value.value}` }, value.title || value.value);
            }
            return m("option", { value: `${value}` }, value);
        })));
    }
};
