import m from "mithril";
import { Attrs as CheckboxAttrs } from "../checkbox";
import { Error } from "../errors";
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
export declare type Attrs = CheckboxAttrs & {
    title?: string;
    description?: string;
    errors: Array<Error>;
    children?: m.Children;
    invertOrder?: boolean;
};
declare const _default: m.Component<Attrs, {}>;
export default _default;
