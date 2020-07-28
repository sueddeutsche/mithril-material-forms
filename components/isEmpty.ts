/** returns true, if value is undefined or an empty string */
export default function isEmpty(value): boolean {
    return value == null || value === "";
}

