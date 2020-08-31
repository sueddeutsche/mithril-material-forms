import m from "mithril";
export declare const THEME_DEFAULT = "the-default";
export declare type Error = {
    /** error or warning, added to classlist for rendering options */
    severity?: string;
    /** error-message for display */
    message: string;
};
export declare type DefaultInputAttrs = {
    id?: string;
    /** add additional classnames to input-element */
    class?: string;
    /** if true, input will be deactivated */
    disabled?: boolean;
    /** if set, will add an additional placeholder to the input-element */
    placeholder?: string;
    /** theme class */
    theme?: string;
};
export declare type DefaultFormAttrs = DefaultInputAttrs & {
    /** Appends additional children within the form */
    children?: m.Children;
    /** Shows the description within the form */
    description?: string;
    /** Displays errors in the form */
    errors?: Array<string | Error | m.Vnode<Error>>;
    /** Title of input-form */
    title?: string;
};
