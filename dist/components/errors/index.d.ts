import m from "mithril";
import getErrorClass from "./getErrorClass";
export { getErrorClass };
export declare type Error = {
    /** error or warning */
    severity?: string;
    message: string;
};
export declare type Attrs = {
    errors: Array<m.Vnode | Error | string>;
};
declare const _default: m.Component<Attrs, {}>;
export default _default;
