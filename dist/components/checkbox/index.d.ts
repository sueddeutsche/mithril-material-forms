import m from "mithril";
import { DefaultInputAttrs } from "../types";
export declare type Attrs = DefaultInputAttrs & {
    value?: boolean;
    checked?: boolean;
    onchange(checked: boolean): void;
    onfocus?(event: Event): void;
    onblur?(event: Event): void;
};
declare const _default: m.Component<Attrs, {}>;
export default _default;
