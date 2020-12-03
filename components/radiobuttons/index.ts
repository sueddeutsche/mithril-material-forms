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
}

export default {
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

                return m(".mmf-radio-btn",
                    {
                        class: `${option.value === value ? "selected" : ""}`,
                        value: option.value,
                        disabled: disabled ? disabled : option.disabled || false,
                        onclick: event => {
                            event.target.focus();
                            if ( disabled || option.disabled) return;
                            Array.from(this.$container?.children).forEach(el => el.classList.remove("selected"));
                            event.target?.parentNode?.classList?.add("selected");
                            vnode.attrs.onchange(event.target.value || event.target.getAttribute("value"));
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