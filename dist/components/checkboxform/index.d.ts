import m from "mithril";
import { Attrs as CheckboxAttrs } from "../checkbox";
import { DefaultFormAttrs } from "../types";
export declare const defaultOptions: {
    id: any;
    title: string;
    disabled: boolean;
    value: string;
    errors: any[];
    description: string;
    placeholder: string;
    onchange: Function;
};
export declare type Attrs = CheckboxAttrs & DefaultFormAttrs & {
    invertOrder?: boolean;
};
declare const _default: m.Component<Attrs, {}>;
export default _default;
