import m from "mithril";
import { DefaultInputAttrs } from "../types";


const isOptionValue = (option): option is OptionValue => option && option.value !== undefined;
const transformOptions = (options: Option[]): OptionValue[] => {
    return options.map(option => typeof option === "string" ? { value: option} : option);
}

export type OptionValue = {
    title?: string;
    value: string|number;
    color?: string;
};

export type Option = OptionValue | string;

export type Attrs = DefaultInputAttrs & {
    onblur?: (event) => void;
    onchange?: Function | {(value: string): void};
    onfocus?: (event) => void;
    options: Array<Option>;
    value?: string|number;
}

export type State = {
    $wrapper: HTMLElement;
    $icon: HTMLElement;
}

export default {
    view(vnode) {
        const { attrs } = vnode;
        const { theme = "the-default" } = vnode.attrs;

        const option = transformOptions(attrs.options)?.find(o => o.value === attrs.value);
        const activeClass = attrs.disabled === true ? "is-disabled" : "is-enabled";

        return m(".mmf-select__wrapper",
            {
                "class": `${theme} ${activeClass} ${option?.color ? "with-color": ""}`,
                oncreate: _vnode => (this.$wrapper = _vnode.dom as HTMLElement)
            },
            m("span.select-icon",
            {
                style: `background-color: ${option?.color}`,
                oncreate: _vnode => ( this.$icon = _vnode.dom as HTMLElement)
            }),
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
                    onchange: (e) => {
                        const option = transformOptions(attrs.options)?.find(o => o.value === e.target.value);
                        this.$wrapper.classList.toggle("with-color", option?.color != null);
                        this.$icon.style.setProperty("background-color", option?.color);
                        if (attrs.onchange) attrs.onchange(e.target.value)
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
