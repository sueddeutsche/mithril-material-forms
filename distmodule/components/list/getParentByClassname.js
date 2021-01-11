/** helper to retrieve correct (targetClass) target-element of an event.target */
function getParentByClassname(current, targetClass, parent = document.body) {
    if (current === parent) {
        return undefined;
    }
    else if (current.classList.contains(targetClass)) {
        return current;
    }
    return getParentByClassname(current.parentNode, targetClass, parent);
}
export default getParentByClassname;
