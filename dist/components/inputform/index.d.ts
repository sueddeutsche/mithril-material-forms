import m from "mithril";
import { Attrs as InputAttrs, InputType } from "../input";
import { DefaultFormAttrs } from "../types";
export { InputType };
export declare type Attrs = DefaultFormAttrs & InputAttrs & {
    /** input type */
    type: string;
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
