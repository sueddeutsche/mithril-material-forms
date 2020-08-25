import m from "mithril";
export declare type Attrs = {
    disabled?: boolean;
    raised?: boolean;
    class?: string;
    onclick?(event: Event): void;
};
export declare type State = {
    getClassNames(attrs: Attrs): string;
};
declare const _default: m.Component<Attrs, State>;
export default _default;
