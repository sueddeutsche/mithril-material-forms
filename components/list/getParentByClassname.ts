/** helper to retrieve correct (targetClass) target-element of an event.target */
function getParentByClassname(current: HTMLElement, targetClass: string, parent: HTMLElement = document.body): HTMLElement {
    if (current === parent) {
        return undefined;
    } else if (current.classList.contains(targetClass)) {
        return current;
    }
    return getParentByClassname(current.parentNode as HTMLElement, targetClass, parent);
}


export default getParentByClassname;
