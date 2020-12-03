import m from "mithril";


export type OptionValue = {
    title?: string,
    value: string,
    icon?: string,
    disabled?:boolean,
    id?: string
}

export type Attrs = {
    title: string,
    value?: string,
    options: Array<OptionValue>
    disabled?: boolean,
    onchange?: (event) => void;
    onblur?: (event) => void;
    onfocus?: (event) => void;
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
        const { value, options, disabled } = vnode.attrs;
        return m(".mmf-radio-btn-container", {
                disabled,
                oncreate: _vnode => (this.$container = _vnode.dom as HTMLElement),
            },
            options.map((option: OptionValue) => {
                const icon = option.icon ?
                    m("span.mmf-icon", {
                        value: option.value,
                    }, option.icon)
                    : undefined;

                return m("button.mmf-radio-btn",
                    {
                        class: `${option.value === value ? "selected" : ""}`,
                        value: option.value,
                        disabled: disabled ? disabled : option.disabled || false,
                        // track button element and value
                        onclick: () => {
                            if ( disabled || option.disabled) return;
                            this.buttons.forEach(button =>
                                button.dom.classList.toggle("selected", button.value === option.value)
                            );
                            vnode.attrs.onchange(option.value);
                        },
                    },
                    icon,
                    m("label.mmf-radio-label", {
                        disabled: disabled ? disabled : option.disabled || false,
                        value: option.value,
                    }, option.title || option.value)
                );
            })
        );
    }
} as m.Component<Attrs, State>
