const m = require("mithril");
const RATIO_DEFAULT = [16, 9];

function isEmpty(value) {
    return value == null || value === "";
}

function getRatioStyle(ratio) {
    return `${getRatio(ratio).toFixed(2)}%`;
}

function getRatio(ratio) {
    let dim = ratio.split(":").map(parseFloat);
    dim = dim.length === 2 ? dim : RATIO_DEFAULT;
    return (100 * dim[1] / dim[0]);
}

const ImagePreview = {

    overflowContainer: null,

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
        const attrs = Object.assign({
            url: null,
            description: null,
            placeholder: null,
            onclick: null,
            maxRatio: "16:9"
        }, vnode.attrs);

        return m(".mmf-preview.mmf-preview--image",
            {
                "class": isEmpty(attrs.url) ? "" : "with-image"
            },
            m(".mmf-preview__content",
                {
                    style: isEmpty(attrs.url) ? "" : `padding-bottom: ${getRatioStyle(attrs.maxRatio)};`,
                    oncreate: (content) => { this.overflowContainer = content.dom; }
                },
                isEmpty(attrs.url) ?
                    m(".mmf-preview__placeholder", attrs.placeholder) : [
                        m("img", {
                            src: attrs.url,
                            onload: (event) => this.updateRatio(attrs.maxRatio, event.path[0])
                        }),
                        attrs.description ? m(".mmf-preview__description", attrs.description) : "",
                        m(".mmf-preview__overflow-indicator")
                    ],
                vnode.children
            )
        );
    }
};


module.exports = ImagePreview;
