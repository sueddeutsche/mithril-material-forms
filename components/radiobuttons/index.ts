import m from "mithril";
import { DefaultInputAttrs } from "../types";
import Button, { Attrs as ButtonsAttrs } from "../button";


export type OptionValue = {
    title?: string,
    value: string,
    icon?: string,
    disabled?:boolean,
    id?: string
}

export type Attrs = DefaultInputAttrs & ButtonsAttrs & {
    title: string;
    value?: string;
    options: Array<OptionValue>;
    onchange?: (event) => void;
}

export type State = {
    $container: HTMLElement;
    buttons: Array<{ value: string; dom: HTMLElement }>;
}

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
                oncreate: _vnode => (this.$container = _vnode.dom as HTMLElement),
            },
            options.map((option: OptionValue) => {
                const icon = option.icon ?
                    m("span.mmf-icon", {
                        value: option.value,
                    }, option.icon)
                    : undefined;
                
                const label = m("span", { class:  "mmf-radio-label" }, option.title || option.value);
               
                const attrs = {
                    theme,
                    disabled: disabled ? disabled : option.disabled || false,
                    title: option.title || option.value,
                    class: `${option.value === value ? "selected" : ""} mmf-radio-btn`,
                    value: option.value,
                    // track button element and value
                    onclick: () => {
                        if ( disabled || option.disabled) return;
                        this.buttons.forEach(button =>
                            button.dom.classList.toggle("selected", button.value === option.value)
                        );
                        vnode.attrs.onchange(option.value);
                    }
                }
                return m(Button, attrs, icon, label);
            })
        );
    }
} as m.Component<Attrs, State>
