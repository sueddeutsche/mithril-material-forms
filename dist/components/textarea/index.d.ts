import m from "mithril";
import { DefaultInputAttrs } from "../types";
export declare type Attrs = DefaultInputAttrs & {
    value?: string;
    instantUpdate?: boolean;
    placeholder?: string;
    rows?: number;
    onblur?: (event: any) => void;
    onfocus?: (event: any) => void;
    onchange?: (event: any) => void;
    oncreate?: (event: any) => void;
    onbeforeremove?: (event: any) => void;
};
export declare type State = {
    textarea: HTMLTextAreaElement;
    focus: boolean;
};
declare const _default: m.Component<Attrs, State>;
export default _default;
