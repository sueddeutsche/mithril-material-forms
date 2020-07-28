import m from "mithril";
import isEmpty from "../isEmpty";
const RATIO_DEFAULT = [16, 9];

/** returns ratio as css-property */
const getRatioStyleProperty = (ratio: string): string => `padding-bottom: ${getRatio(ratio).toFixed(2)}%;`;


function getRatio(ratio: string): number {
    let dim = ratio.split(":").map(parseFloat);
    dim = dim.length === 2 ? dim : RATIO_DEFAULT;
    return (100 * dim[1] / dim[0]);
}


type MetaDescriptionAttrs = {
    url?: string;
    placeholder?: string;
    description?: string;
}

const MetaDescription: m.Component<MetaDescriptionAttrs> = {
    view(vnode) {
        const { attrs } = vnode;
        return [
            isEmpty(attrs.url) ?
                m(".mmf-preview__placeholder", attrs.placeholder) : [
                    attrs.description ? m(".mmf-preview__description", m.trust(attrs.description)) : "",
                    m(".mmf-preview__overflow-indicator")
                ],
            vnode.children
        ];
    }
};


type InlineImageAttrs = {
    maxRatio: string;
    url?: string;
    placeholder?: string;
    description?: string;
    oncreate?: (vnode: m.Vnode) => void;
    onload?: (vnode: m.Vnode) => void;
}

const InlineImage: m.Component<InlineImageAttrs> = {
    view(vnode) {
        const { attrs } = vnode;
        return m(".mmf-preview__content",
            {
                style: isEmpty(attrs.url) ? "" : getRatioStyleProperty(attrs.maxRatio),
                oncreate: attrs.oncreate
            },
            isEmpty(attrs.url) ?
                m(".mmf-preview__placeholder", attrs.placeholder) : [
                    m("img", {
                        src: attrs.url,
                        onload: attrs.onload
                    }),
                    attrs.description ? m(".mmf-preview__description", m.trust(attrs.description)) : "",
                    m(".mmf-preview__overflow-indicator")
                ],
            vnode.children
        );
    }
};


export type Attrs = {
    /** image url */
    url?: string;
    /** additional classname for module */
    class?: string;
    /** show image as background image - default to false */
    asBackgroundImage?: boolean;
    /** additional description placed under image */
    description?: string
    /** image max-ratio, given as string like "16:9" */
    maxRatio?: string;
    /** optional click eventHandler on image and image-preview */
    onclick?: (event: Event) => void;
    /** placeholder text on image preview */
    placeholder?: string;
}

export type State = {
    overflowContainer: HTMLElement;
    updateRatio(maxRatio: string, image: HTMLImageElement): void;
}


const ImagePreview = {

    updateRatio(maxRatio, image) {
        if (this.overflowContainer != null && image.naturalWidth) {
            const ratioMax = getRatio(maxRatio);
            const ratioImg = getRatio(`${image.naturalWidth}:${image.naturalHeight}`);

            if (ratioMax >= ratioImg) {
                this.overflowContainer.style.paddingBottom = `${ratioImg.toFixed(2)}%`;
                this.overflowContainer.classList.remove("with-overflow");
                this.hasOverflow = false;
            } else {
                this.overflowContainer.style.paddingBottom = `${ratioMax.toFixed(2)}%`;
                this.overflowContainer.classList.add("with-overflow");
                this.hasOverflow = true;
            }
        }
    },

    view(vnode) {
        const attrs = {
            url: null,
            "class": "",
            asBackgroundImage: false,
            description: null,
            placeholder: null,
            onclick: null,
            maxRatio: "16:9",
            // "private"
            onload: event => this.updateRatio(vnode.attrs.maxRatio, event.currentTarget),
            oncreate: content => { this.overflowContainer = content.dom as HTMLElement; },

            ...vnode.attrs
        };

        return m(".mmf-preview.mmf-preview--image",
            {
                "class": attrs.class + (isEmpty(attrs.url) ? "" : " with-image"),
                style: (attrs.asBackgroundImage && !isEmpty(attrs.url)) ?
                    `background-image: url(${attrs.url});` : ""
            },
            attrs.asBackgroundImage ? m(MetaDescription, attrs, vnode.children) : m(InlineImage, attrs, vnode.children)
        );
    }

} as m.Component<Attrs, State>;


export default ImagePreview;
