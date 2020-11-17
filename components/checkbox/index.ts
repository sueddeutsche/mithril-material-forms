import m from "mithril";
import { DefaultInputAttrs, THEME_DEFAULT } from "../types";


export type Attrs = DefaultInputAttrs & {
    value?: boolean;
    checked?: boolean;
    onchange(checked: boolean): void;
    onfocus? (event: Event): void;
    onblur? (event: Event): void;
}


export default {

    view({ attrs }) {

        return m("input.mmf-checkbox",
            {
                "data-id": attrs.id,
                type: "checkbox",
                class: attrs.theme || THEME_DEFAULT,
                disabled: attrs.disabled === true,
                checked: attrs.value,
                onchange: e => attrs.onchange(e.target.checked),
                onfocus: attrs.onfocus,
                onblur: attrs.onblur
            }
        );
    }

} as m.Component<Attrs>;
