import m from "mithril";
import RadioButtons, { Attrs as RadioButtonsAttrs } from "../radiobuttons";
import Label, { Attrs as LabelAttrs } from "../label";
import Errors, { getErrorClass } from "../errors";
import { DefaultFormAttrs, DefaultFormOptions } from "../types";


export type Attrs = DefaultFormAttrs & RadioButtonsAttrs & LabelAttrs;

export default {

    view(vnode) {
        const attrs = { ...DefaultFormOptions, ...vnode.attrs };

        return m(`.mmf-form.mmf-form--radio-buttons.is-${attrs.disabled ? "disabled" : "enabled"}`,
            {
                "class": `${getErrorClass(attrs.errors)} ${attrs.theme}`
            },
            m(Label, { ...attrs },),
            m(RadioButtons, { ...attrs }),
            m(Errors, attrs),
            attrs.description && m(".mmf-meta", attrs.description),
            vnode.children
        );
    }

} as m.Component<Attrs>;
