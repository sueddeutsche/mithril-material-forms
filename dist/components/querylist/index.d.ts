import { Item, displayRenderer } from "../list";
import m from "mithril";
import { State as PopoverState } from "../popover";
import { DefaultInputAttrs } from "../types";
export declare type Attrs = DefaultInputAttrs & {
    onchange: (value: string) => void;
    /** static list of async query function for available suggestions */
    suggestions: Array<Item> | GetSuggestions;
    /** if true, will also add current value to list of suggestions. Defaults to false */
    showCurrentInput?: boolean;
    /** adds an additional description below the current input in suggestions */
    currentInputDescription?: string;
    /** custom render function for item content rendering. Defaults to span(item[valueProp]) */
    displayRenderer?: typeof displayRenderer;
    /** set to true, if each keystroke should trigger a change event */
    instantUpdate?: boolean;
    onblur?: (event: any) => void;
    onfocus?: (event: any) => void;
    /** initial string value */
    value?: string;
    /** property to use as id, must point to a string-value. Defaults to "value" */
    valueProp?: string;
    /**
     * Configure querying results, by setting the item property to be used for search.
     * This must point to a string-value. Defaults to `valueProp`. Only used, if suggestions is a static list.
     */
    searchProp?: string;
    type?: "text";
};
export interface GetSuggestions {
    (value: string): Promise<Array<Item>>;
}
export declare type State = {
    /** value of current input */
    value: string;
    valueProp: string;
    displayRenderer: typeof displayRenderer;
    popover: PopoverState;
    input: HTMLInputElement;
    hasFocus: boolean;
    theme: string;
    /** if true, will also add current value to list of suggestions. Defaults to false */
    showCurrentInput: boolean;
    /** adds an additional description below the current input in suggestions */
    currentInputDescription?: string;
    getSuggestions: GetSuggestions;
    /** current index of selection in list */
    currentIndex: number;
    updateCompletions: () => void;
    updateSelection: (event: KeyboardEvent) => void;
    updateFilter: () => Promise<void>;
};
declare const _default: m.Component<Attrs, State>;
export default _default;
