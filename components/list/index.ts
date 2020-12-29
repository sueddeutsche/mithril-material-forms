import m from "mithril";


export type Item = {
    /** optional css-class for individual item */
    class?: string;
    [p: string]: any;
};


export type Attrs = {
    /** list of items to display */
    items: Array<Item>;
    /** property to use as id, must point to a string-value. Defaults to "value" */
    valueProp?: string;
    /** custom render function for item content rendering. Defaults to span(item[valueProp]) */
    displayRenderer?: typeof displayRenderer;
    /** current selected index in list */
    selectedIndex?: number;
    /** get selected (clicked) item index */
    onSelect?: (index: number) => void;
    /** get current hovered item index */
    onHover?: (index: number) => void;
}


/** default render function for item content rendering */
export function displayRenderer(item: Item, attrs: Attrs): m.Vnode {
    return m("span", item[attrs.valueProp]);
}


/**
 * standard list component with additional item hover-, highlight- and selection-support
 */
export default {

    view({ attrs }) {
        const { items, valueProp = "value", selectedIndex,  onSelect, onHover } = attrs;

        return m("ul.mmf-list",
            {
                onmousedown: onSelect ? event => {
                    const target = event.target as HTMLElement;
                    const index = items.findIndex(item => item[valueProp] === target.dataset.value);
                    if (index != null) {
                        onSelect(index);
                    }
                } : null
            },

            items.map((item, index) => m("li.mmf-list__item",
                {
                    "data-value": item[valueProp],
                    class: `${item.class ? item.class : ""} ${index === selectedIndex ? "is-selected" : ""}`,

                    onmouseenter: onHover ? event => {
                        const target = event.target as HTMLElement;
                        if (target.dataset.value) {
                            const index = items.findIndex(item => item[valueProp] === target.dataset.value);
                            if (index != null) {
                                onHover(index);
                            }
                        }
                    } : null

                },
                displayRenderer(item, attrs))
            )
        );
    }

} as m.Component<Attrs>;