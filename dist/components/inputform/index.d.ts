import m from "mithril";
export declare type Attrs = {
    /** input type */
    type: string;
    disabled?: boolean;
    onchange(value: any): void;
};
export declare type State = {
    $form: HTMLElement;
    onfocus(): void;
    onblur(value: string): void;
    hasFocus(): boolean;
};
declare const InputForm: m.Component<Attrs, State>;
export default InputForm;
