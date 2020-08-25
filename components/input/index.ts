import m from "mithril";
import { DefaultInputAttrs } from "../types"


export type InputType = "button"|"checkbox"|"color"|"date"|"datetime-local"|"email"|"file"|"hidden"|"image"|"month"|
    "number"|"password"|"radio"|"range"|"reset"|"search"|"submit"|"tel"|"text"|"time"|"url"|"week";


export type Attrs = DefaultInputAttrs & {
    onchange: (value: string) => void;
    /** set to true, if each keystroke should trigger a change event */
    instantUpdate?: boolean;
    onblur?: (event) => void;
    onfocus?: (event) => void;
    type?: InputType;
    value?: string;
}

export type State = {
    value: string;
    hasFocus: boolean;
}

export default {
    value: null,
    hasFocus: false,

    view({ attrs }) {
        let { value } = attrs;
        if (this.hasFocus && this.value != null) {
            value = this.value; // this will remove any changes applied to this data from "outside"
        }

        this.value = value;

        const inputAttributes = {
            value,
            type: attrs.type,
            class: attrs.class,
            // id: attrs.id -- if the element is pointer sensitive it will be rebuild on pointer updates, loosing focus
            "data-id": attrs.id,
            placeholder: attrs.placeholder,
            disabled: attrs.disabled === true,
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

        return m("input.mmf-input", inputAttributes);
    }

} as m.Component<Attrs, State>;
