/** helper to retrieve correct (targetClass) target-element of an event.target */
declare function getParentByClassname(current: HTMLElement, targetClass: string, parent?: HTMLElement): HTMLElement;
export default getParentByClassname;
