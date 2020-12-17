import { DefaultFormOptions, DefaultFormAttrs } from "../types";
import Button, { Attrs as ButtonAttrs } from '../button';
import Errors, { getErrorClass } from "../errors";
import Label, { Attrs as LabelAttrs } from "../label";
import m from "mithril";


export type Attrs = DefaultFormAttrs & ButtonAttrs & LabelAttrs;

export default {

    view(vnode) {
        const attrs = { ...DefaultFormOptions, ...vnode.attrs };

        return m(`.mmf-form.mmf-form--button.is-${attrs.disabled ? "disabled" : "enabled"}`,
            {
                "class": `${getErrorClass(attrs.errors)} ${attrs.theme}`
            },
            m(Label, { ...attrs }),
            m(Button, { ...attrs }, vnode.children),
            m(Errors, attrs),
            attrs.description && m(".mmf-meta", attrs.description)
        );
    }
} as m.Component<Attrs>;
