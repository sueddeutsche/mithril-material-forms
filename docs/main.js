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

/***/ "./app/countries.ts":
/*!**************************!*\
  !*** ./app/countries.ts ***!
  \**************************/
/*! exports provided: countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
const countries = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Indian Ocean Territory', code: 'IO' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX' },
    { name: 'Cocos (Keeling) Islands', code: 'CC' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    { name: 'Cook Islands', code: 'CK' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cote D\'Ivoire', code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK' },
    { name: 'Faroe Islands', code: 'FO' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'French Southern Territories', code: 'TF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
    { name: 'Holy See (Vatican City State)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
    { name: 'Korea, Republic of', code: 'KR' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Lao People\'S Democratic Republic', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia, Federated States of', code: 'FM' },
    { name: 'Moldova, Republic of', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Netherlands Antilles', code: 'AN' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Norfolk Island', code: 'NF' },
    { name: 'Northern Mariana Islands', code: 'MP' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestinian Territory, Occupied', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Pitcairn', code: 'PN' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reunion', code: 'RE' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russian Federation', code: 'RU' },
    { name: 'RWANDA', code: 'RW' },
    { name: 'Saint Helena', code: 'SH' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Pierre and Miquelon', code: 'PM' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia and Montenegro', code: 'CS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ' },
    { name: 'Swaziland', code: 'SZ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syrian Arab Republic', code: 'SY' },
    { name: 'Taiwan, Province of China', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania, United Republic of', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Turks and Caicos Islands', code: 'TC' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'United States Minor Outlying Islands', code: 'UM' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Viet Nam', code: 'VN' },
    { name: 'Virgin Islands, British', code: 'VG' },
    { name: 'Virgin Islands, U.S.', code: 'VI' },
    { name: 'Wallis and Futuna', code: 'WF' },
    { name: 'Western Sahara', code: 'EH' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' }
];


/***/ }),

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
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countries */ "./app/countries.ts");




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
    buttonForm: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["ButtonForm"]),
        variations: {
            "button raised form with error and description": {
                attrs: {
                    title: "Button-Form title",
                    description: "Button-Form description text...",
                    errors: ["This checkbox has an invalid type"],
                    disabled: false,
                    onclick: () => console.log("click")
                },
                childNodes: ["A clickable Button"]
            },
            "button raised with icon form with error and description": {
                attrs: {
                    title: "Button-Form title",
                    description: "Button-Form description text...",
                    errors: ["This checkbox has an invalid type"],
                    raised: true,
                    disabled: false,
                    onclick: () => console.log("click")
                },
                childNodes: [mithril__WEBPACK_IMPORTED_MODULE_1___default()("span.mmf-icon", "delete"), mithril__WEBPACK_IMPORTED_MODULE_1___default()("span", "A clickable Button")]
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
    radioButtons: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["RadioButtons"]),
        variations: {
            "radio elements": {
                attrs: {
                    value: "wine",
                    disabled: false,
                    options: [
                        {
                            id: "coffee-normal",
                            title: "Coffee",
                            value: "coffee",
                            icon: "local_cafe",
                            disabled: false
                        },
                        {
                            id: "wine-normal",
                            title: "Wine",
                            icon: "wine_bar",
                            value: "wine",
                            disabled: false
                        },
                        {
                            id: "beer-normal",
                            title: "Beer",
                            value: "beer",
                            icon: "sports_bar",
                            disabled: false
                        }
                    ],
                    onchange: value => console.log("value", value)
                }
            },
            "disabled radio elements": {
                attrs: {
                    value: "wine",
                    title: "drinks",
                    disabled: true,
                    options: [
                        {
                            id: "coffee-disabled",
                            title: "Coffee",
                            value: "coffee",
                            icon: "local_cafe",
                            disabled: false
                        },
                        {
                            id: "wine-disabled",
                            title: "Wine",
                            icon: "wine_bar",
                            value: "wine",
                            disabled: false
                        },
                        {
                            id: "beer-disabled",
                            title: "Beer",
                            value: "beer",
                            icon: "sports_bar",
                            disabled: false
                        }
                    ],
                    onchange: value => console.log("value", value)
                }
            },
            "radio elements, one disabled": {
                attrs: {
                    value: "wine",
                    title: "drinks",
                    options: [
                        {
                            id: "coffee-disabled",
                            title: "Coffee",
                            value: "coffee",
                            icon: "local_cafe",
                            disabled: true
                        },
                        {
                            id: "wine-disabled",
                            title: "Wine",
                            icon: "wine_bar",
                            value: "wine",
                        },
                        {
                            id: "beer-disabled",
                            title: "Beer",
                            value: "beer",
                            icon: "sports_bar",
                        }
                    ],
                    onchange: value => console.log("value", value)
                }
            },
            "radio elements without icons": {
                attrs: {
                    value: "wine",
                    title: "drinks",
                    disabled: false,
                    options: [
                        {
                            id: "coffee-no-icon",
                            title: "Coffee",
                            value: "coffee",
                            disabled: false
                        },
                        {
                            id: "wine-no-icon",
                            title: "Wine",
                            value: "wine",
                            disabled: false
                        },
                        {
                            id: "beer-no-icon",
                            title: "Beer",
                            value: "beer",
                            disabled: false
                        }
                    ],
                    onchange: value => console.log("value", value)
                }
            },
            "radio elements without icons, all disabled": {
                attrs: {
                    value: "wine",
                    disabled: true,
                    options: [
                        {
                            id: "coffee-no-icon-disabled",
                            title: "Coffee",
                            value: "coffee",
                            disabled: true
                        },
                        {
                            id: "wine-no-icon-disabled",
                            title: "Wine",
                            value: "wine",
                        },
                        {
                            id: "beer-no-icon-disabled",
                            title: "Beer",
                            value: "beer",
                        }
                    ],
                    onchange: value => console.log("value", value)
                }
            },
            "radio elements without icons, one disabled": {
                attrs: {
                    value: "wine",
                    options: [
                        {
                            id: "coffee-no-icon-disabled",
                            title: "Coffee",
                            value: "coffee",
                            disabled: true
                        },
                        {
                            id: "wine-no-icon-disabled",
                            title: "Wine",
                            value: "wine",
                        },
                        {
                            id: "beer-no-icon-disabled",
                            title: "Beer",
                            value: "beer",
                        }
                    ],
                    onchange: value => console.log("value", value)
                }
            }
        }
    },
    radioButtonsForm: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["RadioButtonsForm"]),
        variations: {
            "radio form with description": {
                attrs: {
                    value: "wine",
                    disabled: false,
                    description: "Radio-Buttons form description text...",
                    options: [
                        {
                            id: "coffee-normal",
                            title: "Coffee",
                            value: "coffee",
                            icon: "local_cafe",
                            disabled: false
                        },
                        {
                            id: "wine-normal",
                            title: "Wine",
                            icon: "wine_bar",
                            value: "wine",
                            disabled: false
                        },
                        {
                            id: "beer-normal",
                            title: "Beer",
                            value: "beer",
                            icon: "sports_bar",
                            disabled: false
                        }
                    ],
                    onchange: value => console.log("value", value)
                }
            },
            "radio form with errors": {
                attrs: {
                    value: "wine",
                    title: "Radio Button Form",
                    errors: ["This radio button is invalid"],
                    description: "Radio-Buttons form description text...",
                    disabled: false,
                    options: [
                        {
                            id: "coffee-disabled",
                            title: "Coffee",
                            value: "coffee",
                            icon: "local_cafe",
                        },
                        {
                            id: "wine-disabled",
                            title: "Wine",
                            icon: "wine_bar",
                            value: "wine",
                        },
                        {
                            id: "beer-disabled",
                            title: "Beer",
                            value: "beer",
                            icon: "sports_bar",
                        }
                    ],
                    onchange: value => console.log("value", value)
                }
            },
            "radio form with errors, title and description, disabled": {
                attrs: {
                    value: "wine",
                    title: "Radio Button Form",
                    errors: ["This radio button is invalid"],
                    description: "Radio-Buttons form description text...",
                    disabled: true,
                    options: [
                        {
                            id: "coffee-disabled",
                            title: "Coffee",
                            value: "coffee",
                            icon: "local_cafe",
                        },
                        {
                            id: "wine-disabled",
                            title: "Wine",
                            icon: "wine_bar",
                            value: "wine",
                        },
                        {
                            id: "beer-disabled",
                            title: "Beer",
                            value: "beer",
                            icon: "sports_bar",
                        }
                    ],
                    onchange: value => console.log("value", value)
                }
            },
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
    queryList: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["QueryList"]),
        variations: {
            "input with suggestions, including input value": {
                attrs: {
                    type: "text",
                    instantUpdate: true,
                    value: "",
                    valueProp: "name",
                    showCurrentInput: true,
                    suggestions: _countries__WEBPACK_IMPORTED_MODULE_3__["countries"],
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "input with suggestions and custom rendering": {
                attrs: {
                    type: "text",
                    value: "",
                    valueProp: "code",
                    searchProp: "query",
                    // add a special query value for search (in both code and name)
                    suggestions: _countries__WEBPACK_IMPORTED_MODULE_3__["countries"].map(value => (Object.assign(Object.assign({}, value), { query: `${value.code} ${value.name}` // beginning scores higher
                     }))),
                    displayRenderer: (value, attrs) => mithril__WEBPACK_IMPORTED_MODULE_1___default()("div", mithril__WEBPACK_IMPORTED_MODULE_1___default()("div", value.name), mithril__WEBPACK_IMPORTED_MODULE_1___default()("div", value.code)),
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "disabled querylist": {
                attrs: {
                    disabled: true,
                    type: "text",
                    instantUpdate: true,
                    value: "UK",
                    valueProp: "name",
                    showCurrentInput: true,
                    suggestions: _countries__WEBPACK_IMPORTED_MODULE_3__["countries"],
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
        }
    },
    queryListForm: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["QueryListForm"]),
        variations: {
            "query list with suggestions": {
                attrs: {
                    title: "Select-Form Title",
                    description: "Select-Form description text...",
                    type: "text",
                    instantUpdate: true,
                    value: "",
                    valueProp: "name",
                    showCurrentInput: true,
                    suggestions: _countries__WEBPACK_IMPORTED_MODULE_3__["countries"],
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "disable query list": {
                attrs: {
                    disabled: true,
                    title: "Select-Form Title",
                    description: "Select-Form description text...",
                    type: "text",
                    instantUpdate: true,
                    value: "UK",
                    valueProp: "name",
                    showCurrentInput: true,
                    suggestions: _countries__WEBPACK_IMPORTED_MODULE_3__["countries"],
                    onchange: value => console.log(`change value to '${value}'`)
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
    selectWithColor: {
        render: render.bind(null, _index__WEBPACK_IMPORTED_MODULE_2__["Select"]),
        variations: {
            "select with status color": {
                attrs: {
                    options: [
                        {
                            value: "a very nice selection",
                            color: "rgb(255, 76, 76)"
                        },
                        {
                            value: "ignore any niceness",
                            color: "rgb(43, 54, 113)"
                        },
                        "Without any color niceness"
                    ],
                    value: "a very nice selection",
                    onchange: value => console.log(`change value to '${value}'`)
                }
            },
            "disabled select with status color": {
                attrs: {
                    disabled: true,
                    options: [
                        {
                            value: "a very nice selection",
                            color: "rgb(255, 76, 76)"
                        },
                        {
                            value: "ignore any niceness",
                            color: "rgb(43, 54, 113)"
                        },
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
        return render(title, Object.assign(Object.assign({}, variation.attrs), { theme: "the-material" }), ...variation.childNodes || []);
    })), mithril__WEBPACK_IMPORTED_MODULE_1___default()(".theme.theme-ux", mithril__WEBPACK_IMPORTED_MODULE_1___default()("h3", "theme solid"), Object.keys(variations).map(title => {
        const variation = variations[title];
        return render(title, Object.assign(Object.assign({}, variation.attrs), { theme: "the-solid" }), ...variation.childNodes || []);
    }))));
}
mithril__WEBPACK_IMPORTED_MODULE_1___default.a.render(document.body, mithril__WEBPACK_IMPORTED_MODULE_1___default()(".page", mithril__WEBPACK_IMPORTED_MODULE_1___default()("h1", "mithril(-material)-forms"), mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", "seet the docs for details: ", mithril__WEBPACK_IMPORTED_MODULE_1___default()("a[href=https://github.com/sueddeutsche/mithril-material-forms]", "github/sueddeutsche/mithril-material-forms")), component("button"), component("buttonForm"), component("input"), component("inputForm"), component("queryList"), component("queryListForm"), component("checkbox"), component("checkboxForm"), component("radioButtons"), component("radioButtonsForm"), component("select"), component("selectForm"), component("selectWithColor"), component("switch"), component("switchForm"), component("textarea"), component("textareaForm")));


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
        const attrs = Object.assign(Object.assign({}, vnode.attrs), { theme: undefined, class: this.getClassNames(vnode.attrs) });
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("button", attrs, vnode.children);
    }
});


/***/ }),

/***/ "./components/buttonform/index.ts":
/*!****************************************!*\
  !*** ./components/buttonform/index.ts ***!
  \****************************************/
/*! exports provided: defaultFormOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFormOptions", function() { return defaultFormOptions; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./components/types.ts");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ "./components/button/index.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors */ "./components/errors/index.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../label */ "./components/label/index.ts");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_4__);





const defaultFormOptions = {
    theme: _types__WEBPACK_IMPORTED_MODULE_0__["THEME_DEFAULT"],
    errors: [],
    description: "",
};
/* harmony default export */ __webpack_exports__["default"] = ({
    view(vnode) {
        const attrs = Object.assign(Object.assign({}, defaultFormOptions), vnode.attrs);
        return mithril__WEBPACK_IMPORTED_MODULE_4___default()(`.mmf-form.mmf-form--button.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${Object(_errors__WEBPACK_IMPORTED_MODULE_2__["getErrorClass"])(attrs.errors)} ${attrs.theme}`
        }, mithril__WEBPACK_IMPORTED_MODULE_4___default()(_label__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, attrs)), mithril__WEBPACK_IMPORTED_MODULE_4___default()(_button__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, attrs), vnode.children), mithril__WEBPACK_IMPORTED_MODULE_4___default()(_errors__WEBPACK_IMPORTED_MODULE_2__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_4___default()(".mmf-meta", attrs.description));
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
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./components/types.ts");


/* harmony default export */ __webpack_exports__["default"] = ({
    view({ attrs }) {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.mmf-checkbox", {
            "data-id": attrs.id,
            type: "checkbox",
            class: attrs.theme || _types__WEBPACK_IMPORTED_MODULE_1__["THEME_DEFAULT"],
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
        const attrs = Object.assign(Object.assign({}, defaultOptions), vnode.attrs);
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.mmf-form.mmf-form--checkbox.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${Object(_errors__WEBPACK_IMPORTED_MODULE_3__["getErrorClass"])(attrs.errors)} ${attrs.theme}`
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign(Object.assign({}, attrs), { invertOrder: attrs.invertOrder !== true }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
        const attrs = Object.assign({ url: null, "class": "", asBackgroundImage: false, description: null, placeholder: null, onclick: null, maxRatio: "16:9", 
            // "private"
            onload: event => this.updateRatio(vnode.attrs.maxRatio, event.currentTarget), oncreate: content => { this.overflowContainer = content.dom; } }, vnode.attrs);
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
        const attrs = Object.assign({ id: null, title: "", value: "", errors: [], description: "", placeholder: "", instantUpdate: false, onblur: Function.prototype, onfocus: Function.prototype, onchange: Function.prototype }, vnode.attrs);
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
        const { invertOrder, title, class: classNames } = vnode.attrs;
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

/***/ "./components/list/getParentByClassname.ts":
/*!*************************************************!*\
  !*** ./components/list/getParentByClassname.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** helper to retrieve correct (targetClass) target-element of an event.target */
function getParentByClassname(current, targetClass, parent = document.body) {
    if (current === parent) {
        return undefined;
    }
    else if (current.classList.contains(targetClass)) {
        return current;
    }
    return getParentByClassname(current.parentNode, targetClass, parent);
}
/* harmony default export */ __webpack_exports__["default"] = (getParentByClassname);


/***/ }),

/***/ "./components/list/index.ts":
/*!**********************************!*\
  !*** ./components/list/index.ts ***!
  \**********************************/
/*! exports provided: displayRenderer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayRenderer", function() { return displayRenderer; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getParentByClassname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getParentByClassname */ "./components/list/getParentByClassname.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./components/types.ts");



/** default render function for item content rendering */
function displayRenderer(item, attrs) {
    return mithril__WEBPACK_IMPORTED_MODULE_0___default()("span", item[attrs.valueProp]);
}
/**
 * standard list component with additional item hover-, highlight- and selection-support
 */
/* harmony default export */ __webpack_exports__["default"] = ({
    view({ attrs }) {
        var _a;
        const { items, valueProp = "value", selectedIndex, onSelect, onHover, displayRenderer } = attrs;
        if (items.length === 0 || (items.length === 1 && items[0][valueProp] === "")) {
            return mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment({}, "");
        }
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.mmf-list", {
            class: (_a = attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_2__["THEME_DEFAULT"],
            onmousedown: onSelect ? event => {
                const target = Object(_getParentByClassname__WEBPACK_IMPORTED_MODULE_1__["default"])(event.target, "mmf-list__item");
                if (!target) {
                    return;
                }
                const index = items.findIndex(item => item[valueProp] === target.dataset.value);
                if (index >= 0) {
                    onSelect(index);
                }
            } : null
        }, items.map((item, index) => mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.mmf-list__item", {
            "data-value": item[valueProp],
            class: `${item.class ? item.class : ""} ${index === selectedIndex ? "is-selected" : ""}`,
            onmouseenter: onHover ? event => {
                const target = event.target;
                const index = items.findIndex(item => item[valueProp] === target.dataset.value);
                if (index >= 0) {
                    onHover(index);
                }
            } : null
        }, displayRenderer(item, attrs))));
    }
});


/***/ }),

/***/ "./components/popover/index.ts":
/*!*************************************!*\
  !*** ./components/popover/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./components/types.ts");


/**
 * places a panel to the specified dom-element
 *
 * **usage**
 *
 * ```js
 *    // render popover with contents and store popover-instance for controls
 *    m.render(dom, m(Popover, {
 *       onmount: popover => (this.popover = popover)
 *     },
 *     // and render contents
 *     m(Contents))
 *   );
 *   // later, update contents in popover
 *   this.popover.render(m(Contents, {}))
 *   // place and show popover at target dom element
 *   this.popover.show(targetElement)
 *   // hide popover
 *   this.popover.hide()
 * ```
 */
const Popover = {
    oncreate(vnode) {
        vnode.attrs.onmount(vnode.state);
    },
    onremove() {
        const container = document.body;
        if (container.contains(this.dom)) {
            mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.dom, null);
            container.removeChild(this.dom);
        }
    },
    hide() {
        this.dom.classList.add("is-hidden");
        this.dom.classList.remove("is-visible");
    },
    render(content) {
        mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.dom, content);
    },
    show(targetElement) {
        this.dom.classList.add("is-visible");
        this.dom.classList.remove("is-hidden");
        const bound = targetElement.getBoundingClientRect();
        this.dom.style.setProperty("--target-width", `${bound.width}px`);
        this.placeBelow(targetElement, bound);
    },
    placeAbove(targetElement, bound = targetElement.getBoundingClientRect()) {
        if (targetElement.offsetParent === document.body) {
            const scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
            this.dom.style.top = "unset";
            this.dom.style.left = `${bound.left + scrollX}px`;
            this.dom.style.bottom = `${document.body.scrollHeight - scrollY - bound.bottom + bound.height}px`;
            return;
        }
        const offset = targetElement.offsetParent.getBoundingClientRect();
        this.dom.style.top = "unset";
        this.dom.style.left = `${bound.left - offset.left}px`;
        this.dom.style.bottom = `${offset.bottom - bound.bottom + bound.height}px`;
    },
    placeBelow(targetElement, bound = targetElement.getBoundingClientRect()) {
        if (targetElement.offsetParent === document.body) {
            const scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
            this.dom.style.left = `${bound.left + scrollX}px`;
            this.dom.style.top = `${bound.top + scrollY + bound.height}px`;
            return;
        }
        const offset = targetElement.offsetParent.getBoundingClientRect();
        this.dom.style.left = `${bound.left - offset.left}px`;
        this.dom.style.top = `${bound.top - offset.top + bound.height}px`;
    },
    view(vnode) {
        var _a, _b;
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-popover.is-hidden", Object.assign(Object.assign({}, vnode.attrs), { "class": `${(_a = vnode.attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_1__["THEME_DEFAULT"]} ${(_b = vnode.attrs.class) !== null && _b !== void 0 ? _b : ""}`.trim(), oncreate: ({ dom }) => (this.dom = dom) }), vnode.children);
    }
};
/* harmony default export */ __webpack_exports__["default"] = (Popover);


/***/ }),

/***/ "./components/querylist/index.ts":
/*!***************************************!*\
  !*** ./components/querylist/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list */ "./components/list/index.ts");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popover */ "./components/popover/index.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./components/querylist/search.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./components/types.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const raf = window.requestAnimationFrame;
const isListOfItems = (suggestions) => Array.isArray(suggestions);
const isGetFunction = (suggestions) => typeof suggestions === "function";
/* harmony default export */ __webpack_exports__["default"] = ({
    hasFocus: false,
    currentIndex: 0,
    showCurrentInput: false,
    valueProp: "value",
    displayRenderer: _list__WEBPACK_IMPORTED_MODULE_0__["displayRenderer"],
    resizeTimer: null,
    updateFilter() {
        return __awaiter(this, void 0, void 0, function* () {
            this.list = yield this.getSuggestions(this.value);
            if (this.showCurrentInput) {
                this.list.unshift({ [this.valueProp]: this.value, class: "is-value" });
            }
            this.updateCompletions();
        });
    },
    oncreate({ attrs }) {
        const { suggestions } = attrs;
        if (isListOfItems(suggestions)) {
            this.getSuggestions = value => Object(_search__WEBPACK_IMPORTED_MODULE_3__["default"])(suggestions, value, 10, attrs.searchProp || this.valueProp);
        }
        else if (isGetFunction(suggestions)) {
            this.getSuggestions = suggestions;
        }
        else {
            this.getSuggestions = () => Promise.resolve([]);
        }
    },
    updateCompletions() {
        this.currentIndex = this.currentIndex < 0 ? 0 : Math.min(this.list.length - 1, this.currentIndex);
        this.popover.render(mithril__WEBPACK_IMPORTED_MODULE_1___default()(_list__WEBPACK_IMPORTED_MODULE_0__["default"], {
            items: this.list,
            theme: this.theme,
            valueProp: this.valueProp,
            selectedIndex: this.currentIndex,
            displayRenderer: this.displayRenderer,
            onSelect: index => {
                const value = this.list[index][this.valueProp];
                this.value = value;
                this.input.value = value;
            },
            onHover: index => {
                this.currentIndex = index;
                this.updateCompletions();
            }
        }));
    },
    updateSelection(e) {
        const { key } = e;
        // goto previous suggestion in list
        if (key === "ArrowUp") {
            e.stopPropagation();
            e.preventDefault();
            if (this.currentIndex > 0) {
                this.currentIndex -= 1;
                this.updateCompletions();
            }
            // goto next suggestion in list
        }
        else if (key === "ArrowDown") {
            e.stopPropagation();
            e.preventDefault();
            if (this.currentIndex < this.list.length - 1) {
                this.currentIndex += 1;
                this.updateCompletions();
            }
            // get selected suggestion, insert it into input and leave input field
        }
        else if (key === "Enter") {
            const value = this.list[this.currentIndex][this.valueProp];
            this.value = value;
            this.input.value = value;
            this.input.blur(); // blur input, close panel (consistent with mouse selection)
        }
    },
    view({ attrs }) {
        var _a;
        let { value } = attrs;
        if (this.hasFocus && this.value != null) {
            // this will remove any changes applied to this data from "outside"
            value = this.value;
        }
        this.value = value;
        const { valueProp, displayRenderer, showCurrentInput, theme } = attrs;
        this.valueProp = valueProp !== null && valueProp !== void 0 ? valueProp : this.valueProp;
        this.displayRenderer = displayRenderer !== null && displayRenderer !== void 0 ? displayRenderer : this.displayRenderer;
        this.showCurrentInput = showCurrentInput === true;
        this.theme = theme !== null && theme !== void 0 ? theme : _types__WEBPACK_IMPORTED_MODULE_4__["THEME_DEFAULT"];
        const inputAttributes = {
            "data-id": attrs.id,
            class: `${this.theme} ${(_a = attrs.class) !== null && _a !== void 0 ? _a : ""}`,
            disabled: attrs.disabled,
            placeholder: attrs.placeholder,
            type: "text",
            value,
            oncreate: ({ dom }) => (this.input = dom),
            oninput: e => (this.value = e.target.value),
            onfocus: (event) => __awaiter(this, void 0, void 0, function* () {
                var _b;
                this.hasFocus = true;
                attrs.onfocus && attrs.onfocus(event);
                yield this.updateFilter();
                (_b = this.popover) === null || _b === void 0 ? void 0 : _b.show(this.input);
            }),
            onblur: event => {
                this.hasFocus = false;
                attrs.onblur && attrs.onblur(event);
                raf(() => { var _a; return (_a = this.popover) === null || _a === void 0 ? void 0 : _a.hide(); }); // delay closing of popover to prevent race conditions
            },
            onkeydown: event => this.updateSelection(event),
            onchange: () => attrs.onchange(this.value),
            onkeyup: (event) => __awaiter(this, void 0, void 0, function* () {
                yield this.updateFilter();
                const ignoreKeys = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Enter"];
                if (attrs.instantUpdate && !ignoreKeys.includes(event.key)) {
                    attrs.onchange(this.value);
                }
            })
        };
        return [
            mithril__WEBPACK_IMPORTED_MODULE_1___default()(`input.mmf-input`, inputAttributes),
            mithril__WEBPACK_IMPORTED_MODULE_1___default()(_popover__WEBPACK_IMPORTED_MODULE_2__["default"], {
                onmount: panel => (this.popover = panel),
                theme: attrs.theme
            })
        ];
    }
});


/***/ }),

/***/ "./components/querylist/search.ts":
/*!****************************************!*\
  !*** ./components/querylist/search.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return search; });
const DEFAULT_LIMIT = 12;
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
function search(haystack, needle, limit = DEFAULT_LIMIT, prop = "value") {
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


/***/ }),

/***/ "./components/querylistform/index.ts":
/*!*******************************************!*\
  !*** ./components/querylistform/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _querylist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../querylist */ "./components/querylist/index.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label */ "./components/label/index.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./components/errors/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./components/types.ts");





/* harmony default export */ __webpack_exports__["default"] = ({
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
        const attrs = Object.assign({ id: null, value: "", errors: [], invertOrder: false, description: "", onblur: Function.prototype, onfocus: Function.prototype, onchange: Function.prototype }, vnode.attrs);
        const focusClass = this.hasFocus() ? "has-focus" : "no-focus";
        const errorClass = Object(_errors__WEBPACK_IMPORTED_MODULE_3__["getErrorClass"])(attrs.errors);
        const emptyClass = attrs.value === "" ? "is-empty" : "not-empty";
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.mmf-form.mmf-form--query-list.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${focusClass} ${errorClass} ${emptyClass} ${(_a = attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_4__["THEME_DEFAULT"]}`
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign(Object.assign({}, attrs), { invertOrder: attrs.invertOrder }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_querylist__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign(Object.assign({}, attrs), { onfocus: e => {
                this.onfocus();
                attrs.onfocus && attrs.onfocus(e);
            }, onblur: e => {
                this.onblur(e.target.value);
                attrs.onblur && attrs.onblur(e);
            } }))), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_errors__WEBPACK_IMPORTED_MODULE_3__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-meta", attrs.description), vnode.children);
    }
});


/***/ }),

/***/ "./components/radiobuttons/index.ts":
/*!******************************************!*\
  !*** ./components/radiobuttons/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ "./components/button/index.ts");


/* harmony default export */ __webpack_exports__["default"] = ({
    oncreate(vnode) {
        this.buttons = Array.from(vnode.dom.querySelectorAll("button"))
            .map(dom => ({ value: dom.value, dom: dom }));
    },
    view(vnode) {
        const { value, options, disabled, theme } = vnode.attrs;
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-radio-btn-container", {
            disabled,
            class: theme || "",
            oncreate: _vnode => (this.$container = _vnode.dom),
        }, options.map((option) => {
            const icon = option.icon ?
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.mmf-icon", {
                    value: option.value,
                }, option.icon)
                : undefined;
            const label = mithril__WEBPACK_IMPORTED_MODULE_0___default()("span", { class: "mmf-radio-label" }, option.title || option.value);
            const attrs = {
                theme,
                disabled: disabled ? disabled : option.disabled || false,
                title: option.title || option.value,
                class: `${option.value === value ? "selected" : ""} mmf-radio-btn`,
                value: option.value,
                // track button element and value
                onclick: () => {
                    if (disabled || option.disabled)
                        return;
                    this.buttons.forEach(button => button.dom.classList.toggle("selected", button.value === option.value));
                    vnode.attrs.onchange(option.value);
                }
            };
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_button__WEBPACK_IMPORTED_MODULE_1__["default"], attrs, icon, label);
        }));
    }
});


/***/ }),

/***/ "./components/radiobuttonsform/index.ts":
/*!**********************************************!*\
  !*** ./components/radiobuttonsform/index.ts ***!
  \**********************************************/
/*! exports provided: defaultFormOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFormOptions", function() { return defaultFormOptions; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radiobuttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../radiobuttons */ "./components/radiobuttons/index.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label */ "./components/label/index.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./components/errors/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./components/types.ts");





const defaultFormOptions = {
    theme: _types__WEBPACK_IMPORTED_MODULE_4__["THEME_DEFAULT"],
    errors: [],
    description: "",
};
/* harmony default export */ __webpack_exports__["default"] = ({
    view(vnode) {
        const attrs = Object.assign(Object.assign({}, defaultFormOptions), vnode.attrs);
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.mmf-form.mmf-form--radio-buttons.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${Object(_errors__WEBPACK_IMPORTED_MODULE_3__["getErrorClass"])(attrs.errors)} ${attrs.theme}`
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, attrs)), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_radiobuttons__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, attrs)), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_errors__WEBPACK_IMPORTED_MODULE_3__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-meta", attrs.description), vnode.children);
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
const transformOptions = (options) => {
    return options.map(option => typeof option === "string" ? { value: option } : option);
};
/* harmony default export */ __webpack_exports__["default"] = ({
    view(vnode) {
        const { attrs } = vnode;
        const { theme = "the-default" } = vnode.attrs;
        const options = transformOptions(attrs.options);
        const option = options.find(o => o.value === attrs.value);
        const activeClass = attrs.disabled === true ? "is-disabled" : "is-enabled";
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-select__wrapper", {
            "class": `${theme} ${activeClass} ${(option === null || option === void 0 ? void 0 : option.color) ? "with-color" : ""}`,
            oncreate: _vnode => (this.$wrapper = _vnode.dom)
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.select-icon", {
            style: `background-color: ${option === null || option === void 0 ? void 0 : option.color}`,
            oncreate: _vnode => (this.$icon = _vnode.dom)
        }), mithril__WEBPACK_IMPORTED_MODULE_0___default()("select.mmf-select", {
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
            onchange: (e) => {
                const option = options === null || options === void 0 ? void 0 : options.find(o => o.value === e.target.value);
                this.$wrapper.classList.toggle("with-color", (option === null || option === void 0 ? void 0 : option.color) != null);
                this.$icon.style.setProperty("background-color", option === null || option === void 0 ? void 0 : option.color);
                if (attrs.onchange)
                    attrs.onchange(e.target.value);
            }
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
        const attrs = Object.assign({ id: null, value: "", options: [{ title: "-", value: false }], errors: [], invertOrder: false, description: "" }, vnode.attrs);
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.mmf-form.mmf-form--select.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${(_a = attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_4__["THEME_DEFAULT"]} ${Object(_errors__WEBPACK_IMPORTED_MODULE_3__["getErrorClass"])(attrs.errors)}`
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign(Object.assign({ "class": "mmf-grow-2" }, attrs), { invertOrder: attrs.invertOrder }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_select__WEBPACK_IMPORTED_MODULE_1__["default"], attrs)), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_errors__WEBPACK_IMPORTED_MODULE_3__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-meta", attrs.description), vnode.children);
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
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./components/types.ts");


/* harmony default export */ __webpack_exports__["default"] = ({
    view({ attrs }) {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.mmf-switch", {
            "data-id": attrs.id,
            type: "checkbox",
            class: attrs.theme || _types__WEBPACK_IMPORTED_MODULE_1__["THEME_DEFAULT"],
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
        const attrs = Object.assign(Object.assign({}, defaultOptions), vnode.attrs);
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.mmf-form.mmf-form--switch.is-${attrs.disabled ? "disabled" : "enabled"}`, {
            "class": `${Object(_errors__WEBPACK_IMPORTED_MODULE_3__["getErrorClass"])(attrs.errors)} ${attrs.theme}`
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign(Object.assign({}, attrs), { invertOrder: attrs.invertOrder !== true }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
        const attrs = Object.assign({ value: "", rows: 1, placeholder: "", disabled: false, instantUpdate: false, onblur: emptyFunction, onfocus: emptyFunction, onchange: emptyFunction, oncreate: emptyFunction, onbeforeremove: emptyFunction }, vnode.attrs);
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
/*! exports provided: Button, ButtonForm, Checkbox, CheckboxForm, Errors, getErrorClass, ImagePreview, Input, InputForm, Label, QueryList, QueryListForm, RadioButtons, RadioButtonsForm, Select, SelectForm, Switch, SwitchForm, Textarea, TextareaForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/button */ "./components/button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components_button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_buttonform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/buttonform */ "./components/buttonform/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonForm", function() { return _components_buttonform__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/checkbox */ "./components/checkbox/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _components_checkbox__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_checkboxform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/checkboxform */ "./components/checkboxform/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxForm", function() { return _components_checkboxform__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _components_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/errors */ "./components/errors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return _components_errors__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getErrorClass", function() { return _components_errors__WEBPACK_IMPORTED_MODULE_4__["getErrorClass"]; });

/* harmony import */ var _components_imagepreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/imagepreview */ "./components/imagepreview/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return _components_imagepreview__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/input */ "./components/input/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _components_input__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _components_inputform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inputform */ "./components/inputform/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputForm", function() { return _components_inputform__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _components_label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/label */ "./components/label/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _components_label__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _components_querylist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/querylist */ "./components/querylist/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryList", function() { return _components_querylist__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _components_querylistform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/querylistform */ "./components/querylistform/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryListForm", function() { return _components_querylistform__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _components_radiobuttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/radiobuttons */ "./components/radiobuttons/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtons", function() { return _components_radiobuttons__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _components_radiobuttonsform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/radiobuttonsform */ "./components/radiobuttonsform/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsForm", function() { return _components_radiobuttonsform__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/select */ "./components/select/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _components_select__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _components_selectform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/selectform */ "./components/selectform/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectForm", function() { return _components_selectform__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/switch */ "./components/switch/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _components_switch__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _components_switchform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/switchform */ "./components/switchform/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchForm", function() { return _components_switchform__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/textarea */ "./components/textarea/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _components_textarea__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _components_textareaform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/textareaform */ "./components/textareaform/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaForm", function() { return _components_textareaform__WEBPACK_IMPORTED_MODULE_18__["default"]; });






















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
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n.mmf-button {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  height: 36px;\n  padding: 0 16px; }\n  .mmf-button:not([disabled]) {\n    cursor: pointer;\n    pointer-events: all; }\n  .mmf-button .mmf-icon ~ * {\n    padding-left: 8px; }\n\n.mmf-label {\n  display: block;\n  padding-bottom: 8px; }\n\n.mmf-checkbox {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  margin: 0;\n  padding: 0;\n  background-color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  border: medium none;\n  font-size: inherit; }\n  .mmf-checkbox:not([disabled]) {\n    cursor: pointer;\n    pointer-events: all; }\n  .mmf-checkbox::-ms-expand {\n    display: none; }\n  .mmf-checkbox:checked:after {\n    content: \"check_box\"; }\n  .mmf-checkbox:after {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    user-select: none;\n    font-family: \"Material Icons\";\n    font-weight: normal;\n    font-style: normal;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: \"liga\";\n    -webkit-font-smoothing: antialiased;\n    content: \"check_box_outline_blank\";\n    transform: translateY(10%); }\n    .mmf-checkbox:after:not([disabled]) {\n      cursor: pointer;\n      pointer-events: all; }\n  .mmf-checkbox[disabled]:after {\n    cursor: default; }\n\n.mmf-form--checkbox label {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center; }\n\n.mmf-form--checkbox .order--label-first .mmf-label {\n  padding-right: 8px; }\n\n.mmf-form--checkbox .order--label-last .mmf-label {\n  padding-left: 8px; }\n\nul.mmf-form__errors {\n  list-style: none;\n  padding-left: 0;\n  margin: 0; }\n  ul.mmf-form__errors li {\n    margin-top: 4px; }\n\n.mmf-input {\n  box-sizing: border-box;\n  width: 100%; }\n\n.mmf-form--input label {\n  display: flex;\n  flex-direction: column; }\n\n.mmf-list {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.mmf-list__item {\n  padding: 8px 16px; }\n  .mmf-list__item:hover, .mmf-list__item.is-selected {\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.12); }\n\n.mmf-popover {\n  background: inherit;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  position: absolute;\n  transform: translateZ(0);\n  z-index: 1; }\n  .mmf-popover.is-hidden {\n    display: none; }\n\n.mmf-form--query-list .mmf-popover {\n  background-color: white; }\n\n.mmf-radio-btn-container {\n  height: 36px;\n  display: contents; }\n\n.mmf-radio-btn {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  border: 1px solid #29293a;\n  border-radius: 4px;\n  background: transparent;\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 4px 4px; }\n  .mmf-radio-btn:not([disabled]) {\n    cursor: pointer;\n    pointer-events: all; }\n  .mmf-radio-btn:not([disabled]):hover {\n    background-color: #c0c1c6; }\n  .mmf-radio-btn.selected {\n    background-color: #e0e0e3; }\n  .mmf-radio-btn.is-disabled {\n    border: 1px solid rgba(41, 41, 58, 0.3); }\n\n.mmf-form--radio-buttons .order--label-first .mmf-label {\n  display: flex;\n  flex-direction: column; }\n\n.mmf-form--radio-buttons .mmf-form__error {\n  margin-top: 4px;\n  padding-top: 8px; }\n\n.mmf-select__wrapper {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%; }\n  .mmf-select__wrapper:after {\n    content: \"keyboard_arrow_down\";\n    font-family: \"Material Icons\";\n    font-weight: normal;\n    font-style: normal;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: \"liga\";\n    -webkit-font-smoothing: antialiased;\n    align-items: center;\n    bottom: 0;\n    display: flex;\n    pointer-events: none;\n    position: absolute;\n    right: 4px;\n    top: 0; }\n  .mmf-select__wrapper.is-disabled:after {\n    opacity: 0.3; }\n  .mmf-select__wrapper.with-color select {\n    padding-left: 24px; }\n  .mmf-select__wrapper.with-color .select-icon {\n    display: inline-block;\n    border-radius: 50%;\n    height: 8px;\n    width: 8px;\n    border: 2px solid white;\n    position: absolute;\n    left: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: 12;\n    border: transparent; }\n\n.mmf-select {\n  width: 100%;\n  box-sizing: border-box;\n  -moz-appearance: window;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: black;\n  padding-left: 8px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  padding-right: 28px; }\n  .mmf-select:not([disabled]) {\n    cursor: pointer; }\n\n.mmf-form--select label {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n.mmf-form--select .order--label-first .mmf-label {\n  padding-right: 16px; }\n\n.mmf-form--select .order--label-last .mmf-label {\n  padding-left: 16px; }\n\n.mmf-switch.the-material,\n.mmf-switch.the-solid {\n  outline: none;\n  -webkit-tap-highlight-color: black; }\n\n.mmf-switch {\n  background-color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  border: medium none;\n  font-size: inherit;\n  margin: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 1em;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  width: 2em;\n  height: 1em;\n  position: relative;\n  overflow: hidden; }\n  .mmf-switch::-ms-expand {\n    display: none; }\n  .mmf-switch:after {\n    background-color: white;\n    border-radius: 1em;\n    position: relative;\n    content: \"\";\n    display: block;\n    height: 100%;\n    width: 50%;\n    left: 0;\n    margin: 0;\n    transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), width 0.3s ease, margin 0.3s ease; }\n  .mmf-switch:checked {\n    background-color: #2ecc71; }\n    .mmf-switch:checked:after {\n      left: 100%;\n      transform: translate(-100%, 0); }\n  .mmf-switch:focus:after {\n    z-index: 20;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n  .mmf-switch[disabled] {\n    opacity: 0.3; }\n  .mmf-switch:not([disabled]) {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    user-select: none; }\n    .mmf-switch:not([disabled]):not([disabled]) {\n      cursor: pointer;\n      pointer-events: all; }\n    .mmf-switch:not([disabled]):hover {\n      cursor: pointer; }\n    .mmf-switch:not([disabled]):active:after {\n      width: 60%; }\n\n.mmf-form--switch label {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center; }\n\n.mmf-form--switch .order--label-first .mmf-label {\n  padding-right: 8px; }\n\n.mmf-form--switch .order--label-last .mmf-label {\n  padding-left: 8px; }\n\n.mmf-textarea {\n  width: 100%;\n  box-sizing: border-box;\n  resize: vertical; }\n  .mmf-textarea:focus {\n    outline-style: none;\n    outline-width: 0; }\n\n.mmf-form--textarea label {\n  display: flex;\n  flex-direction: column; }\n\n.mmf-form--textarea textarea {\n  box-sizing: border-box; }\n\n.mmf-form .mmf-meta {\n  margin-top: 4px; }\n\n.mmf-form.is-enabled label:hover {\n  cursor: pointer; }\n\n.mmf-icon {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: \"liga\";\n  -webkit-font-smoothing: antialiased; }\n\n.mmf-button {\n  font-weight: 400;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1em; }\n\n.mmf-form__error--warning {\n  color: #f39c12; }\n\n.mmf-form__error--error {\n  color: #ff4c4c; }\n\n.mmf-input {\n  font-weight: 400;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit; }\n\n.mmf-label {\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  user-select: none;\n  color: black; }\n\n.mmf-select__wrapper:after {\n  font-size: 1.25em;\n  color: black; }\n\n.mmf-select {\n  font-family: inherit;\n  font-size: inherit; }\n  .mmf-select option {\n    font-size: inherit;\n    color: black; }\n\n.mmf-textarea {\n  font-size: inherit;\n  font-family: inherit; }\n\n.mmf-form.hasError .mmf-textarea {\n  border-color: #ff4c4c; }\n\n.the-ux.mmf-form--textarea textarea {\n  font-weight: 400;\n  color: inherit;\n  font-size: inherit;\n  line-height: 1.4em; }\n\n.mmf-form__errors {\n  font-size: 0.8em;\n  color: #ff4c4c; }\n\n.mmf-meta {\n  opacity: 0.54;\n  font-style: italic;\n  font-size: 0.8em; }\n\n.mmf-form.is-disabled .mmf-meta,\n.mmf-form.is-disabled .mmf-form__errors,\n.mmf-form.is-disabled span.mmf-label {\n  opacity: 0.3; }\n\n.the-solid.mmf-button {\n  background: none repeat scroll 0 0 transparent;\n  border: medium none;\n  border-radius: 0;\n  border-spacing: 0;\n  outline: 0;\n  user-select: none;\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  background-color: white;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: #29293a;\n  padding: 0 8px; }\n  .the-solid.mmf-button::-moz-focus-inner, .the-solid.mmf-button::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n  .the-solid.mmf-button:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #000; }\n  .the-solid.mmf-button[disabled] {\n    color: rgba(41, 41, 58, 0.3); }\n  .the-solid.mmf-button.is-enabled:hover, .the-solid.mmf-button.is-enabled:focus {\n    background-color: #f2f2f3;\n    color: #009990; }\n  .the-solid.mmf-button.is-enabled:focus {\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .the-solid.mmf-button.is-enabled.activated {\n    background-color: #d8efec;\n    color: #009990; }\n\n.the-solid.mmf-button--raised {\n  border: 1px solid #d8efec;\n  border-radius: 4px;\n  background-color: #d8efec;\n  color: #009990; }\n  .the-solid.mmf-button--raised[disabled] {\n    background-color: rgba(216, 239, 236, 0.3);\n    border-color: rgba(216, 239, 236, 0.3);\n    color: rgba(0, 153, 144, 0.3); }\n  .the-solid.mmf-button--raised.is-enabled:hover {\n    border: 1px solid #f2f2f3;\n    border-radius: 4px;\n    background-color: #f2f2f3; }\n  .the-solid.mmf-button--raised.is-enabled:focus {\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    opacity: 0.87; }\n\n.the-solid.mmf-form--button .mmf-label {\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  display: block;\n  padding-bottom: 8px;\n  color: #29293a; }\n\n.the-solid.mmf-checkbox {\n  outline: 0;\n  border: 1px solid #c0c1c6;\n  border-radius: 4px;\n  transition: border-color 0.1s linear;\n  width: 24px;\n  height: 24px; }\n  .the-solid.mmf-checkbox::after {\n    content: \"done\";\n    font-size: 1em;\n    transform: translate(10%, 10%); }\n  .the-solid.mmf-checkbox:checked {\n    background-color: #81d1c6;\n    border-color: #009990; }\n    .the-solid.mmf-checkbox:checked::after {\n      color: white; }\n    .the-solid.mmf-checkbox:checked:not([disabled]):hover {\n      background-color: #b2dfd9; }\n  .the-solid.mmf-checkbox:not(:checked):after {\n    opacity: 0; }\n  .the-solid.mmf-checkbox:not([disabled]):focus {\n    border-color: #009990;\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .the-solid.mmf-checkbox:not([disabled]):hover {\n    border-color: #009990; }\n  .the-solid.mmf-checkbox[disabled] {\n    border-color: #f2f2f3; }\n\n.the-solid label {\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em; }\n\n.the-solid .order--label-first .mmf-label {\n  padding-right: 8px; }\n\n.the-solid .order--label-last .mmf-label {\n  padding-left: 8px; }\n\n.the-solid.mmf-input {\n  color: #29293a;\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  padding: 8px;\n  border: 1px solid #e0e0e3;\n  border-radius: 4px;\n  outline: 0;\n  transition: border-color 0.1s linear; }\n  .has-error .the-solid.mmf-input {\n    border-color: #ff4c4c; }\n    .has-error .the-solid.mmf-input:not([disabled]):hover, .has-error .the-solid.mmf-input:not([disabled]):focus {\n      border-color: #d86868; }\n  .the-solid.mmf-input:not([disabled]):focus {\n    border-color: #009990;\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .the-solid.mmf-input:not([disabled]):hover {\n    border-color: #009990; }\n  .the-solid.mmf-input[disabled] {\n    color: rgba(0, 0, 0, 0.3);\n    border-color: #f2f2f3; }\n  .the-solid.mmf-input::placeholder {\n    color: #c0c1c6;\n    font-style: italic; }\n\n.the-solid.mmf-list .is-value {\n  font-style: italic; }\n  .the-solid.mmf-list .is-value:before {\n    content: \"„\"; }\n  .the-solid.mmf-list .is-value:after {\n    content: \"“\"; }\n\n.the-solid.mmf-list .is-selected {\n  color: #009990;\n  background-color: #f2f2f3; }\n\n.the-solid.mmf-popover {\n  border-radius: 4px;\n  background-color: white;\n  z-index: 40;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n\n.the-solid .mmf-radio-btn-container {\n  height: 36px;\n  display: contents; }\n\n.the-solid .mmf-radio-btn {\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background: transparent;\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 4px 4px; }\n  .the-solid .mmf-radio-btn.is-disabled {\n    border: 1px solid transparent; }\n  .the-solid .mmf-radio-btn:focus {\n    outline: none;\n    background-color: #f2f2f3;\n    color: #009990;\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .the-solid .mmf-radio-btn:not([disabled]):hover {\n    border: 1px solid #f2f2f3;\n    border-radius: 4px;\n    background-color: #f2f2f3;\n    color: #009990; }\n  .the-solid .mmf-radio-btn.selected {\n    border: 1px solid #d8efec;\n    background-color: #d8efec;\n    border-radius: 4px;\n    color: #009990; }\n    .the-solid .mmf-radio-btn.selected.is-disabled {\n      background-color: rgba(216, 239, 236, 0.3);\n      color: rgba(0, 153, 144, 0.3);\n      border-color: transparent; }\n  .the-solid .mmf-radio-btn:not([disabled]).selected:hover {\n    opacity: 0.87;\n    border: 1px solid #d8efec;\n    background-color: #d8efec; }\n  .the-solid .mmf-radio-btn:not([disabled]).selected:focus {\n    opacity: 0.87;\n    border: 1px solid #d8efec;\n    background-color: #d8efec; }\n\n.the-solid.mmf-select__wrapper {\n  color: #29293a;\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  padding: 8px;\n  border: 1px solid #e0e0e3;\n  border-radius: 4px;\n  outline: 0;\n  transition: border-color 0.1s linear;\n  border: none;\n  padding: 0;\n  background-color: white; }\n  .has-error .the-solid.mmf-select__wrapper {\n    border-color: #ff4c4c; }\n    .has-error .the-solid.mmf-select__wrapper:not([disabled]):hover, .has-error .the-solid.mmf-select__wrapper:not([disabled]):focus {\n      border-color: #d86868; }\n  .the-solid.mmf-select__wrapper.is-enabled:hover {\n    border-color: #009990; }\n  .the-solid.mmf-select__wrapper.is-enabled.has-focus {\n    border-color: #009990;\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .the-solid.mmf-select__wrapper.is-enabled:hover:after, .the-solid.mmf-select__wrapper.is-enabled.has-focus:after {\n    background-color: #d8efec;\n    color: #009990; }\n  .the-solid.mmf-select__wrapper.is-disabled {\n    color: rgba(0, 0, 0, 0.3);\n    border-color: #f2f2f3; }\n  .the-solid.mmf-select__wrapper:after {\n    content: \"arrow_drop_down\";\n    font-size: 1.8em;\n    color: #29293a;\n    margin: 4px 0; }\n  .the-solid.mmf-select__wrapper .mmf-select {\n    background-color: inherit;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: 0;\n    border: medium none;\n    font-size: inherit;\n    font-size: 0.95em;\n    line-height: 1.4em;\n    letter-spacing: 0.05em;\n    font-size: inherit;\n    outline: none;\n    padding: 8px 40px 8px 8px;\n    color: #29293a;\n    border: 1px solid #e0e0e3;\n    border-radius: 4px; }\n    .the-solid.mmf-select__wrapper .mmf-select::-ms-expand {\n      display: none; }\n    .the-solid.mmf-select__wrapper .mmf-select:-moz-focusring {\n      color: transparent;\n      text-shadow: 0 0 0 #000; }\n    .the-solid.mmf-select__wrapper .mmf-select * {\n      background-color: inherit;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      border-radius: 0;\n      border: medium none;\n      font-size: inherit; }\n      .the-solid.mmf-select__wrapper .mmf-select *::-ms-expand {\n        display: none; }\n  .the-solid.mmf-select__wrapper.with-color .mmf-select {\n    padding: 8px 40px 8px 24px; }\n\n.the-solid.mmf-form--select .order--label-first {\n  flex-direction: column;\n  align-items: flex-start; }\n  .the-solid.mmf-form--select .order--label-first .mmf-label {\n    padding-bottom: 8px; }\n\n.the-solid.mmf-switch {\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  width: 4em;\n  height: 2em;\n  border-radius: .5em;\n  overflow: unset;\n  border: 1px solid #c0c1c6;\n  border-radius: 4px;\n  background-color: #e0e0e3; }\n  .the-solid.mmf-switch::after {\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    height: 2em;\n    width: 50%;\n    top: -6%;\n    left: -5%;\n    border: 1px solid #c0c1c6;\n    border-radius: 4px; }\n  .the-solid.mmf-switch:checked {\n    background-color: #81d1c6;\n    border-color: #009990; }\n    .the-solid.mmf-switch:checked:after {\n      left: 105%;\n      transform: translate(-100%, 0);\n      border-color: #009990; }\n\n.the-solid.mmf-textarea {\n  color: #29293a;\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  padding: 8px;\n  border: 1px solid #e0e0e3;\n  border-radius: 4px;\n  outline: 0;\n  transition: border-color 0.1s linear;\n  padding: 8px; }\n  .has-error .the-solid.mmf-textarea {\n    border-color: #ff4c4c; }\n    .has-error .the-solid.mmf-textarea:not([disabled]):hover, .has-error .the-solid.mmf-textarea:not([disabled]):focus {\n      border-color: #d86868; }\n  .the-solid.mmf-textarea:not([disabled]):focus {\n    border-color: #009990;\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .the-solid.mmf-textarea:not([disabled]):hover {\n    border-color: #009990; }\n  .the-solid.mmf-textarea[disabled] {\n    color: rgba(0, 0, 0, 0.3);\n    border-color: #f2f2f3; }\n  .the-solid.mmf-textarea::placeholder {\n    color: #c0c1c6;\n    font-style: italic; }\n  .the-solid.mmf-textarea[disabled] {\n    color: rgba(0, 0, 0, 0.3); }\n\n.the-solid .mmf-meta {\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  font-size: 0.8em;\n  opacity: 0.54;\n  font-style: normal;\n  color: #71737f;\n  padding-top: 10px; }\n\n.the-solid .mmf-form__error--error {\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em; }\n\n.the-solid.mmf-form--radio-buttons .mmf-label, .the-solid.mmf-form--input .mmf-label, .the-solid.mmf-form--select .mmf-label, .the-solid.mmf-form--textarea .mmf-label {\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  color: #29293a;\n  padding-bottom: 6px;\n  font-size: 0.8em; }\n\n/**\n * Default form styles, controlling label position by classnames. The Markup should look like\n *\n *  <my-form extends with-moving-label>\n *      <label>Moving Title</label>\n *      <input-type>\n *      ...\n * @param {string} input-type   - associated input selector\n */\n/**\n * Default form styles, controlling label position by classnames. The Markup should look like\n *\n *  <my-form extends with-moving-label>\n *      <label>Moving Title</label>\n *      <input-type>\n *      ...\n * @param {string} input-type   - associated input selector\n */\n.the-material.mmf-button {\n  background: none repeat scroll 0 0 transparent;\n  border: medium none;\n  border-radius: 0;\n  border-spacing: 0;\n  outline: 0;\n  user-select: none;\n  border-radius: 4px;\n  color: #00c852;\n  background-color: inherit;\n  transition: background-color 0.1s linear; }\n  .the-material.mmf-button::-moz-focus-inner, .the-material.mmf-button::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n  .the-material.mmf-button:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #000; }\n  .the-material.mmf-button.is-enabled:hover, .the-material.mmf-button.is-enabled:focus {\n    background-color: #eceff1; }\n  .the-material.mmf-button.is-disabled {\n    color: rgba(0, 200, 82, 0.3); }\n    .the-material.mmf-button.is-disabled:focus, .the-material.mmf-button.is-disabled:hover {\n      background-color: inherit;\n      color: rgba(0, 200, 82, 0.3);\n      cursor: default; }\n  .the-material.mmf-button .mmf-icon {\n    font-size: 1.5em; }\n\n.the-material.mmf-button--raised {\n  z-index: 10;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  color: #eceff1;\n  background-color: #00c852; }\n  .the-material.mmf-button--raised.is-enabled:hover, .the-material.mmf-button--raised.is-enabled:focus {\n    background-color: #00953d; }\n  .the-material.mmf-button--raised.is-disabled, .the-material.mmf-button--raised.is-disabled:hover, .the-material.mmf-button--raised.is-disabled:focus {\n    color: rgba(236, 239, 241, 0.3);\n    background-color: rgba(0, 0, 0, 0.3);\n    cursor: default; }\n\n.the-material.mmf-checkbox {\n  color: rgba(0, 0, 0, 0.87);\n  border: none;\n  border-radius: 0;\n  width: 100%;\n  font-size: inherit;\n  box-sizing: border-box;\n  background: transparent;\n  transform: translateZ(0);\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: border-color 0.1s linear;\n  border-bottom: 0;\n  width: 1em;\n  font-size: 1.25em; }\n  .the-material.mmf-checkbox:not([disabled]):focus {\n    border-color: #00c852; }\n  .the-material.mmf-checkbox:not([disabled]):hover {\n    border-color: #00c852; }\n  .the-material.mmf-checkbox[disabled] {\n    color: black;\n    opacity: 0.3; }\n  .the-material.mmf-checkbox:after {\n    color: rgba(0, 0, 0, 0.87);\n    font-size: inherit;\n    transition: color 0.1s linear; }\n  .the-material.mmf-checkbox:not([disabled]):focus:after, .the-material.mmf-checkbox:not([disabled]):hover:after {\n    color: #00c852; }\n\n.the-material.mmf-input {\n  color: rgba(0, 0, 0, 0.87);\n  border: none;\n  border-radius: 0;\n  width: 100%;\n  font-size: inherit;\n  box-sizing: border-box;\n  background: transparent;\n  transform: translateZ(0);\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: border-color 0.1s linear;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n  .the-material.mmf-input:not([disabled]):focus {\n    border-color: #00c852; }\n  .the-material.mmf-input:not([disabled]):hover {\n    border-color: #00c852; }\n  .the-material.mmf-input[disabled] {\n    color: black;\n    opacity: 0.3; }\n  .the-material.mmf-input:not([disabled]):focus {\n    border-bottom: 1px solid rgba(0, 200, 82, 0.54); }\n  .the-material.mmf-input:not([disabled]):hover {\n    border-bottom: 1px solid rgba(0, 200, 82, 0.54); }\n\n.the-material.mmf-form--input input {\n  padding: 1.1em 0 0 0; }\n\n.the-material.mmf-form--input .mmf-label {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transition: all 0.1s ease-in-out;\n  color: black;\n  opacity: 0.54;\n  font-size: 0.8em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.the-material.mmf-form--input.has-focus .mmf-label {\n  color: #00c852;\n  opacity: 0.87; }\n\n.the-material.mmf-form--input.has-error select,\n.the-material.mmf-form--input.has-error input {\n  border-color: #ff4c4c; }\n\n.the-material.mmf-form--input.has-error.has-focus .mmf-label {\n  color: #ff4c4c; }\n\n.the-material.mmf-form--input.has-warning select,\n.the-material.mmf-form--input.has-warning input {\n  border-color: #f39c12; }\n\n.the-material.mmf-form--input.has-warning.has-focus .mmf-label {\n  color: #f39c12; }\n\n.the-material.mmf-form--input.is-empty.no-focus .mmf-label {\n  transform: translateY(1.1em);\n  font-size: 1em; }\n\n.the-material.mmf-form--input .mmf-input {\n  border-color: transparent; }\n\n.the-material.mmf-form--query-list input {\n  padding: 1.1em 0 0 0; }\n\n.the-material.mmf-form--query-list .mmf-label {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transition: all 0.1s ease-in-out;\n  color: black;\n  opacity: 0.54;\n  font-size: 0.8em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.the-material.mmf-form--query-list.has-focus .mmf-label {\n  color: #00c852;\n  opacity: 0.87; }\n\n.the-material.mmf-form--query-list.has-error select,\n.the-material.mmf-form--query-list.has-error input {\n  border-color: #ff4c4c; }\n\n.the-material.mmf-form--query-list.has-error.has-focus .mmf-label {\n  color: #ff4c4c; }\n\n.the-material.mmf-form--query-list.has-warning select,\n.the-material.mmf-form--query-list.has-warning input {\n  border-color: #f39c12; }\n\n.the-material.mmf-form--query-list.has-warning.has-focus .mmf-label {\n  color: #f39c12; }\n\n.the-material.mmf-form--query-list.is-empty.no-focus .mmf-label {\n  transform: translateY(1.1em);\n  font-size: 1em; }\n\n.the-material.mmf-form--query-list .mmf-input {\n  border-color: transparent; }\n\n.the-material.mmf-select__wrapper:after {\n  transition: color 0.1s linear;\n  right: 0; }\n\n.the-material.mmf-select__wrapper.is-enabled:hover:after, .the-material.mmf-select__wrapper.is-enabled.has-focus:after {\n  color: #00c852; }\n\n.the-material.mmf-select__wrapper .mmf-select {\n  background-color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  border: medium none;\n  font-size: inherit;\n  outline: none;\n  padding: 0;\n  padding-right: 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n  .the-material.mmf-select__wrapper .mmf-select::-ms-expand {\n    display: none; }\n  .the-material.mmf-select__wrapper .mmf-select:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #000; }\n  .the-material.mmf-select__wrapper .mmf-select * {\n    background-color: inherit;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: 0;\n    border: medium none;\n    font-size: inherit; }\n    .the-material.mmf-select__wrapper .mmf-select *::-ms-expand {\n      display: none; }\n  .the-material.mmf-select__wrapper .mmf-select:not([disabled]):focus, .the-material.mmf-select__wrapper .mmf-select:not([disabled]):hover {\n    border-bottom: 1px solid rgba(0, 200, 82, 0.54); }\n  .the-material.mmf-select__wrapper .mmf-select.is-enabled {\n    color: rgba(0, 0, 0, 0.87);\n    border: none;\n    border-radius: 0;\n    width: 100%;\n    font-size: inherit;\n    box-sizing: border-box;\n    background: transparent;\n    transform: translateZ(0);\n    outline: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    transition: border-color 0.1s linear; }\n    .the-material.mmf-select__wrapper .mmf-select.is-enabled:not([disabled]):focus {\n      border-color: #00c852; }\n    .the-material.mmf-select__wrapper .mmf-select.is-enabled:not([disabled]):hover {\n      border-color: #00c852; }\n    .the-material.mmf-select__wrapper .mmf-select.is-enabled[disabled] {\n      color: black;\n      opacity: 0.3; }\n\n.the-material.mmf-select__wrapper.with-color .mmf-select {\n  padding-left: 24px; }\n\n.the-material.mmf-form--select .mmf-label {\n  line-height: 29px; }\n\n.the-material.mmf-textarea {\n  color: rgba(0, 0, 0, 0.87);\n  border: none;\n  border-radius: 0;\n  width: 100%;\n  font-size: inherit;\n  box-sizing: border-box;\n  background: transparent;\n  transform: translateZ(0);\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: border-color 0.1s linear;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54);\n  margin: 1.1em 0 0 0; }\n  .the-material.mmf-textarea:not([disabled]):focus {\n    border-color: #00c852; }\n  .the-material.mmf-textarea:not([disabled]):hover {\n    border-color: #00c852; }\n  .the-material.mmf-textarea[disabled] {\n    color: black;\n    opacity: 0.3; }\n  .the-material.mmf-textarea:not([disabled]):focus {\n    border-bottom: 1px solid rgba(0, 200, 82, 0.54); }\n  .the-material.mmf-textarea:not([disabled]):hover {\n    border-bottom: 1px solid rgba(0, 200, 82, 0.54); }\n\n.the-material.mmf-form--textarea textarea {\n  margin: 1.1em 0 0 0; }\n\n.the-material.mmf-form--textarea .mmf-label {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transition: all 0.1s ease-in-out;\n  color: black;\n  opacity: 0.54;\n  font-size: 0.8em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.the-material.mmf-form--textarea.has-focus .mmf-label {\n  color: #00c852;\n  opacity: 0.87; }\n\n.the-material.mmf-form--textarea.has-error select,\n.the-material.mmf-form--textarea.has-error input {\n  border-color: #ff4c4c; }\n\n.the-material.mmf-form--textarea.has-error.has-focus .mmf-label {\n  color: #ff4c4c; }\n\n.the-material.mmf-form--textarea.has-warning select,\n.the-material.mmf-form--textarea.has-warning input {\n  border-color: #f39c12; }\n\n.the-material.mmf-form--textarea.has-warning.has-focus .mmf-label {\n  color: #f39c12; }\n\n.the-material.mmf-form--textarea.is-empty.no-focus .mmf-label {\n  transform: translateY(1.1em);\n  font-size: 1em; }\n\n.the-material.mmf-form--textarea textarea {\n  border: none;\n  border-color: transparent;\n  background: transparent;\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n  .the-material.mmf-form--textarea textarea:focus {\n    border-color: #00c852; }\n\n.the-material.mmf-form {\n  position: relative; }\n  .the-material.mmf-form .mmf-label {\n    opacity: 0.54; }\n\n.undefined {\n  color: red;\n  background-color: red;\n  border-color: red; }\n\nbody {\n  background: #333333;\n  font-family: Roboto;\n  margin: 0;\n  position: relative; }\n\n.page {\n  overflow: hidden; }\n\nh1, p, a {\n  color: #fff; }\n\nh2 {\n  align-items: flex-end;\n  background: #333333;\n  display: flex;\n  height: 96px;\n  justify-content: center;\n  margin: 0; }\n  h2 span {\n    background-color: #f2f2f3;\n    line-height: 1em;\n    margin-bottom: 1px;\n    padding: 12px 24px;\n    text-shadow: 0 1px 0 #fff; }\n\n.columns {\n  background-color: #f2f2f3;\n  display: flex;\n  flex-direction: row;\n  padding: 12px 0; }\n\n.box {\n  background: #f6f5f5;\n  padding: 8px; }\n\n.theme {\n  flex-basis: 0;\n  flex-grow: 1;\n  margin: 4px;\n  background-color: #f6f5f5; }\n  .theme h3 {\n    background-color: #f2f2f3;\n    font-size: 0.8em;\n    margin: 0;\n    color: #f80efd;\n    text-align: center; }\n  .theme h4 {\n    margin: 0;\n    padding: 24px 0 12px 8px;\n    font-weight: normal;\n    color: #996e9a;\n    font-size: 0.8em;\n    border-top: 2px solid #f2f2f3;\n    text-align: center;\n    font-style: italic; }\n", "",{"version":3,"sources":["index.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/button/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/lib/interface.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/lib/units.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/buttonform/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/checkbox/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/lib/reset.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/lib/icon.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/checkboxform/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/errors/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/input/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/inputform/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/list/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/popover/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/querylistform/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/lib/colors.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/radiobuttons/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/radiobuttonsform/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/select/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/selectform/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/switch/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/lib/elevation.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/switchform/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/textarea/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/textareaform/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/styles/layout.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/button/typography.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/lib/typography.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/errors/typography.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/input/typography.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/label/typography.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/select/typography.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/textarea/typography.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/textareaform/typography.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/styles/typography.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/styles/theme-solid.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/lib/fonts.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/button/button-solid.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/buttonform/buttonform-solid.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/checkbox/checkbox-solid.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/checkboxform/checkboxform-solid.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/lib/input.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/list/list-solid.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/popover/popover-solid.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/radiobuttons/radiobuttons-solid.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/select/select-solid.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/selectform/selectform-solid.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/switch/switch-solid.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/textarea/textarea-solid.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/lib/with-solid-theme.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/lib/form.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/styles/theme-material.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/button/button-material.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/checkbox/checkbox-material.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/inputform/inputform-material.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/querylistform/querylistform-material.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/select/select-material.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/selectform/selectform-material.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/textarea/textarea-material.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/components/textareaform/textareaform-material.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/lib/with-material-theme.scss","/Users/vesc/Projects/client-projects/SWMH/Code/CMS/mithril-material-forms/app/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACIhB;ECGI,6CAA6C;EAC7C,iBAAiB;EDDjB,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,YAAyB;EACzB,eET6B,EAAA;EFEjC;ICFQ,eAAe;IACf,mBAAmB,EAAA;EDC3B;IAUQ,iBEdM,EAAA;;ACGd;EACI,cAAc;EACd,mBDLU,EAAA;;AEsBd;EHfI,6CAA6C;EAC7C,iBAAiB;EIoCjB,SAAS;EACT,UAAU;EAdV,yBAAyB;EACzB,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;EAIhB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB,EAAA;EJvClB;IACI,eAAe;IACf,mBAAmB,EAAA;EGmB3B;ICcQ,aAAa,EAAA;ED1BjB;IACI,oBAAoB,EAAA;EAGxB;IHPA,6CAA6C;IAC7C,iBAAiB;IKPjB,6BAA6B;IAC7B,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,sBAAsB;IACtB,oBAAoB;IACpB,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;IACd,qCAAqC;IACrC,mCAAmC;IFK/B,kCAAkC;IAClC,0BAA0B,EAAA;IHjB9B;MACI,eAAe;MACf,mBAAmB,EAAA;EGmB3B;IAKQ,eAAe,EAAA;;AGxBvB;EAGQ,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB,EAAA;;AAL3B;EASQ,kBLZM,EAAA;;AKGd;EAaQ,iBLhBM,EAAA;;AMGd;EACI,gBAAgB;EAChB,eAAe;EACf,SAAS,EAAA;EAHb;IAMQ,eAA2B,EAAA;;ACTnC;EACI,sBAAsB;EACtB,WAAW,EAAA;;ACFf;EAEQ,aAAa;EACb,sBAAsB,EAAA;;ACA9B;EACI,gBAAgB;EAChB,UAAU;EACV,SAAS,EAAA;;AAGb;EACI,iBAAgC,EAAA;EADpC;IAKQ,eAAe;IACf,qCAAqD,EAAA;;ACf7D;EACI,mBAAmB;EACnB,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,wBAAwB;EACxB,UAAU,EAAA;EANd;IASQ,aAAa,EAAA;;ACPrB;EAEQ,uBC2Be,EAAA;;ACzBvB;EACI,YAAyB;EACzB,iBAAiB,EAAA;;AAGrB;EdJI,6CAA6C;EAC7C,iBAAiB;EcKjB,yBDYkB;ECXlB,kBbXY;EaYZ,uBAAuB;EACvB,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,eAAiC,EAAA;EdlBjC;IACI,eAAe;IACf,mBAAmB,EAAA;EcQ3B;IAWQ,yBDMiB,EAAA;ECjBzB;IAeQ,yBDGiB,EAAA;EClBzB;IAmBQ,uCDLc,EAAA;;AEvBtB;EAGY,aAAa;EACb,sBAAsB,EAAA;;AAJlC;EASQ,eAAuB;EACvB,gBdZM,EAAA;;AeKd;EACI,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,WAAW,EAAA;EAJf;IAOQ,8BAA8B;IXXlC,6BAA6B;IAC7B,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,sBAAsB;IACtB,oBAAoB;IACpB,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;IACd,qCAAqC;IACrC,mCAAmC;IWE/B,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,UAAU;IACV,MAAM,EAAA;EAfd;IAmBQ,YHqCG,EAAA;EGxDX;IAwBY,kBAA2B,EAAA;EAxBvC;IA4BY,qBAAqB;IACrB,kBAAkB;IAClB,WfnCE;IeoCF,UfpCE;IeqCF,uBHNW;IGOX,kBAAkB;IAClB,SfvCE;IewCF,QAAQ;IACR,2BAA2B;IAC3B,WAAW;IACX,mBAAkB,EAAA;;AAK9B;EACI,WAAW;EACX,sBAAsB;EAGtB,uBAAuB;EACvB,wBAAwB;EAGxB,kCHzBe;EG4Bf,iBf5DU;Ee6DV,gBAA0B;EAC1B,mBAA6B;EAC7B,mBAAuC,EAAA;EAf3C;IAkBQ,eAAe,EAAA;;AC/DvB;EAEQ,aAAa;EACb,mBAAmB;EACnB,mBAAmB,EAAA;;AAJ3B;EAQQ,mBhBTyB,EAAA;;AgBCjC;EAYQ,kBhBbyB,EAAA;;AiBMjC;;EAEI,aAAa;EACb,kCLqBe,EAAA;;AKjBnB;EdgBI,yBAAyB;EACzB,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;EAIhB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EcrBlB,SAAS;EAET,oCLWe;EKVf,kBAA8B;EAC9B,oCLSe;EKRf,UANkB;EAOlB,WAAuB;EACvB,kBAAkB;EAClB,gBAAgB,EAAA;EdQhB;IACI,aAAa,EAAA;EcrBrB;IAeQ,uBLCe;IKAf,kBAA8B;IAC9B,kBAAkB;IAClB,WAAW;IACX,cAAc;IACd,YAAY;IACZ,UAAU;IACV,OAAO;IACP,SAAS;IACT,wJAGmC,EAAA;EA3B3C;IA+BQ,yBLbgB,EAAA;IKlBxB;MAiCY,UAAU;MACV,8BAA8B,EAAA;EAlC1C;ICdI,WAAW;IAIP,wEAL6B,EAAA;EDerC;IA2CQ,YLGG,EAAA;EK9CX;IlBRI,6CAA6C;IAC7C,iBAAiB,EAAA;IAPjB;MACI,eAAe;MACf,mBAAmB,EAAA;IkBY3B;MAiDY,eAAe,EAAA;IAjD3B;MAoDY,UAAU,EAAA;;AEhEtB;EAGQ,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB,EAAA;;AAL3B;EASQ,kBnBZM,EAAA;;AmBGd;EAaQ,iBnBhBM,EAAA;;AoBAd;EACI,WAAW;EACX,sBAAsB;EACtB,gBAAgB,EAAA;EAHpB;IAMQ,mBAAmB;IACnB,gBAAgB,EAAA;;ACPxB;EAEQ,aAAa;EACb,sBAAsB,EAAA;;AAH9B;EAOQ,sBAAsB,EAAA;;ACiB9B;EACI,eAA2B,EAAA;;AAG/B;EACI,eAAe,EAAA;;AAGnB;ElB/BI,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,sBAAsB;EACtB,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,qCAAqC;EACrC,mCAAmC,EAAA;;AmBTvC;ECQI,gBAAgB;EDNhB,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB,EAAA;;AEJpB;EACI,cbgBoB,EAAA;;AabxB;EACI,cbUmB,EAAA;;AcfvB;EFQI,gBAAgB;EENhB,cAAc;EACd,kBAAkB;EAClB,oBAAoB,EAAA;;ACPxB;EACI,cAAc;EACd,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,Yf2Be,EAAA;;AgB5BnB;EAEQ,iBAAiB;EACjB,YhByBW,EAAA;;AgBrBnB;EACI,oBAAoB;EACpB,kBAAkB,EAAA;EAFtB;IAKQ,kBAAkB;IAClB,YhBeW,EAAA;;AiB7BnB;EACI,kBAAkB;EAClB,oBAAoB,EAAA;;AAGxB;EACI,qBjBSmB,EAAA;;AkBfvB;ENQI,gBAAgB;EMJZ,cAAc;EACd,kBAAkB;EAClB,kBAAkB,EAAA;;ACE1B;EACI,gBPZuB;EOavB,cnBKmB,EAAA;;AmBFvB;EACI,anB2CO;EmB1CP,kBAAkB;EAClB,gBPnBuB,EAAA;;AOsB3B;;;EAIQ,YnBmCG,EAAA;;AoB1DX;E7BFI,8CAA8C;EAC9C,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,UAAU;EACV,iBAAiB;E8BHjB,iBjCeoB;EiCdpB,kBjCUmB;EiCTnB,sBjCUuB;EkCJnB,uBtByCe;EsBxCf,6BAA+D;EAC/D,kBlCVQ;EkCWR,ctBwCc;EsBvCd,clCfM,EAAA;EGOV;IAEI,SAAS;IACT,UAAU,EAAA;EAEd;IACI,kBAAkB;IAClB,uBAAuB,EAAA;E6BX/B;IEeY,4BtBoCU,EAAA;EoBnDtB;IEsBgB,yBtB8BS;IsB7BT,ctBoBO,EAAA;EoB3CvB;IdFI,WAAW;IAEP,wEAH6B,EAAA;EcGrC;IEgCgB,yBtBgBS;IsBfT,ctBUO,EAAA;;AoB3CvB;EEuCQ,yBtBSiB;EsBRjB,kBlCxCQ;EkCyCR,yBtBOiB;EsBNjB,ctBCe,EAAA;EoB3CvB;IE6CY,0CtBGa;IsBFb,sCtBEa;IsBDb,6BtBJW,EAAA;EoB3CvB;IEoDgB,yBtBzBS;IsB0BT,kBlCrDA;IkCsDA,yBtB3BS,EAAA;EoB3BzB;IdFI,WAAW;IAEP,wEAH6B;IgB8DrB,atBHL,EAAA;;AoBxDX;ECAI,iBjCeoB;EiCdpB,kBjCUmB;EiCTnB,sBjCUuB;EmCPf,cAAc;EACd,mBnCTE;EmCUF,cvBeU,EAAA;;AoBtBtB;EIGQ,UAAU;EACV,yBxBqBiB;EwBpBjB,kBpCLQ;EoCMR,oCpCEqC;EoCDrC,WAAoB;EACpB,YAAqB,EAAA;EJR7B;IIWU,eAAe;IACf,cpCIQ;IoCHR,8BAA8B,EAAA;EJbxC;IIiBY,yBxB4Ba;IwB3Bb,qBxByBW,EAAA;IoB3CvB;MIoBgB,YAAY,EAAA;IJpB5B;MIwBgB,yBxBsBS,EAAA;EoB9CzB;II8BY,UAAU,EAAA;EJ9BtB;IIkCY,qBxBSW;IM7CnB,WAAW;IAEP,wEAH6B,EAAA;EcGrC;IIuCY,qBxBIW,EAAA;EoB3CvB;II4CY,qBxBjBa,EAAA;;AoB3BzB;ECAI,iBjCeoB;EiCdpB,kBjCUmB;EiCTnB,sBjCUuB,EAAA;;AgCZ3B;EKUY,kBrCbE,EAAA;;AgCGd;EKcY,iBrCjBE,EAAA;;AgCGd;EM4CI,c1BtBkB;E0BuBlB,iBtC9BoB;EsC+BpB,kBtCnCmB;EsCoCnB,sBtCnCuB;EsCoCvB,YtCnDU;EsCoDV,yB1BvBqB;E0BwBrB,kBtClDY;EsCmDZ,UAAU;EACV,oCtC5CyC,EAAA;EsC8CzC;IACI,qB1BxCe,EAAA;I0BuCnB;MAIQ,qB1B1Ca,EAAA;EoBhBzB;IMgEY,qB1BrBW;IM7CnB,WAAW;IAEP,wEAH6B,EAAA;EcGrC;IMqEY,qB1B1BW,EAAA;EoB3CvB;IMyEY,yB1B5CO;I0B6CP,qB1B/Ca,EAAA;EoB3BzB;IM8EY,c1BrDa;I0BsDb,kBAAkB,EAAA;;AN/E9B;EOKY,kBAAkB,EAAA;EPL9B;IOMuB,YAAS,EAAI;EPNpC;IOOsB,YAAS,EAAI;;APPnC;EOUY,c3BiCW;E2BhCX,yB3BgBa,EAAA;;AoB3BzB;EQIQ,kBxCJQ;EwCKR,uB5B4Ce;EMnDnB,WAAW;EAMP,0EAP6B,EAAA;;AcGrC;ESIQ,YAAyB;EACzB,iBAAiB,EAAA;;ATLzB;ECAI,iBjCeoB;EiCdpB,kBjCUmB;EiCTnB,sBjCUuB;EyCFnB,6BAA+D;EAC/D,kBzCXQ;EyCYR,uBAAuB;EACvB,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,eAAiC,EAAA;EThBzC;ISmBY,6BAA+D,EAAA;ETnB3E;ISuBY,aAAa;IACb,yB7BGa;I6BFb,c7BkBW;IM7CnB,WAAW;IAEP,wEAH6B,EAAA;EcGrC;IS8BY,yB7BHa;I6BIb,kBzC/BI;IyCgCJ,yB7BLa;I6BMb,c7BUW,EAAA;EoB3CvB;ISqCY,yB7BWa;I6BVb,yB7BUa;I6BTb,kBzCvCI;IyCwCJ,c7BGW,EAAA;IoB3CvB;MS2CgB,0C7BKS;M6BJT,6B7BDO;M6BEP,yBAAyB,EAAA;ET7CzC;ISkDY,a7BMD;I6BLC,yB7BHa;I6BIb,yB7BJa,EAAA;EoBhDzB;ISwDY,a7BAD;I6BCC,yB7BTa;I6BUb,yB7BVa,EAAA;;AoBhDzB;EM4CI,c1BtBkB;E0BuBlB,iBtC9BoB;EsC+BpB,kBtCnCmB;EsCoCnB,sBtCnCuB;EsCoCvB,YtCnDU;EsCoDV,yB1BvBqB;E0BwBrB,kBtClDY;EsCmDZ,UAAU;EACV,oCtC5CyC;E0CFrC,YAAY;EACZ,UAAU;EACV,uB9ByCe,EAAA;E0BKnB;IACI,qB1BxCe,EAAA;I0BuCnB;MAIQ,qB1B1Ca,EAAA;EoBhBzB;IUYgB,qB9B+BO,EAAA;EoB3CvB;IUgBgB,qB9B2BO;IM7CnB,WAAW;IAEP,wEAH6B,EAAA;EcGrC;IUuBoB,yB9ByBK;I8BxBL,c9BmBG,EAAA;EoB3CvB;IU8BY,yB9BoBO;I8BnBP,qB9BJa,EAAA;EoB3BzB;IUmCY,0BAA0B;IAC1B,gBAAgB;IAChB,c9BfU;I8BgBV,aAAqB,EAAA;EVtCjC;I7B4BI,yBAAyB;IACzB,wBAAwB;IACxB,qBAAqB;IACrB,gBAAgB;IAIhB,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;I8BrClB,iBjCeoB;IiCdpB,kBjCUmB;IiCTnB,sBjCUuB;I0CgCf,kBAAkB;IAClB,aAAa;IACb,yB1CjDE;I0CkDF,c9BzBU;I8B0BV,yB9BtBa;I8BuBb,kB1CjDI,EAAA;IGgCZ;MACI,aAAa,EAAA;IAhBjB;MACI,kBAAkB;MAClB,uBAAuB,EAAA;IAG3B;MAMA,yBAAyB;MACzB,wBAAwB;MACxB,qBAAqB;MACrB,gBAAgB;MAIhB,gBAAgB;MAChB,mBAAmB;MACnB,kBAAkB,EAAA;MALlB;QACI,aAAa,EAAA;E6BjCrB;IUsDgB,0BAAoD,EAAA;;AVtDpE;EWEQ,sBAAsB;EACtB,uBAAuB,EAAA;EXH/B;IWMY,mB3CTE,EAAA;;AgCGd;EYEQ,aAAa;EACb,6CAA6C;EAE7C,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,eAAe;EACf,yBhCgBiB;EgCfjB,kB5CVQ;E4CWR,yBhCeiB,EAAA;EoB1BzB;IdFI,WAAW;IAEP,wEAH6B;I0BkBzB,WAAW;IACX,UAAU;IACV,QAAQ;IACR,SAAS;IACT,yBhCMa;IgCLb,kB5CpBI,EAAA;EgCAhB;IYwBY,yBhCqBa;IgCpBb,qBhCkBW,EAAA;IoB3CvB;MY2BgB,UAAU;MACV,8BAA8B;MAC9B,qBhCcO,EAAA;;AoB3CvB;EM4CI,c1BtBkB;E0BuBlB,iBtC9BoB;EsC+BpB,kBtCnCmB;EsCoCnB,sBtCnCuB;EsCoCvB,YtCnDU;EsCoDV,yB1BvBqB;E0BwBrB,kBtClDY;EsCmDZ,UAAU;EACV,oCtC5CyC;E6CJrC,Y7CPM,EAAA;EsCyDV;IACI,qB1BxCe,EAAA;I0BuCnB;MAIQ,qB1B1Ca,EAAA;EoBhBzB;IMgEY,qB1BrBW;IM7CnB,WAAW;IAEP,wEAH6B,EAAA;EcGrC;IMqEY,qB1B1BW,EAAA;EoB3CvB;IMyEY,yB1B5CO;I0B6CP,qB1B/Ca,EAAA;EoB3BzB;IM8EY,c1BrDa;I0BsDb,kBAAkB,EAAA;EN/E9B;IaOY,yBjC2CO,EAAA;;AoBlDnB;ECAI,iBjCeoB;EiCdpB,kBjCUmB;EiCTnB,sBjCUuB;E8CkBnB,gB9ChBc;E8CiBd,alC0BG;EkCzBH,kBAAkB;EAClB,clCTiB;EkCUjB,iBAAiB,EAAA;;AdlCzB;ECAI,iBjCeoB;EiCdpB,kBjCUmB;EiCTnB,sBjCUuB,EAAA;;AgCZ3B;ECAI,iBjCeoB;EiCdpB,kBjCUmB;EiCTnB,sBjCUuB;E8CoCf,clC1BU;EkC2BV,mBAAmB;EACnB,gB9CpCU,EAAA;;A+CDtB;;;;;;;;ElDssBE;AkDtsBF;;;;;;;;ElD+sBE;AmD5tBF;E7CFI,8CAA8C;EAC9C,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,UAAU;EACV,iBAAiB;E8CMb,kBjDTQ;EiDUR,crCyBc;EqCxBd,yBAAyB;EACzB,wCjDJqC,EAAA;EGJzC;IAEI,SAAS;IACT,UAAU,EAAA;EAEd;IACI,kBAAkB;IAClB,uBAAuB,EAAA;E6CX/B;ICiBgB,yBrCoBS,EAAA;EoCrCzB;ICsBY,4BrCaU,EAAA;IoCnCtB;MCyBgB,yBAAyB;MACzB,4BrCSM;MqCRN,eAAe,EAAA;ED3B/B;ICgCY,gBAAgB,EAAA;;ADhC5B;E9BFI,WAAW;EAEP,wEAH6B;E+ByC7B,crCDiB;EqCEjB,yBrCJc,EAAA;EoCnCtB;IC4CgB,yBAA4E,EAAA;ED5C5F;ICmDY,+BrCda;IqCeb,oCrCdO;IqCeP,eAAe,EAAA;;ADrD3B;EVcI,0B1Bee;E0Bdf,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;EACvB,wBAAwB;EAExB,aAAa;EACb,6CAA6C;EAE7C,oCtClByC;EkDArC,gBAAgB;EAChB,UAAU;EACV,iB1BVwB,EAAA;Ec4B5B;IACI,qB1BMc,EAAA;E0BHlB;IACI,qB1BEc,EAAA;E0BClB;IACI,Y1BRW;I0BSX,Y1BoBG,EAAA;EoC1DX;IEaY,0BtCyBO;IsCxBP,kBAAkB;IAClB,6BlDPiC,EAAA;EgDR7C;IEqBgB,ctCcM,EAAA;;AoCnCtB;EVcI,0B1Bee;E0Bdf,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;EACvB,wBAAwB;EAExB,aAAa;EACb,6CAA6C;EAE7C,oCtClByC;EsCJzC,4C1ByBe,EAAA;E0BDf;IACI,qB1BMc,EAAA;E0BHlB;IACI,qB1BEc,EAAA;E0BClB;IACI,Y1BRW;I0BSX,Y1BoBG,EAAA;E0BrDP;IACI,+C1B6Bc,EAAA;E0B3BlB;IACI,+C1B0Bc,EAAA;;AoCnCtB;ED+BY,oBAAgC,EAAA;;AC/B5C;EDqCQ,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,qBAAqB;EACrB,gCAAiD;EAEjD,YnCdW;EmCeX,anCaG;EmCZH,gBvBhDmB;EuBkDnB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB,EAAA;;ACjDxB;EDsDY,cnCnBU;EmCoBV,anCCD,EAAA;;AoCxDX;;ED8DY,qBnC/CW,EAAA;;AoCfvB;EDkEgB,cnCnDO,EAAA;;AoCfvB;;ED0EY,qBnCzDY,EAAA;;AoCjBxB;ED8EgB,cnC7DQ,EAAA;;AoCjBxB;EDqFY,4BAAwC;EACxC,cAAc,EAAA;;ACtF1B;EGIY,yBAAyB,EAAA;;AHJrC;ED+BY,oBAAgC,EAAA;;AC/B5C;EDqCQ,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,qBAAqB;EACrB,gCAAiD;EAEjD,YnCdW;EmCeX,anCaG;EmCZH,gBvBhDmB;EuBkDnB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB,EAAA;;ACjDxB;EDsDY,cnCnBU;EmCoBV,anCCD,EAAA;;AoCxDX;;ED8DY,qBnC/CW,EAAA;;AoCfvB;EDkEgB,cnCnDO,EAAA;;AoCfvB;;ED0EY,qBnCzDY,EAAA;;AoCjBxB;ED8EgB,cnC7DQ,EAAA;;AoCjBxB;EDqFY,4BAAwC;EACxC,cAAc,EAAA;;ACtF1B;EIIY,yBAAyB,EAAA;;AJJrC;EKOY,6BrDCiC;EqDAjC,QAAQ,EAAA;;ALRpB;EKcgB,czCqBM,EAAA;;AoCnCtB;E7C4BI,yBAAyB;EACzB,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;EAIhB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EkDjBV,aAAa;EACb,UAAU;EACV,mBAAiC;EACjC,4CzCeO,EAAA;ETNf;IACI,aAAa,EAAA;EAhBjB;IACI,kBAAkB;IAClB,uBAAuB,EAAA;EAG3B;IAMA,yBAAyB;IACzB,wBAAwB;IACxB,qBAAqB;IACrB,gBAAgB;IAIhB,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB,EAAA;IALlB;MACI,aAAa,EAAA;E6CjCrB;IK2BgB,+CzCQM,EAAA;EoCnCtB;IVcI,0B1Bee;I0Bdf,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;IACvB,wBAAwB;IAExB,aAAa;IACb,6CAA6C;IAE7C,oCtClByC,EAAA;IsCoBzC;MACI,qB1BMc,EAAA;I0BHlB;MACI,qB1BEc,EAAA;I0BClB;MACI,Y1BRW;M0BSX,Y1BoBG,EAAA;;AoC1DX;EKqCgB,kBAA6B,EAAA;;ALrC7C;EMGQ,iBAAiB,EAAA;;ANHzB;EVcI,0B1Bee;E0Bdf,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;EACvB,wBAAwB;EAExB,aAAa;EACb,6CAA6C;EAE7C,oCtClByC;EsCJzC,4C1ByBe;E2CxBX,mBAA+B,EAAA;EjBuBnC;IACI,qB1BMc,EAAA;E0BHlB;IACI,qB1BEc,EAAA;E0BClB;IACI,Y1BRW;I0BSX,Y1BoBG,EAAA;E0BrDP;IACI,+C1B6Bc,EAAA;E0B3BlB;IACI,+C1B0Bc,EAAA;;AoCnCtB;ED2BY,mBAA+B,EAAA;;AC3B3C;EDqCQ,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,qBAAqB;EACrB,gCAAiD;EAEjD,YnCdW;EmCeX,anCaG;EmCZH,gBvBhDmB;EuBkDnB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB,EAAA;;ACjDxB;EDsDY,cnCnBU;EmCoBV,anCCD,EAAA;;AoCxDX;;ED8DY,qBnC/CW,EAAA;;AoCfvB;EDkEgB,cnCnDO,EAAA;;AoCfvB;;ED0EY,qBnCzDY,EAAA;;AoCjBxB;ED8EgB,cnC7DQ,EAAA;;AoCjBxB;EDqFY,4BAAwC;EACxC,cAAc,EAAA;;ACtF1B;EQQY,YAAY;EACZ,yBAAyB;EACzB,uBAAuB;EAEvB,aAAa;EACb,6CAA6C,EAAA;ERbzD;IQgBgB,qB5CmBM,EAAA;;AoCnCtB;ESsBQ,kBAAkB,EAAA;ETtB1B;ISwBY,a7CiCD,EAAA;;A8CrDX;EACI,U9CSiB;E8CRjB,qB9CQiB;E8CPjB,iB9COiB,EAAA;;A8CJrB;EACI,mB9CLkB;E8CMlB,mBAAmB;EACnB,SAAS;EACT,kBAAkB,EAAA;;AAGtB;EAEI,gBAAgB,EAAA;;AAGpB;EACI,WAAW,EAAA;;AAGf;EACI,qBAAqB;EACrB,mB9CtBkB;E8CuBlB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,SAAS,EAAA;EANb;IASQ,yB9C3Be;I8C4Bf,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB,EAAA;;AAIjC;EACI,yB9CpCmB;E8CqCnB,aAAa;EACb,mBAAmB;EACnB,eAAe,EAAA;;AAGnB;EACI,mB9C1CqB;E8C2CrB,YAAY,EAAA;;AAIhB;EACI,aAAa;EACb,YAAY;EACZ,WAAW;EACX,yB9CnDqB,EAAA;E8C+CzB;IAQQ,yB9CxDe;I8CyDf,gB1DnDc;I0DoDd,SAAS;IACT,c9C/Dc;I8CgEd,kBAAkB,EAAA;EAZ1B;IAgBQ,SAAS;IACT,wBAAwB;IACxB,mBAAmB;IACnB,c9CtEe;I8CuEf,gB1D9Dc;I0D+Dd,6B9CrEe;I8CsEf,kBAAkB;IAClB,kBAAkB,EAAA","file":"index.scss","sourcesContent":["@charset \"UTF-8\";\n.mmf-button {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  height: 36px;\n  padding: 0 16px; }\n  .mmf-button:not([disabled]) {\n    cursor: pointer;\n    pointer-events: all; }\n  .mmf-button .mmf-icon ~ * {\n    padding-left: 8px; }\n\n.mmf-label {\n  display: block;\n  padding-bottom: 8px; }\n\n.mmf-checkbox {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  margin: 0;\n  padding: 0;\n  background-color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  border: medium none;\n  font-size: inherit; }\n  .mmf-checkbox:not([disabled]) {\n    cursor: pointer;\n    pointer-events: all; }\n  .mmf-checkbox::-ms-expand {\n    display: none; }\n  .mmf-checkbox:checked:after {\n    content: \"check_box\"; }\n  .mmf-checkbox:after {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    user-select: none;\n    font-family: \"Material Icons\";\n    font-weight: normal;\n    font-style: normal;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: \"liga\";\n    -webkit-font-smoothing: antialiased;\n    content: \"check_box_outline_blank\";\n    transform: translateY(10%); }\n    .mmf-checkbox:after:not([disabled]) {\n      cursor: pointer;\n      pointer-events: all; }\n  .mmf-checkbox[disabled]:after {\n    cursor: default; }\n\n.mmf-form--checkbox label {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center; }\n\n.mmf-form--checkbox .order--label-first .mmf-label {\n  padding-right: 8px; }\n\n.mmf-form--checkbox .order--label-last .mmf-label {\n  padding-left: 8px; }\n\nul.mmf-form__errors {\n  list-style: none;\n  padding-left: 0;\n  margin: 0; }\n  ul.mmf-form__errors li {\n    margin-top: 4px; }\n\n.mmf-input {\n  box-sizing: border-box;\n  width: 100%; }\n\n.mmf-form--input label {\n  display: flex;\n  flex-direction: column; }\n\n.mmf-list {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.mmf-list__item {\n  padding: 8px 16px; }\n  .mmf-list__item:hover, .mmf-list__item.is-selected {\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.12); }\n\n.mmf-popover {\n  background: inherit;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  position: absolute;\n  transform: translateZ(0);\n  z-index: 1; }\n  .mmf-popover.is-hidden {\n    display: none; }\n\n.mmf-form--query-list .mmf-popover {\n  background-color: white; }\n\n.mmf-radio-btn-container {\n  height: 36px;\n  display: contents; }\n\n.mmf-radio-btn {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  border: 1px solid #29293a;\n  border-radius: 4px;\n  background: transparent;\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 4px 4px; }\n  .mmf-radio-btn:not([disabled]) {\n    cursor: pointer;\n    pointer-events: all; }\n  .mmf-radio-btn:not([disabled]):hover {\n    background-color: #c0c1c6; }\n  .mmf-radio-btn.selected {\n    background-color: #e0e0e3; }\n  .mmf-radio-btn.is-disabled {\n    border: 1px solid rgba(41, 41, 58, 0.3); }\n\n.mmf-form--radio-buttons .order--label-first .mmf-label {\n  display: flex;\n  flex-direction: column; }\n\n.mmf-form--radio-buttons .mmf-form__error {\n  margin-top: 4px;\n  padding-top: 8px; }\n\n.mmf-select__wrapper {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%; }\n  .mmf-select__wrapper:after {\n    content: \"keyboard_arrow_down\";\n    font-family: \"Material Icons\";\n    font-weight: normal;\n    font-style: normal;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: \"liga\";\n    -webkit-font-smoothing: antialiased;\n    align-items: center;\n    bottom: 0;\n    display: flex;\n    pointer-events: none;\n    position: absolute;\n    right: 4px;\n    top: 0; }\n  .mmf-select__wrapper.is-disabled:after {\n    opacity: 0.3; }\n  .mmf-select__wrapper.with-color select {\n    padding-left: 24px; }\n  .mmf-select__wrapper.with-color .select-icon {\n    display: inline-block;\n    border-radius: 50%;\n    height: 8px;\n    width: 8px;\n    border: 2px solid white;\n    position: absolute;\n    left: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: 12;\n    border: transparent; }\n\n.mmf-select {\n  width: 100%;\n  box-sizing: border-box;\n  -moz-appearance: window;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: black;\n  padding-left: 8px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  padding-right: 28px; }\n  .mmf-select:not([disabled]) {\n    cursor: pointer; }\n\n.mmf-form--select label {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n.mmf-form--select .order--label-first .mmf-label {\n  padding-right: 16px; }\n\n.mmf-form--select .order--label-last .mmf-label {\n  padding-left: 16px; }\n\n.mmf-switch.the-material,\n.mmf-switch.the-solid {\n  outline: none;\n  -webkit-tap-highlight-color: black; }\n\n.mmf-switch {\n  background-color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  border: medium none;\n  font-size: inherit;\n  margin: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 1em;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  width: 2em;\n  height: 1em;\n  position: relative;\n  overflow: hidden; }\n  .mmf-switch::-ms-expand {\n    display: none; }\n  .mmf-switch:after {\n    background-color: white;\n    border-radius: 1em;\n    position: relative;\n    content: \"\";\n    display: block;\n    height: 100%;\n    width: 50%;\n    left: 0;\n    margin: 0;\n    transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), width 0.3s ease, margin 0.3s ease; }\n  .mmf-switch:checked {\n    background-color: #2ecc71; }\n    .mmf-switch:checked:after {\n      left: 100%;\n      transform: translate(-100%, 0); }\n  .mmf-switch:focus:after {\n    z-index: 20;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n  .mmf-switch[disabled] {\n    opacity: 0.3; }\n  .mmf-switch:not([disabled]) {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    user-select: none; }\n    .mmf-switch:not([disabled]):not([disabled]) {\n      cursor: pointer;\n      pointer-events: all; }\n    .mmf-switch:not([disabled]):hover {\n      cursor: pointer; }\n    .mmf-switch:not([disabled]):active:after {\n      width: 60%; }\n\n.mmf-form--switch label {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center; }\n\n.mmf-form--switch .order--label-first .mmf-label {\n  padding-right: 8px; }\n\n.mmf-form--switch .order--label-last .mmf-label {\n  padding-left: 8px; }\n\n.mmf-textarea {\n  width: 100%;\n  box-sizing: border-box;\n  resize: vertical; }\n  .mmf-textarea:focus {\n    outline-style: none;\n    outline-width: 0; }\n\n.mmf-form--textarea label {\n  display: flex;\n  flex-direction: column; }\n\n.mmf-form--textarea textarea {\n  box-sizing: border-box; }\n\n.mmf-form .mmf-meta {\n  margin-top: 4px; }\n\n.mmf-form.is-enabled label:hover {\n  cursor: pointer; }\n\n.mmf-icon {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: \"liga\";\n  -webkit-font-smoothing: antialiased; }\n\n.mmf-button {\n  font-weight: 400;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: 1em; }\n\n.mmf-form__error--warning {\n  color: #f39c12; }\n\n.mmf-form__error--error {\n  color: #ff4c4c; }\n\n.mmf-input {\n  font-weight: 400;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit; }\n\n.mmf-label {\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  user-select: none;\n  color: black; }\n\n.mmf-select__wrapper:after {\n  font-size: 1.25em;\n  color: black; }\n\n.mmf-select {\n  font-family: inherit;\n  font-size: inherit; }\n  .mmf-select option {\n    font-size: inherit;\n    color: black; }\n\n.mmf-textarea {\n  font-size: inherit;\n  font-family: inherit; }\n\n.mmf-form.hasError .mmf-textarea {\n  border-color: #ff4c4c; }\n\n.the-ux.mmf-form--textarea textarea {\n  font-weight: 400;\n  color: inherit;\n  font-size: inherit;\n  line-height: 1.4em; }\n\n.mmf-form__errors {\n  font-size: 0.8em;\n  color: #ff4c4c; }\n\n.mmf-meta {\n  opacity: 0.54;\n  font-style: italic;\n  font-size: 0.8em; }\n\n.mmf-form.is-disabled .mmf-meta,\n.mmf-form.is-disabled .mmf-form__errors,\n.mmf-form.is-disabled span.mmf-label {\n  opacity: 0.3; }\n\n.the-solid.mmf-button {\n  background: none repeat scroll 0 0 transparent;\n  border: medium none;\n  border-radius: 0;\n  border-spacing: 0;\n  outline: 0;\n  user-select: none;\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  background-color: white;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: #29293a;\n  padding: 0 8px; }\n  .the-solid.mmf-button::-moz-focus-inner, .the-solid.mmf-button::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n  .the-solid.mmf-button:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #000; }\n  .the-solid.mmf-button[disabled] {\n    color: rgba(41, 41, 58, 0.3); }\n  .the-solid.mmf-button.is-enabled:hover, .the-solid.mmf-button.is-enabled:focus {\n    background-color: #f2f2f3;\n    color: #009990; }\n  .the-solid.mmf-button.is-enabled:focus {\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .the-solid.mmf-button.is-enabled.activated {\n    background-color: #d8efec;\n    color: #009990; }\n\n.the-solid.mmf-button--raised {\n  border: 1px solid #d8efec;\n  border-radius: 4px;\n  background-color: #d8efec;\n  color: #009990; }\n  .the-solid.mmf-button--raised[disabled] {\n    background-color: rgba(216, 239, 236, 0.3);\n    border-color: rgba(216, 239, 236, 0.3);\n    color: rgba(0, 153, 144, 0.3); }\n  .the-solid.mmf-button--raised.is-enabled:hover {\n    border: 1px solid #f2f2f3;\n    border-radius: 4px;\n    background-color: #f2f2f3; }\n  .the-solid.mmf-button--raised.is-enabled:focus {\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    opacity: 0.87; }\n\n.the-solid.mmf-form--button .mmf-label {\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  display: block;\n  padding-bottom: 8px;\n  color: #29293a; }\n\n.the-solid.mmf-checkbox {\n  outline: 0;\n  border: 1px solid #c0c1c6;\n  border-radius: 4px;\n  transition: border-color 0.1s linear;\n  width: 24px;\n  height: 24px; }\n  .the-solid.mmf-checkbox::after {\n    content: \"done\";\n    font-size: 1em;\n    transform: translate(10%, 10%); }\n  .the-solid.mmf-checkbox:checked {\n    background-color: #81d1c6;\n    border-color: #009990; }\n    .the-solid.mmf-checkbox:checked::after {\n      color: white; }\n    .the-solid.mmf-checkbox:checked:not([disabled]):hover {\n      background-color: #b2dfd9; }\n  .the-solid.mmf-checkbox:not(:checked):after {\n    opacity: 0; }\n  .the-solid.mmf-checkbox:not([disabled]):focus {\n    border-color: #009990;\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .the-solid.mmf-checkbox:not([disabled]):hover {\n    border-color: #009990; }\n  .the-solid.mmf-checkbox[disabled] {\n    border-color: #f2f2f3; }\n\n.the-solid label {\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em; }\n\n.the-solid .order--label-first .mmf-label {\n  padding-right: 8px; }\n\n.the-solid .order--label-last .mmf-label {\n  padding-left: 8px; }\n\n.the-solid.mmf-input {\n  color: #29293a;\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  padding: 8px;\n  border: 1px solid #e0e0e3;\n  border-radius: 4px;\n  outline: 0;\n  transition: border-color 0.1s linear; }\n  .has-error .the-solid.mmf-input {\n    border-color: #ff4c4c; }\n    .has-error .the-solid.mmf-input:not([disabled]):hover, .has-error .the-solid.mmf-input:not([disabled]):focus {\n      border-color: #d86868; }\n  .the-solid.mmf-input:not([disabled]):focus {\n    border-color: #009990;\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .the-solid.mmf-input:not([disabled]):hover {\n    border-color: #009990; }\n  .the-solid.mmf-input[disabled] {\n    color: rgba(0, 0, 0, 0.3);\n    border-color: #f2f2f3; }\n  .the-solid.mmf-input::placeholder {\n    color: #c0c1c6;\n    font-style: italic; }\n\n.the-solid.mmf-list .is-value {\n  font-style: italic; }\n  .the-solid.mmf-list .is-value:before {\n    content: \"„\"; }\n  .the-solid.mmf-list .is-value:after {\n    content: \"“\"; }\n\n.the-solid.mmf-list .is-selected {\n  color: #009990;\n  background-color: #f2f2f3; }\n\n.the-solid.mmf-popover {\n  border-radius: 4px;\n  background-color: white;\n  z-index: 40;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n\n.the-solid .mmf-radio-btn-container {\n  height: 36px;\n  display: contents; }\n\n.the-solid .mmf-radio-btn {\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background: transparent;\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 4px 4px; }\n  .the-solid .mmf-radio-btn.is-disabled {\n    border: 1px solid transparent; }\n  .the-solid .mmf-radio-btn:focus {\n    outline: none;\n    background-color: #f2f2f3;\n    color: #009990;\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .the-solid .mmf-radio-btn:not([disabled]):hover {\n    border: 1px solid #f2f2f3;\n    border-radius: 4px;\n    background-color: #f2f2f3;\n    color: #009990; }\n  .the-solid .mmf-radio-btn.selected {\n    border: 1px solid #d8efec;\n    background-color: #d8efec;\n    border-radius: 4px;\n    color: #009990; }\n    .the-solid .mmf-radio-btn.selected.is-disabled {\n      background-color: rgba(216, 239, 236, 0.3);\n      color: rgba(0, 153, 144, 0.3);\n      border-color: transparent; }\n  .the-solid .mmf-radio-btn:not([disabled]).selected:hover {\n    opacity: 0.87;\n    border: 1px solid #d8efec;\n    background-color: #d8efec; }\n  .the-solid .mmf-radio-btn:not([disabled]).selected:focus {\n    opacity: 0.87;\n    border: 1px solid #d8efec;\n    background-color: #d8efec; }\n\n.the-solid.mmf-select__wrapper {\n  color: #29293a;\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  padding: 8px;\n  border: 1px solid #e0e0e3;\n  border-radius: 4px;\n  outline: 0;\n  transition: border-color 0.1s linear;\n  border: none;\n  padding: 0;\n  background-color: white; }\n  .has-error .the-solid.mmf-select__wrapper {\n    border-color: #ff4c4c; }\n    .has-error .the-solid.mmf-select__wrapper:not([disabled]):hover, .has-error .the-solid.mmf-select__wrapper:not([disabled]):focus {\n      border-color: #d86868; }\n  .the-solid.mmf-select__wrapper.is-enabled:hover {\n    border-color: #009990; }\n  .the-solid.mmf-select__wrapper.is-enabled.has-focus {\n    border-color: #009990;\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .the-solid.mmf-select__wrapper.is-enabled:hover:after, .the-solid.mmf-select__wrapper.is-enabled.has-focus:after {\n    background-color: #d8efec;\n    color: #009990; }\n  .the-solid.mmf-select__wrapper.is-disabled {\n    color: rgba(0, 0, 0, 0.3);\n    border-color: #f2f2f3; }\n  .the-solid.mmf-select__wrapper:after {\n    content: \"arrow_drop_down\";\n    font-size: 1.8em;\n    color: #29293a;\n    margin: 4px 0; }\n  .the-solid.mmf-select__wrapper .mmf-select {\n    background-color: inherit;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: 0;\n    border: medium none;\n    font-size: inherit;\n    font-size: 0.95em;\n    line-height: 1.4em;\n    letter-spacing: 0.05em;\n    font-size: inherit;\n    outline: none;\n    padding: 8px 40px 8px 8px;\n    color: #29293a;\n    border: 1px solid #e0e0e3;\n    border-radius: 4px; }\n    .the-solid.mmf-select__wrapper .mmf-select::-ms-expand {\n      display: none; }\n    .the-solid.mmf-select__wrapper .mmf-select:-moz-focusring {\n      color: transparent;\n      text-shadow: 0 0 0 #000; }\n    .the-solid.mmf-select__wrapper .mmf-select * {\n      background-color: inherit;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      border-radius: 0;\n      border: medium none;\n      font-size: inherit; }\n      .the-solid.mmf-select__wrapper .mmf-select *::-ms-expand {\n        display: none; }\n  .the-solid.mmf-select__wrapper.with-color .mmf-select {\n    padding: 8px 40px 8px 24px; }\n\n.the-solid.mmf-form--select .order--label-first {\n  flex-direction: column;\n  align-items: flex-start; }\n  .the-solid.mmf-form--select .order--label-first .mmf-label {\n    padding-bottom: 8px; }\n\n.the-solid.mmf-switch {\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  width: 4em;\n  height: 2em;\n  border-radius: .5em;\n  overflow: unset;\n  border: 1px solid #c0c1c6;\n  border-radius: 4px;\n  background-color: #e0e0e3; }\n  .the-solid.mmf-switch::after {\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    height: 2em;\n    width: 50%;\n    top: -6%;\n    left: -5%;\n    border: 1px solid #c0c1c6;\n    border-radius: 4px; }\n  .the-solid.mmf-switch:checked {\n    background-color: #81d1c6;\n    border-color: #009990; }\n    .the-solid.mmf-switch:checked:after {\n      left: 105%;\n      transform: translate(-100%, 0);\n      border-color: #009990; }\n\n.the-solid.mmf-textarea {\n  color: #29293a;\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  padding: 8px;\n  border: 1px solid #e0e0e3;\n  border-radius: 4px;\n  outline: 0;\n  transition: border-color 0.1s linear;\n  padding: 8px; }\n  .has-error .the-solid.mmf-textarea {\n    border-color: #ff4c4c; }\n    .has-error .the-solid.mmf-textarea:not([disabled]):hover, .has-error .the-solid.mmf-textarea:not([disabled]):focus {\n      border-color: #d86868; }\n  .the-solid.mmf-textarea:not([disabled]):focus {\n    border-color: #009990;\n    z-index: 10;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .the-solid.mmf-textarea:not([disabled]):hover {\n    border-color: #009990; }\n  .the-solid.mmf-textarea[disabled] {\n    color: rgba(0, 0, 0, 0.3);\n    border-color: #f2f2f3; }\n  .the-solid.mmf-textarea::placeholder {\n    color: #c0c1c6;\n    font-style: italic; }\n  .the-solid.mmf-textarea[disabled] {\n    color: rgba(0, 0, 0, 0.3); }\n\n.the-solid .mmf-meta {\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  font-size: 0.8em;\n  opacity: 0.54;\n  font-style: normal;\n  color: #71737f;\n  padding-top: 10px; }\n\n.the-solid .mmf-form__error--error {\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em; }\n\n.the-solid.mmf-form--radio-buttons .mmf-label, .the-solid.mmf-form--input .mmf-label, .the-solid.mmf-form--select .mmf-label, .the-solid.mmf-form--textarea .mmf-label {\n  font-size: 0.95em;\n  line-height: 1.4em;\n  letter-spacing: 0.05em;\n  color: #29293a;\n  padding-bottom: 6px;\n  font-size: 0.8em; }\n\n/**\n * Default form styles, controlling label position by classnames. The Markup should look like\n *\n *  <my-form extends with-moving-label>\n *      <label>Moving Title</label>\n *      <input-type>\n *      ...\n * @param {string} input-type   - associated input selector\n */\n/**\n * Default form styles, controlling label position by classnames. The Markup should look like\n *\n *  <my-form extends with-moving-label>\n *      <label>Moving Title</label>\n *      <input-type>\n *      ...\n * @param {string} input-type   - associated input selector\n */\n.the-material.mmf-button {\n  background: none repeat scroll 0 0 transparent;\n  border: medium none;\n  border-radius: 0;\n  border-spacing: 0;\n  outline: 0;\n  user-select: none;\n  border-radius: 4px;\n  color: #00c852;\n  background-color: inherit;\n  transition: background-color 0.1s linear; }\n  .the-material.mmf-button::-moz-focus-inner, .the-material.mmf-button::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n  .the-material.mmf-button:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #000; }\n  .the-material.mmf-button.is-enabled:hover, .the-material.mmf-button.is-enabled:focus {\n    background-color: #eceff1; }\n  .the-material.mmf-button.is-disabled {\n    color: rgba(0, 200, 82, 0.3); }\n    .the-material.mmf-button.is-disabled:focus, .the-material.mmf-button.is-disabled:hover {\n      background-color: inherit;\n      color: rgba(0, 200, 82, 0.3);\n      cursor: default; }\n  .the-material.mmf-button .mmf-icon {\n    font-size: 1.5em; }\n\n.the-material.mmf-button--raised {\n  z-index: 10;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  color: #eceff1;\n  background-color: #00c852; }\n  .the-material.mmf-button--raised.is-enabled:hover, .the-material.mmf-button--raised.is-enabled:focus {\n    background-color: #00953d; }\n  .the-material.mmf-button--raised.is-disabled, .the-material.mmf-button--raised.is-disabled:hover, .the-material.mmf-button--raised.is-disabled:focus {\n    color: rgba(236, 239, 241, 0.3);\n    background-color: rgba(0, 0, 0, 0.3);\n    cursor: default; }\n\n.the-material.mmf-checkbox {\n  color: rgba(0, 0, 0, 0.87);\n  border: none;\n  border-radius: 0;\n  width: 100%;\n  font-size: inherit;\n  box-sizing: border-box;\n  background: transparent;\n  transform: translateZ(0);\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: border-color 0.1s linear;\n  border-bottom: 0;\n  width: 1em;\n  font-size: 1.25em; }\n  .the-material.mmf-checkbox:not([disabled]):focus {\n    border-color: #00c852; }\n  .the-material.mmf-checkbox:not([disabled]):hover {\n    border-color: #00c852; }\n  .the-material.mmf-checkbox[disabled] {\n    color: black;\n    opacity: 0.3; }\n  .the-material.mmf-checkbox:after {\n    color: rgba(0, 0, 0, 0.87);\n    font-size: inherit;\n    transition: color 0.1s linear; }\n  .the-material.mmf-checkbox:not([disabled]):focus:after, .the-material.mmf-checkbox:not([disabled]):hover:after {\n    color: #00c852; }\n\n.the-material.mmf-input {\n  color: rgba(0, 0, 0, 0.87);\n  border: none;\n  border-radius: 0;\n  width: 100%;\n  font-size: inherit;\n  box-sizing: border-box;\n  background: transparent;\n  transform: translateZ(0);\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: border-color 0.1s linear;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n  .the-material.mmf-input:not([disabled]):focus {\n    border-color: #00c852; }\n  .the-material.mmf-input:not([disabled]):hover {\n    border-color: #00c852; }\n  .the-material.mmf-input[disabled] {\n    color: black;\n    opacity: 0.3; }\n  .the-material.mmf-input:not([disabled]):focus {\n    border-bottom: 1px solid rgba(0, 200, 82, 0.54); }\n  .the-material.mmf-input:not([disabled]):hover {\n    border-bottom: 1px solid rgba(0, 200, 82, 0.54); }\n\n.the-material.mmf-form--input input {\n  padding: 1.1em 0 0 0; }\n\n.the-material.mmf-form--input .mmf-label {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transition: all 0.1s ease-in-out;\n  color: black;\n  opacity: 0.54;\n  font-size: 0.8em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.the-material.mmf-form--input.has-focus .mmf-label {\n  color: #00c852;\n  opacity: 0.87; }\n\n.the-material.mmf-form--input.has-error select,\n.the-material.mmf-form--input.has-error input {\n  border-color: #ff4c4c; }\n\n.the-material.mmf-form--input.has-error.has-focus .mmf-label {\n  color: #ff4c4c; }\n\n.the-material.mmf-form--input.has-warning select,\n.the-material.mmf-form--input.has-warning input {\n  border-color: #f39c12; }\n\n.the-material.mmf-form--input.has-warning.has-focus .mmf-label {\n  color: #f39c12; }\n\n.the-material.mmf-form--input.is-empty.no-focus .mmf-label {\n  transform: translateY(1.1em);\n  font-size: 1em; }\n\n.the-material.mmf-form--input .mmf-input {\n  border-color: transparent; }\n\n.the-material.mmf-form--query-list input {\n  padding: 1.1em 0 0 0; }\n\n.the-material.mmf-form--query-list .mmf-label {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transition: all 0.1s ease-in-out;\n  color: black;\n  opacity: 0.54;\n  font-size: 0.8em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.the-material.mmf-form--query-list.has-focus .mmf-label {\n  color: #00c852;\n  opacity: 0.87; }\n\n.the-material.mmf-form--query-list.has-error select,\n.the-material.mmf-form--query-list.has-error input {\n  border-color: #ff4c4c; }\n\n.the-material.mmf-form--query-list.has-error.has-focus .mmf-label {\n  color: #ff4c4c; }\n\n.the-material.mmf-form--query-list.has-warning select,\n.the-material.mmf-form--query-list.has-warning input {\n  border-color: #f39c12; }\n\n.the-material.mmf-form--query-list.has-warning.has-focus .mmf-label {\n  color: #f39c12; }\n\n.the-material.mmf-form--query-list.is-empty.no-focus .mmf-label {\n  transform: translateY(1.1em);\n  font-size: 1em; }\n\n.the-material.mmf-form--query-list .mmf-input {\n  border-color: transparent; }\n\n.the-material.mmf-select__wrapper:after {\n  transition: color 0.1s linear;\n  right: 0; }\n\n.the-material.mmf-select__wrapper.is-enabled:hover:after, .the-material.mmf-select__wrapper.is-enabled.has-focus:after {\n  color: #00c852; }\n\n.the-material.mmf-select__wrapper .mmf-select {\n  background-color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  border: medium none;\n  font-size: inherit;\n  outline: none;\n  padding: 0;\n  padding-right: 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54); }\n  .the-material.mmf-select__wrapper .mmf-select::-ms-expand {\n    display: none; }\n  .the-material.mmf-select__wrapper .mmf-select:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #000; }\n  .the-material.mmf-select__wrapper .mmf-select * {\n    background-color: inherit;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: 0;\n    border: medium none;\n    font-size: inherit; }\n    .the-material.mmf-select__wrapper .mmf-select *::-ms-expand {\n      display: none; }\n  .the-material.mmf-select__wrapper .mmf-select:not([disabled]):focus, .the-material.mmf-select__wrapper .mmf-select:not([disabled]):hover {\n    border-bottom: 1px solid rgba(0, 200, 82, 0.54); }\n  .the-material.mmf-select__wrapper .mmf-select.is-enabled {\n    color: rgba(0, 0, 0, 0.87);\n    border: none;\n    border-radius: 0;\n    width: 100%;\n    font-size: inherit;\n    box-sizing: border-box;\n    background: transparent;\n    transform: translateZ(0);\n    outline: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    transition: border-color 0.1s linear; }\n    .the-material.mmf-select__wrapper .mmf-select.is-enabled:not([disabled]):focus {\n      border-color: #00c852; }\n    .the-material.mmf-select__wrapper .mmf-select.is-enabled:not([disabled]):hover {\n      border-color: #00c852; }\n    .the-material.mmf-select__wrapper .mmf-select.is-enabled[disabled] {\n      color: black;\n      opacity: 0.3; }\n\n.the-material.mmf-select__wrapper.with-color .mmf-select {\n  padding-left: 24px; }\n\n.the-material.mmf-form--select .mmf-label {\n  line-height: 29px; }\n\n.the-material.mmf-textarea {\n  color: rgba(0, 0, 0, 0.87);\n  border: none;\n  border-radius: 0;\n  width: 100%;\n  font-size: inherit;\n  box-sizing: border-box;\n  background: transparent;\n  transform: translateZ(0);\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: border-color 0.1s linear;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54);\n  margin: 1.1em 0 0 0; }\n  .the-material.mmf-textarea:not([disabled]):focus {\n    border-color: #00c852; }\n  .the-material.mmf-textarea:not([disabled]):hover {\n    border-color: #00c852; }\n  .the-material.mmf-textarea[disabled] {\n    color: black;\n    opacity: 0.3; }\n  .the-material.mmf-textarea:not([disabled]):focus {\n    border-bottom: 1px solid rgba(0, 200, 82, 0.54); }\n  .the-material.mmf-textarea:not([disabled]):hover {\n    border-bottom: 1px solid rgba(0, 200, 82, 0.54); }\n\n.the-material.mmf-form--textarea textarea {\n  margin: 1.1em 0 0 0; }\n\n.the-material.mmf-form--textarea .mmf-label {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transition: all 0.1s ease-in-out;\n  color: black;\n  opacity: 0.54;\n  font-size: 0.8em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.the-material.mmf-form--textarea.has-focus .mmf-label {\n  color: #00c852;\n  opacity: 0.87; }\n\n.the-material.mmf-form--textarea.has-error select,\n.the-material.mmf-form--textarea.has-error input {\n  border-color: #ff4c4c; }\n\n.the-material.mmf-form--textarea.has-error.has-focus .mmf-label {\n  color: #ff4c4c; }\n\n.the-material.mmf-form--textarea.has-warning select,\n.the-material.mmf-form--textarea.has-warning input {\n  border-color: #f39c12; }\n\n.the-material.mmf-form--textarea.has-warning.has-focus .mmf-label {\n  color: #f39c12; }\n\n.the-material.mmf-form--textarea.is-empty.no-focus .mmf-label {\n  transform: translateY(1.1em);\n  font-size: 1em; }\n\n.the-material.mmf-form--textarea textarea {\n  border: none;\n  border-color: transparent;\n  background: transparent;\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n  .the-material.mmf-form--textarea textarea:focus {\n    border-color: #00c852; }\n\n.the-material.mmf-form {\n  position: relative; }\n  .the-material.mmf-form .mmf-label {\n    opacity: 0.54; }\n\n.undefined {\n  color: red;\n  background-color: red;\n  border-color: red; }\n\nbody {\n  background: #333333;\n  font-family: Roboto;\n  margin: 0;\n  position: relative; }\n\n.page {\n  overflow: hidden; }\n\nh1, p, a {\n  color: #fff; }\n\nh2 {\n  align-items: flex-end;\n  background: #333333;\n  display: flex;\n  height: 96px;\n  justify-content: center;\n  margin: 0; }\n  h2 span {\n    background-color: #f2f2f3;\n    line-height: 1em;\n    margin-bottom: 1px;\n    padding: 12px 24px;\n    text-shadow: 0 1px 0 #fff; }\n\n.columns {\n  background-color: #f2f2f3;\n  display: flex;\n  flex-direction: row;\n  padding: 12px 0; }\n\n.box {\n  background: #f6f5f5;\n  padding: 8px; }\n\n.theme {\n  flex-basis: 0;\n  flex-grow: 1;\n  margin: 4px;\n  background-color: #f6f5f5; }\n  .theme h3 {\n    background-color: #f2f2f3;\n    font-size: 0.8em;\n    margin: 0;\n    color: #f80efd;\n    text-align: center; }\n  .theme h4 {\n    margin: 0;\n    padding: 24px 0 12px 8px;\n    font-weight: normal;\n    color: #996e9a;\n    font-size: 0.8em;\n    border-top: 2px solid #f2f2f3;\n    text-align: center;\n    font-style: italic; }\n","@import \"../../lib/interface\";\n@import \"../../lib/units\";\n\n\n.mmf-button {\n    @include clickable();\n\n    display: inline-flex;\n    flex-direction: row;\n    align-items: center;\n    height: 0.75 * $mmf-block;\n    padding: 0 $mmf-block-padding;\n\n    .mmf-icon ~ * {\n        padding-left: $mmf-unit;\n    }\n}\n","@mixin clickable() {\n    &:not([disabled]) {\n        cursor: pointer;\n        pointer-events: all;\n    }\n    // outline: none !important; // overrides focus\n    // outline: none; // overrides focus\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    user-select: none;\n}\n","$mmf-unit: 8px !default;\n$mmf-block: 6 * $mmf-unit !default;\n$mmf-block-padding: 2 * $mmf-unit !default;\n$mmf-radius: 4px !default;\n$mmf-input-border--width: 1px !default;\n\n// forms\n$mmf-height-label: 1.1em !default;\n\n// animation\n$mmf-transition--time: 0.1s;\n$mmf-transition: $mmf-transition--time linear;\n\n// text & line styles\n$mmf-line-height: 1.4em;\n$mmf-letter-spacing: 0.05em;\n\n$mmf-font-small: 0.8em;\n$mmf-font-normal: 0.95em;\n$mmf-font-big: 1em;\n","@import \"../../lib/units\";\n\n\n.mmf-label {\n    display: block;\n    padding-bottom: $mmf-unit;\n}","@import \"../../lib/reset\";\n@import \"../../lib/interface\";\n@import \"../../lib/icon\";\n@import \"../../lib/units\";\n\n\n@mixin checkbox-with-custom-icon() {\n    @include reset-box();\n    @include reset-input();\n\n    &:checked:after {\n        content: \"check_box\";\n    }\n\n    &:after {\n        @include clickable();\n        @include material-icon();\n        content: \"check_box_outline_blank\";\n        transform: translateY(10%); // center\n    }\n}\n\n.mmf-checkbox {\n    @include clickable();\n    @include checkbox-with-custom-icon();\n\n    &[disabled]:after {\n        cursor: default;\n    }\n}\n","@mixin reset-button() {\n    background: none repeat scroll 0 0 transparent;\n    border: medium none;\n    border-radius: 0;\n    border-spacing: 0;\n    outline: 0;\n    user-select: none;\n    &::-moz-focus-inner,\n    &::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n    }\n    &:-moz-focusring {\n        color: transparent;\n        text-shadow: 0 0 0 #000;\n    }\n}\n\n@mixin reset-select() {\n    @include reset-input();\n    &:-moz-focusring {\n        color: transparent;\n        text-shadow: 0 0 0 #000;\n    }\n\n    * {\n        @include reset-input();\n    }\n}\n\n@mixin reset-input() {\n    background-color: inherit;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    &::-ms-expand { // IE 11\n        display: none;\n    }\n    border-radius: 0;\n    border: medium none;\n    font-size: inherit;\n}\n\n@mixin reset-box() {\n    margin: 0;\n    padding: 0;\n}\n","@mixin material-icon() {\n    font-family: \"Material Icons\";\n    font-weight: normal;\n    font-style: normal;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -webkit-font-feature-settings: \"liga\";\n    -webkit-font-smoothing: antialiased;\n}\n","@import \"../../lib/units\";\n\n\n.mmf-form--checkbox {\n\n    label {\n        display: inline-flex;\n        flex-direction: row;\n        align-items: center;\n    }\n\n    .order--label-first .mmf-label {\n        padding-right: $mmf-unit;\n    }\n\n    .order--label-last .mmf-label {\n        padding-left: $mmf-unit;\n    }\n}\n","@import \"../../lib/units\";\n\n\nul.mmf-form__errors {\n    list-style: none;\n    padding-left: 0;\n    margin: 0;\n\n    li {\n        margin-top: 0.5 * $mmf-unit;\n    }\n}\n",".mmf-input {\n    box-sizing: border-box;\n    width: 100%;\n}\n",".mmf-form--input {\n    label {\n        display: flex;\n        flex-direction: column;\n    }\n}\n","@import \"../../lib/colors\";\n\n\n.mmf-list {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.mmf-list__item {\n    padding: $mmf-unit 2 * $mmf-unit;\n\n    &:hover,\n    &.is-selected {\n        cursor: pointer;\n        background-color: rgba(0, 0, 0, map-get($opacity, 3));\n    }\n}\n",".mmf-popover {\n    background: inherit;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    position: absolute;\n    transform: translateZ(0);\n    z-index: 1;\n\n    &.is-hidden {\n        display: none;\n    }\n}\n","@import \"../../lib/colors\";\n\n.mmf-form--query-list {\n    .mmf-popover {\n        background-color: map-get($color-basic, 6);\n    }\n}\n","@import \"./color-palettes\";\n// material design colors https://www.materialui.co/flatuicolors\n// https://material.io/color/#!/?view.left=0&view.right=1&secondary.color=90CAF9&primary.color=ECEFF1\n\n\n// Colors for demo page\n$color-demo: (\n    0: rgb(248,14,253),\n    1: rgb(153,110,154),\n    2: rgb(51, 51, 51),\n    3: rgb(78, 75, 75),\n    4: rgb(242,242,243),\n    5: rgb(246, 245, 245)\n);\n\n// General warning colors\n$color-danger: (\n    0: rgb(255, 0, 0),\n    1: rgb(255, 76, 76),\n    2: rgb(216, 104, 104),\n    3: rgb(243, 156, 18),\n);\n\n// Colors for basic theme and basic styles\n$color-basic: (\n    0: rgb(41, 41, 58),\n    1: rgb(52, 52, 77),\n    2: rgb(113, 115, 127),\n    3: rgb(192, 193, 198),\n    4: rgb(224, 224, 227),\n    5: rgb(242, 242, 243),\n    6: rgb(255,255,255),\n    7: rgb(0, 0, 0), // dark\n    8: rgb(46, 204, 113) // color ok\n);\n\n// Colors for material theme\n$color-material: (\n    0: rgb(0, 200, 82), // primary\n    1: rgb(29,144,67), // secondary\n    2: rgb(236, 239, 241), // contrast\n    3: rgb(0, 0, 0)\n);\n\n// Colors for solid theme\n$color-solid: (\n    0: rgb(0, 153, 144),\n    1: rgb(105, 193, 184),\n    2: rgb(129, 209, 198),\n    3: rgb(178, 223, 217),\n    4: rgb(185, 226, 220),\n    5: rgb(216, 239, 236),\n    6: rgb(255,255,255),\n    7: rgb(0, 0, 0),\n    8: rgb(41, 41, 58),\n    9: rgb(242, 242, 243)\n);\n\n$opacity: (\n    0: 0.87, // primary\n    1: 0.54, // secondary\n    2: 0.30, // hint & disabled\n    3: 0.12 // divider\n);\n\n// control variables: darken, lighten\n$distance: (\n    0: 20%, // normal\n    1: 10% // focus\n);\n\n// styling - no colors\n$mmf-style--border: solid !default;\n","@import \"../../lib/interface\";\n@import \"../../lib/units\";\n@import \"../../lib/colors\";\n@import \"../../lib/elevation\";\n\n\n.mmf-radio-btn-container {\n    height: 0.75 * $mmf-block;\n    display: contents;\n}\n\n.mmf-radio-btn {\n    @include clickable();\n    border: $mmf-input-border--width $mmf-style--border map-get($color-basic, 0);\n    border-radius: $mmf-radius;\n    background: transparent;\n    display: inline-flex;\n    flex-direction: row;\n    align-items: center;\n    margin: $mmf-unit/2 $mmf-unit / 2;\n\n    &:not([disabled]):hover {\n        background-color:map-get($color-basic, 3);\n    }\n\n    &.selected {\n        background-color:map-get($color-basic, 4);\n    }\n\n    &.is-disabled {\n        border: $mmf-input-border--width $mmf-style--border rgba(map-get($color-basic, 0), map-get($opacity, 2));\n    }  \n}\n","@import \"../../lib/units\";\n\n.mmf-form--radio-buttons {\n    .order--label-first{\n        .mmf-label {\n            display: flex;\n            flex-direction: column;\n        }\n    }\n\n    .mmf-form__error {\n        margin-top: $mmf-unit/2;\n        padding-top: $mmf-unit;\n    }\n}\n","@import \"../../lib/reset\";\n@import \"../../lib/icon\";\n@import \"../../lib/colors\";\n@import \"../../lib/units\";\n\n.mmf-select__wrapper {\n    position: relative;\n    display: inline-block;\n    box-sizing: border-box;\n    width: 100%;\n\n    &:after {\n        content: \"keyboard_arrow_down\";\n        @include material-icon();\n        align-items: center;\n        bottom: 0;\n        display: flex;\n        pointer-events: none; // remove icon to be clickable (select receives input-event)\n        position: absolute;\n        right: 4px;\n        top: 0;\n    }\n    \n    &.is-disabled:after {\n        opacity: map-get($opacity, 2);\n    }\n\n    &.with-color {\n        select {\n            padding-left: 3 * $mmf-unit;\n        }\n\n        .select-icon {\n            display: inline-block;\n            border-radius: 50%;\n            height: $mmf-unit;\n            width: $mmf-unit;\n            border: 2px $mmf-style--border map-get($color-basic, 6);\n            position: absolute;\n            left: $mmf-unit;\n            top: 50%;\n            transform: translateY(-50%);\n            z-index: 12;\n            border:transparent;\n        }\n    }\n}\n\n.mmf-select {\n    width: 100%;\n    box-sizing: border-box;\n\n    // hide select arrow-icon\n    -moz-appearance: window;\n    -webkit-appearance: none;\n\n    // hide touch borders\n    -webkit-tap-highlight-color: map-get($color-basic, 7);\n\n    // select layout\n    padding-left: $mmf-unit; // sane base padding, which conflicts with theme-material\n    padding-top: $mmf-unit - 1; // sane base padding, which conflicts with theme-material\n    padding-bottom: $mmf-unit - 1; // sane base padding, which conflicts with theme-material\n    padding-right: (0.5 * $mmf-block + 4px);\n\n    &:not([disabled]) {\n        cursor: pointer;\n    }\n}\n","@import \"../../lib/units\";\n\n\n.mmf-form--select {\n    label {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n    }\n\n    .order--label-first .mmf-label {\n        padding-right: $mmf-block-padding;\n    }\n\n    .order--label-last .mmf-label {\n        padding-left: $mmf-block-padding;\n    }\n}\n\n\n","@import \"../../lib/reset\";\n@import \"../../lib/interface\";\n@import \"../../lib/icon\";\n@import \"../../lib/colors\";\n@import \"../../lib/units\";\n@import \"../../lib/elevation\";\n\n\n.mmf-switch.the-material,\n.mmf-switch.the-solid {\n    outline: none;\n    -webkit-tap-highlight-color: map-get($color-basic, 7);\n}\n\n\n.mmf-switch {\n    @include reset-input();\n    $bg-color: rgba(map-get($color-basic, 7), map-get($opacity, 2));\n    $switch-width: 2em;\n    margin: 0;\n\n    background-color: $bg-color;\n    border-radius: $switch-width/2;\n    border: 1px $mmf-style--border $bg-color;\n    width: $switch-width;\n    height: $switch-width/2;\n    position: relative;\n    overflow: hidden;\n\n    &:after {\n        background-color: map-get($color-basic, 6);\n        border-radius: $switch-width/2;\n        position: relative;\n        content: \"\";\n        display: block;\n        height: 100%;\n        width: 50%;\n        left: 0;\n        margin: 0;\n        transition:\n            left .3s cubic-bezier(0.175, 0.885, 0.320, 1.275),\n            transform .3s cubic-bezier(0.175, 0.885, 0.320, 1.275),\n            width .3s ease, margin .3s ease;\n    }\n\n    &:checked {\n        background-color: map-get($color-basic, 8);\n        &:after {\n            left: 100%;\n            transform: translate(-100%, 0);\n        }\n    }\n\n    &:focus:after {\n        @include elevation(2);\n    }\n\n    &[disabled] {\n        opacity: map-get($opacity, 2);\n    }\n\n    &:not([disabled]) {\n        @include clickable();\n        &:hover {\n            cursor: pointer;\n        }\n        &:active:after {\n            width: 60%;\n        }\n    };\n}\n","@mixin elevation($index, $color: #000) {\n    z-index: 10 * $index;\n    @if $index <= 1 {\n        box-shadow: 0 1px 3px rgba($color,0.12), 0 1px 2px rgba($color,0.24);\n    } @else if $index <= 2 {\n        box-shadow: 0 3px 6px rgba($color,0.16), 0 3px 6px rgba($color,0.23);\n    } @else if $index <= 4 {\n        box-shadow: 0 10px 20px rgba($color,0.19), 0 6px 6px rgba($color,0.23);\n    } @else if $index <= 8 {\n        box-shadow: 0 14px 28px rgba($color,0.25), 0 10px 10px rgba($color,0.22);\n    } @else if $index <= 12 {\n        box-shadow: 0 19px 38px rgba($color,0.30), 0 15px 12px rgba($color,0.22);\n    } @else if $index <= 24 {\n        box-shadow: 0 24px 48px rgba($color,0.40), 0 30px 25px rgba($color,0.20);\n    }\n}\n","@import \"../../lib/units\";\n\n\n.mmf-form--switch {\n\n    label {\n        display: inline-flex;\n        flex-direction: row;\n        align-items: center;\n    }\n\n    .order--label-first .mmf-label {\n        padding-right: $mmf-unit;\n    }\n\n    .order--label-last .mmf-label {\n        padding-left: $mmf-unit;\n    }\n}\n",".mmf-textarea {\n    width: 100%;\n    box-sizing: border-box;\n    resize: vertical;\n\n    &:focus {\n        outline-style: none;\n        outline-width: 0;\n    }\n}\n",".mmf-form--textarea {\n    label {\n        display: flex;\n        flex-direction: column;\n    }\n\n    textarea {\n        box-sizing: border-box;\n    }\n}\n","@import \"../components/button/layout\";\n@import \"../components/buttonform/layout\";\n@import \"../components/checkbox/layout\";\n@import \"../components/checkboxform/layout\";\n@import \"../components/errors/layout\";\n@import \"../components/input/layout\";\n@import \"../components/inputform/layout\";\n@import \"../components/list/layout\";\n@import \"../components/popover/layout\";\n@import \"../components/querylistform/layout\";\n@import \"../components/radiobuttons/layout\";\n@import \"../components/radiobuttonsform/layout\";\n@import \"../components/select/layout\";\n@import \"../components/selectform/layout\";\n@import \"../components/switch/layout\";\n@import \"../components/switchform/layout\";\n@import \"../components/textarea/layout\";\n@import \"../components/textareaform/layout\";\n\n\n@import \"../lib/units\";\n@import \"../lib/icon\";\n\n\n.mmf-form .mmf-meta {\n    margin-top: 0.5 * $mmf-unit;\n}\n\n.mmf-form.is-enabled label:hover {\n    cursor: pointer;\n}\n\n.mmf-icon {\n    @include material-icon();\n}\n","@import \"../../lib/typography\";\n\n\n.mmf-button {\n    @include font-regular();\n    font-family: inherit;\n    font-size: inherit;\n    line-height: 1em;\n\n    .mmf-icon {\n\n    }\n}\n","$mmf-text-size--meta: 0.8em !default;\n$mmf-text-size--errors: $mmf-text-size--meta !default;\n$mmf-text-size--label: $mmf-text-size--meta !default;\n$mmf-text-size--checkbox: 1.25em !default;\n\n\n@mixin font-light() {\n    font-weight: 300;\n}\n\n@mixin font-regular() {\n    font-weight: 400;\n}\n\n@mixin font-bold() {\n    font-weight: 700;\n}\n","@import \"../../lib/colors\";\n\n\n.mmf-form__error--warning {\n    color: map-get($color-danger, 3);\n}\n\n.mmf-form__error--error {\n    color: map-get($color-danger, 1);\n}\n","@import \"../../lib/typography\";\n\n\n.mmf-input {\n    @include font-regular();\n    color: inherit;\n    font-size: inherit;\n    font-family: inherit;\n}\n",".mmf-label {\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n    user-select: none;\n    color: map-get($color-basic, 7);\n}\n","@import \"../../lib/colors\";\n@import \"../../lib/typography\";\n\n\n.mmf-select__wrapper {\n    &:after {\n        font-size: 1.25em;\n        color: map-get($color-basic, 7);\n    }\n}\n\n.mmf-select {\n    font-family: inherit;\n    font-size: inherit;\n\n    option {\n        font-size: inherit;\n        color: map-get($color-basic, 7);\n    }\n}\n","@import \"../../lib/colors\";\n\n\n.mmf-textarea {\n    font-size: inherit;\n    font-family: inherit;\n}\n\n.mmf-form.hasError .mmf-textarea {\n    border-color: map-get($color-danger, 1);\n}\n","@import \"../../lib/typography\";\n\n\n.the-ux.mmf-form--textarea {\n\n    textarea {\n        @include font-regular();\n        color: inherit;\n        font-size: inherit;\n        line-height: 1.4em;\n    }\n}\n","@import \"../components/button/typography\";\n@import \"../components/errors/typography\";\n@import \"../components/input/typography\";\n@import \"../components/label/typography\";\n@import \"../components/select/typography\";\n@import \"../components/textarea/typography\";\n@import \"../components/textareaform/typography\";\n@import \"../lib/units\";\n@import \"../lib/colors\";\n\n\n.mmf-form__errors {\n    font-size: $mmf-text-size--errors;\n    color: map-get($color-danger, 1);\n}\n\n.mmf-meta {\n    opacity: map-get($opacity, 1);\n    font-style: italic;\n    font-size: $mmf-text-size--meta;\n}\n\n.mmf-form.is-disabled {\n    .mmf-meta,\n    .mmf-form__errors,\n    span.mmf-label { // be more specific to overwrite form+label combination\n        opacity: map-get($opacity, 2);\n    }\n}\n","@import \"../lib/with-solid-theme\";\n\n\n.the-solid {\n    @include with-solid-theme();\n}\n","@import \"../lib/units\";\n\n@mixin solid-font-style() {\n    font-size: $mmf-font-normal;\n    line-height: $mmf-line-height;\n    letter-spacing: $mmf-letter-spacing;\n}\n","@import \"../../lib/reset\";\n@import \"../../lib/colors\";\n@import \"../../lib/units\";\n@import \"../../lib/fonts\";\n\n\n@mixin button-solid() {\n\n    &.mmf-button {\n        @include reset-button();\n        @include solid-font-style();\n        background-color: map-get($color-solid, 6);\n        border: $mmf-input-border--width $mmf-style--border transparent;\n        border-radius: $mmf-radius;\n        color: map-get($color-solid, 8);\n        padding: 0 $mmf-unit;\n\n        &[disabled] {\n            color: rgba(map-get($color-solid, 8), map-get($opacity, 2));\n        }\n\n        // clickable\n        &.is-enabled {\n            &:hover,\n            &:focus {\n                background-color: map-get($color-solid, 9);\n                color: map-get($color-solid, 0);\n            }\n\n            &:focus {\n                @include elevation(1);\n            }\n\n            // activated until deactivated via being clicked again\n            &.activated {\n                background-color: map-get($color-solid, 5);\n                color: map-get($color-solid, 0);\n            }\n        }\n    }\n\n    &.mmf-button--raised {\n        border: $mmf-input-border--width solid map-get($color-solid, 5);\n        border-radius: $mmf-radius;\n        background-color:map-get($color-solid, 5);\n        color: map-get($color-solid, 0);\n        \n        &[disabled] {\n            background-color: rgba(map-get($color-solid, 5), map-get($opacity, 2));\n            border-color: rgba(map-get($color-solid, 5), map-get($opacity, 2));\n            color: rgba(map-get($color-solid, 0), map-get($opacity, 2));\n        }\n\n        &.is-enabled {\n            &:hover {\n                border: $mmf-input-border--width $mmf-style--border map-get($color-basic, 5);\n                border-radius: $mmf-radius;\n                background-color:map-get($color-basic, 5);\n            }\n\n            &:focus {\n                @include elevation(1);\n                opacity: map-get($opacity, 0);\n            }\n        }\n    }\n}\n","@import \"../../lib/units\";\n\n\n@mixin buttonform-solid(){\n    &.mmf-form--button {\n        \n        .mmf-label {\n            @include solid-font-style();\n            display: block;\n            padding-bottom: $mmf-unit;\n            color: map-get($color-basic, 0);\n        }\n    }\n}\n","@import \"../../lib/colors\";\n@import \"../../lib/units\";\n\n\n@mixin checkbox-solid() {\n    &.mmf-checkbox {\n        outline: 0;\n        border: $mmf-input-border--width $mmf-style--border map-get($color-basic, 3);\n        border-radius: $mmf-radius;\n        transition: border-color $mmf-transition;\n        width: 3 * $mmf-unit;\n        height: 3 * $mmf-unit;\n\n        &::after {\n          content: \"done\";\n          font-size: $mmf-font-big;\n          transform: translate(10%, 10%); // center \n        }\n\n        &:checked{\n            background-color: map-get($color-solid , 2);\n            border-color: map-get($color-solid, 0);\n            &::after {\n                color: white;   \n            }\n\n            &:not([disabled]):hover {\n                background-color: map-get($color-solid, 3);\n    \n            }\n        }\n\n        &:not(:checked):after{\n            opacity: 0;\n        }\n\n        &:not([disabled]):focus {\n            border-color: map-get($color-solid, 0);\n            @include elevation(1);\n        }\n    \n        &:not([disabled]):hover {\n            border-color: map-get($color-solid, 0);\n\n        }\n    \n        &[disabled] {\n            border-color: map-get($color-basic, 5);\n        }\n    }\n}\n","@import \"../../lib/colors\";\n@import \"../../lib/units\";\n@import \"../../lib/fonts\";\n\n\n@mixin checkboxform-solid(){\n    \n\n        label {\n            @include solid-font-style();\n        }\n\n        .order--label-first .mmf-label {\n            padding-right: $mmf-unit;\n        }\n\n        .order--label-last .mmf-label {\n            padding-left: $mmf-unit;\n        }\n    }\n","@import \"./colors\";\n@import \"./typography\";\n@import \"./units\";\n\n\n@mixin with-bottom-border() {\n    // border-bottom: $mmf-input-border--width $mmf-style--border transparent;\n    border-bottom: $mmf-input-border--width $mmf-style--border rgba(map-get($color-basic, 7), map-get($opacity, 1));\n    &:not([disabled]):focus {\n        border-bottom: $mmf-input-border--width $mmf-style--border rgba(map-get($color-material, 0), map-get($opacity, 1));\n    }\n    &:not([disabled]):hover {\n        border-bottom: $mmf-input-border--width $mmf-style--border rgba(map-get($color-material, 0), map-get($opacity, 1));\n    }\n}\n\n@mixin with-input() {\n    color: rgba(map-get($color-basic, 7), map-get($opacity, 0));\n    border: none;\n    border-radius: 0;\n    width: 100%;\n    font-size: inherit;\n    box-sizing: border-box;\n    background: transparent;\n    transform: translateZ(0);\n\n    outline: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n    transition: border-color $mmf-transition;\n\n    &:not([disabled]):focus {\n        border-color: rgba(map-get($color-material, 0), 1);\n    }\n\n    &:not([disabled]):hover {\n        border-color: map-get($color-material, 0);\n    }\n\n    &[disabled] {\n        color: map-get($color-basic, 7); // on deactivated state, set color to match labels\n        opacity: map-get($opacity, 2);\n    }\n}\n\n\n@mixin with-input-solid($is-form-element: true) {\n    color: map-get($color-basic, 0);\n    font-size: $mmf-font-normal;\n    line-height: $mmf-line-height;\n    letter-spacing: $mmf-letter-spacing;\n    padding: $mmf-unit;\n    border: $mmf-input-border--width $mmf-style--border map-get($color-basic, 4);\n    border-radius: $mmf-radius;\n    outline: 0;\n    transition: border-color $mmf-transition;\n\n    .has-error & {\n        border-color: map-get($color-danger, 1);\n        &:not([disabled]):hover,\n        &:not([disabled]):focus{\n            border-color: map-get($color-danger, 2);\n        }\n    }\n\n    @if $is-form-element {\n        &:not([disabled]):focus {\n            border-color: map-get($color-solid, 0);\n            @include elevation(1);\n        }\n\n        &:not([disabled]):hover {\n            border-color: map-get($color-solid, 0);\n        }\n\n        &[disabled] {\n            color: rgba(map-get($color-basic, 7), map-get($opacity, 2));\n            border-color: map-get($color-basic, 5);\n        }\n\n        &::placeholder {\n            color: map-get($color-basic, 3);\n            font-style: italic;\n        }\n    }\n}\n","@import \"../../lib/units\";\n@import \"../../lib/colors\";\n@import \"../../lib/elevation\";\n\n\n@mixin list-solid() {\n    &.mmf-list {\n        .is-value {\n            font-style: italic;\n            &:before { content: \"„\"; }\n            &:after { content: \"“\"; }\n        }\n        .is-selected {\n            color: map-get($color-solid, 0);\n            background-color: map-get($color-basic, 5);\n        }\n    }\n}\n","@import \"../../lib/units\";\n@import \"../../lib/colors\";\n@import \"../../lib/elevation\";\n\n\n@mixin popover-solid() {\n    &.mmf-popover {\n        border-radius: $mmf-radius;\n        background-color: map-get($color-solid, 6);\n        @include elevation(4);\n    }\n}\n","@import \"../../lib/colors\";\n@import \"../../lib/units\";\n@import \"../../lib/fonts\";\n\n\n@mixin radiobuttons-solid(){\n    .mmf-radio-btn-container {\n        height: 0.75 * $mmf-block;\n        display: contents;\n    }\n    \n    .mmf-radio-btn {\n        @include solid-font-style();\n        border: $mmf-input-border--width $mmf-style--border transparent;\n        border-radius: $mmf-radius;\n        background: transparent;\n        display: inline-flex;\n        flex-direction: row;\n        align-items: center;\n        margin: $mmf-unit/2 $mmf-unit / 2;\n        \n        &.is-disabled {\n            border: $mmf-input-border--width $mmf-style--border transparent;\n        }\n    \n        &:focus {\n            outline: none;\n            background-color:map-get($color-basic, 5);\n            color: map-get($color-solid, 0);\n            @include elevation(1);\n        }\n    \n        &:not([disabled]):hover {\n            border: $mmf-input-border--width $mmf-style--border map-get($color-basic, 5);\n            border-radius: $mmf-radius;\n            background-color:map-get($color-basic, 5);\n            color: map-get($color-solid, 0);\n        }\n    \n        &.selected {\n            border: $mmf-input-border--width $mmf-style--border map-get($color-solid, 5);\n            background-color: map-get($color-solid, 5);\n            border-radius: $mmf-radius;\n            color: map-get($color-solid, 0);\n            \n            &.is-disabled {\n                background-color: rgba(map-get($color-solid, 5), map-get($opacity, 2));\n                color: rgba(map-get($color-solid, 0), map-get($opacity, 2));\n                border-color: transparent;\n            }            \n        }\n    \n        &:not([disabled]).selected:hover {\n            opacity: map-get($opacity, 0);\n            border: $mmf-input-border--width solid map-get($color-solid, 5);\n            background-color:map-get($color-solid, 5);\n        }\n\n        &:not([disabled]).selected:focus {\n            opacity: map-get($opacity, 0);\n            border: $mmf-input-border--width solid map-get($color-solid, 5);\n            background-color:map-get($color-solid, 5);\n        }\n    }\n    \n}\n","@import \"../../lib/units\";\n@import \"../../lib/reset\";\n@import \"../../lib/input\";\n@import \"../../lib/fonts\";\n\n\n@mixin select-solid() {\n    &.mmf-select__wrapper {\n        @include with-input-solid(false);\n        border: none;\n        padding: 0; // reset default input padding from mixin\n        background-color: map-get($color-solid, 6);\n\n        &.is-enabled {\n            &:hover {\n                border-color: map-get($color-solid, 0);\n            }\n\n            &.has-focus {\n                border-color: map-get($color-solid, 0);\n                @include elevation(1);\n            }\n\n            &:hover,\n            &.has-focus {\n                &:after {\n                    background-color: map-get($color-solid, 5);\n                    color: map-get($color-solid, 0);\n                }\n            }\n        }\n\n        &.is-disabled {\n            color: rgba(map-get($color-solid, 7), map-get($opacity, 2));\n            border-color: map-get($color-basic, 5);\n        }\n\n        &:after {\n            content: \"arrow_drop_down\";\n            font-size: 1.8em;\n            color: map-get($color-basic, 0);\n            margin: $mmf-unit/2 0;\n        }\n\n        .mmf-select {\n            @include reset-select();\n            @include solid-font-style();\n            font-size: inherit;\n            outline: none;\n            padding: $mmf-unit 5*$mmf-unit $mmf-unit $mmf-unit;\n            color: map-get($color-basic, 0);\n            border: $mmf-input-border--width $mmf-style--border map-get($color-basic, 4);\n            border-radius: $mmf-radius;\n        }\n        \n        &.with-color {\n            .mmf-select {\n                padding: $mmf-unit 5*$mmf-unit $mmf-unit 3*$mmf-unit;\n            }\n        }\n    }\n}\n","@import \"../../lib/units\";\n\n\n@mixin selectform-solid() {\n    &.mmf-form--select .order--label-first {\n        flex-direction: column;\n        align-items: flex-start;\n\n        .mmf-label {\n            padding-bottom: $mmf-unit;\n        }\n    }\n}\n","@import \"../../lib/colors\";\n@import \"../../lib/units\";\n\n@mixin switch-solid() {\n    &.mmf-switch {\n        outline: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n        width: 4em;\n        height: 2em;\n        border-radius: .5em;\n        overflow: unset;\n        border: $mmf-input-border--width solid map-get($color-basic, 3);\n        border-radius: $mmf-radius;\n        background-color: map-get($color-basic, 4);\n\n        &::after{\n            @include elevation(1);\n            height: 2em;\n            width: 50%;\n            top: -6%;\n            left: -5%;\n            border: $mmf-input-border--width solid map-get($color-basic, 3);\n            border-radius: $mmf-radius;\n        }\n\n        &:checked {\n            background-color: map-get($color-solid , 2);\n            border-color: map-get($color-solid, 0);\n            &:after {\n                left: 105%;\n                transform: translate(-100%, 0);\n                border-color: map-get($color-solid , 0);\n            }\n        }\n    }\n}\n","@import \"../../lib/input\";\n@import \"../../lib/units\";\n\n\n@mixin textarea-solid() {\n    &.mmf-textarea {\n        @include with-input-solid();\n        padding: $mmf-unit;\n\n        &[disabled] {\n            color: rgba(map-get($color-solid, 7), map-get($opacity, 2));\n        }\n    }\n}\n","@import \"../components/button/button-solid\";\n@import \"../components/buttonform/buttonform-solid\";\n@import \"../components/checkbox/checkbox-solid\";\n@import \"../components/checkboxform/checkboxform-solid\";\n@import \"../components/input/input-solid\";\n@import \"../components/list/list-solid\";\n@import \"../components/popover/popover-solid\";\n@import \"../components/radiobuttons/radiobuttons-solid.scss\";\n@import \"../components/select/select-solid\";\n@import \"../components/selectform/selectform-solid\";\n@import \"../components/switch/switch-solid\";\n@import \"../components/textarea/textarea-solid\";\n@import \"../lib/typography\";\n@import \"../lib/colors\";\n@import \"../lib/units\";\n@import \"../lib/fonts\";\n\n@mixin with-solid-theme() {\n    @include button-solid();\n    @include buttonform-solid();\n    @include checkbox-solid();\n    @include checkboxform-solid();\n    @include input-solid();\n    @include list-solid();\n    @include popover-solid();\n    @include radiobuttons-solid();\n    @include select-solid();\n    @include selectform-solid();\n    @include switch-solid();\n    @include textarea-solid();\n\n    .mmf-meta {\n        @include solid-font-style();\n        font-size: $mmf-font-small;\n        opacity: map-get($opacity, 1);\n        font-style: normal;\n        color: map-get($color-basic, 2);\n        padding-top: 10px;\n    }\n\n    .mmf-form__error--error {\n        @include solid-font-style();\n    }\n\n    // all styles for type-in + dropdown elements that have labels and descriptions\n    &.mmf-form--radio-buttons,\n    &.mmf-form--input,\n    &.mmf-form--select,\n    &.mmf-form--textarea {\n        .mmf-label {\n            @include solid-font-style();\n            color: map-get($color-basic, 0);\n            padding-bottom: 6px;\n            font-size: $mmf-font-small;\n        }\n    }\n}\n","@import \"./colors\";\n@import \"./units\";\n@import \"./typography\";\n@import \"./input\";\n\n\n@mixin with-form() {\n    position: relative;\n\n    .mmf-label {\n        color: map-get($color-basic, 7);\n        opacity: map-get($opacity, 1);\n    }\n}\n\n\n/**\n * Default form styles, controlling label position by classnames. The Markup should look like\n *\n *  <my-form extends with-moving-label>\n *      <label>Moving Title</label>\n *      <input-type>\n *      ...\n * @param {string} input-type   - associated input selector\n */\n@mixin with-moving-label($input-type: \"input\") {\n\n    // move input down by label height\n    @if $input-type == \"textarea\" {\n        #{$input-type} {\n            margin: $mmf-height-label 0 0 0;\n        }\n    } @else {\n        #{$input-type} {\n            padding: $mmf-height-label 0 0 0;\n        }\n    }\n\n    .mmf-label {\n        // set label to top\n        width: 100%;\n        position: absolute;\n        top: 0;\n        display: inline-block;\n        transition: all $mmf-transition--time ease-in-out;\n\n        color: map-get($color-basic, 7);\n        opacity: map-get($opacity, 1);\n        font-size: $mmf-text-size--label; // small font-size if not currently a placeholder (but title)\n\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n    }\n\n    &.has-focus {\n        .mmf-label {\n            color: map-get($color-material, 0);\n            opacity: map-get($opacity, 0);\n        }\n    }\n\n    &.has-error {\n        select,\n        input {\n            border-color: map-get($color-danger, 1);\n        }\n        &.has-focus {\n            .mmf-label {\n                color: map-get($color-danger, 1);\n            }\n        }\n    }\n\n    &.has-warning {\n        select,\n        input {\n            border-color: map-get($color-danger, 3);\n        }\n        &.has-focus {\n            .mmf-label {\n                color: map-get($color-danger, 3);\n            }\n        }\n    }\n\n    &.is-empty.no-focus {\n        .mmf-label {\n            transform: translateY($mmf-height-label);\n            font-size: 1em;\n        }\n    }\n}\n","@import \"../lib/with-material-theme\";\n\n\n.the-material {\n    @include with-material-theme();\n}\n","@import \"../../lib/typography\";\n@import \"../../lib/units\";\n@import \"../../lib/reset\";\n@import \"../../lib/colors\";\n@import \"../../lib/interface\";\n@import \"../../lib/elevation\";\n\n\n@mixin button-material() {\n    &.mmf-button {\n        @include reset-button();\n\n        border-radius: $mmf-radius;\n        color: map-get($color-material, 0);\n        background-color: inherit;\n        transition: background-color $mmf-transition;\n\n        &.is-enabled {\n            &:hover,\n            &:focus {\n                background-color: map-get($color-material, 2);\n            }\n        }\n\n        &.is-disabled {\n            color: rgba(map-get($color-material, 0), map-get($opacity, 2));\n            &:focus,\n            &:hover {\n                background-color: inherit;\n                color: rgba(map-get($color-material, 0), map-get($opacity, 2));\n                cursor: default;\n            }\n        }\n\n        .mmf-icon {\n            font-size: 1.5em;\n        }\n    }\n\n    &.mmf-button--raised {\n        @include elevation(1);\n        color: map-get($color-material, 2);\n        background-color: map-get($color-material, 0);\n\n        &.is-enabled {\n            &:hover,\n            &:focus {\n                background-color: darken(map-get($color-material, 0), map-get($distance, 1));\n            }\n        }\n\n        &.is-disabled,\n        &.is-disabled:hover,\n        &.is-disabled:focus {\n            color: rgba(map-get($color-material, 2), map-get($opacity, 2));\n            background-color: rgba(map-get($color-material, 3), map-get($opacity, 2));\n            cursor: default;\n        }\n    }\n}\n","@import \"../../lib/reset\";\n@import \"../../lib/units\";\n@import \"../../lib/colors\";\n@import \"../../lib/interface\";\n@import \"../../lib/input\";\n@import \"../../lib/icon\";\n\n\n@mixin checkbox-material() {\n    &.mmf-checkbox {\n        @include with-input();\n        border-bottom: 0; // reset-bottom border from input-mixin\n        width: 1em; // reset block-style from input-mixin\n        font-size: $mmf-text-size--checkbox;\n\n        &:after {\n            color: rgba(map-get($color-material, 3), map-get($opacity, 0));\n            font-size: inherit;\n            transition: color $mmf-transition;\n        }\n\n        &:not([disabled]) {\n            &:focus:after,\n            &:hover:after {\n                color: map-get($color-material, 0);\n            }\n        }\n    }\n}\n","@import \"../../lib/form\";\n\n\n@mixin inputform-material() {\n    &.mmf-form--input {\n        @include with-moving-label(\"input\");\n        .mmf-input {\n            border-color: transparent;\n        }\n    }\n}\n","@import \"../../lib/form\";\n\n\n@mixin querylistform-material() {\n    &.mmf-form--query-list {\n        @include with-moving-label(\"input\");\n        .mmf-input {\n            border-color: transparent;\n        }\n    }\n}\n","@import \"../../lib/reset\";\n@import \"../../lib/units\";\n@import \"../../lib/typography\";\n@import \"../../lib/colors\";\n@import \"../../lib/input\";\n\n\n@mixin select-material() {\n    &.mmf-select__wrapper {\n        &:after {\n            transition: color $mmf-transition;\n            right: 0;\n        }\n\n        &.is-enabled {\n            &:hover:after,\n            &.has-focus:after {\n                color: map-get($color-material, 0);\n            }\n        }\n\n        .mmf-select {\n            @include reset-select();\n            outline: none;\n            padding: 0;\n            padding-right: (0.5 * $mmf-block);\n            border-bottom: $mmf-input-border--width $mmf-style--border rgba(map-get($color-material, 3), map-get($opacity, 1));\n\n            &:not([disabled]):focus,\n            &:not([disabled]):hover {\n                border-bottom: $mmf-input-border--width $mmf-style--border rgba(map-get($color-material, 0), map-get($opacity, 1));\n            }\n\n            &.is-enabled {\n                @include with-input();\n            }\n        }\n\n        &.with-color {\n            .mmf-select {\n                padding-left: (3 * $mmf-unit);\n            }\n        }\n    }\n}\n","@import \"../../lib/colors\";\n@import \"../../lib/typography\";\n\n\n@mixin selectform-material() {\n    &.mmf-form--select .mmf-label {\n        line-height: 29px;\n    }\n}\n","@import \"../../lib/input\";\n@import \"../../lib/units\";\n\n\n@mixin textarea-material() {\n    &.mmf-textarea {\n        @include with-input();\n        @include with-bottom-border();\n        margin: $mmf-height-label 0 0 0;\n    }\n}\n","@import \"../../lib/colors\";\n@import \"../../lib/units\";\n@import \"../../lib/typography\";\n@import \"../../lib/input\";\n\n\n@mixin textareaform-material() {\n    &.mmf-form--textarea {\n        @include with-moving-label(\"textarea\");\n\n        textarea {\n            border: none;\n            border-color: transparent;\n            background: transparent;\n\n            outline: none;\n            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n            &:focus {\n                border-color: map-get($color-material, 0);\n            }\n       }\n    }\n}\n","@import \"../components/button/button-material\";\n@import \"../components/checkbox/checkbox-material\";\n@import \"../components/input/input-material\";\n@import \"../components/inputform/inputform-material\";\n@import \"../components/querylistform/querylistform-material\";\n@import \"../components/select/select-material\";\n@import \"../components/selectform/selectform-material\";\n@import \"../components/textarea/textarea-material\";\n@import \"../components/textareaform/textareaform-material\";\n\n\n@import \"./colors\";\n\n@mixin with-material-theme() {\n    @include button-material();\n    @include checkbox-material();\n    @include input-material();\n    @include inputform-material();\n    @include querylistform-material();\n    @include select-material();\n    @include selectform-material();\n    @include textarea-material();\n    @include textareaform-material();\n\n    &.mmf-form {\n        position: relative;\n        .mmf-label {\n            opacity: map-get($opacity, 1);\n        }\n    }\n}\n\n\n\n","@import \"../styles/layout\";\n@import \"../styles/typography\";\n@import \"../styles/theme-solid\";\n@import \"../styles/theme-material\";\n@import \"../lib/colors.scss\";\n@import \"../lib/units.scss\";\n\n.undefined {\n    color: map-get($color-danger, 0);\n    background-color: map-get($color-danger, 0);\n    border-color: map-get($color-danger, 0);\n}\n\nbody {\n    background: map-get($color-demo, 2);\n    font-family: Roboto;\n    margin: 0;\n    position: relative;\n}\n\n.page {\n    // fix wrong offsets in bounding boxes\n    overflow: hidden;\n}\n\nh1, p, a {\n    color: #fff;\n}\n\nh2 {\n    align-items: flex-end;\n    background: map-get($color-demo, 2);\n    display: flex;\n    height: 96px;\n    justify-content: center;\n    margin: 0;\n\n    span {\n        background-color: map-get($color-demo, 4);\n        line-height: 1em;\n        margin-bottom: 1px;\n        padding: 12px 24px;\n        text-shadow: 0 1px 0 #fff;\n    }\n}\n\n.columns {\n    background-color: map-get($color-demo, 4);\n    display: flex;\n    flex-direction: row;\n    padding: 12px 0;\n}\n\n.box {\n    background: map-get($color-demo, 5);\n    padding: 8px;\n}\n\n\n.theme {\n    flex-basis: 0;\n    flex-grow: 1;\n    margin: 4px;\n    background-color: map-get($color-demo, 5);\n\n\n    h3 {\n        background-color: map-get($color-demo, 4);\n        font-size: $mmf-font-small;\n        margin: 0;\n        color: map-get($color-demo, 0);\n        text-align: center;\n    }\n\n    h4 {\n        margin: 0;\n        padding: 24px 0 12px 8px;\n        font-weight: normal;\n        color: map-get($color-demo, 1);\n        font-size: $mmf-font-small;\n        border-top: 2px $mmf-style--border map-get($color-demo, 4);\n        text-align: center;\n        font-style: italic;\n    }\n}\n"]}]);
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