import m from "mithril";
import autosize from "autosize";
import { THEME_DEFAULT } from "../types";
const raf = window.requestAnimationFrame;
export default {
    boolean: false,
    onupdate(vnode) {
        raf(() => autosize.update(vnode.dom));
    },
    view(vnode) {
        var _a, _b, _c, _d, _e;
        const { attrs } = vnode;
        if (this.focus) {
            // keep current value, while input is being active this prevents
            // jumps in cursor, caused by race conditions
            // @attention - this may produce other problems
            attrs.value = this.textarea.value;
        }
        const textareaAttributes = {
            "data-id": attrs.id,
            value: (_a = attrs.value) !== null && _a !== void 0 ? _a : "",
            class: `${(_b = attrs.theme) !== null && _b !== void 0 ? _b : THEME_DEFAULT} ${(_c = attrs.class) !== null && _c !== void 0 ? _c : ""}`,
            rows: (_d = attrs.rows) !== null && _d !== void 0 ? _d : 1,
            disabled: attrs.disabled === true,
            instantUpdate: attrs.instantUpdate === true,
            placeholder: (_e = attrs.placeholder) !== null && _e !== void 0 ? _e : "",
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
};
