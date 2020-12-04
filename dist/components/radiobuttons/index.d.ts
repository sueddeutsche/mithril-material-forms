import m from "mithril";
import { DefaultInputAttrs } from "../types";
import { Attrs as ButtonsAttrs } from "../button";
export declare type OptionValue = {
    title?: string;
    value: string;
    icon?: string;
    disabled?: boolean;
    id?: string;
};
export declare type Attrs = DefaultInputAttrs & ButtonsAttrs & {
    title: string;
    value?: string;
    options: Array<OptionValue>;
    onchange?: (event: any) => void;
};
export declare type State = {
    $container: HTMLElement;
    buttons: Array<{
        value: string;
        dom: HTMLElement;
    }>;
};
declare const _default: m.Component<Attrs, State>;
export default _default;
