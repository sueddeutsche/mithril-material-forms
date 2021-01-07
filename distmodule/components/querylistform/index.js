import m from "mithril";
import QueryList from "../querylist";
import Label from "../label";
import Errors, { getErrorClass } from "../errors";
import { THEME_DEFAULT } from "../types";
export default {
    oncreate(vnode) {
        this.$form = vnode.dom;
    },
    updateClasses(value) {
        const hasValue = value !== "";
        this.$form.classList.remove(hasValue ? "is-empty" : "not-empty");
        this.$form.classList.add(hasValue === false ? "is-empty" : "not-empty");
    },
    onfocus() {
        this.$form.classList.add("has-focus");
        this.$form.classList.remove("no-focus");
    },
    onblur(value) {
        this.$form.classList.add("no-focus");
        this.$form.classList.remove("has-focus");
        this.updateClasses(value);
    },
    hasFocus() {
        return this.$form && this.$form.classList.contains("has-focus");
    },
    view(vnode) {
        var _a;
        const attrs = {
            id: null,
            value: "",
            errors: [],
            invertOrder: false,
            description: "",
            onblur: Function.prototype,
            onfocus: Function.prototype,
            onchange: Function.prototype,
            ...vnode.attrs
        };
        const focusClass = this.hasFocus() ? "has-focus" : "no-focus";
        const errorClass = getErrorClass(attrs.errors);
        const emptyClass = attrs.value === "" ? "is-empty" : "not-empty";
        return m(`.mmf-form.mmf-form--query-list.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${focusClass} ${errorClass} ${emptyClass} ${(_a = attrs.theme) !== null && _a !== void 0 ? _a : THEME_DEFAULT}`
        }, m(Label, {
            ...attrs,
            invertOrder: attrs.invertOrder
        }, m(QueryList, {
            ...attrs,
            onfocus: e => {
                this.onfocus();
                attrs.onfocus && attrs.onfocus(e);
            },
            onblur: e => {
                this.onblur(e.target.value);
                attrs.onblur && attrs.onblur(e);
            }
        })), m(Errors, attrs), attrs.description && m(".mmf-meta", attrs.description), vnode.children);
    }
};
