import m from "mithril";
import { THEME_DEFAULT } from "../types";
export default {
    view({ attrs }) {
        return m("input.mmf-switch", {
            "data-id": attrs.id,
            type: "checkbox",
            class: attrs.theme || THEME_DEFAULT,
            disabled: attrs.disabled === true,
            checked: attrs.value,
            onchange: e => attrs.onchange(e.target.checked),
            onfocus: attrs.onfocus,
            onblur: attrs.onblur
        });
    }
};
