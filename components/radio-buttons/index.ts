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
    onchange?: (event) => void; // TODO?!
    onblur?: (event) => void;
    onfocus?: (event) => void;
}

export type State = {
    $container: HTMLElement;
}

export default {
    view(vnode) {
        const { value, options, disabled } = vnode.attrs;
        const selectToggle = (event) => {
            Array.from(this.$container?.children).forEach(el => el.classList.remove("selected"));
            event.target?.parentNode?.classList?.add("selected");
            vnode.attrs.onchange(event.target.value || event.target.getAttribute("value"));
        };
        return m(".mmf-radio-btn-container", {
                disabled,
                oncreate: _vnode => (this.$container = _vnode.dom as HTMLElement),
            },
            options.map((option: OptionValue) => {
                const icon = option.icon ? 
                    m("span.mmf-icon", {  
                        value: option.value,
                        onclick: event => { 
                            if (
                                (disabled !== undefined && !disabled) ||
                                (option.disabled !== undefined &&
                                    !option.disabled)
                            ) { selectToggle(event); }
                        },
                    }, option.icon) 
                    : undefined;

                return m(".mmf-radio-btn",
                    {
                        class: `${option.value === value ? "selected" : ""}`,
                        disabled: disabled ? disabled : option.disabled || false,
                    },
                    icon,
                    m("input.mmf-input", {
                        type: "radio",
                        id: option.id || option.value,
                        value: option.value,
                        checked: `${option.value === value ? "checked": ""}`,
                        disabled: disabled ? disabled : option.disabled || false,
                        onclick: event => selectToggle(event)
                    }),
                    m("label.mmf-label", {
                        for: option.id || option.value,
                        disabled: disabled ? disabled : option.disabled || false, 
                    }, option.title || option.value)
                );
            })
        );    
    }
} as m.Component<Attrs, State>