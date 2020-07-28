import m from "mithril";
export declare type Attrs = {
    /** image url */
    url?: string;
    /** additional classname for module */
    class?: string;
    /** show image as background image - default to false */
    asBackgroundImage?: boolean;
    /** additional description placed under image */
    description?: string;
    /** image max-ratio, given as string like "16:9" */
    maxRatio?: string;
    /** optional click eventHandler on image and image-preview */
    onclick?: (event: Event) => void;
    /** placeholder text on image preview */
    placeholder?: string;
};
export declare type State = {
    overflowContainer: HTMLElement;
    updateRatio(maxRatio: string, image: HTMLImageElement): void;
};
declare const ImagePreview: m.Component<Attrs, State>;
export default ImagePreview;
