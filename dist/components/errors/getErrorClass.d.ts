/**
 * returns class for existing errors, warnings or no-error
 */
export default function getErrorClass(errors: Array<{
    severity?: string;
} | string>): string;
