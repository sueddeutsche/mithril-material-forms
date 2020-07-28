import m from "mithril";
export declare type Option = {
    title?: string;
    value?: string | number;
};
export declare type Attrs = {
    class?: string;
    title?: string;
    disabled?: boolean;
    id?: string;
    onblur?: (event: any) => void;
    onchange: (event: any) => void;
    onfocus?: (event: any) => void;
    options: Array<string | Option>;
    value?: string | number;
};
export declare type State = {
    $wrapper: HTMLElement;
};
declare const _default: m.Component<Attrs, State>;
export default _default;
