import m from "mithril";
import { Attrs as RadioButtonsAttrs } from "../radiobuttons";
import { DefaultFormAttrs } from "../types";
export declare const defaultOptions: {
    title: string;
    disabled: boolean;
    theme: string;
    value: string;
    errors: any[];
    description: string;
    placeholder: string;
    onchange: Function;
};
export declare type Attrs = RadioButtonsAttrs & DefaultFormAttrs;
declare const _default: m.Component<Attrs, {}>;
export default _default;
