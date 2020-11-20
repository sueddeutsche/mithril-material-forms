import m from "mithril";
import autosize from "autosize";
import { THEME_DEFAULT } from "../types";
const raf = window.requestAnimationFrame;
const emptyFunction = Function.prototype;
export default {
    boolean: false,
    onupdate(vnode) {
        raf(() => autosize.update(vnode.dom));
    },
    view(vnode) {
        var _a, _b;
        const attrs = {
            value: "",
            rows: 1,
            placeholder: "",
            disabled: false,
            instantUpdate: false,
            onblur: emptyFunction,
            onfocus: emptyFunction,
            onchange: emptyFunction,
            oncreate: emptyFunction,
            onbeforeremove: emptyFunction,
            ...vnode.attrs
        };
        const disabled = attrs.disabled === true;
        if (this.focus) {
            // keep current value, while input is being active this prevents
            // jumps in cursor, caused by race conditions
            // @attention - this may produce other problems
            attrs.value = this.textarea.value;
        }
        const textareaAttributes = {
            "data-id": attrs.id,
            value: attrs.value,
            class: `${(_a = attrs.theme) !== null && _a !== void 0 ? _a : THEME_DEFAULT} ${(_b = attrs.class) !== null && _b !== void 0 ? _b : ""}`,
            rows: attrs.rows,
            disabled,
            placeholder: attrs.placeholder,
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
                attrs.oncreate(node);
                autosize(node.dom);
                autosize.update(node.dom);
            },
            onbeforeremove: node => {
                attrs.onbeforeremove(node);
                autosize.destroy(node.dom);
            }
        };
        const updateEvent = attrs.instantUpdate === true ? "onkeyup" : "onchange";
        textareaAttributes[updateEvent] = e => attrs.onchange(e.target.value);
        return m("textarea.mmf-textarea", textareaAttributes);
    }
};
