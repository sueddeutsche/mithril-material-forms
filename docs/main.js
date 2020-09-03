/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.scss":
/*!************************!*\
  !*** ./app/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/sass-loader/dist/cjs.js??ref--5-2!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./app/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./app/index.ts":
/*!**********************!*\
  !*** ./app/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./app/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./index.ts");



function render(Component, title, ...args) {
    return [
        mithril__WEBPACK_IMPORTED_MODULE_1___default()("h4", title),
        mithril__WEBPACK_IMPORTED_MODULE_1___default()(".box", mithril__WEBPACK_IMPORTED_MODULE_1___default()(Component, ...args))
    ];
}
const template = {
    button: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["Button"]),
        variations: {
            "button": {
                attrs: { onclick: () => console.log("click") },
                childNodes: ["A clickable Button"]
            },
            "button with icon": {
                attrs: { onclick: () => console.log("click") },
                childNodes: [mithril__WEBPACK_IMPORTED_MODULE_1___default()("span.mmf-icon", "delete")]
            },
            "button with icon and text": {
                attrs: { onclick: () => console.log("click") },
                childNodes: [mithril__WEBPACK_IMPORTED_MODULE_1___default()("span.mmf-icon", "delete"), mithril__WEBPACK_IMPORTED_MODULE_1___default()("span", "A clickable Button")]
            },
            "button disabled": {
                attrs: {
                    disabled: true,
                    raised: false,
                    onclick: () => console.log("should not log this message")
                },
                childNodes: [mithril__WEBPACK_IMPORTED_MODULE_1___default()("span.mmf-icon", "delete"), mithril__WEBPACK_IMPORTED_MODULE_1___default()("span", "A clickable Button")]
            },
            "button raised": {
                attrs: {
                    raised: true,
                    onclick: () => console.log("click")
                },
                childNodes: ["A clickable Button"]
            },
            "button.raised.withIcon": {
                attrs: {
                    raised: true,
                    onclick: () => console.log("click")
                },
                childNodes: [mithril__WEBPACK_IMPORTED_MODULE_1___default()("span.mmf-icon", "delete"), mithril__WEBPACK_IMPORTED_MODULE_1___default()("span", "A clickable Button")]
            },
            "button.raised.disabled": {
                attrs: {
                    raised: true,
                    disabled: true,
                    onclick: () => console.log("click")
                },
                childNodes: ["A clickable Button"]
            }
        }
    },
    checkbox: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["Checkbox"]),
        variations: {
            "checkbox": {
                attrs: {
                    value: false,
                    onchange: value => console.log("value", value)
                }
            },
            "disabled checkbox": {
                attrs: {
                    value: false,
                    disabled: true,
                    onchange: value => console.log("value", value)
                }
            }
        }
    },
    checkboxForm: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["CheckboxForm"]),
        variations: {
            "checkbox form": {
                attrs: {
                    title: "Checkbox-Form Title",
                    description: "Checkbox-Form description text...",
                    value: true,
                    onchange: (value) => console.log("value", value)
                }
            },
            "checkbox form with errors": {
                attrs: {
                    title: "Checkbox-Form Title",
                    errors: ["This checkbox has an invalid type"],
                    description: "Checkbox-Form description text...",
                    value: false,
                    onchange: (value) => console.log("value", value)
                }
            },
            "checkbox form, disabled": {
                attrs: {
                    disabled: true,
                    title: "Disabled Checkbox-Form",
                    errors: ["This checkbox has an invalid type"],
                    description: "Checkbox-Form description text...",
                    value: false,
                    onchange: () => console.error("should not log this message")
                }
            },
            "checkbox form, inverted": {
                attrs: {
                    title: "Checkbox-Form Title",
                    invertOrder: true,
                    description: "Checkbox-Form description text...",
                    value: true,
                    onchange: (value) => console.log("value", value)
                }
            }
        }
    },
    input: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["Input"]),
        variations: {
            "input": {
                attrs: {
                    type: "text",
                    value: "input initial text value",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "input placeholder": {
                attrs: {
                    type: "text",
                    placeholder: "field placeholder",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "input.disabled": {
                attrs: {
                    type: "text",
                    disabled: true,
                    value: "input initial text value",
                    onchange: () => console.error("should not log this message")
                }
            },
        }
    },
    inputForm: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["InputForm"]),
        variations: {
            "input form": {
                attrs: {
                    title: "Input-Form Title",
                    description: "Input-Form with instantUpdate=true...",
                    type: "text",
                    instantUpdate: true,
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "input form with errors": {
                attrs: {
                    title: "Input-Form Title",
                    errors: ["This text could be a little longer"],
                    description: "Input-Form description text...",
                    type: "text",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "disabled input form": {
                attrs: {
                    id: "mmf-input-form",
                    title: "Input-Form Title",
                    disabled: true,
                    errors: ["This text could be a little longer"],
                    description: "Input-Form description text...",
                    type: "text",
                    onchange: () => console.error("should not log this message")
                }
            }
        }
    },
    select: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["Select"]),
        variations: {
            "select": {
                attrs: {
                    options: [
                        "a very nice selection",
                        "ignore any niceness"
                    ],
                    value: "a very nice selection",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "disabled select": {
                attrs: {
                    disabled: true,
                    options: [
                        "a very nice selection",
                        "ignore any niceness"
                    ],
                    value: "a very nice selection",
                    onchange: () => console.error("should not log this message")
                }
            }
        }
    },
    selectForm: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["SelectForm"]),
        variations: {
            "select form": {
                attrs: {
                    title: "Select-Form Title",
                    description: "Select-Form description text...",
                    options: [
                        "a very nice selection",
                        "ignore any niceness"
                    ],
                    value: "a very nice selection",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "select form with errors": {
                attrs: {
                    title: "Select-Form Title",
                    description: "Select-Form description text...",
                    errors: ["This selection is invalid"],
                    options: [
                        "a very nice selection",
                        "ignore any niceness"
                    ],
                    value: "a very nice selection",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "disabled select form": {
                attrs: {
                    disabled: true,
                    title: "Select-Form Title",
                    description: "Select-Form description text...",
                    errors: ["This selection is invalid"],
                    options: [
                        "a very nice selection",
                        "ignore any niceness"
                    ],
                    value: "a very nice selection",
                    onchange: () => console.error("should not log this message")
                }
            },
            "inverted select form": {
                attrs: {
                    disabled: false,
                    invertOrder: true,
                    id: "mmf-select-form",
                    title: "Select-Form Title",
                    description: "Select-Form description text...",
                    errors: ["This selection is invalid"],
                    options: [
                        "a very nice selection",
                        "ignore any niceness"
                    ],
                    value: "a very nice selection",
                    onchange: () => console.error("should not log this message")
                }
            }
        }
    },
    switch: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["Switch"]),
        variations: {
            "switch": {
                attrs: {
                    value: false,
                    onchange: value => console.log("value", value)
                }
            },
            "switch checkbox": {
                attrs: {
                    value: false,
                    disabled: true,
                    onchange: value => console.log("value", value)
                }
            }
        }
    },
    switchForm: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["SwitchForm"]),
        variations: {
            "switch form": {
                attrs: {
                    title: "Switch-Form Title",
                    description: "Switch-Form description text...",
                    value: true,
                    onchange: (value) => console.log("value", value)
                }
            },
            "switch form with errors": {
                attrs: {
                    title: "Switch-Form Title",
                    errors: ["This switch has an invalid type"],
                    description: "Switch-Form description text...",
                    value: false,
                    onchange: (value) => console.log("value", value)
                }
            },
            "switch form, disabled": {
                attrs: {
                    disabled: true,
                    title: "Disabled Switch-Form",
                    errors: ["This switch has an invalid type"],
                    description: "Switch-Form description text...",
                    value: false,
                    onchange: () => console.error("should not log this message")
                }
            },
            "switch form, inverted": {
                attrs: {
                    title: "Switch-Form Title",
                    invertOrder: true,
                    description: "Switch-Form description text...",
                    value: true,
                    onchange: (value) => console.log("value", value)
                }
            }
        }
    },
    textarea: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["Textarea"]),
        variations: {
            "textarea": {
                attrs: {
                    type: "text",
                    value: "textarea initial text value",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "textarea with placeholder": {
                attrs: {
                    type: "text",
                    placeholder: "textarea placeholder",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "disabled textarea": {
                attrs: {
                    disabled: true,
                    type: "text",
                    value: "textarea initial text value",
                    onchange: () => console.error("should not log this message")
                }
            }
        }
    },
    textareaForm: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["TextareaForm"]),
        variations: {
            "textarea form": {
                attrs: {
                    type: "text",
                    title: "Textarea-Form Title",
                    description: "Textarea-Form description text...",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "textarea form with errors": {
                attrs: {
                    type: "text",
                    title: "Long Title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beatus autem esse in maximarum rerum timore nemo potest.",
                    errors: ["An input is required"],
                    description: "Textarea-Form description text...",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "disabled textarea form": {
                attrs: {
                    disabled: true,
                    type: "text",
                    title: "Long Title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beatus autem esse in maximarum rerum timore nemo potest.",
                    errors: ["An input is required"],
                    description: "Textarea-Form description text...",
                    onchange: () => console.error("should not log this message")
                }
            }
        }
    }
};
function component(type) {
    const { render, variations } = template[type];
    return mithril__WEBPACK_IMPORTED_MODULE_1___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_1___default()("h2", mithril__WEBPACK_IMPORTED_MODULE_1___default()("span", type)), mithril__WEBPACK_IMPORTED_MODULE_1___default()(".columns", mithril__WEBPACK_IMPORTED_MODULE_1___default()(".theme.no-theme", mithril__WEBPACK_IMPORTED_MODULE_1___default()("h3", "layout & typography"), Object.keys(variations).map(title => {
        const variation = variations[title];
        return render(title, variation.attrs, ...variation.childNodes || []);
    })), mithril__WEBPACK_IMPORTED_MODULE_1___default()(".theme.theme-material", mithril__WEBPACK_IMPORTED_MODULE_1___default()("h3", "theme material"), Object.keys(variations).map(title => {
        const variation = variations[title];
        return render(title, { ...variation.attrs, theme: "the-material" }, ...variation.childNodes || []);
    })), mithril__WEBPACK_IMPORTED_MODULE_1___default()(".theme.theme-ux", mithril__WEBPACK_IMPORTED_MODULE_1___default()("h3", "theme ux"), Object.keys(variations).map(title => {
        const variation = variations[title];
        return render(title, { ...variation.attrs, theme: "the-solid" }, ...variation.childNodes || []);
    }))));
}
mithril__WEBPACK_IMPORTED_MODULE_1___default.a.render(document.body, mithril__WEBPACK_IMPORTED_MODULE_1___default()(".page", mithril__WEBPACK_IMPORTED_MODULE_1___default()("h1", "mithril(-material)-forms"), component("button"), component("input"), component("inputForm"), component("checkbox"), component("checkboxForm"), component("select"), component("selectForm"), component("switch"), component("switchForm"), component("textarea"), component("textareaForm")));


/***/ }),

/***/ "./components/button/index.ts":
/*!************************************!*\
  !*** ./components/button/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./components/types.ts");


/* harmony default export */ __webpack_exports__["default"] = ({
    getClassNames(attrs) {
        var _a;
        const classNames = [
            "mmf-button",
            (_a = attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_1__["THEME_DEFAULT"],
            attrs.raised ? "mmf-button--raised" : "mmf-button--flat",
            attrs.disabled ? "is-disabled" : "is-enabled"
        ];
        if (attrs.class) {
            classNames.push(attrs.class);
        }
        return classNames.join(" ");
    },
    view(vnode) {
        const attrs = {
            // onclick is assigned via mithril
            ...vnode.attrs,
            theme: undefined,
            class: this.getClassNames(vnode.attrs)
        };
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("button", attrs, vnode.children);
    }
});


/***/ }),

/***/ "./components/checkbox/index.ts":
/*!**************************************!*\
  !*** ./components/checkbox/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
    view({ attrs }) {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.mmf-checkbox", {
            "data-id": attrs.id,
            type: "checkbox",
            class: attrs.theme || "the-default",
            disabled: attrs.disabled === true,
            checked: attrs.value,
            onchange: e => attrs.onchange(e.target.checked),
            onfocus: attrs.onfocus,
            onblur: attrs.onblur
        });
    }
});


/***/ }),

/***/ "./components/checkboxform/index.ts":
/*!******************************************!*\
  !*** ./components/checkboxform/index.ts ***!
  \******************************************/
/*! exports provided: defaultOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../checkbox */ "./components/checkbox/index.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label */ "./components/label/index.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./components/errors/index.ts");




const defaultOptions = {
    id: null,
    title: "",
    disabled: false,
    theme: "the-default",
    value: "",
    errors: [],
    description: "",
    placeholder: "",
    onchange: Function.prototype
};
/* harmony default export */ __webpack_exports__["default"] = ({
    view(vnode) {
        const attrs = { ...defaultOptions, ...vnode.attrs };
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.mmf-form.mmf-form--checkbox.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${Object(_errors__WEBPACK_IMPORTED_MODULE_3__["getErrorClass"])(attrs.errors)} ${attrs.theme}`
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], {
            ...attrs,
            invertOrder: attrs.invertOrder !== true
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
            id: vnode.attrs.id,
            disabled: attrs.disabled,
            theme: attrs.theme,
            value: vnode.attrs.value,
            onchange: vnode.attrs.onchange,
            onfocus: vnode.attrs.onfocus,
            onblur: vnode.attrs.onblur
        })), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_errors__WEBPACK_IMPORTED_MODULE_3__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-meta", attrs.description), vnode.children);
    }
});


/***/ }),

/***/ "./components/errors/getErrorClass.ts":
/*!********************************************!*\
  !*** ./components/errors/getErrorClass.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getErrorClass; });
function isVNode(object) {
    return typeof object.tag === "string" && object.attrs != null && typeof object.attrs === "object";
}
/**
 * returns class for existing errors, warnings or no-error
 */
function getErrorClass(errors) {
    if (errors == null || errors.length === 0) {
        return "no-error";
    }
    for (let i = 0, l = errors.length; i < l; i += 1) {
        const error = errors[i];
        if (isVNode(error) || typeof error === "string") {
            return "has-error";
        }
        else if (error && error.severity !== "warning") {
            return "has-error";
        }
    }
    return "has-warning";
}


/***/ }),

/***/ "./components/errors/index.ts":
/*!************************************!*\
  !*** ./components/errors/index.ts ***!
  \************************************/
/*! exports provided: getErrorClass, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getErrorClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getErrorClass */ "./components/errors/getErrorClass.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getErrorClass", function() { return _getErrorClass__WEBPACK_IMPORTED_MODULE_1__["default"]; });



function isVNode(object) {
    return typeof object.tag === "string" && object.attrs != null && typeof object.attrs === "object";
}
function isError(object) {
    return object && object.message;
}

/* harmony default export */ __webpack_exports__["default"] = ({
    view(vnode) {
        const { errors } = vnode.attrs;
        if (errors == null || errors.length === 0) {
            return "";
        }
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.mmf-form__errors", errors.map(error => {
            if (isVNode(error)) {
                return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`li.mmf-form__error.mmf-form__error--${error.attrs.severity}`, error);
            }
            if (isError(error)) {
                if (error.severity === "warning") {
                    return mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.mmf-form__error.mmf-form__error--warning", mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(error.message));
                }
                return mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.mmf-form__error.mmf-form__error--error", mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(error.message));
            }
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.mmf-form__error.mmf-form__error--error", mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(error));
        }));
    }
});


/***/ }),

/***/ "./components/imagepreview/index.ts":
/*!******************************************!*\
  !*** ./components/imagepreview/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isEmpty */ "./components/isEmpty.ts");


const RATIO_DEFAULT = [16, 9];
/** returns ratio as css-property */
const getRatioStyleProperty = (ratio) => `padding-bottom: ${getRatio(ratio).toFixed(2)}%;`;
function getRatio(ratio) {
    let dim = ratio.split(":").map(parseFloat);
    dim = dim.length === 2 ? dim : RATIO_DEFAULT;
    return (100 * dim[1] / dim[0]);
}
const MetaDescription = {
    view(vnode) {
        const { attrs } = vnode;
        return [
            Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs.url) ?
                mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview__placeholder", attrs.placeholder) : [
                attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview__description", mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(attrs.description)),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview__overflow-indicator")
            ],
            vnode.children
        ];
    }
};
const InlineImage = {
    view(vnode) {
        const { attrs } = vnode;
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview__content", {
            style: !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs.url) && getRatioStyleProperty(attrs.maxRatio),
            oncreate: attrs.oncreate
        }, Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs.url) ?
            mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview__placeholder", attrs.placeholder) : [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("img", {
                src: attrs.url,
                onload: attrs.onload
            }),
            attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview__description", mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(attrs.description)),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview__overflow-indicator")
        ], vnode.children);
    }
};
const ImagePreview = {
    updateRatio(maxRatio, image) {
        if (this.overflowContainer != null && image.naturalWidth) {
            const ratioMax = getRatio(maxRatio);
            const ratioImg = getRatio(`${image.naturalWidth}:${image.naturalHeight}`);
            if (ratioMax >= ratioImg) {
                this.overflowContainer.style.paddingBottom = `${ratioImg.toFixed(2)}%`;
                this.overflowContainer.classList.remove("with-overflow");
                this.hasOverflow = false;
            }
            else {
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
            oncreate: content => { this.overflowContainer = content.dom; },
            ...vnode.attrs
        };
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview.mmf-preview--image", {
            "class": attrs.class + (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs.url) ? "" : " with-image"),
            style: (attrs.asBackgroundImage && !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs.url)) &&
                `background-image: url(${attrs.url});`
        }, attrs.asBackgroundImage ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(MetaDescription, attrs, vnode.children) : mithril__WEBPACK_IMPORTED_MODULE_0___default()(InlineImage, attrs, vnode.children));
    }
};
/* harmony default export */ __webpack_exports__["default"] = (ImagePreview);


/***/ }),

/***/ "./components/input/index.ts":
/*!***********************************!*\
  !*** ./components/input/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./components/types.ts");


/* harmony default export */ __webpack_exports__["default"] = ({
    value: null,
    hasFocus: false,
    view({ attrs }) {
        var _a, _b, _c;
        let { value } = attrs;
        if (this.hasFocus && this.value != null) {
            // this will remove any changes applied to this data from "outside"
            value = this.value;
        }
        this.value = value;
        const inputAttributes = {
            // id: if the element is pointer sensitive it will be rebuild on pointer updates, loosing focus
            "data-id": attrs.id,
            class: `${(_a = attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_1__["THEME_DEFAULT"]} ${(_b = attrs.class) !== null && _b !== void 0 ? _b : ""}`,
            disabled: attrs.disabled,
            placeholder: attrs.placeholder,
            type: (_c = attrs.type) !== null && _c !== void 0 ? _c : "text",
            value,
            oninput: e => (this.value = e.target.value),
            onfocus: event => {
                this.hasFocus = true;
                attrs.onfocus && attrs.onfocus(event);
            },
            onblur: event => {
                this.hasFocus = false;
                attrs.onblur && attrs.onblur(event);
            }
        };
        const updateEvent = attrs.instantUpdate === true ? "onkeyup" : "onchange";
        inputAttributes[updateEvent] = () => attrs.onchange(this.value);
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input.mmf-input`, inputAttributes);
    }
});


/***/ }),

/***/ "./components/inputform/index.ts":
/*!***************************************!*\
  !*** ./components/inputform/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input */ "./components/input/index.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label */ "./components/label/index.ts");
/* harmony import */ var _sanitizeValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sanitizeValue */ "./components/inputform/sanitizeValue.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errors */ "./components/errors/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types */ "./components/types.ts");






const TYPES = {
    string: "text",
    integer: "number",
    number: "number"
};
const InputForm = {
    oncreate(vnode) {
        this.$form = vnode.dom;
    },
    updateClasses(value) {
        const hasValue = value !== "";
        this.$form.classList.remove(hasValue ? "is-empty" : "not-empty");
        this.$form.classList.add(hasValue === false ? "is-empty" : "not-empty");
    },
    onfocus() {
        this.$form.classList.add("has-focus");
        this.$form.classList.remove("no-focus");
    },
    onblur(value) {
        this.$form.classList.add("no-focus");
        this.$form.classList.remove("has-focus");
        this.updateClasses(value);
    },
    hasFocus() {
        return this.$form && this.$form.classList.contains("has-focus");
    },
    view(vnode) {
        var _a;
        const inputType = TYPES[vnode.attrs.type] || vnode.attrs.type || "text";
        const attrs = {
            id: null,
            title: "",
            value: "",
            errors: [],
            description: "",
            placeholder: "",
            instantUpdate: false,
            onblur: Function.prototype,
            onfocus: Function.prototype,
            onchange: Function.prototype,
            ...vnode.attrs
        };
        const focusClass = this.hasFocus() ? "has-focus" : "no-focus";
        const errorClass = Object(_errors__WEBPACK_IMPORTED_MODULE_4__["getErrorClass"])(attrs.errors);
        const emptyClass = attrs.value === "" ? "is-empty" : "not-empty";
        const view = mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.mmf-form.mmf-form--input.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${focusClass} ${errorClass} ${emptyClass} ${(_a = attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_5__["THEME_DEFAULT"]}`
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], attrs, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
            type: inputType,
            id: attrs.id,
            disabled: attrs.disabled,
            theme: attrs.theme,
            instantUpdate: attrs.instantUpdate,
            placeholder: attrs.placeholder,
            onchange: value => attrs.onchange(Object(_sanitizeValue__WEBPACK_IMPORTED_MODULE_3__["default"])(inputType, value)),
            value: attrs.value,
            onfocus: e => {
                this.onfocus();
                attrs.onfocus && attrs.onfocus(e);
            },
            onblur: e => {
                this.onblur(e.target.value);
                attrs.onblur && attrs.onblur(e);
            }
        })), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_errors__WEBPACK_IMPORTED_MODULE_4__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-meta", attrs.description), vnode.children);
        return view;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (InputForm);


/***/ }),

/***/ "./components/inputform/sanitizeValue.ts":
/*!***********************************************!*\
  !*** ./components/inputform/sanitizeValue.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sanitizeValue; });
function sanitizeValue(type, value) {
    if (type === "number") {
        const intValue = parseInt(value);
        const floatValue = parseFloat(value);
        if (floatValue == value) { // eslint-disable-line
            return floatValue;
        }
        else if (isNaN(intValue)) {
            return value;
        }
        return intValue;
    }
    return value;
}


/***/ }),

/***/ "./components/isEmpty.ts":
/*!*******************************!*\
  !*** ./components/isEmpty.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmpty; });
/** returns true, if value is undefined or an empty string */
function isEmpty(value) {
    return value == null || value === "";
}


/***/ }),

/***/ "./components/label/index.ts":
/*!***********************************!*\
  !*** ./components/label/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
    view(vnode) {
        const { invertOrder, id, title, class: classNames } = vnode.attrs;
        if (invertOrder === true) {
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.order--label-last", {
                "class": classNames
            }, vnode.children, title && mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.mmf-label", title));
        }
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.order--label-first", {
            "class": classNames
        }, title && mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.mmf-label", title), vnode.children);
    }
});


/***/ }),

/***/ "./components/select/index.ts":
/*!************************************!*\
  !*** ./components/select/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);

const isOptionValue = (option) => option && option.value !== undefined;
/* harmony default export */ __webpack_exports__["default"] = ({
    view(vnode) {
        const { attrs } = vnode;
        const { theme = "the-default" } = vnode.attrs;
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-select__wrapper", {
            "class": `${theme} ${attrs.disabled === true ? "is-disabled" : "is-enabled"}`,
            oncreate: _vnode => (this.$wrapper = _vnode.dom)
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()("select.mmf-select", {
            "data-id": attrs.id,
            value: attrs.value,
            disabled: attrs.disabled,
            "class": attrs.class,
            onfocus: () => {
                this.$wrapper && this.$wrapper.classList.add("has-focus");
                attrs.onfocus && attrs.onfocus(vnode);
            },
            onblur: () => {
                this.$wrapper && this.$wrapper.classList.remove("has-focus");
                attrs.onblur && attrs.onblur(vnode);
            },
            // @reminder will always be string, which must be specified in json-schema or else datatype must
            // be passed to select-component
            onchange: e => attrs.onchange(e.target.value)
        }, attrs.options.map(value => {
            if (isOptionValue(value)) {
                // value must be a string or else is discarded
                return mithril__WEBPACK_IMPORTED_MODULE_0___default()("option", { value: `${value.value}` }, value.title || value.value);
            }
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()("option", { value: `${value}` }, value);
        })));
    }
});


/***/ }),

/***/ "./components/selectform/index.ts":
/*!****************************************!*\
  !*** ./components/selectform/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../select */ "./components/select/index.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label */ "./components/label/index.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./components/errors/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./components/types.ts");





/* harmony default export */ __webpack_exports__["default"] = ({
    view(vnode) {
        var _a;
        const attrs = {
            id: null,
            value: "",
            options: [{ title: "-", value: false }],
            errors: [],
            invertOrder: false,
            description: "",
            onchange: Function.prototype,
            ...vnode.attrs
        };
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.mmf-form.mmf-form--select.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${(_a = attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_4__["THEME_DEFAULT"]} ${Object(_errors__WEBPACK_IMPORTED_MODULE_3__["getErrorClass"])(attrs.errors)}`
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], {
            "class": "mmf-grow-2",
            ...attrs,
            invertOrder: attrs.invertOrder
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_select__WEBPACK_IMPORTED_MODULE_1__["default"], attrs)), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_errors__WEBPACK_IMPORTED_MODULE_3__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-meta", attrs.description), vnode.children);
    }
});


/***/ }),

/***/ "./components/switch/index.ts":
/*!************************************!*\
  !*** ./components/switch/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
    view({ attrs }) {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.mmf-switch", {
            "data-id": attrs.id,
            type: "checkbox",
            class: attrs.theme || "the-default",
            disabled: attrs.disabled === true,
            checked: attrs.value,
            onchange: e => attrs.onchange(e.target.checked),
            onfocus: attrs.onfocus,
            onblur: attrs.onblur
        });
    }
});


/***/ }),

/***/ "./components/switchform/index.ts":
/*!****************************************!*\
  !*** ./components/switchform/index.ts ***!
  \****************************************/
/*! exports provided: defaultOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch */ "./components/switch/index.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label */ "./components/label/index.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./components/errors/index.ts");




const defaultOptions = {
    id: null,
    title: "",
    disabled: false,
    theme: "the-default",
    value: "",
    errors: [],
    description: "",
    onchange: Function.prototype
};
/* harmony default export */ __webpack_exports__["default"] = ({
    view(vnode) {
        const attrs = { ...defaultOptions, ...vnode.attrs };
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.mmf-form.mmf-form--switch.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${Object(_errors__WEBPACK_IMPORTED_MODULE_3__["getErrorClass"])(attrs.errors)} ${attrs.theme}`
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], {
            ...attrs,
            invertOrder: attrs.invertOrder !== true
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
            id: vnode.attrs.id,
            disabled: attrs.disabled,
            theme: attrs.theme,
            value: vnode.attrs.value,
            onchange: vnode.attrs.onchange,
            onfocus: vnode.attrs.onfocus,
            onblur: vnode.attrs.onblur
        })), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_errors__WEBPACK_IMPORTED_MODULE_3__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-meta", attrs.description), vnode.children);
    }
});


/***/ }),

/***/ "./components/textarea/index.ts":
/*!**************************************!*\
  !*** ./components/textarea/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./components/types.ts");



const raf = window.requestAnimationFrame;
const emptyFunction = Function.prototype;
/* harmony default export */ __webpack_exports__["default"] = ({
    boolean: false,
    onupdate(vnode) {
        raf(() => autosize__WEBPACK_IMPORTED_MODULE_1___default.a.update(vnode.dom));
    },
    view(vnode) {
        var _a, _b;
        const attrs = {
            value: "",
            rows: 1,
            placeholder: "",
            disabled: false,
            instantUpdate: false,
            onblur: emptyFunction,
            onfocus: emptyFunction,
            onchange: emptyFunction,
            oncreate: emptyFunction,
            onbeforeremove: emptyFunction,
            ...vnode.attrs
        };
        const disabled = attrs.disabled === true;
        if (this.focus) {
            // keep current value, while input is being active this prevents
            // jumps in cursor, caused by race conditions
            // @attention - this may produce other problems
            attrs.value = this.textarea.value;
        }
        const textareaAttributes = {
            "data-id": attrs.id,
            value: attrs.value,
            class: `${(_a = attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_2__["THEME_DEFAULT"]} ${(_b = attrs.class) !== null && _b !== void 0 ? _b : ""}`,
            rows: attrs.rows,
            disabled,
            placeholder: attrs.placeholder,
            onblur: e => {
                this.focus = false;
                attrs.onblur && attrs.onblur(e);
            },
            onfocus: e => {
                this.focus = true;
                attrs.onfocus && attrs.onfocus(e);
            },
            onupdate: node => autosize__WEBPACK_IMPORTED_MODULE_1___default.a.update(node.dom),
            oncreate: node => {
                this.textarea = node.dom;
                attrs.oncreate(node);
                autosize__WEBPACK_IMPORTED_MODULE_1___default()(node.dom);
                autosize__WEBPACK_IMPORTED_MODULE_1___default.a.update(node.dom);
            },
            onbeforeremove: node => {
                attrs.onbeforeremove(node);
                autosize__WEBPACK_IMPORTED_MODULE_1___default.a.destroy(node.dom);
            }
        };
        const updateEvent = attrs.instantUpdate === true ? "onkeyup" : "onchange";
        textareaAttributes[updateEvent] = e => attrs.onchange(e.target.value);
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("textarea.mmf-textarea", textareaAttributes);
    }
});


/***/ }),

/***/ "./components/textareaform/index.ts":
/*!******************************************!*\
  !*** ./components/textareaform/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors */ "./components/errors/index.ts");
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isEmpty */ "./components/isEmpty.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label */ "./components/label/index.ts");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../textarea */ "./components/textarea/index.ts");





/* harmony default export */ __webpack_exports__["default"] = ({
    oncreate(vnode) {
        this.$form = vnode.dom;
        this.onblur(vnode.attrs.value);
    },
    onfocus() {
        this.$form.classList.remove("no-focus");
        this.$form.classList.add("has-focus");
    },
    onblur(value) {
        this.$form.classList.remove("has-focus");
        this.$form.classList.add("no-focus");
        this.updateClasses(value);
    },
    updateClasses(value) {
        const hasValue = Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(value) === false;
        this.$form.classList.remove(hasValue ? "is-empty" : "not-empty");
        this.$form.classList.add(hasValue === false ? "is-empty" : "not-empty");
    },
    onupdate(vnode) {
        this.updateClasses(vnode.attrs.value);
    },
    view(vnode) {
        const attrs = Object.assign({
            id: null,
            title: "",
            value: "",
            errors: [],
            disabled: false,
            description: "",
            placeholder: "",
            rows: 1,
            theme: "the-default",
            instantUpdate: false,
            onblur: Function.prototype,
            onfocus: Function.prototype,
            onchange: Function.prototype
        }, vnode.attrs);
        const disabled = attrs.disabled === true;
        return mithril__WEBPACK_IMPORTED_MODULE_3___default()(`.mmf-form.mmf-form--textarea.is-${disabled ? "disabled" : "enabled"}`, {
            "class": `${attrs.theme} ${Object(_errors__WEBPACK_IMPORTED_MODULE_0__["getErrorClass"])(attrs.errors)}`
        }, mithril__WEBPACK_IMPORTED_MODULE_3___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], attrs, mithril__WEBPACK_IMPORTED_MODULE_3___default()(_textarea__WEBPACK_IMPORTED_MODULE_4__["default"], {
            id: attrs.id,
            value: attrs.value,
            disabled,
            theme: attrs.theme,
            instantUpdate: attrs.instantUpdate,
            placeholder: attrs.placeholder,
            rows: attrs.rows,
            onchange: attrs.onchange,
            onblur: e => {
                this.onblur(e.target.value);
                attrs.onblur(e);
            },
            onfocus: e => {
                this.onfocus();
                attrs.onfocus(e);
            }
        })), mithril__WEBPACK_IMPORTED_MODULE_3___default()(_errors__WEBPACK_IMPORTED_MODULE_0__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_3___default()(".mmf-meta", attrs.description), vnode.children);
    }
});


/***/ }),

/***/ "./components/types.ts":
/*!*****************************!*\
  !*** ./components/types.ts ***!
  \*****************************/
/*! exports provided: THEME_DEFAULT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_DEFAULT", function() { return THEME_DEFAULT; });
const THEME_DEFAULT = "the-default";


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: Button, Checkbox, CheckboxForm, Errors, Input, InputForm, Label, Select, SelectForm, Switch, SwitchForm, Textarea, TextareaForm, ImagePreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/button */ "./components/button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components_button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/checkbox */ "./components/checkbox/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _components_checkbox__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_checkboxform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/checkboxform */ "./components/checkboxform/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxForm", function() { return _components_checkboxform__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/errors */ "./components/errors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return _components_errors__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/input */ "./components/input/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _components_input__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _components_inputform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/inputform */ "./components/inputform/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputForm", function() { return _components_inputform__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _components_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/label */ "./components/label/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _components_label__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/select */ "./components/select/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _components_select__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _components_selectform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/selectform */ "./components/selectform/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectForm", function() { return _components_selectform__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/switch */ "./components/switch/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _components_switch__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _components_switchform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/switchform */ "./components/switchform/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchForm", function() { return _components_switchform__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/textarea */ "./components/textarea/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _components_textarea__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _components_textareaform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/textareaform */ "./components/textareaform/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaForm", function() { return _components_textareaform__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _components_imagepreview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/imagepreview */ "./components/imagepreview/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return _components_imagepreview__WEBPACK_IMPORTED_MODULE_13__["default"]; });

















/***/ }),

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./app/index.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./app/index.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".mmf-button {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  height: 36px;\n  margin: 6px;\n  padding: 0 16px; }\n  .mmf-button:not([disabled]) {\n    cursor: pointer;\n    pointer-events: all; }\n  .mmf-button .mmf-icon ~ * {\n    padding-left: 8px; }\n\n.mmf-checkbox {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  margin: 0;\n  padding: 0;\n  background-color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  border: medium none;\n  font-size: inherit; }\n  .mmf-checkbox:not([disabled]) {\n    cursor: pointer;\n    pointer-events: all; }\n  .mmf-checkbox::-ms-expand {\n    display: none; }\n  .mmf-checkbox:checked:after {\n    content: \"check_box\"; }\n  .mmf-checkbox:after {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    user-select: none;\n    font-family: \"Material Icons\";\n    font-weight: normal;\n    font-style: normal;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: \"liga\";\n    -webkit-font-smoothing: antialiased;\n    content: \"check_box_outline_blank\";\n    transform: translateY(10%); }\n    .mmf-checkbox:after:not([disabled]) {\n      cursor: pointer;\n      pointer-events: all; }\n  .mmf-checkbox[disabled]:after {\n    cursor: default; }\n\n.mmf-form--checkbox label {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center; }\n\n.mmf-form--checkbox .order--label-first .mmf-label {\n  padding-right: 8px; }\n\n.mmf-form--checkbox .order--label-last .mmf-label {\n  padding-left: 8px; }\n\nul.mmf-form__errors {\n  list-style: none;\n  padding-left: 0;\n  margin: 0; }\n  ul.mmf-form__errors li {\n    margin-top: 4px; }\n\n.mmf-input {\n  box-sizing: border-box;\n  width: 100%; }\n\n.mmf-form--input label {\n  display: flex;\n  flex-direction: column; }\n\n.mmf-select__wrapper {\n  position: relative;\n  display: inline-block; }\n  .mmf-select__wrapper:after {\n    content: \"keyboard_arrow_down\";\n    font-family: \"Material Icons\";\n    font-weight: normal;\n    font-style: normal;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: \"liga\";\n    -webkit-font-smoothing: antialiased;\n    align-items: center;\n    bottom: 0;\n    display: flex;\n    pointer-events: none;\n    position: absolute;\n    right: 4px;\n    top: 0; }\n  .mmf-select__wrapper.is-disabled:after {\n    opacity: 0.38; }\n\n.mmf-select {\n  -moz-appearance: window;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  padding: 8px;\n  padding-right: 28px; }\n  .mmf-select:not([disabled]) {\n    cursor: pointer; }\n\n.mmf-form--select label {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n.mmf-form--select .order--label-first .mmf-label {\n  padding-right: 16px; }\n\n.mmf-form--select .order--label-last .mmf-label {\n  padding-left: 16px; }\n\n.mmf-switch.the-material,\n.mmf-switch.the-solid {\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\n.mmf-switch {\n  background-color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  border: medium none;\n  font-size: inherit;\n  margin: 0;\n  background-color: rgba(0, 0, 0, 0.38);\n  border-radius: 1em;\n  border: 1px solid rgba(0, 0, 0, 0.38);\n  width: 2em;\n  height: 1em;\n  position: relative;\n  overflow: hidden; }\n  .mmf-switch::-ms-expand {\n    display: none; }\n  .mmf-switch:after {\n    background-color: #fff;\n    border-radius: 1em;\n    position: relative;\n    content: \"\";\n    display: inline-block;\n    height: 100%;\n    width: 50%;\n    left: 0;\n    margin: 0;\n    transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), width 0.3s ease, margin 0.3s ease; }\n  .mmf-switch:checked {\n    background-color: #2ECC71; }\n    .mmf-switch:checked:after {\n      left: 100%;\n      transform: translate(-100%, 0); }\n  .mmf-switch[disabled] {\n    opacity: 0.38; }\n  .mmf-switch:not([disabled]) {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    user-select: none; }\n    .mmf-switch:not([disabled]):not([disabled]) {\n      cursor: pointer;\n      pointer-events: all; }\n    .mmf-switch:not([disabled]):hover {\n      cursor: pointer; }\n    .mmf-switch:not([disabled]):active:after {\n      width: 60%; }\n\n.mmf-form--switch label {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center; }\n\n.mmf-form--switch .order--label-first .mmf-label {\n  padding-right: 8px; }\n\n.mmf-form--switch .order--label-last .mmf-label {\n  padding-left: 8px; }\n\n.mmf-textarea {\n  width: 100%;\n  resize: vertical; }\n  .mmf-textarea:focus {\n    outline-style: none;\n    outline-width: 0; }\n\n.mmf-form--textarea label {\n  display: flex;\n  flex-direction: column; }\n\n.mmf-form--textarea textarea {\n  box-sizing: border-box; }\n\n.mmf-form .mmf-meta {\n  margin-top: 4px; }\n\n.mmf-form.is-enabled label:hover {\n  cursor: pointer; }\n\n.mmf-icon {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: \"liga\";\n  -webkit-font-smoothing: antialiased; }\n\n.mmf-button {\n  font-weight: 400;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1em; }\n\n.mmf-form__error--warning {\n  color: #F39C12; }\n\n.mmf-form__error--error {\n  color: #d50000; }\n\n.mmf-input {\n  font-weight: 400;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit; }\n\n.mmf-label {\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  user-select: none;\n  color: #000; }\n\n.mmf-select__wrapper:after {\n  font-size: 1.25em;\n  color: #000; }\n\n.mmf-select {\n  font-family: inherit;\n  font-size: inherit; }\n  .mmf-select option {\n    font-size: inherit;\n    color: #000; }\n\n.mmf-textarea {\n  font-size: inherit;\n  font-family: inherit; }\n\n.mmf-form.hasError .mmf-textarea {\n  border-color: #d50000; }\n\n.the-ux.mmf-form--textarea textarea {\n  font-weight: 400;\n  color: inherit;\n  font-size: inherit;\n  line-height: 1.4em; }\n\n.mmf-form__errors {\n  font-size: 0.8em;\n  color: #d50000; }\n\n.mmf-meta {\n  opacity: 0.54;\n  font-style: italic;\n  font-size: 0.8em; }\n\n.mmf-form.is-disabled .mmf-meta,\n.mmf-form.is-disabled .mmf-form__errors,\n.mmf-form.is-disabled span.mmf-label {\n  opacity: 0.38; }\n\n.the-solid.mmf-button {\n  background: none repeat scroll 0 0 transparent;\n  border: medium none;\n  border-radius: 0;\n  border-spacing: 0;\n  outline: 0;\n  user-select: none;\n  background-color: inherit;\n  border: 1px solid #000;\n  border-radius: 0; }\n  .the-solid.mmf-button::-moz-focus-inner, .the-solid.mmf-button::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n  .the-solid.mmf-button:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #000; }\n  .the-solid.mmf-button[disabled] {\n    border-color: rgba(0, 0, 0, 0.38); }\n  .the-solid.mmf-button.is-enabled:hover, .the-solid.mmf-button.is-enabled:focus {\n    background-color: #e6e6e6; }\n\n.the-solid.mmf-button--raised {\n  color: #fff;\n  background-color: #000; }\n  .the-solid.mmf-button--raised[disabled] {\n    background-color: rgba(0, 0, 0, 0.38);\n    border-color: transparent; }\n  .the-solid.mmf-button--raised.is-enabled:hover, .the-solid.mmf-button--raised.is-enabled:focus {\n    background-color: #333333; }\n\n.the-solid.mmf-checkbox {\n  border: 1px solid transparent;\n  outline: 0; }\n  .the-solid.mmf-checkbox:not([disabled]):focus:after, .the-solid.mmf-checkbox:not([disabled]):hover:after {\n    color: #00c853; }\n\n.the-solid.mmf-input {\n  color: rgba(0, 0, 0, 0.87);\n  border: 1px solid #cccccc;\n  border-radius: 2px;\n  outline: 0;\n  padding: 8px; }\n  .the-solid.mmf-input:not([disabled]):focus {\n    border-color: #00c853; }\n  .the-solid.mmf-input:not([disabled]):hover {\n    border-color: #00c853; }\n  .the-solid.mmf-input[disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.the-solid.mmf-select__wrapper {\n  color: rgba(0, 0, 0, 0.87);\n  border: 1px solid #cccccc;\n  border-radius: 2px;\n  overflow: hidden; }\n  .the-solid.mmf-select__wrapper:after {\n    content: \"arrow_drop_down\"; }\n  .the-solid.mmf-select__wrapper.is-enabled:hover, .the-solid.mmf-select__wrapper.is-enabled.has-focus {\n    border-color: #00c853; }\n    .the-solid.mmf-select__wrapper.is-enabled:hover:after, .the-solid.mmf-select__wrapper.is-enabled.has-focus:after {\n      color: #00c853; }\n  .the-solid.mmf-select__wrapper .mmf-select {\n    background-color: inherit;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: 0;\n    border: medium none;\n    font-size: inherit;\n    outline: none; }\n    .the-solid.mmf-select__wrapper .mmf-select::-ms-expand {\n      display: none; }\n    .the-solid.mmf-select__wrapper .mmf-select:-moz-focusring {\n      color: transparent;\n      text-shadow: 0 0 0 #000; }\n    .the-solid.mmf-select__wrapper .mmf-select * {\n      background-color: inherit;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      border-radius: 0;\n      border: medium none;\n      font-size: inherit; }\n      .the-solid.mmf-select__wrapper .mmf-select *::-ms-expand {\n        display: none; }\n\n.the-solid.mmf-form--select .order--label-first {\n  flex-direction: column;\n  align-items: flex-start; }\n  .the-solid.mmf-form--select .order--label-first .mmf-label {\n    padding-bottom: 8px; }\n\n.the-solid.mmf-textarea {\n  color: rgba(0, 0, 0, 0.87);\n  border: 1px solid #cccccc;\n  border-radius: 2px;\n  outline: 0;\n  padding: 8px; }\n  .the-solid.mmf-textarea:not([disabled]):focus {\n    border-color: #00c853; }\n  .the-solid.mmf-textarea:not([disabled]):hover {\n    border-color: #00c853; }\n  .the-solid.mmf-textarea[disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.the-solid.mmf-label {\n  font-weight: 700;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.87); }\n\n.the-solid.mmf-form--input .mmf-label, .the-solid.mmf-form--textarea .mmf-label {\n  line-height: 1.5em; }\n\n/**\n * Default form styles, controlling label position by classnames. The Markup should look like\n *\n *  <my-form extends with-moving-label>\n *      <label>Moving Title</label>\n *      <input-type>\n *      ...\n * @param {string} input-type   - associated input selector\n */\n.the-material.mmf-button {\n  background: none repeat scroll 0 0 transparent;\n  border: medium none;\n  border-radius: 0;\n  border-spacing: 0;\n  outline: 0;\n  user-select: none;\n  border-radius: 2px;\n  color: #00c853;\n  background-color: inherit;\n  transition: background-color 0.1s linear; }\n  .the-material.mmf-button::-moz-focus-inner, .the-material.mmf-button::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n  .the-material.mmf-button:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #000; }\n  .the-material.mmf-button.is-enabled:hover, .the-material.mmf-button.is-enabled:focus {\n    background-color: #ECEFF1; }\n  .the-material.mmf-button.is-disabled {\n    color: rgba(0, 200, 83, 0.38); }\n    .the-material.mmf-button.is-disabled:focus, .the-material.mmf-button.is-disabled:hover {\n      background-color: inherit;\n      color: rgba(0, 200, 83, 0.38);\n      cursor: default; }\n  .the-material.mmf-button .mmf-icon {\n    font-size: 1.5em; }\n\n.the-material.mmf-button--raised {\n  z-index: 10;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  color: #ECEFF1;\n  background-color: #00c853; }\n  .the-material.mmf-button--raised.is-enabled:hover, .the-material.mmf-button--raised.is-enabled:focus {\n    background-color: #00953e; }\n  .the-material.mmf-button--raised.is-disabled, .the-material.mmf-button--raised.is-disabled:hover, .the-material.mmf-button--raised.is-disabled:focus {\n    color: rgba(236, 239, 241, 0.38);\n    background-color: rgba(0, 0, 0, 0.38);\n    cursor: default; }\n\n.the-material.mmf-checkbox {\n  color: rgba(0, 0, 0, 0.87);\n  border: none;\n  border-radius: 0;\n  width: 100%;\n  font-size: inherit;\n  box-sizing: border-box;\n  background: transparent;\n  transform: translateZ(0);\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: border-color 0.1s linear;\n  border-bottom: 0;\n  width: 1em;\n  font-size: 1.25em; }\n  .the-material.mmf-checkbox:not([disabled]):focus {\n    border-color: #00c853; }\n  .the-material.mmf-checkbox:not([disabled]):hover {\n    border-color: #00c853; }\n  .the-material.mmf-checkbox[disabled] {\n    color: #000;\n    opacity: 0.38; }\n  .the-material.mmf-checkbox:after {\n    color: rgba(0, 0, 0, 0.87);\n    font-size: inherit;\n    transition: color 0.1s linear; }\n  .the-material.mmf-checkbox:not([disabled]):focus:after, .the-material.mmf-checkbox:not([disabled]):hover:after {\n    color: #00c853; }\n\n.the-material.mmf-input {\n  color: rgba(0, 0, 0, 0.87);\n  border: none;\n  border-radius: 0;\n  width: 100%;\n  font-size: inherit;\n  box-sizing: border-box;\n  background: transparent;\n  transform: translateZ(0);\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: border-color 0.1s linear;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n  .the-material.mmf-input:not([disabled]):focus {\n    border-color: #00c853; }\n  .the-material.mmf-input:not([disabled]):hover {\n    border-color: #00c853; }\n  .the-material.mmf-input[disabled] {\n    color: #000;\n    opacity: 0.38; }\n  .the-material.mmf-input:not([disabled]):focus {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n  .the-material.mmf-input:not([disabled]):hover {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n\n.the-material.mmf-form--input input {\n  padding: 1.1em 0 0 0; }\n\n.the-material.mmf-form--input .mmf-label {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transition: all 0.1s ease-in-out;\n  color: #000;\n  opacity: 0.54;\n  font-size: 0.8em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.the-material.mmf-form--input.has-focus .mmf-label {\n  color: #81c784;\n  opacity: 0.87; }\n\n.the-material.mmf-form--input.has-error select,\n.the-material.mmf-form--input.has-error input {\n  border-color: #d50000; }\n\n.the-material.mmf-form--input.has-error.has-focus .mmf-label {\n  color: #d50000; }\n\n.the-material.mmf-form--input.has-warning select,\n.the-material.mmf-form--input.has-warning input {\n  border-color: #F39C12; }\n\n.the-material.mmf-form--input.has-warning.has-focus .mmf-label {\n  color: #F39C12; }\n\n.the-material.mmf-form--input.is-empty.no-focus .mmf-label {\n  transform: translateY(1.1em);\n  font-size: 1em; }\n\n.the-material.mmf-form--input .mmf-input {\n  border-color: transparent; }\n\n.the-material.mmf-select__wrapper:after {\n  transition: color 0.1s linear;\n  right: 0; }\n\n.the-material.mmf-select__wrapper.is-enabled:hover:after, .the-material.mmf-select__wrapper.is-enabled.has-focus:after {\n  color: #81c784; }\n\n.the-material.mmf-select__wrapper .mmf-select {\n  background-color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  border: medium none;\n  font-size: inherit;\n  outline: none;\n  padding: 0;\n  padding-right: 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n  .the-material.mmf-select__wrapper .mmf-select::-ms-expand {\n    display: none; }\n  .the-material.mmf-select__wrapper .mmf-select:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #000; }\n  .the-material.mmf-select__wrapper .mmf-select * {\n    background-color: inherit;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: 0;\n    border: medium none;\n    font-size: inherit; }\n    .the-material.mmf-select__wrapper .mmf-select *::-ms-expand {\n      display: none; }\n  .the-material.mmf-select__wrapper .mmf-select.is-enabled {\n    color: rgba(0, 0, 0, 0.87);\n    border: none;\n    border-radius: 0;\n    width: 100%;\n    font-size: inherit;\n    box-sizing: border-box;\n    background: transparent;\n    transform: translateZ(0);\n    outline: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    transition: border-color 0.1s linear; }\n    .the-material.mmf-select__wrapper .mmf-select.is-enabled:not([disabled]):focus {\n      border-color: #00c853; }\n    .the-material.mmf-select__wrapper .mmf-select.is-enabled:not([disabled]):hover {\n      border-color: #00c853; }\n    .the-material.mmf-select__wrapper .mmf-select.is-enabled[disabled] {\n      color: #000;\n      opacity: 0.38; }\n\n.the-material.mmf-form--select .mmf-label {\n  line-height: 29px; }\n\n.the-material.mmf-textarea {\n  color: rgba(0, 0, 0, 0.87);\n  border: none;\n  border-radius: 0;\n  width: 100%;\n  font-size: inherit;\n  box-sizing: border-box;\n  background: transparent;\n  transform: translateZ(0);\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: border-color 0.1s linear;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54);\n  margin: 1.1em 0 0 0; }\n  .the-material.mmf-textarea:not([disabled]):focus {\n    border-color: #00c853; }\n  .the-material.mmf-textarea:not([disabled]):hover {\n    border-color: #00c853; }\n  .the-material.mmf-textarea[disabled] {\n    color: #000;\n    opacity: 0.38; }\n  .the-material.mmf-textarea:not([disabled]):focus {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n  .the-material.mmf-textarea:not([disabled]):hover {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n\n.the-material.mmf-form--textarea textarea {\n  margin: 1.1em 0 0 0; }\n\n.the-material.mmf-form--textarea .mmf-label {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transition: all 0.1s ease-in-out;\n  color: #000;\n  opacity: 0.54;\n  font-size: 0.8em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.the-material.mmf-form--textarea.has-focus .mmf-label {\n  color: #81c784;\n  opacity: 0.87; }\n\n.the-material.mmf-form--textarea.has-error select,\n.the-material.mmf-form--textarea.has-error input {\n  border-color: #d50000; }\n\n.the-material.mmf-form--textarea.has-error.has-focus .mmf-label {\n  color: #d50000; }\n\n.the-material.mmf-form--textarea.has-warning select,\n.the-material.mmf-form--textarea.has-warning input {\n  border-color: #F39C12; }\n\n.the-material.mmf-form--textarea.has-warning.has-focus .mmf-label {\n  color: #F39C12; }\n\n.the-material.mmf-form--textarea.is-empty.no-focus .mmf-label {\n  transform: translateY(1.1em);\n  font-size: 1em; }\n\n.the-material.mmf-form--textarea textarea {\n  border: none;\n  border-color: transparent;\n  background: transparent;\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n  .the-material.mmf-form--textarea textarea:focus {\n    border-color: #81c784; }\n\n.the-material.mmf-form {\n  position: relative; }\n  .the-material.mmf-form .mmf-label {\n    opacity: 0.54; }\n\n.undefined {\n  color: red;\n  background-color: red;\n  border-color: red; }\n\nbody {\n  background: #333;\n  font-family: Roboto; }\n\nh1 {\n  color: #fff; }\n\nh2 {\n  align-items: flex-end;\n  background: #333;\n  display: flex;\n  height: 96px;\n  justify-content: center;\n  margin: 0; }\n  h2 span {\n    background-color: #f2f2f3;\n    line-height: 1em;\n    margin-bottom: 1px;\n    padding: 12px 24px;\n    text-shadow: 0 1px 0 #fff; }\n\n.columns {\n  background-color: #f2f2f3;\n  display: flex;\n  flex-direction: row;\n  padding: 12px 0; }\n\n.box {\n  background: #fff;\n  padding: 8px; }\n\n.theme {\n  flex-basis: 0;\n  flex-grow: 1;\n  margin: 4px; }\n  .theme h3 {\n    font-size: 12px;\n    margin: 0;\n    color: #666;\n    text-align: center; }\n  .theme h4 {\n    margin: 0;\n    padding: 24px 0 12px 0;\n    font-weight: normal;\n    color: #666;\n    font-size: 14px; }\n", "",{"version":3,"sources":["/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/button/layout.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/lib/interface.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/lib/units.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/checkbox/layout.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/lib/reset.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/lib/icon.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/checkboxform/layout.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/errors/layout.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/input/layout.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/inputform/layout.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/select/layout.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/lib/colors.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/selectform/layout.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/switch/layout.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/switchform/layout.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/textarea/layout.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/textareaform/layout.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/styles/layout.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/button/typography.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/lib/typography.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/errors/typography.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/lib/color-palettes.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/input/typography.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/label/typography.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/select/typography.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/textarea/typography.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/textareaform/typography.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/styles/typography.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/styles/theme-solid.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/button/button-solid.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/checkbox/checkbox-solid.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/lib/input.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/input/input-solid.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/select/select-solid.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/selectform/selectform-solid.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/textarea/textarea-solid.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/lib/with-solid-theme.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/lib/form.scss","index.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/styles/theme-material.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/button/button-material.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/lib/elevation.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/checkbox/checkbox-material.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/inputform/inputform-material.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/select/select-material.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/selectform/selectform-material.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/textarea/textarea-material.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/components/textareaform/textareaform-material.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/lib/with-material-theme.scss","/Users/goldhofers/Projects/sueddeutsche/mithril-material-forms/app/index.scss"],"names":[],"mappings":"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","file":"index.scss","sourcesContent":["@import \"../../lib/interface\";\n@import \"../../lib/units\";\n\n\n.mmf-button {\n    @include clickable();\n\n    display: inline-flex;\n    flex-direction: row;\n    align-items: center;\n    height: 0.75 * $mmf-block;\n    margin: 0.125 * $mmf-block;\n    padding: 0 $mmf-block-padding;\n\n    .mmf-icon ~ * {\n        padding-left: $mmf-unit;\n    }\n}\n","@mixin clickable() {\n    &:not([disabled]) {\n        cursor: pointer;\n        pointer-events: all;\n    }\n    // outline: none !important; // overrides focus\n    // outline: none; // overrides focus\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    user-select: none;\n}\n","$mmf-unit: 8px !default;\n$mmf-block: 6 * $mmf-unit !default;\n$mmf-block-padding: 2 * $mmf-unit !default;\n$mmf-radius: 2px !default;\n$mmf-input-border--width: 1px !default;\n\n// forms\n$mmf-height-label: 1.1em !default;\n\n// animation\n$mmf-transition--time: 0.1s;\n$mmf-transition: $mmf-transition--time linear;\n","@import \"../../lib/reset\";\n@import \"../../lib/interface\";\n@import \"../../lib/icon\";\n@import \"../../lib/units\";\n\n\n@mixin checkbox-with-custom-icon() {\n    @include reset-box();\n    @include reset-input();\n\n    &:checked:after {\n        content: \"check_box\";\n    }\n\n    &:after {\n        @include clickable();\n        @include material-icon();\n        content: \"check_box_outline_blank\";\n        transform: translateY(10%); // center\n    }\n}\n\n.mmf-checkbox {\n    @include clickable();\n    @include checkbox-with-custom-icon();\n\n    &[disabled]:after {\n        cursor: default;\n    }\n}\n","@mixin reset-button() {\n    background: none repeat scroll 0 0 transparent;\n    border: medium none;\n    border-radius: 0;\n    border-spacing: 0;\n    outline: 0;\n    user-select: none;\n    &::-moz-focus-inner,\n    &::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n    &:-moz-focusring {\n        color: transparent;\n        text-shadow: 0 0 0 #000;\n    }\n}\n\n@mixin reset-select() {\n    @include reset-input();\n    &:-moz-focusring {\n        color: transparent;\n        text-shadow: 0 0 0 #000;\n    }\n\n    * {\n        @include reset-input();\n    }\n}\n\n@mixin reset-input() {\n    background-color: inherit;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    &::-ms-expand { // IE 11\n        display: none;\n    }\n    border-radius: 0;\n    border: medium none;\n    font-size: inherit;\n}\n\n@mixin reset-box() {\n    margin: 0;\n    padding: 0;\n}\n","@mixin material-icon() {\n    font-family: \"Material Icons\";\n    font-weight: normal;\n    font-style: normal;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: \"liga\";\n    -webkit-font-smoothing: antialiased;\n}\n","@import \"../../lib/units\";\n\n\n.mmf-form--checkbox {\n\n    label {\n        display: inline-flex;\n        flex-direction: row;\n        align-items: center;\n    }\n\n    .order--label-first .mmf-label {\n        padding-right: $mmf-unit;\n    }\n\n    .order--label-last .mmf-label {\n        padding-left: $mmf-unit;\n    }\n}\n","@import \"../../lib/units\";\n\n\nul.mmf-form__errors {\n    list-style: none;\n    padding-left: 0;\n    margin: 0;\n\n    li {\n        margin-top: 0.5 * $mmf-unit;\n    }\n}\n",".mmf-input {\n    box-sizing: border-box;\n    width: 100%;\n}\n",".mmf-form--input {\n    label {\n        display: flex;\n        flex-direction: column;\n    }\n}\n","@import \"../../lib/reset\";\n@import \"../../lib/icon\";\n@import \"../../lib/colors\";\n\n\n.mmf-select__wrapper {\n    position: relative;\n    display: inline-block;\n\n    &:after {\n        content: \"keyboard_arrow_down\";\n        @include material-icon();\n        align-items: center;\n        bottom: 0;\n        display: flex;\n        pointer-events: none; // remove icon to be clickable (select receives input-event)\n        position: absolute;\n        right: 4px;\n        top: 0;\n    }\n\n    &.is-disabled:after {\n        opacity: $mmf-opacity--disabled;\n    }\n}\n\n.mmf-select {\n    // hide select arrow-icon\n    -moz-appearance: window;\n    -webkit-appearance: none;\n\n    // hide touch borders\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n    // select layout\n    padding: $mmf-unit; // sane base padding, which conflicts with theme-material\n    padding-right: (0.5 * $mmf-block + 4px);\n\n    &:not([disabled]) {\n        cursor: pointer;\n    }\n}\n","@import \"./color-palettes\";\n// material design colors https://www.materialui.co/flatuicolors\n// https://material.io/color/#!/?view.left=0&view.right=1&secondary.color=90CAF9&primary.color=ECEFF1\n\n// control variables: darken, lighten\n$mmf-color-distance: 20%;\n$mmf-color-distance--focus: 10%;\n// control variables: text\n$mmf-opacity--primary: 0.87 !default;\n$mmf-opacity--secondary: 0.54 !default;\n$mmf-opacity--hint: 0.38 !default;\n$mmf-opacity--disabled: $mmf-opacity--hint !default;\n$mmf-opacity--divider: 0.12 !default;\n\n// base text colors\n$mmf-color--dark: #000 !default;\n$mmf-color--light: #fff !default;\n$mmf-color--ok: #2ECC71 !default;\n$mmf-color--error: red(700) !default;\n$mmf-color--warning: #F39C12 !default;\n\n// strange variable, used often as card background and light-alternative...\n// this could also be sort if highest elevation (besides 100% bright: #fff)\n// \"contrast to bright\" (on hover)\n$mmf-color--contrast: #ECEFF1 !default;\n\n// PRIMARY COLOR\n// In Material Design, a primary color refers to a color that appears most frequently in your app\n$mmf-color--primary: green(2) !default;\n\n// SECONDARY COLOR\n// A secondary color refers to a color used to accent key parts of your UI\n$mmf-color--secondary: green(700) !default;\n\n// layers\n// @todo refactor\n$color-elevation: #37474F;\n$color-elevation-0: $color-elevation; // application background\n// $color-elevation-2: #1c313a; // first layer above background (header-bar)\n$color-elevation-4: darken($color-elevation, 0.25 * $mmf-color-distance); // first layer above background (header-bar)\n$color-elevation-8: darken($color-elevation, 0.125 * $mmf-color-distance); // second layer above background (navigation-bar)\n\n// styling - no colors\n$mmf-style--border: solid !default;\n","@import \"../../lib/units\";\n\n\n.mmf-form--select {\n    label {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n    }\n\n    .order--label-first .mmf-label {\n        padding-right: $mmf-block-padding;\n    }\n\n    .order--label-last .mmf-label {\n        padding-left: $mmf-block-padding;\n    }\n}\n\n\n","@import \"../../lib/reset\";\n@import \"../../lib/interface\";\n@import \"../../lib/icon\";\n@import \"../../lib/colors\";\n@import \"../../lib/units\";\n\n\n.mmf-switch.the-material,\n.mmf-switch.the-solid {\n    outline: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n\n.mmf-switch {\n    @include reset-input();\n    $bg-color: rgba(#000, $mmf-opacity--hint);\n    $switch-width: 2em;\n    margin: 0;\n\n    background-color: $bg-color;\n    border-radius: $switch-width/2;\n    border: 1px solid $bg-color;\n    width: $switch-width;\n    height: $switch-width/2;\n    position: relative;\n    overflow: hidden;\n\n    &:after {\n        background-color: #fff;\n        border-radius: $switch-width/2;\n        position: relative;\n        content: \"\";\n        display: inline-block;\n        height: 100%;\n        width: 50%;\n        left: 0;\n        margin: 0;\n        transition:\n            left .3s cubic-bezier(0.175, 0.885, 0.320, 1.275),\n            transform .3s cubic-bezier(0.175, 0.885, 0.320, 1.275),\n            width .3s ease, margin .3s ease;\n    }\n\n    &:checked {\n        background-color: $mmf-color--ok;\n        &:after {\n            left: 100%;\n            transform: translate(-100%, 0);\n        }\n    }\n\n    &[disabled] {\n        opacity: $mmf-opacity--disabled;\n    }\n\n    &:not([disabled]) {\n        @include clickable();\n        &:hover {\n            cursor: pointer;\n        }\n        &:active:after {\n            width: 60%;\n        }\n    };\n}\n","@import \"../../lib/units\";\n\n\n.mmf-form--switch {\n\n    label {\n        display: inline-flex;\n        flex-direction: row;\n        align-items: center;\n    }\n\n    .order--label-first .mmf-label {\n        padding-right: $mmf-unit;\n    }\n\n    .order--label-last .mmf-label {\n        padding-left: $mmf-unit;\n    }\n}\n",".mmf-textarea {\n    width: 100%;\n    resize: vertical;\n\n    &:focus {\n        outline-style: none;\n        outline-width: 0;\n    }\n}\n",".mmf-form--textarea {\n    label {\n        display: flex;\n        flex-direction: column;\n    }\n\n    textarea {\n        box-sizing: border-box;\n    }\n}\n","@import \"../components/button/layout\";\n@import \"../components/checkbox/layout\";\n@import \"../components/checkboxform/layout\";\n@import \"../components/errors/layout\";\n@import \"../components/input/layout\";\n@import \"../components/inputform/layout\";\n@import \"../components/select/layout\";\n@import \"../components/selectform/layout\";\n@import \"../components/switch/layout\";\n@import \"../components/switchform/layout\";\n@import \"../components/textarea/layout\";\n@import \"../components/textareaform/layout\";\n\n\n@import \"../lib/units\";\n@import \"../lib/icon\";\n\n\n.mmf-form .mmf-meta {\n    margin-top: 0.5 * $mmf-unit;\n}\n\n.mmf-form.is-enabled label:hover {\n    cursor: pointer;\n}\n\n.mmf-icon {\n    @include material-icon();\n}\n","@import \"../../lib/typography\";\n\n\n.mmf-button {\n    @include font-regular();\n    font-family: inherit;\n    font-size: inherit;\n    line-height: 1em;\n\n    .mmf-icon {\n\n    }\n}\n","$mmf-text-size--meta: 0.8em !default;\n$mmf-text-size--errors: $mmf-text-size--meta !default;\n$mmf-text-size--label: $mmf-text-size--meta !default;\n$mmf-text-size--checkbox: 1.25em !default;\n\n\n@mixin font-light() {\n    font-weight: 300;\n}\n\n@mixin font-regular() {\n    font-weight: 400;\n}\n\n@mixin font-bold() {\n    font-weight: 700;\n}\n","@import \"../../lib/colors\";\n\n\n.mmf-form__error--warning {\n    color: $mmf-color--warning;\n}\n\n.mmf-form__error--error {\n    color: $mmf-color--error;\n}\n","// https://material.io/guidelines/style/color.html#color-color-palette\n// https://www.materialpalette.com/colors\n// range from -4: dark to 5: bright\n$map-color-bluegrey: (-4: #263238, -3: #37474F, -2: #455A64, -1: #546E7A, 0: #607D8B, 1: #78909C, 2: #90A4AE, 3: #B0BEC5, 4: #CFD8DC, 5: #ECEFF1);\n$map-color-cyan: (-4: #006064, -3: #00838F, -2: #0097A7, -1: #00ACC1, 0: #00BCD4, 1: #26C6DA, 2: #4DD0E1, 3: #80DEEA, 4: #B2EBF2, 5: #E0F7FA);\n$map-color-deeporange: (-4: #bf360c, -3: #d84315, -2: #e64a19, -1: #f4511e, 0: #ff5722, 1: #ff7043, 2: #ff8a65, 3: #ffab91, 4: #ffccbc, 5: #fbe9e7, 100: #ff9e80, 200: #ff6e40, 400: #ff3d00, 700: #dd2c00);\n$map-color-grey: (-4: #212121, -3: #424242, -2: #616161, -1: #757575, 0: #9E9E9E, 1: #BDBDBD, 2: #E0E0E0, 3: #EEEEEE, 4: #F5F5F5, 5: #FAFAFA );\n$map-color-lightblue: (-4: #01579b, -3: #0277bd, -2: #0288d1, -1: #039be5, 0: #03a9f4, 1: #29b6f6, 2: #4fc3f7, 3: #81d4fa, 4: #b3e5fc, 5: #e1f5fe, 100: #80d8ff, 200: #40c4ff, 400: #00b0ff, 700: #0091ea);\n$map-color-lightgreen: (-4: #33691E, -3: #558B2F, -2: #689F38, -1: #7CB342, 0: #8BC34A, 1: #9CCC65, 2: #AED581, 3: #C5E1A5, 4: #DCEDC8, 5: #F1F8E9);\n$map-color-green: (5: #e8f5e9, 4: #c8e6c9, 3: #a5d6a7, 2: #81c784, 1: #66bb6a, 0: #4caf50, -1: #43a047, -2: #388e3c, -3: #2e7d32, -4: #1b5e20, 100: #b9f6ca, 200: #69f0ae, 400: #00e676, 700: #00c853);\n$map-color-lime: (5: #f9fbe7, 4: #f0f4c3, 3: #e6ee9c, 2: #dce775, 1: #d4e157, 0: #cddc39, -1: #c0ca33, -2: #afb42b, -3: #9e9d24, -4: #827717, 100: #f4ff81, 200: #eeff41, 400: #c6ff00, 700: #aeea00);\n$map-color-red: (5: #ffebee, 4: #ffcdd2, 3: #ef9a9a, 2: #e57373, 1: #ef5350, 0: #f44336, -1: #e53935, -2: #d32f2f, -3: #c62828, -4: #b71c1c, 100: #ff8a80, 200: #ff5252, 400: #ff1744, 700: #d50000);\n$map-color-yellow: (5: #fffde7, 4: #fff9c4, 3: #fff59d, 2: #fff176, 1: #ffee58, 0: #ffeb3b, -1: #fdd835, -2: #fbc02d, -3: #f9a825, -4: #f57f17, 100: #ffff8d, 200: #ffff00, 400: #ffea00, 700: #ffd600);\n\n@function bluegrey($index: 0) {\n    @return map-get($map-color-bluegrey, $index);\n}\n\n@function cyan($index: 0) {\n    @return map-get($map-color-cyan, $index);\n}\n\n@function deeporange($index: 0) {\n    @return map-get($map-color-deeporange, $index);\n}\n\n@function green($index: 0) {\n    @return map-get($map-color-green, $index);\n}\n\n@function grey($index: 0) {\n    @return map-get($map-color-grey, $index);\n}\n\n@function lightblue($index: 0) {\n    @return map-get($map-color-lightblue, $index);\n}\n\n@function lightgreen($index: 0) {\n    @return map-get($map-color-lightgreen, $index);\n}\n\n@function lime($index: 0) {\n    @return map-get($map-color-lime, $index);\n}\n\n@function red($index: 0) {\n    @return map-get($map-color-red, $index);\n}\n\n@function yellow($index: 0) {\n    @return map-get($map-color-yellow, $index);\n}\n\n","@import \"../../lib/typography\";\n\n\n.mmf-input {\n    @include font-regular();\n    color: inherit;\n    font-size: inherit;\n    font-family: inherit;\n}\n",".mmf-label {\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n    user-select: none;\n    color: $mmf-color--dark;\n}\n","@import \"../../lib/colors\";\n@import \"../../lib/typography\";\n\n\n.mmf-select__wrapper {\n    &:after {\n        font-size: 1.25em;\n        color: $mmf-color--dark;\n    }\n}\n\n.mmf-select {\n    font-family: inherit;\n    font-size: inherit;\n\n    option {\n        font-size: inherit;\n        color: $mmf-color--dark;\n    }\n}\n","@import \"../../lib/colors\";\n\n\n.mmf-textarea {\n    font-size: inherit;\n    font-family: inherit;\n}\n\n.mmf-form.hasError .mmf-textarea {\n    border-color: $mmf-color--error;\n}\n","@import \"../../lib/typography\";\n\n\n.the-ux.mmf-form--textarea {\n\n    textarea {\n        @include font-regular();\n        color: inherit;\n        font-size: inherit;\n        line-height: 1.4em;\n    }\n}\n","@import \"../components/button/typography\";\n@import \"../components/errors/typography\";\n@import \"../components/input/typography\";\n@import \"../components/label/typography\";\n@import \"../components/select/typography\";\n@import \"../components/textarea/typography\";\n@import \"../components/textareaform/typography\";\n\n@import \"../lib/units\";\n@import \"../lib/colors\";\n\n\n.mmf-form__errors {\n    font-size: $mmf-text-size--errors;\n    color: $mmf-color--error;\n}\n\n.mmf-meta {\n    opacity: $mmf-opacity--secondary;\n    font-style: italic;\n    font-size: $mmf-text-size--meta;\n}\n\n.mmf-form.is-disabled {\n    .mmf-meta,\n    .mmf-form__errors,\n    span.mmf-label { // be more specific to overwrite form+label combination\n        opacity: $mmf-opacity--disabled;\n    }\n}\n","@import \"../lib/with-solid-theme\";\n\n\n.the-solid {\n    @include with-solid-theme();\n}\n","@import \"../../lib/reset\";\n@import \"../../lib/colors\";\n@import \"../../lib/units\";\n\n\n@mixin button-solid() {\n\n    &.mmf-button {\n        @include reset-button();\n        background-color: inherit;\n        border: $mmf-input-border--width solid $mmf-color--dark;\n        border-radius: 0;\n\n        &[disabled] {\n            border-color: rgba($mmf-color--dark, $mmf-opacity--disabled);\n        }\n\n        &.is-enabled {\n            &:hover,\n            &:focus {\n                background-color: darken($mmf-color--light, $mmf-color-distance--focus);\n            }\n        }\n    }\n\n    &.mmf-button--raised {\n        color: $mmf-color--light;\n        background-color: $mmf-color--dark;\n\n        &[disabled] {\n            background-color: rgba($mmf-color--dark, $mmf-opacity--disabled);\n            border-color: transparent;\n        }\n\n        &.is-enabled {\n            &:hover,\n            &:focus {\n                background-color: lighten($mmf-color--dark, $mmf-color-distance);\n            }\n        }\n    }\n}\n","@import \"../../lib/colors\";\n@import \"../../lib/units\";\n\n\n@mixin checkbox-solid() {\n    &.mmf-checkbox {\n        border: 1px solid transparent;\n        outline: 0;\n\n        &:not([disabled]) {\n            &:focus:after,\n            &:hover:after {\n                color: $mmf-color--secondary;\n            }\n        }\n    }\n}\n","@import \"./colors\";\n@import \"./typography\";\n@import \"./units\";\n\n\n@mixin with-bottom-border() {\n    // border-bottom: $mmf-input-border--width $mmf-style--border transparent;\n    border-bottom: $mmf-input-border--width $mmf-style--border rgba($mmf-color--dark, $mmf-opacity--secondary);\n    &:not([disabled]):focus {\n        border-bottom: $mmf-input-border--width $mmf-style--border rgba($mmf-color--dark, $mmf-opacity--secondary);\n    }\n    &:not([disabled]):hover {\n        border-bottom: $mmf-input-border--width $mmf-style--border rgba($mmf-color--dark, $mmf-opacity--secondary);\n    }\n}\n\n@mixin with-input() {\n    color: rgba($mmf-color--dark, $mmf-opacity--primary);\n    border: none;\n    border-radius: 0;\n    width: 100%;\n    font-size: inherit;\n    box-sizing: border-box;\n    background: transparent;\n    transform: translateZ(0);\n\n    outline: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n    transition: border-color $mmf-transition;\n    // border-bottom: $mmf-input-border--width $mmf-style--border transparent;\n\n    &:not([disabled]):focus {\n        border-color: rgba($mmf-color--secondary, 1);\n        // border-bottom: $mmf-input-border--width $mmf-style--border rgba($mmf-color--dark, $mmf-opacity--secondary);\n    }\n\n    &:not([disabled]):hover {\n        border-color: $mmf-color--secondary;\n        // border-bottom: $mmf-input-border--width $mmf-style--border rgba($mmf-color--dark, $mmf-opacity--secondary);\n    }\n\n    &[disabled] {\n        color: $mmf-color--dark; // on deactivated state, set color to match labels\n        opacity: $mmf-opacity--disabled;\n    }\n}\n\n\n@mixin with-input-ux() {\n    color: rgba($mmf-color--dark, $mmf-opacity--primary);\n    border: $mmf-input-border--width solid darken($mmf-color--light, $mmf-color-distance);\n    border-radius: $mmf-radius;\n    outline: 0;\n\n    &:not([disabled]):focus {\n        border-color: rgba($mmf-color--secondary, 1);\n    }\n\n    &:not([disabled]):hover {\n        border-color: $mmf-color--secondary;\n    }\n}\n","@import \"../../lib/input\";\n@import \"../../lib/units\";\n\n\n@mixin input-solid() {\n    &.mmf-input {\n        @include with-input-ux();\n        padding: $mmf-unit;\n\n        &[disabled] {\n            color: rgba($mmf-color--dark, $mmf-opacity--disabled);\n        }\n    }\n}\n","@import \"../../lib/units\";\n@import \"../../lib/reset\";\n\n\n@mixin select-solid() {\n    &.mmf-select__wrapper {\n        color: rgba($mmf-color--dark, $mmf-opacity--primary);\n        border: $mmf-input-border--width solid darken($mmf-color--light, $mmf-color-distance);\n        border-radius: $mmf-radius;\n        overflow: hidden; // fix capped borders\n\n        &:after {\n            content: \"arrow_drop_down\";\n        }\n\n        &.is-enabled {\n            &:hover,\n            &.has-focus {\n                border-color: $mmf-color--secondary;\n                &:after {\n                    color: $mmf-color--secondary;\n                }\n            }\n        }\n\n        .mmf-select {\n            @include reset-select();\n            outline: none;\n        }\n    }\n}\n","@import \"../../lib/units\";\n\n\n@mixin selectform-solid() {\n    &.mmf-form--select .order--label-first {\n        flex-direction: column;\n        align-items: flex-start;\n\n        .mmf-label {\n            padding-bottom: $mmf-unit;\n        }\n    }\n}\n","@import \"../../lib/input\";\n@import \"../../lib/units\";\n\n\n@mixin textarea-solid() {\n    &.mmf-textarea {\n        @include with-input-ux();\n        padding: $mmf-unit;\n\n        &[disabled] {\n            color: rgba($mmf-color--dark, $mmf-opacity--disabled);\n        }\n    }\n}\n","$mmf-radius: 4px !default;\n@import \"../components/button/button-solid\";\n@import \"../components/checkbox/checkbox-solid\";\n@import \"../components/input/input-solid\";\n@import \"../components/select/select-solid\";\n@import \"../components/selectform/selectform-solid\";\n@import \"../components/textarea/textarea-solid\";\n\n\n@import \"../lib/typography\";\n@import \"../lib/colors\";\n\n@mixin with-solid-theme() {\n    @include button-solid();\n    @include checkbox-solid();\n    @include input-solid();\n    @include select-solid();\n    @include selectform-solid();\n    @include textarea-solid();\n\n    &.mmf-label {\n        @include font-bold();\n        font-size: $mmf-text-size--label;\n        color: rgba($mmf-color--dark, $mmf-opacity--primary);\n    }\n\n    &.mmf-form--input,\n    &.mmf-form--textarea {\n        .mmf-label {\n            line-height: 1.5em;\n        }\n    }\n\n}\n","@import \"./colors\";\n@import \"./units\";\n@import \"./typography\";\n@import \"./input\";\n\n\n@mixin with-form() {\n    position: relative;\n\n    .mmf-label {\n        color: $mmf-color--dark;\n        opacity: $mmf-opacity--secondary;\n    }\n}\n\n\n/**\n * Default form styles, controlling label position by classnames. The Markup should look like\n *\n *  <my-form extends with-moving-label>\n *      <label>Moving Title</label>\n *      <input-type>\n *      ...\n * @param {string} input-type   - associated input selector\n */\n@mixin with-moving-label($input-type: \"input\") {\n\n    // move input down by label height\n    @if $input-type == \"textarea\" {\n        #{$input-type} {\n            margin: $mmf-height-label 0 0 0;\n        }\n    } @else {\n        #{$input-type} {\n            padding: $mmf-height-label 0 0 0;\n        }\n    }\n\n    .mmf-label {\n        // set label to top\n        width: 100%;\n        position: absolute;\n        top: 0;\n        display: inline-block;\n        transition: all $mmf-transition--time ease-in-out;\n\n        color: $mmf-color--dark;\n        opacity: $mmf-opacity--secondary;\n        font-size: $mmf-text-size--label; // small font-size if not currently a placeholder (but title)\n\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n    }\n\n    &.no-error {}\n    &.not-empty {}\n\n    &.has-focus {\n        .mmf-label {\n            color: $mmf-color--primary;\n            opacity: $mmf-opacity--primary;\n        }\n    }\n\n    &.has-error {\n        select,\n        input {\n            border-color: $mmf-color--error;\n        }\n        &.has-focus {\n            .mmf-label {\n                color: $mmf-color--error;\n            }\n        }\n    }\n\n    &.has-warning {\n        select,\n        input {\n            border-color: $mmf-color--warning;\n        }\n        &.has-focus {\n            .mmf-label {\n                color: $mmf-color--warning;\n            }\n        }\n    }\n\n    &.is-empty.no-focus {\n        .mmf-label {\n            transform: translateY($mmf-height-label);\n            font-size: 1em;\n        }\n    }\n}\n",".mmf-button {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  height: 36px;\n  margin: 6px;\n  padding: 0 16px; }\n  .mmf-button:not([disabled]) {\n    cursor: pointer;\n    pointer-events: all; }\n  .mmf-button .mmf-icon ~ * {\n    padding-left: 8px; }\n\n.mmf-checkbox {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  margin: 0;\n  padding: 0;\n  background-color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  border: medium none;\n  font-size: inherit; }\n  .mmf-checkbox:not([disabled]) {\n    cursor: pointer;\n    pointer-events: all; }\n  .mmf-checkbox::-ms-expand {\n    display: none; }\n  .mmf-checkbox:checked:after {\n    content: \"check_box\"; }\n  .mmf-checkbox:after {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    user-select: none;\n    font-family: \"Material Icons\";\n    font-weight: normal;\n    font-style: normal;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: \"liga\";\n    -webkit-font-smoothing: antialiased;\n    content: \"check_box_outline_blank\";\n    transform: translateY(10%); }\n    .mmf-checkbox:after:not([disabled]) {\n      cursor: pointer;\n      pointer-events: all; }\n  .mmf-checkbox[disabled]:after {\n    cursor: default; }\n\n.mmf-form--checkbox label {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center; }\n\n.mmf-form--checkbox .order--label-first .mmf-label {\n  padding-right: 8px; }\n\n.mmf-form--checkbox .order--label-last .mmf-label {\n  padding-left: 8px; }\n\nul.mmf-form__errors {\n  list-style: none;\n  padding-left: 0;\n  margin: 0; }\n  ul.mmf-form__errors li {\n    margin-top: 4px; }\n\n.mmf-input {\n  box-sizing: border-box;\n  width: 100%; }\n\n.mmf-form--input label {\n  display: flex;\n  flex-direction: column; }\n\n.mmf-select__wrapper {\n  position: relative;\n  display: inline-block; }\n  .mmf-select__wrapper:after {\n    content: \"keyboard_arrow_down\";\n    font-family: \"Material Icons\";\n    font-weight: normal;\n    font-style: normal;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: \"liga\";\n    -webkit-font-smoothing: antialiased;\n    align-items: center;\n    bottom: 0;\n    display: flex;\n    pointer-events: none;\n    position: absolute;\n    right: 4px;\n    top: 0; }\n  .mmf-select__wrapper.is-disabled:after {\n    opacity: 0.38; }\n\n.mmf-select {\n  -moz-appearance: window;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  padding: 8px;\n  padding-right: 28px; }\n  .mmf-select:not([disabled]) {\n    cursor: pointer; }\n\n.mmf-form--select label {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n.mmf-form--select .order--label-first .mmf-label {\n  padding-right: 16px; }\n\n.mmf-form--select .order--label-last .mmf-label {\n  padding-left: 16px; }\n\n.mmf-switch.the-material,\n.mmf-switch.the-solid {\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\n.mmf-switch {\n  background-color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  border: medium none;\n  font-size: inherit;\n  margin: 0;\n  background-color: rgba(0, 0, 0, 0.38);\n  border-radius: 1em;\n  border: 1px solid rgba(0, 0, 0, 0.38);\n  width: 2em;\n  height: 1em;\n  position: relative;\n  overflow: hidden; }\n  .mmf-switch::-ms-expand {\n    display: none; }\n  .mmf-switch:after {\n    background-color: #fff;\n    border-radius: 1em;\n    position: relative;\n    content: \"\";\n    display: inline-block;\n    height: 100%;\n    width: 50%;\n    left: 0;\n    margin: 0;\n    transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), width 0.3s ease, margin 0.3s ease; }\n  .mmf-switch:checked {\n    background-color: #2ECC71; }\n    .mmf-switch:checked:after {\n      left: 100%;\n      transform: translate(-100%, 0); }\n  .mmf-switch[disabled] {\n    opacity: 0.38; }\n  .mmf-switch:not([disabled]) {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    user-select: none; }\n    .mmf-switch:not([disabled]):not([disabled]) {\n      cursor: pointer;\n      pointer-events: all; }\n    .mmf-switch:not([disabled]):hover {\n      cursor: pointer; }\n    .mmf-switch:not([disabled]):active:after {\n      width: 60%; }\n\n.mmf-form--switch label {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center; }\n\n.mmf-form--switch .order--label-first .mmf-label {\n  padding-right: 8px; }\n\n.mmf-form--switch .order--label-last .mmf-label {\n  padding-left: 8px; }\n\n.mmf-textarea {\n  width: 100%;\n  resize: vertical; }\n  .mmf-textarea:focus {\n    outline-style: none;\n    outline-width: 0; }\n\n.mmf-form--textarea label {\n  display: flex;\n  flex-direction: column; }\n\n.mmf-form--textarea textarea {\n  box-sizing: border-box; }\n\n.mmf-form .mmf-meta {\n  margin-top: 4px; }\n\n.mmf-form.is-enabled label:hover {\n  cursor: pointer; }\n\n.mmf-icon {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: \"liga\";\n  -webkit-font-smoothing: antialiased; }\n\n.mmf-button {\n  font-weight: 400;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1em; }\n\n.mmf-form__error--warning {\n  color: #F39C12; }\n\n.mmf-form__error--error {\n  color: #d50000; }\n\n.mmf-input {\n  font-weight: 400;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit; }\n\n.mmf-label {\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  user-select: none;\n  color: #000; }\n\n.mmf-select__wrapper:after {\n  font-size: 1.25em;\n  color: #000; }\n\n.mmf-select {\n  font-family: inherit;\n  font-size: inherit; }\n  .mmf-select option {\n    font-size: inherit;\n    color: #000; }\n\n.mmf-textarea {\n  font-size: inherit;\n  font-family: inherit; }\n\n.mmf-form.hasError .mmf-textarea {\n  border-color: #d50000; }\n\n.the-ux.mmf-form--textarea textarea {\n  font-weight: 400;\n  color: inherit;\n  font-size: inherit;\n  line-height: 1.4em; }\n\n.mmf-form__errors {\n  font-size: 0.8em;\n  color: #d50000; }\n\n.mmf-meta {\n  opacity: 0.54;\n  font-style: italic;\n  font-size: 0.8em; }\n\n.mmf-form.is-disabled .mmf-meta,\n.mmf-form.is-disabled .mmf-form__errors,\n.mmf-form.is-disabled span.mmf-label {\n  opacity: 0.38; }\n\n.the-solid.mmf-button {\n  background: none repeat scroll 0 0 transparent;\n  border: medium none;\n  border-radius: 0;\n  border-spacing: 0;\n  outline: 0;\n  user-select: none;\n  background-color: inherit;\n  border: 1px solid #000;\n  border-radius: 0; }\n  .the-solid.mmf-button::-moz-focus-inner, .the-solid.mmf-button::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n  .the-solid.mmf-button:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #000; }\n  .the-solid.mmf-button[disabled] {\n    border-color: rgba(0, 0, 0, 0.38); }\n  .the-solid.mmf-button.is-enabled:hover, .the-solid.mmf-button.is-enabled:focus {\n    background-color: #e6e6e6; }\n\n.the-solid.mmf-button--raised {\n  color: #fff;\n  background-color: #000; }\n  .the-solid.mmf-button--raised[disabled] {\n    background-color: rgba(0, 0, 0, 0.38);\n    border-color: transparent; }\n  .the-solid.mmf-button--raised.is-enabled:hover, .the-solid.mmf-button--raised.is-enabled:focus {\n    background-color: #333333; }\n\n.the-solid.mmf-checkbox {\n  border: 1px solid transparent;\n  outline: 0; }\n  .the-solid.mmf-checkbox:not([disabled]):focus:after, .the-solid.mmf-checkbox:not([disabled]):hover:after {\n    color: #00c853; }\n\n.the-solid.mmf-input {\n  color: rgba(0, 0, 0, 0.87);\n  border: 1px solid #cccccc;\n  border-radius: 2px;\n  outline: 0;\n  padding: 8px; }\n  .the-solid.mmf-input:not([disabled]):focus {\n    border-color: #00c853; }\n  .the-solid.mmf-input:not([disabled]):hover {\n    border-color: #00c853; }\n  .the-solid.mmf-input[disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.the-solid.mmf-select__wrapper {\n  color: rgba(0, 0, 0, 0.87);\n  border: 1px solid #cccccc;\n  border-radius: 2px;\n  overflow: hidden; }\n  .the-solid.mmf-select__wrapper:after {\n    content: \"arrow_drop_down\"; }\n  .the-solid.mmf-select__wrapper.is-enabled:hover, .the-solid.mmf-select__wrapper.is-enabled.has-focus {\n    border-color: #00c853; }\n    .the-solid.mmf-select__wrapper.is-enabled:hover:after, .the-solid.mmf-select__wrapper.is-enabled.has-focus:after {\n      color: #00c853; }\n  .the-solid.mmf-select__wrapper .mmf-select {\n    background-color: inherit;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: 0;\n    border: medium none;\n    font-size: inherit;\n    outline: none; }\n    .the-solid.mmf-select__wrapper .mmf-select::-ms-expand {\n      display: none; }\n    .the-solid.mmf-select__wrapper .mmf-select:-moz-focusring {\n      color: transparent;\n      text-shadow: 0 0 0 #000; }\n    .the-solid.mmf-select__wrapper .mmf-select * {\n      background-color: inherit;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      border-radius: 0;\n      border: medium none;\n      font-size: inherit; }\n      .the-solid.mmf-select__wrapper .mmf-select *::-ms-expand {\n        display: none; }\n\n.the-solid.mmf-form--select .order--label-first {\n  flex-direction: column;\n  align-items: flex-start; }\n  .the-solid.mmf-form--select .order--label-first .mmf-label {\n    padding-bottom: 8px; }\n\n.the-solid.mmf-textarea {\n  color: rgba(0, 0, 0, 0.87);\n  border: 1px solid #cccccc;\n  border-radius: 2px;\n  outline: 0;\n  padding: 8px; }\n  .the-solid.mmf-textarea:not([disabled]):focus {\n    border-color: #00c853; }\n  .the-solid.mmf-textarea:not([disabled]):hover {\n    border-color: #00c853; }\n  .the-solid.mmf-textarea[disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.the-solid.mmf-label {\n  font-weight: 700;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.87); }\n\n.the-solid.mmf-form--input .mmf-label, .the-solid.mmf-form--textarea .mmf-label {\n  line-height: 1.5em; }\n\n/**\n * Default form styles, controlling label position by classnames. The Markup should look like\n *\n *  <my-form extends with-moving-label>\n *      <label>Moving Title</label>\n *      <input-type>\n *      ...\n * @param {string} input-type   - associated input selector\n */\n.the-material.mmf-button {\n  background: none repeat scroll 0 0 transparent;\n  border: medium none;\n  border-radius: 0;\n  border-spacing: 0;\n  outline: 0;\n  user-select: none;\n  border-radius: 2px;\n  color: #00c853;\n  background-color: inherit;\n  transition: background-color 0.1s linear; }\n  .the-material.mmf-button::-moz-focus-inner, .the-material.mmf-button::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n  .the-material.mmf-button:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #000; }\n  .the-material.mmf-button.is-enabled:hover, .the-material.mmf-button.is-enabled:focus {\n    background-color: #ECEFF1; }\n  .the-material.mmf-button.is-disabled {\n    color: rgba(0, 200, 83, 0.38); }\n    .the-material.mmf-button.is-disabled:focus, .the-material.mmf-button.is-disabled:hover {\n      background-color: inherit;\n      color: rgba(0, 200, 83, 0.38);\n      cursor: default; }\n  .the-material.mmf-button .mmf-icon {\n    font-size: 1.5em; }\n\n.the-material.mmf-button--raised {\n  z-index: 10;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  color: #ECEFF1;\n  background-color: #00c853; }\n  .the-material.mmf-button--raised.is-enabled:hover, .the-material.mmf-button--raised.is-enabled:focus {\n    background-color: #00953e; }\n  .the-material.mmf-button--raised.is-disabled, .the-material.mmf-button--raised.is-disabled:hover, .the-material.mmf-button--raised.is-disabled:focus {\n    color: rgba(236, 239, 241, 0.38);\n    background-color: rgba(0, 0, 0, 0.38);\n    cursor: default; }\n\n.the-material.mmf-checkbox {\n  color: rgba(0, 0, 0, 0.87);\n  border: none;\n  border-radius: 0;\n  width: 100%;\n  font-size: inherit;\n  box-sizing: border-box;\n  background: transparent;\n  transform: translateZ(0);\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: border-color 0.1s linear;\n  border-bottom: 0;\n  width: 1em;\n  font-size: 1.25em; }\n  .the-material.mmf-checkbox:not([disabled]):focus {\n    border-color: #00c853; }\n  .the-material.mmf-checkbox:not([disabled]):hover {\n    border-color: #00c853; }\n  .the-material.mmf-checkbox[disabled] {\n    color: #000;\n    opacity: 0.38; }\n  .the-material.mmf-checkbox:after {\n    color: rgba(0, 0, 0, 0.87);\n    font-size: inherit;\n    transition: color 0.1s linear; }\n  .the-material.mmf-checkbox:not([disabled]):focus:after, .the-material.mmf-checkbox:not([disabled]):hover:after {\n    color: #00c853; }\n\n.the-material.mmf-input {\n  color: rgba(0, 0, 0, 0.87);\n  border: none;\n  border-radius: 0;\n  width: 100%;\n  font-size: inherit;\n  box-sizing: border-box;\n  background: transparent;\n  transform: translateZ(0);\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: border-color 0.1s linear;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n  .the-material.mmf-input:not([disabled]):focus {\n    border-color: #00c853; }\n  .the-material.mmf-input:not([disabled]):hover {\n    border-color: #00c853; }\n  .the-material.mmf-input[disabled] {\n    color: #000;\n    opacity: 0.38; }\n  .the-material.mmf-input:not([disabled]):focus {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n  .the-material.mmf-input:not([disabled]):hover {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n\n.the-material.mmf-form--input input {\n  padding: 1.1em 0 0 0; }\n\n.the-material.mmf-form--input .mmf-label {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transition: all 0.1s ease-in-out;\n  color: #000;\n  opacity: 0.54;\n  font-size: 0.8em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.the-material.mmf-form--input.has-focus .mmf-label {\n  color: #81c784;\n  opacity: 0.87; }\n\n.the-material.mmf-form--input.has-error select,\n.the-material.mmf-form--input.has-error input {\n  border-color: #d50000; }\n\n.the-material.mmf-form--input.has-error.has-focus .mmf-label {\n  color: #d50000; }\n\n.the-material.mmf-form--input.has-warning select,\n.the-material.mmf-form--input.has-warning input {\n  border-color: #F39C12; }\n\n.the-material.mmf-form--input.has-warning.has-focus .mmf-label {\n  color: #F39C12; }\n\n.the-material.mmf-form--input.is-empty.no-focus .mmf-label {\n  transform: translateY(1.1em);\n  font-size: 1em; }\n\n.the-material.mmf-form--input .mmf-input {\n  border-color: transparent; }\n\n.the-material.mmf-select__wrapper:after {\n  transition: color 0.1s linear;\n  right: 0; }\n\n.the-material.mmf-select__wrapper.is-enabled:hover:after, .the-material.mmf-select__wrapper.is-enabled.has-focus:after {\n  color: #81c784; }\n\n.the-material.mmf-select__wrapper .mmf-select {\n  background-color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  border: medium none;\n  font-size: inherit;\n  outline: none;\n  padding: 0;\n  padding-right: 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n  .the-material.mmf-select__wrapper .mmf-select::-ms-expand {\n    display: none; }\n  .the-material.mmf-select__wrapper .mmf-select:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #000; }\n  .the-material.mmf-select__wrapper .mmf-select * {\n    background-color: inherit;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: 0;\n    border: medium none;\n    font-size: inherit; }\n    .the-material.mmf-select__wrapper .mmf-select *::-ms-expand {\n      display: none; }\n  .the-material.mmf-select__wrapper .mmf-select.is-enabled {\n    color: rgba(0, 0, 0, 0.87);\n    border: none;\n    border-radius: 0;\n    width: 100%;\n    font-size: inherit;\n    box-sizing: border-box;\n    background: transparent;\n    transform: translateZ(0);\n    outline: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    transition: border-color 0.1s linear; }\n    .the-material.mmf-select__wrapper .mmf-select.is-enabled:not([disabled]):focus {\n      border-color: #00c853; }\n    .the-material.mmf-select__wrapper .mmf-select.is-enabled:not([disabled]):hover {\n      border-color: #00c853; }\n    .the-material.mmf-select__wrapper .mmf-select.is-enabled[disabled] {\n      color: #000;\n      opacity: 0.38; }\n\n.the-material.mmf-form--select .mmf-label {\n  line-height: 29px; }\n\n.the-material.mmf-textarea {\n  color: rgba(0, 0, 0, 0.87);\n  border: none;\n  border-radius: 0;\n  width: 100%;\n  font-size: inherit;\n  box-sizing: border-box;\n  background: transparent;\n  transform: translateZ(0);\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: border-color 0.1s linear;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54);\n  margin: 1.1em 0 0 0; }\n  .the-material.mmf-textarea:not([disabled]):focus {\n    border-color: #00c853; }\n  .the-material.mmf-textarea:not([disabled]):hover {\n    border-color: #00c853; }\n  .the-material.mmf-textarea[disabled] {\n    color: #000;\n    opacity: 0.38; }\n  .the-material.mmf-textarea:not([disabled]):focus {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n  .the-material.mmf-textarea:not([disabled]):hover {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n\n.the-material.mmf-form--textarea textarea {\n  margin: 1.1em 0 0 0; }\n\n.the-material.mmf-form--textarea .mmf-label {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transition: all 0.1s ease-in-out;\n  color: #000;\n  opacity: 0.54;\n  font-size: 0.8em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.the-material.mmf-form--textarea.has-focus .mmf-label {\n  color: #81c784;\n  opacity: 0.87; }\n\n.the-material.mmf-form--textarea.has-error select,\n.the-material.mmf-form--textarea.has-error input {\n  border-color: #d50000; }\n\n.the-material.mmf-form--textarea.has-error.has-focus .mmf-label {\n  color: #d50000; }\n\n.the-material.mmf-form--textarea.has-warning select,\n.the-material.mmf-form--textarea.has-warning input {\n  border-color: #F39C12; }\n\n.the-material.mmf-form--textarea.has-warning.has-focus .mmf-label {\n  color: #F39C12; }\n\n.the-material.mmf-form--textarea.is-empty.no-focus .mmf-label {\n  transform: translateY(1.1em);\n  font-size: 1em; }\n\n.the-material.mmf-form--textarea textarea {\n  border: none;\n  border-color: transparent;\n  background: transparent;\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n  .the-material.mmf-form--textarea textarea:focus {\n    border-color: #81c784; }\n\n.the-material.mmf-form {\n  position: relative; }\n  .the-material.mmf-form .mmf-label {\n    opacity: 0.54; }\n\n.undefined {\n  color: red;\n  background-color: red;\n  border-color: red; }\n\nbody {\n  background: #333;\n  font-family: Roboto; }\n\nh1 {\n  color: #fff; }\n\nh2 {\n  align-items: flex-end;\n  background: #333;\n  display: flex;\n  height: 96px;\n  justify-content: center;\n  margin: 0; }\n  h2 span {\n    background-color: #f2f2f3;\n    line-height: 1em;\n    margin-bottom: 1px;\n    padding: 12px 24px;\n    text-shadow: 0 1px 0 #fff; }\n\n.columns {\n  background-color: #f2f2f3;\n  display: flex;\n  flex-direction: row;\n  padding: 12px 0; }\n\n.box {\n  background: #fff;\n  padding: 8px; }\n\n.theme {\n  flex-basis: 0;\n  flex-grow: 1;\n  margin: 4px; }\n  .theme h3 {\n    font-size: 12px;\n    margin: 0;\n    color: #666;\n    text-align: center; }\n  .theme h4 {\n    margin: 0;\n    padding: 24px 0 12px 0;\n    font-weight: normal;\n    color: #666;\n    font-size: 14px; }\n","@import \"../lib/with-material-theme\";\n\n\n.the-material {\n    @include with-material-theme();\n}\n","@import \"../../lib/typography\";\n@import \"../../lib/units\";\n@import \"../../lib/reset\";\n@import \"../../lib/colors\";\n@import \"../../lib/interface\";\n@import \"../../lib/elevation\";\n\n\n@mixin button-material() {\n    &.mmf-button {\n        @include reset-button();\n\n        border-radius: $mmf-radius;\n        color: $mmf-color--secondary;\n        // background-color should actually be $mmf-color-secondary__contrast, but inherit is the more conform sane\n        // default, since the button should not have any visible background per default\n        background-color: inherit;\n\n        transition: background-color $mmf-transition;\n\n        &.is-enabled {\n            &:hover,\n            &:focus {\n                background-color: $mmf-color--contrast;\n            }\n        }\n\n        &.is-disabled {\n            color: rgba($mmf-color--secondary, $mmf-opacity--disabled);\n            &:focus,\n            &:hover {\n                background-color: inherit;\n                color: rgba($mmf-color--secondary, $mmf-opacity--disabled);\n                cursor: default;\n            }\n        }\n\n        .mmf-icon {\n            font-size: 1.5em;\n        }\n    }\n\n    &.mmf-button--raised {\n        @include elevation(1);\n        color: $mmf-color--contrast;\n        background-color: $mmf-color--secondary;\n\n        &.is-enabled {\n            &:hover,\n            &:focus {\n                background-color: darken($mmf-color--secondary, $mmf-color-distance--focus);\n            }\n        }\n\n        &.is-disabled,\n        &.is-disabled:hover,\n        &.is-disabled:focus {\n            color: rgba($mmf-color--contrast, $mmf-opacity--disabled);\n            background-color: rgba($mmf-color--dark, $mmf-opacity--disabled);\n            cursor: default;\n        }\n    }\n}\n","@mixin elevation($index) {\n    z-index: 10 * $index;\n    @if $index <= 1 {\n        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    } @else if $index <= 2 {\n        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n    } @else if $index <= 4 {\n        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n    } @else if $index <= 8 {\n        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    } @else if $index <= 12 {\n        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\n    } @else if $index <= 24 {\n        box-shadow: 0 24px 48px rgba(0,0,0,0.40), 0 30px 25px rgba(0,0,0,0.20);\n    }\n}\n","@import \"../../lib/reset\";\n@import \"../../lib/units\";\n@import \"../../lib/colors\";\n@import \"../../lib/interface\";\n@import \"../../lib/input\";\n@import \"../../lib/icon\";\n\n\n@mixin checkbox-material() {\n    &.mmf-checkbox {\n        @include with-input();\n        border-bottom: 0; // reset-bottom border from input-mixin\n        width: 1em; // reset block-style from input-mixin\n        font-size: $mmf-text-size--checkbox;\n\n        &:after {\n            color: rgba($mmf-color--dark, $mmf-opacity--primary);\n            font-size: inherit;\n            transition: color $mmf-transition;\n        }\n\n        &:not([disabled]) {\n            &:focus:after,\n            &:hover:after {\n                color: $mmf-color--secondary;\n            }\n        }\n    }\n}\n","@import \"../../lib/form\";\n\n\n@mixin inputform-material() {\n    &.mmf-form--input {\n        @include with-moving-label(\"input\");\n        .mmf-input {\n            border-color: transparent;\n        }\n    }\n}\n","@import \"../../lib/reset\";\n@import \"../../lib/units\";\n@import \"../../lib/typography\";\n@import \"../../lib/colors\";\n@import \"../../lib/input\";\n\n\n@mixin select-material() {\n    &.mmf-select__wrapper {\n        &:after {\n            transition: color $mmf-transition;\n            right: 0;\n        }\n\n        &.is-enabled {\n            &:hover:after,\n            &.has-focus:after {\n                color: $mmf-color--primary;\n            }\n        }\n\n        .mmf-select {\n                @include reset-select();\n                outline: none;\n                padding: 0;\n                padding-right: (0.5 * $mmf-block);\n                border-bottom: $mmf-input-border--width $mmf-style--border rgba($mmf-color--dark, $mmf-opacity--secondary);\n\n                &.is-enabled {\n                    @include with-input();\n                }\n            }\n    }\n}\n","@import \"../../lib/colors\";\n@import \"../../lib/typography\";\n\n\n@mixin selectform-material() {\n    &.mmf-form--select .mmf-label {\n        line-height: 29px;\n    }\n}\n","@import \"../../lib/input\";\n@import \"../../lib/units\";\n\n\n@mixin textarea-material() {\n    &.mmf-textarea {\n        @include with-input();\n        @include with-bottom-border();\n        margin: $mmf-height-label 0 0 0;\n    }\n}\n","@import \"../../lib/colors\";\n@import \"../../lib/units\";\n@import \"../../lib/typography\";\n@import \"../../lib/input\";\n\n\n@mixin textareaform-material() {\n    &.mmf-form--textarea {\n        @include with-moving-label(\"textarea\");\n\n        textarea {\n            border: none;\n            // border-bottom: $mmf-input-border--width $mmf-style--border rgba($mmf-color--dark, $mmf-opacity--secondary);\n            border-color: transparent;\n            background: transparent;\n\n            outline: none;\n            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n            &:focus {\n                border-color: $mmf-color--primary;\n            }\n       }\n    }\n}\n","@import \"../components/button/button-material\";\n@import \"../components/checkbox/checkbox-material\";\n@import \"../components/input/input-material\";\n@import \"../components/inputform/inputform-material\";\n@import \"../components/select/select-material\";\n@import \"../components/selectform/selectform-material\";\n@import \"../components/textarea/textarea-material\";\n@import \"../components/textareaform/textareaform-material\";\n\n\n@import \"./colors\";\n\n@mixin with-material-theme() {\n    @include button-material();\n    @include checkbox-material();\n    @include input-material();\n    @include inputform-material();\n    @include select-material();\n    @include selectform-material();\n    @include textarea-material();\n    @include textareaform-material();\n\n    &.mmf-form {\n        position: relative;\n        .mmf-label {\n            opacity: $mmf-opacity--secondary;\n        }\n    }\n}\n\n\n\n","@import \"../styles/layout\";\n@import \"../styles/typography\";\n@import \"../styles/theme-solid\";\n@import \"../styles/theme-material\";\n// @import \"../styles/theme-material-as-default\";\n\n\n$bg: #333;\n$bg-columns: rgb(242,242,243);\n\n.undefined {\n    color: red;\n    background-color: red;\n    border-color: red;\n}\n\nbody {\n    background: $bg;\n    font-family: Roboto;\n}\n\nh1 {\n    color: #fff;\n}\n\nh2 {\n    align-items: flex-end;\n    background: #333;\n    display: flex;\n    height: 96px;\n    justify-content: center;\n    margin: 0;\n\n    span {\n        background-color: $bg-columns;\n        line-height: 1em;\n        margin-bottom: 1px;\n        padding: 12px 24px;\n        text-shadow: 0 1px 0 #fff;\n    }\n}\n\n.columns {\n    background-color: $bg-columns;\n    display: flex;\n    flex-direction: row;\n    padding: 12px 0;\n}\n\n.box {\n    background: #fff;\n    padding: 8px;\n}\n\n\n.theme {\n    flex-basis: 0;\n    flex-grow: 1;\n    margin: 4px;\n\n    h3 {\n        font-size: 12px;\n        margin: 0;\n        color: #666;\n        text-align: center;\n    }\n\n    h4 {\n        margin: 0;\n        padding: 24px 0 12px 0;\n        font-weight: normal;\n        color: #666;\n        font-size: 14px;\n    }\n}\n"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "mithril":
/*!********************!*\
  !*** external "m" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = m;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map