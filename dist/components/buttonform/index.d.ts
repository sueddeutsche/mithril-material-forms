import { DefaultFormAttrs } from "../types";
import { Attrs as ButtonAttrs } from '../button';
import { Attrs as LabelAttrs } from "../label";
import m from "mithril";
export declare const defaultFormOptions: {
    theme: string;
    errors: any[];
    description: string;
};
export declare type Attrs = DefaultFormAttrs & ButtonAttrs & LabelAttrs;
declare const _default: m.Component<Attrs, {}>;
export default _default;
