import m from "mithril";
import { Attrs as RadioButtonsAttrs } from "../radiobuttons";
import { Attrs as LabelAttrs } from "../label";
import { DefaultFormAttrs } from "../types";
export declare const defaultFormOptions: {
    theme: string;
    errors: any[];
    description: string;
};
export declare type Attrs = DefaultFormAttrs & RadioButtonsAttrs & LabelAttrs;
declare const _default: m.Component<Attrs, {}>;
export default _default;
