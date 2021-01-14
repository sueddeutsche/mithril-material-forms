import m from "mithril";
export declare type Item = {
    /** optional css-class for individual item */
    class?: string;
    [p: string]: any;
};
export declare type Attrs = {
    /** list of items to display */
    items: Array<Item>;
    /** property to use as id, must point to a string-value. Defaults to "value" */
    valueProp?: string;
    descriptionProp?: string;
    /** custom render function for item content rendering. Defaults to span(item[valueProp]) */
    displayRenderer?: typeof displayRenderer;
    /** current selected index in list */
    selectedIndex?: number;
    /** get selected (clicked) item index */
    onSelect?: (index: number) => void;
    /** get current hovered item index */
    onHover?: (index: number) => void;
    theme?: string;
};
/** default render function for item content rendering */
export declare function displayRenderer(item: Item, attrs: Attrs): m.Vnode;
declare const _default: m.Component<Attrs, {}>;
/**
 * standard list component with additional item hover-, highlight- and selection-support
 */
export default _default;
