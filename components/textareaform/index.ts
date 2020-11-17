import Errors, { getErrorClass } from "../errors";
import isEmpty from "../isEmpty";
import Label from "../label";
import m from "mithril";
import Textarea, { Attrs as TextareaAttrs } from "../textarea";
import { DefaultFormAttrs } from "../types";


export type Attrs = DefaultFormAttrs & TextareaAttrs & {
    value?: string;
    onblur?: (event) => void;
    onfocus?: (event) => void;
}


export type State = {
    $form: HTMLElement;
    onblur(value): void;
    onfocus(): void;
    updateClasses(value): void;
}


export default {

    oncreate(vnode) {
        this.$form = vnode.dom as HTMLElement;
        this.onblur(vnode.attrs.value);
    },

    onfocus() {
        this.$form.classList.remove("no-focus");
        this.$form.classList.add("has-focus");
    },

    onblur(value) {
        this.$form.classList.remove("has-focus");
        this.$form.classList.add("no-focus");
        this.updateClasses(value);
    },

    updateClasses(value) {
        const hasValue = isEmpty(value) === false;
        this.$form.classList.remove(hasValue ? "is-empty" : "not-empty");
        this.$form.classList.add(hasValue === false ? "is-empty" : "not-empty");
    },

    onupdate(vnode) {
        this.updateClasses(vnode.attrs.value);
    },

    view(vnode) {
        const attrs = Object.assign({
            id: null,
            title: "",
            value: "",
            errors: [],
            disabled: false,
            description: "",
            placeholder: "",
            rows: 1,
            theme: "the-default",
            instantUpdate: false,
            onblur: Function.prototype,
            onfocus: Function.prototype,
            onchange: Function.prototype
        }, vnode.attrs);

        const disabled = attrs.disabled === true;

        return m(`.mmf-form.mmf-form--textarea.is-${disabled ? "disabled" : "enabled"}`,
            {
                "class": `${attrs.theme} ${getErrorClass(attrs.errors)}`
            },
            m(Label,
                attrs,
                m(Textarea, {
                    id: attrs.id,
                    value: attrs.value,
                    disabled,
                    theme: attrs.theme,
                    instantUpdate: attrs.instantUpdate,
                    placeholder: attrs.placeholder,
                    rows: attrs.rows,
                    onchange: attrs.onchange,
                    onblur: e => {
                        this.onblur(e.target.value);
                        attrs.onblur(e);
                    },
                    onfocus: e => {
                        this.onfocus();
                        attrs.onfocus(e);
                    }
                })
            ),
            m(Errors, attrs),
            attrs.description && m(".mmf-meta", attrs.description),
            vnode.children
        );
    }

} as m.Component<Attrs, State>;
