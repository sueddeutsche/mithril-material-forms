import m from "mithril";
import { DefaultInputAttrs } from "../types";
export declare type InputType = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
export declare type Attrs = DefaultInputAttrs & {
    onchange: (value: string) => void;
    /** set to true, if each keystroke should trigger a change event */
    instantUpdate?: boolean;
    onblur?: (event: any) => void;
    onfocus?: (event: any) => void;
    type?: InputType;
    value?: string;
};
export declare type State = {
    value: string;
    hasFocus: boolean;
};
declare const _default: m.Component<Attrs, State>;
export default _default;
