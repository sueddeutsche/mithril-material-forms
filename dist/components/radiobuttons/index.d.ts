import m from "mithril";
export declare type OptionValue = {
    title?: string;
    value: string;
    icon?: string;
    disabled?: boolean;
    id?: string;
};
export declare type Attrs = {
    title: string;
    value?: string;
    options: Array<OptionValue>;
    disabled?: boolean;
    onchange?: (event: any) => void;
    onblur?: (event: any) => void;
    onfocus?: (event: any) => void;
};
export declare type State = {
    $container: HTMLElement;
};
declare const _default: m.Component<Attrs, State>;
export default _default;
