import m from "mithril";
import { DefaultInputAttrs } from "../types";


const isOptionValue = (option): option is OptionValue => option && option.value !== undefined;

export type OptionValue = {
    title?: string;
    value?: string|number;
    color?: string;
}

export type Option = string|OptionValue;

export type Attrs = DefaultInputAttrs & {
    onblur?: (event) => void;
    onchange: (value: string) => void;
    onfocus?: (event) => void;
    options: Array<Option>;
    value?: string|number;
    optionColors?: Array<{value: Option, status: string, color: string}>
    // status?: string 
}

export type State = {
    $wrapper: HTMLElement;
}

export default {
    view(vnode) {
        const { attrs } = vnode;
        const { theme = "the-default" } = vnode.attrs;

        // Get status by value 
        let status = attrs.optionColors?.find(obj => obj.value === attrs.value)?.status;
        const color = "";

        return m(".mmf-select__wrapper",
            {
                "class": `${theme} ${attrs.disabled === true ? "is-disabled" : "is-enabled"} mmf-select__wrapper--${status}`,
                // "data-color": color,
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
                        // Remove old status
                        this.$wrapper.classList.remove(`mmf-select__wrapper--${status}`);
                        // Get new status by chosen option value
                        status = attrs.optionColors?.find(obj  => obj.value === e.target.value)?.status;
                        // Add new status to classList
                        this.$wrapper.classList.add(`mmf-select__wrapper--${status}`);
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
