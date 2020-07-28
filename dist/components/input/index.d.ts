import m from "mithril";
export declare type InputType = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
export declare type Attrs = {
    onchange: (value: string) => void;
    disabled?: boolean;
    id?: string;
    /** set to true, if each keystroke should trigger a change event */
    instantUpdate?: boolean;
    onblur?: (event: any) => void;
    onfocus?: (event: any) => void;
    placeholder?: string;
    type?: InputType;
    value?: string;
};
export declare type State = {
    value: string;
    hasFocus: boolean;
};
declare const _default: m.Component<Attrs, State>;
export default _default;
