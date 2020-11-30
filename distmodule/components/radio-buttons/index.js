import m from "mithril";
export default {
    view(vnode) {
        console.log(vnode);
        const { value, title, options, disabled } = vnode.attrs;
        const { attrs } = vnode; //TODO: needed?
        const key = Math.random();
        return options.map((option) => {
            return m(".mmf-radio-btn", {
                oncreate: _vnode => (this.$container = _vnode.dom),
                class: `${disabled ? "disabled" : ""} ${option.value === value ? "selected" : ""}`,
                onchange: event => {
                    console.log(this.$container);
                    attrs.onchange(event.target.value);
                }
            }, m("input.mmf-radio-input", {
                type: "radio",
                name: `${title}-${key}`,
                id: `${option.value}-${key}`,
                value: `${option.value}-${key}`,
                checked: `${option.value === value ? "checked" : ""}`,
                disabled: option.disabled || disabled ? true : false
            }), m("label.mmf-radio-label", {
                for: `${option.value}-${key}`
            }, option.title || option.value));
        });
    }
};
// export type State = {
//     $wrapper: HTMLElement;
// }
// export default {
//     view(vnode) {
//         const { attrs } = vnode;
//         const { theme = "the-default" } = vnode.attrs;
//         return m(".mmf-select__wrapper",
//             {
//                 "class": `${theme} ${attrs.disabled === true ? "is-disabled" : "is-enabled"}`,
//                 oncreate: _vnode => (this.$wrapper = _vnode.dom as HTMLElement)
//             },
//             m("select.mmf-select",
//                 {
//                     "data-id": attrs.id,
//                     value: attrs.value,
//                     disabled: attrs.disabled,
//                     "class": attrs.class,
//                     onfocus: () => {
//                         this.$wrapper && this.$wrapper.classList.add("has-focus");
//                         attrs.onfocus && attrs.onfocus(vnode);
//                     },
//                     onblur: () => {
//                         this.$wrapper && this.$wrapper.classList.remove("has-focus");
//                         attrs.onblur && attrs.onblur(vnode);
//                     },
//                     // @reminder will always be string, which must be specified in json-schema or else datatype must
//                     // be passed to select-component
//                     onchange: e => attrs.onchange(e.target.value)
//                 },
//                 attrs.options.map(value => {
//                     if (isOptionValue(value)) {
//                         // value must be a string or else is discarded
//                         return m("option", { value: `${value.value}` }, value.title || value.value);
//                     }
//                     return m("option", { value: `${value}` }, value);
//                 })
//             )
//         );
//     }
// } as m.Component<Attrs, State>;
