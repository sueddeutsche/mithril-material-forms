import "./index.scss";
import m from "mithril";
import * as mmf from "../index";
function render(Component, title, ...args) {
    return [
        m("h4", title),
        m(".box", m(Component, ...args))
    ];
}
const template = {
    button: {
        render: render.bind(null, mmf.Button),
        variations: {
            "button": {
                attrs: { onclick: () => console.log("click") },
                childNodes: ["A clickable Button"]
            },
            "button with icon": {
                attrs: { onclick: () => console.log("click") },
                childNodes: [m("span.mmf-icon", "delete")]
            },
            "button with icon and text": {
                attrs: { onclick: () => console.log("click") },
                childNodes: [m("span.mmf-icon", "delete"), m("span", "A clickable Button")]
            },
            "button disabled": {
                attrs: {
                    disabled: true,
                    raised: false,
                    onclick: () => console.log("should not log this message")
                },
                childNodes: [m("span.mmf-icon", "delete"), m("span", "A clickable Button")]
            },
            "button raised": {
                attrs: {
                    raised: true,
                    onclick: () => console.log("click")
                },
                childNodes: ["A clickable Button"]
            },
            "button.raised.withIcon": {
                attrs: {
                    raised: true,
                    onclick: () => console.log("click")
                },
                childNodes: [m("span.mmf-icon", "delete"), m("span", "A clickable Button")]
            },
            "button.raised.disabled": {
                attrs: {
                    raised: true,
                    disabled: true,
                    onclick: () => console.log("click")
                },
                childNodes: ["A clickable Button"]
            }
        }
    },
    checkbox: {
        render: render.bind(null, mmf.Checkbox),
        variations: {
            "checkbox": {
                attrs: {
                    value: false,
                    onchange: value => console.log("value", value)
                }
            },
            "disabled checkbox": {
                attrs: {
                    value: false,
                    disabled: true,
                    onchange: value => console.log("value", value)
                }
            }
        }
    },
    radioButtons: {
        render: render.bind(null, mmf.RadioButtons),
        variations: {
            "checkbox": {
                attrs: {
                    value: "metered",
                    title: "pay-options",
                    disabled: false,
                    options: [
                        {
                            title: "Free",
                            value: "free",
                            disabled: false
                        },
                        {
                            title: "Metered",
                            value: "metered",
                            disabled: false
                        },
                        {
                            title: "Pay",
                            value: "pay",
                            disabled: false
                        }
                    ],
                    onchange: value => console.log("value", value)
                }
            },
            "disabled checkbox": {
                attrs: {
                    value: "",
                    title: "pay-options-disabled",
                    disabled: true,
                    options: [
                        {
                            title: "Free",
                            value: "free",
                            disabled: false
                        },
                        {
                            title: "Metered",
                            value: "metered",
                            disabled: false
                        },
                        {
                            title: "Pay",
                            value: "pay",
                            disabled: false
                        }
                    ],
                    onchange: value => console.log("value", value)
                }
            }
        }
    },
    checkboxForm: {
        render: render.bind(null, mmf.CheckboxForm),
        variations: {
            "checkbox form": {
                attrs: {
                    title: "Checkbox-Form Title",
                    description: "Checkbox-Form description text...",
                    value: true,
                    onchange: (value) => console.log("value", value)
                }
            },
            "checkbox form with errors": {
                attrs: {
                    title: "Checkbox-Form Title",
                    errors: ["This checkbox has an invalid type"],
                    description: "Checkbox-Form description text...",
                    value: false,
                    onchange: (value) => console.log("value", value)
                }
            },
            "checkbox form, disabled": {
                attrs: {
                    disabled: true,
                    title: "Disabled Checkbox-Form",
                    errors: ["This checkbox has an invalid type"],
                    description: "Checkbox-Form description text...",
                    value: false,
                    onchange: () => console.error("should not log this message")
                }
            },
            "checkbox form, inverted": {
                attrs: {
                    title: "Checkbox-Form Title",
                    invertOrder: true,
                    description: "Checkbox-Form description text...",
                    value: true,
                    onchange: (value) => console.log("value", value)
                }
            }
        }
    },
    input: {
        render: render.bind(null, mmf.Input),
        variations: {
            "input": {
                attrs: {
                    type: "text",
                    value: "input initial text value",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "input placeholder": {
                attrs: {
                    type: "text",
                    placeholder: "field placeholder",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "input.disabled": {
                attrs: {
                    type: "text",
                    disabled: true,
                    value: "input initial text value",
                    onchange: () => console.error("should not log this message")
                }
            },
        }
    },
    inputForm: {
        render: render.bind(null, mmf.InputForm),
        variations: {
            "input form": {
                attrs: {
                    title: "Input-Form Title",
                    description: "Input-Form with instantUpdate=true...",
                    type: "text",
                    instantUpdate: true,
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "input form with errors": {
                attrs: {
                    title: "Input-Form Title",
                    errors: ["This text could be a little longer"],
                    description: "Input-Form description text...",
                    type: "text",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "disabled input form": {
                attrs: {
                    id: "mmf-input-form",
                    title: "Input-Form Title",
                    disabled: true,
                    errors: ["This text could be a little longer"],
                    description: "Input-Form description text...",
                    type: "text",
                    onchange: () => console.error("should not log this message")
                }
            }
        }
    },
    select: {
        render: render.bind(null, mmf.Select),
        variations: {
            "select": {
                attrs: {
                    options: [
                        "a very nice selection",
                        "ignore any niceness"
                    ],
                    value: "a very nice selection",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "disabled select": {
                attrs: {
                    disabled: true,
                    options: [
                        "a very nice selection",
                        "ignore any niceness"
                    ],
                    value: "a very nice selection",
                    onchange: () => console.error("should not log this message")
                }
            }
        }
    },
    selectForm: {
        render: render.bind(null, mmf.SelectForm),
        variations: {
            "select form": {
                attrs: {
                    title: "Select-Form Title",
                    description: "Select-Form description text...",
                    options: [
                        "a very nice selection",
                        "ignore any niceness"
                    ],
                    value: "a very nice selection",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "select form with errors": {
                attrs: {
                    title: "Select-Form Title",
                    description: "Select-Form description text...",
                    errors: ["This selection is invalid"],
                    options: [
                        "a very nice selection",
                        "ignore any niceness"
                    ],
                    value: "a very nice selection",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "disabled select form": {
                attrs: {
                    disabled: true,
                    title: "Select-Form Title",
                    description: "Select-Form description text...",
                    errors: ["This selection is invalid"],
                    options: [
                        "a very nice selection",
                        "ignore any niceness"
                    ],
                    value: "a very nice selection",
                    onchange: () => console.error("should not log this message")
                }
            },
            "inverted select form": {
                attrs: {
                    disabled: false,
                    invertOrder: true,
                    id: "mmf-select-form",
                    title: "Select-Form Title",
                    description: "Select-Form description text...",
                    errors: ["This selection is invalid"],
                    options: [
                        "a very nice selection",
                        "ignore any niceness"
                    ],
                    value: "a very nice selection",
                    onchange: () => console.error("should not log this message")
                }
            }
        }
    },
    switch: {
        render: render.bind(null, mmf.Switch),
        variations: {
            "switch": {
                attrs: {
                    value: false,
                    onchange: value => console.log("value", value)
                }
            },
            "switch checkbox": {
                attrs: {
                    value: false,
                    disabled: true,
                    onchange: value => console.log("value", value)
                }
            }
        }
    },
    switchForm: {
        render: render.bind(null, mmf.SwitchForm),
        variations: {
            "switch form": {
                attrs: {
                    title: "Switch-Form Title",
                    description: "Switch-Form description text...",
                    value: true,
                    onchange: (value) => console.log("value", value)
                }
            },
            "switch form with errors": {
                attrs: {
                    title: "Switch-Form Title",
                    errors: ["This switch has an invalid type"],
                    description: "Switch-Form description text...",
                    value: false,
                    onchange: (value) => console.log("value", value)
                }
            },
            "switch form, disabled": {
                attrs: {
                    disabled: true,
                    title: "Disabled Switch-Form",
                    errors: ["This switch has an invalid type"],
                    description: "Switch-Form description text...",
                    value: false,
                    onchange: () => console.error("should not log this message")
                }
            },
            "switch form, inverted": {
                attrs: {
                    title: "Switch-Form Title",
                    invertOrder: true,
                    description: "Switch-Form description text...",
                    value: true,
                    onchange: (value) => console.log("value", value)
                }
            }
        }
    },
    textarea: {
        render: render.bind(null, mmf.Textarea),
        variations: {
            "textarea": {
                attrs: {
                    type: "text",
                    value: "textarea initial text value",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "textarea with placeholder": {
                attrs: {
                    type: "text",
                    placeholder: "textarea placeholder",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "disabled textarea": {
                attrs: {
                    disabled: true,
                    type: "text",
                    value: "textarea initial text value",
                    onchange: () => console.error("should not log this message")
                }
            }
        }
    },
    textareaForm: {
        render: render.bind(null, mmf.TextareaForm),
        variations: {
            "textarea form": {
                attrs: {
                    type: "text",
                    title: "Textarea-Form Title",
                    description: "Textarea-Form description text...",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "textarea form with errors": {
                attrs: {
                    type: "text",
                    title: "Long Title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beatus autem esse in maximarum rerum timore nemo potest.",
                    errors: ["An input is required"],
                    description: "Textarea-Form description text...",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "disabled textarea form": {
                attrs: {
                    disabled: true,
                    type: "text",
                    title: "Long Title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beatus autem esse in maximarum rerum timore nemo potest.",
                    errors: ["An input is required"],
                    description: "Textarea-Form description text...",
                    onchange: () => console.error("should not log this message")
                }
            }
        }
    }
};
function component(type) {
    const { render, variations } = template[type];
    return m(".component", m("h2", m("span", type)), m(".columns", m(".theme.no-theme", m("h3", "layout & typography"), Object.keys(variations).map(title => {
        const variation = variations[title];
        return render(title, variation.attrs, ...variation.childNodes || []);
    })), m(".theme.theme-material", m("h3", "theme material"), Object.keys(variations).map(title => {
        const variation = variations[title];
        return render(title, { ...variation.attrs, theme: "the-material" }, ...variation.childNodes || []);
    })), m(".theme.theme-ux", m("h3", "theme solid"), Object.keys(variations).map(title => {
        const variation = variations[title];
        return render(title, { ...variation.attrs, theme: "the-solid" }, ...variation.childNodes || []);
    }))));
}
m.render(document.body, m(".page", m("h1", "mithril(-material)-forms"), m("p", "seet the docs for details: ", m("a[href=https://github.com/sueddeutsche/mithril-material-forms]", "github/sueddeutsche/mithril-material-forms")), component("button"), component("input"), component("inputForm"), component("checkbox"), component("checkboxForm"), component("radioButtons"), component("select"), component("selectForm"), component("switch"), component("switchForm"), component("textarea"), component("textareaForm")));
