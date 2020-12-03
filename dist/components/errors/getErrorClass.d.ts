import m from "mithril";
import { Error } from "../types";
/**
 * returns class for existing errors, warnings or no-error
 */
export default function getErrorClass(errors: Array<Error | string | m.Vnode<Error>>): string;
