import m from "mithril";
import { Option } from "../select";
export declare type Attrs = {
    description?: string;
    disabled?: boolean;
    id?: string;
    placeholder?: string;
    options: Array<string | Option>;
    value?: string | number;
    onchange: (event: any) => void;
};
declare const _default: m.Component<Attrs, {}>;
export default _default;
