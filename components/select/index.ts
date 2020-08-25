import m from "mithril";
import { DefaultInputAttrs } from "../types";


const isOptionValue = (option): option is OptionValue => option && option.value !== undefined;


export type OptionValue = {
    title?: string;
    value?: string|number;
}

export type Option = string|OptionValue;

export type Attrs = DefaultInputAttrs & {
    onblur?: (event) => void;
    onchange: (value: string) => void;
    onfocus?: (event) => void;
    options: Array<Option>;
    value?: string|number;
}

export type State = {
    $wrapper: HTMLElement;
}


export default {
    view(vnode) {
        return m(".mmf-select__wrapper",
            {
                "class": vnode.attrs.disabled === true ? "is-disabled" : "is-enabled",
                oncreate: _vnode => (this.$wrapper = _vnode.dom as HTMLElement)
            },
            m("select.mmf-select",
                {
                    "data-id": vnode.attrs.id,
                    value: vnode.attrs.value,
                    disabled: vnode.attrs.disabled,
                    "class": vnode.attrs.class,
                    onfocus: () => {
                        this.$wrapper && this.$wrapper.classList.add("has-focus");
                        vnode.attrs.onfocus && vnode.attrs.onfocus(vnode);
                    },
                    onblur: () => {
                        this.$wrapper && this.$wrapper.classList.remove("has-focus");
                        vnode.attrs.onblur && vnode.attrs.onblur(vnode);
                    },
                    // @reminder will always be string, which must be specified in json-schema or else datatype must
                    // be passed to select-component
                    onchange: e => vnode.attrs.onchange(e.target.value)
                },

                vnode.attrs.options.map(value => {
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
