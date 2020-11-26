import m from "mithril";
import { DefaultInputAttrs } from "../types";


const isOptionValue = (option): option is OptionValue => option && option.value !== undefined;

export type OptionValue = {
    title?: string;
    value?: string|number;
    color?: string;
}

export type Attrs = DefaultInputAttrs & {
    onblur?: (event) => void;
    onchange: (value: string) => void;
    onfocus?: (event) => void;
    options: Array<OptionValue>;
    value?: string|number;
}

export type State = {
    $wrapper: HTMLElement;
}

export default {
    view(vnode) {
        const { attrs } = vnode;
        const { theme = "the-default" } = vnode.attrs;

        // Get status by value 
        const option = attrs.options?.find(o => o.value === attrs.value);

        return m(".mmf-select__wrapper",
            {
                "class": `${theme} ${attrs.disabled === true ? "is-disabled" : "is-enabled"} ${option?.color ? "with-color": ""}`,
                "style": option?.color ? `--select-icon-color: ${option?.color}` : "",
                oncreate: _vnode => (this.$wrapper = _vnode.dom as HTMLElement)
            },
            m("select.mmf-select",
                {
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
                    onchange: (e) => {
                        const option = attrs.options?.find(o => o.value === e.target.value);
                        this.$wrapper.style.setProperty("--select-icon-color", option?.color);
                        this.$wrapper.classList.toggle("with-color", option?.color != null);
                        attrs.onchange(e.target.value)
                    }
                },

                attrs.options.map(value => {
                    if (isOptionValue(value)) {
                        // value must be a string or else is discarded
                        return m("option", { value: `${value.value}` }, value.title || value.value);
                    }
                    return m("option", { value: `${value}` }, value);
                })
            )
        );
    }

} as m.Component<Attrs, State>;
