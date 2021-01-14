import m from "mithril";
import autosize from "autosize";
import { DefaultInputAttrs, THEME_DEFAULT } from "../types";
const raf = window.requestAnimationFrame;


export type Attrs = DefaultInputAttrs & {
    value?: string;
    instantUpdate?: boolean;
    placeholder?: string;
    rows?: number;
    onblur?: (event) => void;
    onfocus?: (event) => void;
    onchange?: (event) => void;
    oncreate?: (event) => void;
    onbeforeremove?: (event) => void;
}

export type State = {
    textarea: HTMLTextAreaElement;
    focus: boolean;
}

export default {

    boolean: false,

    onupdate(vnode) {
        raf(() => autosize.update(vnode.dom));
    },

    view(vnode) {
        const { attrs } = vnode;

        if (this.focus) {
            // keep current value, while input is being active this prevents
            // jumps in cursor, caused by race conditions
            // @attention - this may produce other problems
            attrs.value = this.textarea.value;
        }

        const textareaAttributes = {
            "data-id": attrs.id,
            value: attrs.value ?? "",
            class: `${attrs.theme ?? THEME_DEFAULT} ${attrs.class ?? ""}`,
            rows: attrs.rows ?? 1,
            disabled: attrs.disabled === true,
            instantUpdate: attrs.instantUpdate === true,
            placeholder: attrs.placeholder ?? "",
            onblur: e => {
                this.focus = false;
                attrs.onblur && attrs.onblur(e);
            },
            onfocus: e => {
                this.focus = true;
                attrs.onfocus && attrs.onfocus(e);
            },
            onupdate: node => autosize.update(node.dom),
            oncreate: node => {
                this.textarea = node.dom;
                attrs.oncreate && attrs.oncreate(node);
                autosize(node.dom);
                autosize.update(node.dom);
            },
            onbeforeremove: node => {
                attrs.onbeforeremove(node);
                autosize.destroy(node.dom);
            }
        };

        const updateEvent = textareaAttributes.instantUpdate === true ? "onkeyup" : "onchange";
        textareaAttributes[updateEvent] = e => attrs.onchange(e.target.value);

        return m("textarea.mmf-textarea", textareaAttributes);
    }

} as m.Component<Attrs, State>;
