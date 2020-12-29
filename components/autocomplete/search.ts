const DEFAULT_LIMIT = 12;

export type Suggestion = {
    /** final exported value */
    value: string;
    [p: string]: any;
}


/**
 * @todo Consider using an word based search approach. Possibly using an
 * existing implementation, e.g. https://github.com/mattyork/fuzzy/tree/master/lib
 * and using `fuzzy.match` only
 *
 * @param  haystack
 * @param  needle
 * @param  limit    - result-limit
 * @return results
 */
export default function search(haystack: Array<Suggestion>, needle: string, limit = DEFAULT_LIMIT, prop = "value"): Promise<Array<Suggestion>> {
    const matches = [];
    const lowerCaseNeedle = needle.toLowerCase();

    if (needle === "") {
        return Promise.resolve(matches);
    }

    function byPosition(a, b) {
        const aIndex = a[prop].toLowerCase().indexOf(lowerCaseNeedle);
        const bIndex = b[prop].toLowerCase().indexOf(lowerCaseNeedle);
        if (aIndex === bIndex) {
            return a[prop].length - b[prop].length; // shortest string
        }
        return aIndex - bIndex;
    }

    const regStartsWith = new RegExp(`^${needle.replace(" ", ".*")}`, "i");

    for (let i = 0, l = haystack.length; i < l; i += 1) {
        if (regStartsWith.test(haystack[i][prop])) {
            matches.push(haystack[i]);
            if (matches.length >= limit) {
                break;
            }
        }
    }

    const regContains = new RegExp(needle.replace(" ", ".*"), "i");

    if (matches.length >= limit) {
        return Promise.resolve(matches.sort(byPosition));
    }

    for (let i = 0, l = haystack.length; i < l; i += 1) {
        if (regContains.test(haystack[i][prop]) && matches.indexOf(haystack[i]) === -1) {
            matches.push(haystack[i]);
            if (matches.length >= limit) {
                break;
            }
        }
    }

    return Promise.resolve(matches.sort(byPosition));
}
