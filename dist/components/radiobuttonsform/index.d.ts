import m from "mithril";
import { Attrs as RadioButtonsAttrs } from "../radiobuttons";
import { DefaultFormAttrs } from "../types";
export declare const defaultOptions: {
    theme: string;
    errors: any[];
    description: string;
};
export declare type Attrs = DefaultFormAttrs & RadioButtonsAttrs & {
    errors?: Array<string>;
    description?: string;
};
declare const _default: m.Component<Attrs, {}>;
export default _default;
