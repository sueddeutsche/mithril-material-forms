import m from "mithril";
import getErrorClass from "./getErrorClass";
import { Error } from "../types";
export { getErrorClass };
export declare type Attrs = {
    errors: Array<m.Vnode | Error | string>;
};
declare const _default: m.Component<Attrs, {}>;
export default _default;
