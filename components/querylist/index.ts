import List, { Item, displayRenderer } from "../list";
import m from "mithril";
import Popover, { State as PopoverState } from "../popover";
import search from "./search";
import { DefaultInputAttrs, THEME_DEFAULT } from "../types";


const raf = window.requestAnimationFrame;
const DESCRIPTION_PROP = "description";


export type Attrs = DefaultInputAttrs & {
    onchange: (value: string) => void;
    /** static list of async query function for available suggestions */
    suggestions: Array<Item>|GetSuggestions;
    /** if true, will also add current value to list of suggestions. Defaults to false */
    showCurrentInput?: boolean;
    /** adds an additional description below the current input in suggestions */
    currentInputDescription?: string;
    /** custom render function for item content rendering. Defaults to span(item[valueProp]) */
    displayRenderer?: typeof displayRenderer;
    /** set to true, if each keystroke should trigger a change event */
    instantUpdate?: boolean;
    onblur?: (event) => void;
    onfocus?: (event) => void;
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
}

export interface GetSuggestions {
    (value: string): Promise<Array<Item>>;
}

export type State = {
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
}


const isListOfItems = (suggestions): suggestions is Array<Item> => Array.isArray(suggestions);
const isGetFunction = (suggestions): suggestions is GetSuggestions => typeof suggestions === "function";


export default {
    hasFocus: false,
    currentIndex: 0,
    showCurrentInput: false,
    valueProp: "value",
    displayRenderer,
    resizeTimer: null,

    async updateFilter() {
        this.list = await this.getSuggestions(this.value);
        if (this.showCurrentInput) {
            if (this.currentInputDescription) {
                this.list = [{
                    [DESCRIPTION_PROP]: this.currentInputDescription,
                    [this.valueProp]: this.value, class: "is-value"
                }, ...this.list];
            } else {
                this.list = [{ [this.valueProp]: this.value, class: "is-value" }, ...this.list];
            }
        }
        this.updateCompletions();
    },

    oncreate({ attrs }) {
        const { suggestions } = attrs;
        if (isListOfItems(suggestions)) {
            this.getSuggestions = value => search<Item>(suggestions, value, 10, attrs.searchProp || this.valueProp);
        } else if (isGetFunction(suggestions)) {
            this.getSuggestions = suggestions;
        } else {
            this.getSuggestions = () => Promise.resolve([]);
        }
    },

    updateCompletions() {
        this.currentIndex = this.currentIndex < 0 ? 0 : Math.min(this.list.length - 1, this.currentIndex);
        this.popover.render(m(List, {
            items: this.list,
            theme: this.theme,
            valueProp: this.valueProp,
            descriptionProp: DESCRIPTION_PROP,
            selectedIndex: this.currentIndex,
            displayRenderer: this.displayRenderer,
            onSelect: index => {
                const value = this.list[index][this.valueProp];
                this.value = value;
                this.input.value = value;
            },
            onHover: index => {
                this.currentIndex = index;
                this.updateCompletions();
            }
        }));
    },

    updateSelection(e: KeyboardEvent) {
        const { key } = e;

        // goto previous suggestion in list
        if (key === "ArrowUp") {
            e.stopPropagation();
            e.preventDefault();
            if (this.currentIndex > 0) {
                this.currentIndex -= 1;
                this.updateCompletions();
            }

        // goto next suggestion in list
        } else if (key === "ArrowDown") {
            e.stopPropagation();
            e.preventDefault();
            if (this.currentIndex < this.list.length - 1) {
                this.currentIndex += 1;
                this.updateCompletions();
            }

        // get selected suggestion, insert it into input and leave input field
        } else if (key === "Enter") {
            const value = this.list[this.currentIndex][this.valueProp];
            this.value = value;
            this.input.value = value;
            this.input.blur(); // blur input, close panel (consistent with mouse selection)
        }
    },

    view({ attrs }) {
        let { value } = attrs;
        if (this.hasFocus && this.value != null) {
            // this will remove any changes applied to this data from "outside"
            value = this.value;
        }
        this.value = value;

        const { valueProp, displayRenderer, showCurrentInput, theme } = attrs;
        this.valueProp = valueProp ?? this.valueProp;
        this.displayRenderer = displayRenderer ?? this.displayRenderer;
        this.showCurrentInput = showCurrentInput === true;
        this.currentInputDescription = attrs.currentInputDescription;
        this.theme = theme ?? THEME_DEFAULT;

        const inputAttributes = {
            "data-id": attrs.id,
            class: `${this.theme} ${attrs.class ?? ""}`,
            disabled: attrs.disabled,
            placeholder: attrs.placeholder,
            type: "text",
            value,
            oncreate: ({ dom }) => (this.input = dom as HTMLInputElement),
            oninput: e => (this.value = e.target.value),
            onfocus: async event => {
                this.hasFocus = true;
                attrs.onfocus && attrs.onfocus(event);
                await this.updateFilter();
                this.popover?.show(this.input);
            },
            onblur: event => {
                this.hasFocus = false;
                attrs.onblur && attrs.onblur(event);
                raf(() => this.popover?.hide()); // delay closing of popover to prevent race conditions
            },
            onkeydown: event => this.updateSelection(event),
            onchange: () => attrs.onchange(this.value),
            onkeyup: async event => {
                await this.updateFilter();
                const ignoreKeys = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Enter"];
                if (attrs.instantUpdate && !ignoreKeys.includes(event.key)) {
                    attrs.onchange(this.value);
                }
            }
        };

        return [
            m(`input.mmf-input`, inputAttributes),
            m(Popover, {
                onmount: panel => (this.popover = panel),
                theme: attrs.theme
            })
        ];
    }

} as m.Component<Attrs, State>;
