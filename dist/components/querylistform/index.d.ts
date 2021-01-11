import m from "mithril";
import { Attrs as QueryListAttrs } from "../querylist";
import { Attrs as LabelAttrs } from "../label";
import { DefaultFormAttrs } from "../types";
export declare type Attrs = DefaultFormAttrs & QueryListAttrs & LabelAttrs;
export declare type State = {
    $form: HTMLElement;
    onfocus(): void;
    onblur(value: string): void;
    hasFocus(): boolean;
};
declare const _default: m.Component<Attrs, State>;
export default _default;
