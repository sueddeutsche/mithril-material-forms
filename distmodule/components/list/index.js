import m from "mithril";
import getParentByClassname from "./getParentByClassname";
import { THEME_DEFAULT } from "../types";
/** default render function for item content rendering */
export function displayRenderer(item, attrs) {
    const { descriptionProp } = attrs;
    if (descriptionProp && item[descriptionProp]) {
        return m("span", m("span.value", item[attrs.valueProp]), m("span.description", item[descriptionProp]));
    }
    return m("span.value", item[attrs.valueProp]);
}
/**
 * standard list component with additional item hover-, highlight- and selection-support
 */
export default {
    view({ attrs }) {
        var _a;
        const { items, valueProp = "value", selectedIndex, onSelect, onHover, displayRenderer } = attrs;
        if (items.length === 0 || (items.length === 1 && items[0][valueProp] === "")) {
            return m.fragment({}, "");
        }
        return m("ul.mmf-list", {
            class: (_a = attrs.theme) !== null && _a !== void 0 ? _a : THEME_DEFAULT,
            onmousedown: onSelect ? event => {
                const target = getParentByClassname(event.target, "mmf-list__item");
                if (!target) {
                    return;
                }
                const index = items.findIndex(item => item[valueProp] === target.dataset.value);
                if (index >= 0) {
                    onSelect(index);
                }
            } : null
        }, items.map((item, index) => m("li.mmf-list__item", {
            "data-value": item[valueProp],
            class: `${item.class ? item.class : ""} ${index === selectedIndex ? "is-selected" : ""}`,
            onmouseenter: onHover ? event => {
                const target = event.target;
                const index = items.findIndex(item => item[valueProp] === target.dataset.value);
                if (index >= 0) {
                    onHover(index);
                }
            } : null
        }, displayRenderer(item, attrs))));
    }
};
