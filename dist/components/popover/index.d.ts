import m from "mithril";
export declare type Attrs = {
    /** passes the popover instance, on create */
    onmount: (popover: State) => void;
    theme?: string;
    class?: string;
};
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
declare const Popover: m.Component<Attrs, State>;
export default Popover;
