import List from "../list";
import list from "./authors.json";
import m from "mithril";
import Popover, { State as PopoverState } from "../popover";
import search from "./search";
import { DefaultInputAttrs, THEME_DEFAULT } from "../types"

const raf = window.requestAnimationFrame;



export type Attrs = DefaultInputAttrs & {
    onchange: (value: string) => void;
    /** set to true, if each keystroke should trigger a change event */
    instantUpdate?: boolean;
    onblur?: (event) => void;
    onfocus?: (event) => void;
    type?: "text";
    /** initial string value */
    value?: string;
}

export type State = {
    /** value of current input */
    value: string;
    popover: PopoverState;
    input: HTMLInputElement;
    hasFocus: boolean;

    list: Array<any>;
    /** current index of selection in list */
    currentIndex: number;

    updateCompletions;
    updateSelection;
    updateFilter;
}


export default {
    value: null,
    hasFocus: false,
    popover: null,
    input: null,
    currentIndex: 0,

    async updateFilter() {
        this.list = await search(list, this.value, 10, "name");
        this.list.unshift({ name: this.value, class: "is-value" });
        this.updateCompletions();
    },

    updateCompletions() {
        this.currentIndex = this.currentIndex < 0 ? 0 : Math.min(this.list.length - 1, this.currentIndex);
        this.popover.render(m(List, {
            items: this.list,
            valueProp: "name",
            selectedIndex: this.currentIndex,
            onSelect: index => {
                const value = this.list[index].name;
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
        if (key === "ArrowUp") {
            e.stopPropagation();
            e.preventDefault();
            if (this.currentIndex > 0) {
                this.currentIndex -= 1;
                this.updateCompletions();
            }

        } else if (key === "ArrowDown") {
            e.stopPropagation();
            e.preventDefault();
            if (this.currentIndex < this.list.length - 1) {
                this.currentIndex += 1;
                this.updateCompletions();
            }

        } else if (key === "Enter") {
            const value = this.list[this.currentIndex].name;
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

        const inputAttributes = {
            "data-id": attrs.id,
            class: `${attrs.theme ?? THEME_DEFAULT} ${attrs.class ?? ""}`,
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
            m(Popover, { onmount: panel => (this.popover = panel) })
        ];
    }

} as m.Component<Attrs, State>;
