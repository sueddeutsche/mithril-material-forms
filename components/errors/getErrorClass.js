module.exports = function getErrorClass(errors) {
    if (errors == null || errors.length === 0) {
        return "no-error";
    }

    for (let i = 0, l = errors.length; i < l; i += 1) {
        if (typeof errors[i] === "string" || errors[i].severity !== "warning") {
            return "has-error";
        }
    }

    return "has-warning";
};
