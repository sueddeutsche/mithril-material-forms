export default function sanitizeValue(type: string, value) {
    if (type === "number") {
        const intValue = parseInt(value);
        const floatValue = parseFloat(value);
        if (floatValue == value) { // eslint-disable-line
            return floatValue;
        } else if (isNaN(intValue)) {
            return value;
        }
        return intValue;
    }
    return value;
}
