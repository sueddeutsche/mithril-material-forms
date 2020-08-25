import m from "mithril";
import { Attrs as TextareaAttrs } from "../textarea";
import { DefaultFormAttrs } from "../types";
export declare type Attrs = DefaultFormAttrs & TextareaAttrs & {
    value?: string;
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
