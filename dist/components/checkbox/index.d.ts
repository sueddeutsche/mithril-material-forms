import m from "mithril";
export declare type Attrs = {
    id?: string;
    value?: boolean;
    disabled?: boolean;
    checked?: boolean;
    onchange(checked: boolean): void;
    onfocus?(event: Event): void;
    onblur?(event: Event): void;
};
declare const _default: m.Component<Attrs, {}>;
export default _default;
