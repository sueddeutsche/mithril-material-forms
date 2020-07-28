import m from "mithril";
export declare type Attrs = {
    value?: string;
    onchange?: (event: any) => void;
    onblur?: (event: any) => void;
    onfocus?: (event: any) => void;
};
export declare type State = {
    $form: HTMLElement;
    onblur(value: any): void;
    onfocus(): void;
    updateClasses(value: any): void;
};
declare const _default: m.Component<Attrs, State>;
export default _default;
