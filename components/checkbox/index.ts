import m from "mithril";
import { DefaultInputAttrs } from "../types";


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
                disabled: attrs.disabled === true,
                checked: attrs.value,
                onchange: e => attrs.onchange(e.target.checked),
                onfocus: attrs.onfocus,
                onblur: attrs.onblur
            }
        );
    }

} as m.Component<Attrs>;
