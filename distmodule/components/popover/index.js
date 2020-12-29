import m from "mithril";
import { THEME_DEFAULT } from "../types";
/**
 * places a panel to the specified dom-element
 *
 * **usage**
 *
 * ```js
 *    // render popover with contents and store popover-instance for controls
 *    m.render(dom, m(Popover, {
 *       onmount: popover => (this.popover = popover)
 *     },
 *     // and render contents
 *     m(Contents))
 *   );
 *   // later, update contents in popover
 *   this.popover.render(m(Contents, {}))
 *   // place and show popover at target dom element
 *   this.popover.show(targetElement)
 *   // hide popover
 *   this.popover.hide()
 * ```
 */
const Popover = {
    oncreate(vnode) {
        vnode.attrs.onmount(vnode.state);
    },
    onremove() {
        const container = document.body;
        if (container.contains(this.dom)) {
            m.render(this.dom, null);
            container.removeChild(this.dom);
        }
    },
    hide() {
        this.dom.classList.add("is-hidden");
        this.dom.classList.remove("is-visible");
    },
    render(content) {
        m.render(this.dom, content);
    },
    show(targetElement) {
        this.dom.classList.add("is-visible");
        this.dom.classList.remove("is-hidden");
        const bound = targetElement.getBoundingClientRect();
        this.dom.style.setProperty("--target-width", `${bound.width}px`);
        if (targetElement.offsetParent === document.body) {
            const scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
            this.dom.style.left = `${bound.left + scrollX}px`;
            this.dom.style.top = `${bound.top + scrollY + bound.height}px`;
            return;
        }
        const offset = targetElement.offsetParent.getBoundingClientRect();
        this.dom.style.left = `${bound.left - offset.left}px`;
        this.dom.style.top = `${bound.top - offset.top + bound.height}px`;
    },
    view(vnode) {
        var _a, _b;
        return m(".mmf-popover.is-hidden", {
            ...vnode.attrs,
            "class": `${(_a = vnode.attrs.theme) !== null && _a !== void 0 ? _a : THEME_DEFAULT} ${(_b = vnode.attrs.class) !== null && _b !== void 0 ? _b : ""}`.trim(),
            oncreate: ({ dom }) => (this.dom = dom)
        }, vnode.children);
    }
};
export default Popover;
