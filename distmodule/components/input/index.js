import m from "mithril";
import { THEME_DEFAULT } from "../types";
export default {
    value: null,
    hasFocus: false,
    view({ attrs }) {
        var _a, _b, _c;
        let { value } = attrs;
        if (this.hasFocus && this.value != null) {
            // this will remove any changes applied to this data from "outside"
            value = this.value;
        }
        this.value = value;
        const inputAttributes = {
            // id: if the element is pointer sensitive it will be rebuild on pointer updates, loosing focus
            "data-id": attrs.id,
            class: `${(_a = attrs.theme) !== null && _a !== void 0 ? _a : THEME_DEFAULT} ${(_b = attrs.class) !== null && _b !== void 0 ? _b : ""}`,
            disabled: attrs.disabled,
            placeholder: attrs.placeholder,
            type: (_c = attrs.type) !== null && _c !== void 0 ? _c : "text",
            value,
            oninput: e => (this.value = e.target.value),
            onfocus: event => {
                this.hasFocus = true;
                attrs.onfocus && attrs.onfocus(event);
            },
            onblur: event => {
                this.hasFocus = false;
                attrs.onblur && attrs.onblur(event);
            }
        };
        const updateEvent = attrs.instantUpdate === true ? "onkeyup" : "onchange";
        inputAttributes[updateEvent] = () => attrs.onchange(this.value);
        return m(`input.mmf-input`, inputAttributes);
    }
};
