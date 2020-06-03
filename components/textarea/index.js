const m = require("mithril");
const autosize = require("autosize");
const raf = window.requestAnimationFrame;


module.exports = {

    textarea: null,
    focus: false,

    onupdate(vnode) {
        raf(() => autosize.update(vnode.dom));
    },

    view(vnode) {
        const attrs = Object.assign({
            id: null,
            value: "",
            rows: 1,
            placeholder: "",
            disabled: false,
            instantUpdate: false,
            onblur: Function.prototype,
            onfocus: Function.prototype,
            onchange: Function.prototype,
            oncreate: Function.prototype,
            onbeforeremove: Function.prototype
        }, vnode.attrs);

        const disabled = attrs.disabled === true;

        if (this.focus) {
            // keep current value, while input is being active this prevents
            // jumps in cursor, caused by race conditions
            // @attention - this may produce other problems
            attrs.value = this.textarea.value;
        }

        const textareaAttributes = {
            id: attrs.id,
            value: attrs.value,
            rows: attrs.rows,
            disabled,
            placeholder: attrs.placeholder,
            onblur: () => {
                this.focus = false;
                attrs.onblur && attrs.onblur();
            },
            onfocus: () => {
                this.focus = true;
                attrs.onfocus && attrs.onfocus();
            },
            onupdate: node => autosize.update(node.dom),
            oncreate: node => {
                this.textarea = node.dom;
                attrs.oncreate(node);
                autosize(node.dom);
                autosize.update(vnode.dom);
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
