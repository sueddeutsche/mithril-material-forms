import m from "mithril";


export type OptionValue = {
    title?: string, 
    value: string,
    icon?: string,
    disabled?:boolean,
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
        const { value, title, options, disabled } = vnode.attrs;
        const key = Math.random();
        const selectToggle = (event) => {
            Array.from(this.$container?.children).forEach(el => el.classList.remove("selected"));
            event.target?.parentNode?.classList?.add("selected");
            vnode.attrs.onchange(event.target.value ? event.target.value : event.target.getAttribute("value"));
        };
        return m(".mmf-radio-btn-container", {
                disabled,
                oncreate: _vnode => (this.$container = _vnode.dom as HTMLElement),
            },
            options.map((option: OptionValue) => {
                const icon = option.icon ? 
                    m("span.mmf-icon", {  
                        value: `${option.value}-${key}`,
                        onclick: event => selectToggle(event)
                    }, option.icon) 
                    : undefined;

                return m(".mmf-radio-btn",
                    {
                        class: `${option.value === value ? "selected" : ""}`,
                        disabled,
                    },
                    icon,
                    m("input.mmf-input", {
                        type: "radio",
                        name: `${title}-${key}`,
                        id: `${option.value}-${key}`,
                        value: `${option.value}-${key}`,
                        checked: `${option.value === value ? "checked": ""}`,
                        disabled: option.disabled || disabled ? true : false,
                        onclick: event => selectToggle(event)
                    }),
                    m("label.mmf-label", {
                        for: `${option.value}-${key}`,
                        disabled: option.disabled || disabled ? true : false, 
                    }, option.title || option.value)
                );
            })
        );    
    }
} as m.Component<Attrs, State>