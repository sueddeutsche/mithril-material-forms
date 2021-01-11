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
export default function search<T>(haystack: Array<T>, needle: string, limit?: number, prop?: string): Promise<Array<T>>;
