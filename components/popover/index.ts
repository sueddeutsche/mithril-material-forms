import m from "mithril";


export type Attrs = {
    /** passes the popover instance, on create */
    onmount: (popover: State) => void;
}

export interface State {
    dom: HTMLElement;
    content: m.Component;
    hide: () => void;
    show: (dom: HTMLElement) => void;
    render: (content: m.Vnode) => void;
}


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

    oncreate(vnode): void {
        vnode.attrs.onmount(vnode.state);
    },

    onremove(): void {
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

    render(content: m.Vnode): void {
        m.render(this.dom, content);
    },

    show(targetElement: HTMLElement): void {
        this.dom.classList.add("is-visible");
        this.dom.classList.remove("is-hidden");

        const bound = targetElement.getBoundingClientRect();
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
        return m(".mmf-popover.is-hidden", {
            ...vnode.attrs,
            oncreate: ({ dom }) => (this.dom = dom as HTMLElement)
        }, vnode.children);
    }

} as m.Component<Attrs, State>;


export default Popover;

