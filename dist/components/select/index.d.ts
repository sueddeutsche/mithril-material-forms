import m from "mithril";
import { DefaultInputAttrs } from "../types";
export declare type OptionValue = {
    title?: string;
    value: string;
    color?: string;
};
export declare type Option = OptionValue | string;
export declare type Attrs = DefaultInputAttrs & {
    onblur?: (event: any) => void;
    onchange?: (value: string) => void;
    onfocus?: (event: any) => void;
    options: Array<Option>;
    value?: string | number;
};
export declare type State = {
    $wrapper: HTMLElement;
    $icon: HTMLElement;
};
declare const _default: m.Component<Attrs, State>;
export default _default;
