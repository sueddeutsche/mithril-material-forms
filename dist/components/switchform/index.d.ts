import m from "mithril";
import { Attrs as SwitchAttrs } from "../switch";
import { DefaultFormAttrs } from "../types";
export declare const defaultOptions: {
    id: any;
    title: string;
    disabled: boolean;
    theme: string;
    value: string;
    errors: any[];
    description: string;
    onchange: Function;
};
export declare type Attrs = SwitchAttrs & DefaultFormAttrs & {
    invertOrder?: boolean;
};
declare const _default: m.Component<Attrs, {}>;
export default _default;
