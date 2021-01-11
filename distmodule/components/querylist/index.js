import List, { displayRenderer } from "../list";
import m from "mithril";
import Popover from "../popover";
import search from "./search";
import { THEME_DEFAULT } from "../types";
const raf = window.requestAnimationFrame;
const isListOfItems = (suggestions) => Array.isArray(suggestions);
const isGetFunction = (suggestions) => typeof suggestions === "function";
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
            this.list.unshift({ [this.valueProp]: this.value, class: "is-value" });
        }
        this.updateCompletions();
    },
    oncreate({ attrs }) {
        const { suggestions } = attrs;
        if (isListOfItems(suggestions)) {
            this.getSuggestions = value => search(suggestions, value, 10, attrs.searchProp || this.valueProp);
        }
        else if (isGetFunction(suggestions)) {
            this.getSuggestions = suggestions;
        }
        else {
            this.getSuggestions = () => Promise.resolve([]);
        }
    },
    updateCompletions() {
        this.currentIndex = this.currentIndex < 0 ? 0 : Math.min(this.list.length - 1, this.currentIndex);
        this.popover.render(m(List, {
            items: this.list,
            theme: this.theme,
            valueProp: this.valueProp,
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
    updateSelection(e) {
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
        }
        else if (key === "ArrowDown") {
            e.stopPropagation();
            e.preventDefault();
            if (this.currentIndex < this.list.length - 1) {
                this.currentIndex += 1;
                this.updateCompletions();
            }
            // get selected suggestion, insert it into input and leave input field
        }
        else if (key === "Enter") {
            const value = this.list[this.currentIndex][this.valueProp];
            this.value = value;
            this.input.value = value;
            this.input.blur(); // blur input, close panel (consistent with mouse selection)
        }
    },
    view({ attrs }) {
        var _a;
        let { value } = attrs;
        if (this.hasFocus && this.value != null) {
            // this will remove any changes applied to this data from "outside"
            value = this.value;
        }
        this.value = value;
        const { valueProp, displayRenderer, showCurrentInput, theme } = attrs;
        this.valueProp = valueProp !== null && valueProp !== void 0 ? valueProp : this.valueProp;
        this.displayRenderer = displayRenderer !== null && displayRenderer !== void 0 ? displayRenderer : this.displayRenderer;
        this.showCurrentInput = showCurrentInput === true;
        this.theme = theme !== null && theme !== void 0 ? theme : THEME_DEFAULT;
        const inputAttributes = {
            "data-id": attrs.id,
            class: `${this.theme} ${(_a = attrs.class) !== null && _a !== void 0 ? _a : ""}`,
            disabled: attrs.disabled,
            placeholder: attrs.placeholder,
            type: "text",
            value,
            oncreate: ({ dom }) => (this.input = dom),
            oninput: e => (this.value = e.target.value),
            onfocus: async (event) => {
                var _a;
                this.hasFocus = true;
                attrs.onfocus && attrs.onfocus(event);
                await this.updateFilter();
                (_a = this.popover) === null || _a === void 0 ? void 0 : _a.show(this.input);
            },
            onblur: event => {
                this.hasFocus = false;
                attrs.onblur && attrs.onblur(event);
                raf(() => { var _a; return (_a = this.popover) === null || _a === void 0 ? void 0 : _a.hide(); }); // delay closing of popover to prevent race conditions
            },
            onkeydown: event => this.updateSelection(event),
            onchange: () => attrs.onchange(this.value),
            onkeyup: async (event) => {
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
};
