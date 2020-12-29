import m from "mithril";
import { DefaultInputAttrs, THEME_DEFAULT } from "../types"
import list from "./authors.json";


interface InlinePanelState {
    dom: HTMLElement;
    content: m.Component;
    show: () => void;
    hide: () => void;
}

type InlinePanelAttrs = {
    onmount;
    style?: {
        [p: string]: string|number;
    }
}


const raf = window.requestAnimationFrame;


class InlinePanel implements m.ClassComponent<InlinePanelAttrs> {

    dom: HTMLElement;
    content: m.Component;

    oncreate(vnode) {
        vnode.attrs.onmount(vnode.state);
    }

    onremove() {
        const container = document.body;
        if (container.contains(this.dom)) {
            m.render(this.dom, null);
            container.removeChild(this.dom);
        }
    }

    hide() {
        this.dom.style.display = "none";
    }

    render(content: m.Vnode) {
        m.render(this.dom, content);
    }

    show(targetElement: HTMLElement) {
        this.dom.style.display = "block";

        const bound = targetElement.getBoundingClientRect();
        if (targetElement.offsetParent === document.body) {
            const scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
            this.dom.style.left = `${bound.left + scrollX}px`;
            this.dom.style.top = `${bound.top + scrollY + bound.height}px`;
            return;
        }

        const offset = targetElement.offsetParent.getBoundingClientRect();
        this.dom.style.left = `${bound.left - offset.left}px`;
        this.dom.style.top = `${bound.top - offset.top + bound.height}px`;
    }

    view(vnode: m.Vnode<InlinePanelAttrs>) {
        return m(".mmf-inline-panel", {
            ...vnode.attrs,
            oncreate: ({ dom }) => (this.dom = dom as HTMLElement)
        }, vnode.children);
    }
}


import search from "./search";

const Completions = {
    view(vnode) {
        const { value, index, items, onSelect, onHover } = vnode.attrs;

        return m("ul.mmf-completions",
            {
                onmousedown: event => {
                    const target = event.target as HTMLElement;
                    if (target.dataset.value) {
                        onSelect(target.dataset.value)
                    }
                }
            },
            items.map((item, i) => m("li.mmf-completions__item", {
                "data-value": item.name,
                class: `${item.class ? item.class : ""} ${i === index ? "is-selected" : ""}`,
                onmouseenter: event => {
                    const target = event.target as HTMLElement;
                    if (target.dataset.value) {
                        const index = items.findIndex(i => i.name === target.dataset.value);
                        if (index != null) {
                            onHover(index);
                        }
                    }
                }
            }, item.name))
        );
    }
}



export type Attrs = DefaultInputAttrs & {
    onchange: (value: string) => void;
    /** set to true, if each keystroke should trigger a change event */
    instantUpdate?: boolean;
    onblur?: (event) => void;
    onfocus?: (event) => void;
    type?: "text";
    value?: string;
}

export type State = {
    value: string;
    panel: InlinePanel;
    input: HTMLElement;
    hasFocus: boolean;

    list: Array<any>;
    currentIndex: number;

    updateCompletions;
    updateSelection;
    updateFilter;
}

export default {
    value: null,
    hasFocus: false,
    panel: null,
    input: null,
    currentIndex: 0,

    updateFilter() {
        this.list = search(list, this.value, 10, "name");
        this.list.unshift({ name: this.value, class: "is-value" });
        this.updateCompletions();
    },

    updateCompletions() {
        this.currentIndex = this.currentIndex < 0 ? 0 : Math.min(this.list.length - 1, this.currentIndex);

        this.panel.render(m(Completions, {
            value: this.value,
            items: this.list,
            index: this.currentIndex,
            onSelect: value => {
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
            oncreate: ({ dom }) => (this.input = dom as HTMLElement),
            oninput: e => (this.value = e.target.value),
            onfocus: event => {
                this.hasFocus = true;
                attrs.onfocus && attrs.onfocus(event);
                this.updateFilter();
                this.panel?.show(this.input);
            },
            onblur: event => {
                this.hasFocus = false;
                attrs.onblur && attrs.onblur(event);
                raf(() => this.panel?.hide());
            },
            onkeydown: event => this.updateSelection(event),
            onkeyup: null,
            onchange: null
        };

        if (attrs.instantUpdate === true) {
            inputAttributes.onkeyup = () => {
                this.updateFilter();
                attrs.onchange(this.value);
            }

        } else {
            inputAttributes.onkeyup = () => this.updateFilter();
            inputAttributes.onchange = () => attrs.onchange(this.value);
        }

        return [
            m(`input.mmf-input`, inputAttributes),
            m(InlinePanel,
                {
                    onmount: panel => (this.panel = panel),
                    // oncreate: (vnode) => (this.panel = vnode.state),
                    style: {
                        "z-index": 999
                    }
                }
            )
        ];
    }

} as m.Component<Attrs, State>;
