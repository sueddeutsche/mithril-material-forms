import m from "mithril";


export type Item = {
    /** optional css-class for individual item */
    class?: string;
    [p: string]: any;
};


export type Attrs = {
    /** list of items to display */
    items: Array<Item>;
    /** property to use as display value. Defaults to "value" */
    displayProp?: string;
    /** property to use as id, must point to a string-value. Defaults to "value" */
    valueProp?: string;
    /** current selected index in list */
    selectedIndex?: number;
    /** get selected (clicked) item index */
    onSelect?: (index: number) => void;
    /** get current hovered item index */
    onHover?: (index: number) => void;
}


/**
 * standard list component with additional item hover-, highlight- and selection-support
 */
export default {

    view(vnode) {
        const { items, displayProp = "value", valueProp = "value", selectedIndex,  onSelect, onHover } = vnode.attrs;

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

            items.map((item, index) => m("li.mmf-list__item", {
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

            }, item[displayProp]))
        );
    }

} as m.Component<Attrs>;
