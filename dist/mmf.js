/*! For license information please see mmf.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("mithril")):"function"==typeof define&&define.amd?define("MMF",["mithril"],t):"object"==typeof exports?exports.MMF=t(require("mithril")):e.MMF=t(e.m)}("undefined"!=typeof self?self:this,(function(e){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=8)}({0:function(t,o){t.exports=e},1:function(e,t,o){var r,n,s;n=[e,t],void 0===(s="function"==typeof(r=function(e,t){"use strict";var o,r,n="function"==typeof Map?new Map:(o=[],r=[],{has:function(e){return o.indexOf(e)>-1},get:function(e){return r[o.indexOf(e)]},set:function(e,t){-1===o.indexOf(e)&&(o.push(e),r.push(t))},delete:function(e){var t=o.indexOf(e);t>-1&&(o.splice(t,1),r.splice(t,1))}}),s=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){s=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function a(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!n.has(e)){var t,o=null,r=null,a=null,i=function(){e.clientWidth!==r&&d()},l=function(t){window.removeEventListener("resize",i,!1),e.removeEventListener("input",d,!1),e.removeEventListener("keyup",d,!1),e.removeEventListener("autosize:destroy",l,!1),e.removeEventListener("autosize:update",d,!1),Object.keys(t).forEach((function(o){e.style[o]=t[o]})),n.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",l,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",d,!1),window.addEventListener("resize",i,!1),e.addEventListener("input",d,!1),e.addEventListener("autosize:update",d,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",n.set(e,{destroy:l,update:d}),"vertical"===(t=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),o="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(o)&&(o=0),d()}function u(t){var o=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=o,e.style.overflowY=t}function c(){if(0!==e.scrollHeight){var t=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),n=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+o+"px",r=e.clientWidth,t.forEach((function(e){e.node.scrollTop=e.scrollTop})),n&&(document.documentElement.scrollTop=n)}}function d(){c();var t=Math.round(parseFloat(e.style.height)),o=window.getComputedStyle(e,null),r="content-box"===o.boxSizing?Math.round(parseFloat(o.height)):e.offsetHeight;if(r<t?"hidden"===o.overflowY&&(u("scroll"),c(),r="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==o.overflowY&&(u("hidden"),c(),r="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),a!==r){a=r;var n=s("autosize:resized");try{e.dispatchEvent(n)}catch(e){}}}}function i(e){var t=n.get(e);t&&t.destroy()}function l(e){var t=n.get(e);t&&t.update()}var u=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((u=function(e){return e}).destroy=function(e){return e},u.update=function(e){return e}):((u=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return a(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e},u.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],l),e}),t.default=u,e.exports=t.default})?r.apply(t,n):r)||(e.exports=s)},8:function(e,t,o){"use strict";o.r(t),o.d(t,"Button",(function(){return s})),o.d(t,"Checkbox",(function(){return a})),o.d(t,"CheckboxForm",(function(){return d})),o.d(t,"Errors",(function(){return u})),o.d(t,"getErrorClass",(function(){return l})),o.d(t,"Input",(function(){return f})),o.d(t,"InputForm",(function(){return p})),o.d(t,"Label",(function(){return i})),o.d(t,"Select",(function(){return h})),o.d(t,"SelectForm",(function(){return v})),o.d(t,"Switch",(function(){return b})),o.d(t,"SwitchForm",(function(){return y})),o.d(t,"Textarea",(function(){return O})),o.d(t,"TextareaForm",(function(){return j})),o.d(t,"ImagePreview",(function(){return z}));var r=o(0),n=o.n(r);var s={getClassNames(e){var t;const o=["mmf-button",null!==(t=e.theme)&&void 0!==t?t:"the-default",e.raised?"mmf-button--raised":"mmf-button--flat",e.disabled?"is-disabled":"is-enabled"];return e.class&&o.push(e.class),o.join(" ")},view(e){const t=Object.assign(Object.assign({},e.attrs),{theme:void 0,class:this.getClassNames(e.attrs)});return n()("button",t,e.children)}},a={view:({attrs:e})=>n()("input.mmf-checkbox",{"data-id":e.id,type:"checkbox",class:e.theme||"the-default",disabled:!0===e.disabled,checked:e.value,onchange:t=>e.onchange(t.target.checked),onfocus:e.onfocus,onblur:e.onblur})},i={view(e){const{invertOrder:t,title:o,class:r}=e.attrs;return!0===t?n()("label.order--label-last",{class:r},e.children,o&&n()("span.mmf-label",o)):n()("label.order--label-first",{class:r},o&&n()("span.mmf-label",o),e.children)}};function l(e){if(null==e||0===e.length)return"no-error";for(let o=0,r=e.length;o<r;o+=1){const r=e[o];if("string"==typeof(t=r).tag&&null!=t.attrs&&"object"==typeof t.attrs||"string"==typeof r)return"has-error";if(r&&"warning"!==r.severity)return"has-error"}var t;return"has-warning"}var u={view(e){const{errors:t}=e.attrs;return null==t||0===t.length?"":n()("ul.mmf-form__errors",t.map(e=>{return"string"==typeof(t=e).tag&&null!=t.attrs&&"object"==typeof t.attrs?n()("li.mmf-form__error.mmf-form__error--"+e.attrs.severity,e):function(e){return e&&e.message}(e)?"warning"===e.severity?n()("li.mmf-form__error.mmf-form__error--warning",n.a.trust(e.message)):n()("li.mmf-form__error.mmf-form__error--error",n.a.trust(e.message)):n()("li.mmf-form__error.mmf-form__error--error",n.a.trust(e));var t}))}};const c={id:null,title:"",disabled:!1,theme:"the-default",value:"",errors:[],description:"",placeholder:"",onchange:Function.prototype};var d={view(e){const t=Object.assign(Object.assign({},c),e.attrs);return n()(".mmf-form.mmf-form--checkbox.is-"+(t.disabled?"disabled":"enabled"),{class:`${l(t.errors)} ${t.theme}`},n()(i,Object.assign(Object.assign({},t),{invertOrder:!0!==t.invertOrder}),n()(a,{id:e.attrs.id,disabled:t.disabled,theme:t.theme,value:e.attrs.value,onchange:e.attrs.onchange,onfocus:e.attrs.onfocus,onblur:e.attrs.onblur})),n()(u,t),t.description&&n()(".mmf-meta",t.description),e.children)}},f={value:null,hasFocus:!1,view({attrs:e}){var t,o,r;let{value:s}=e;this.hasFocus&&null!=this.value&&(s=this.value),this.value=s;const a={"data-id":e.id,class:`${null!==(t=e.theme)&&void 0!==t?t:"the-default"} ${null!==(o=e.class)&&void 0!==o?o:""}`,disabled:e.disabled,placeholder:e.placeholder,type:null!==(r=e.type)&&void 0!==r?r:"text",value:s,oninput:e=>this.value=e.target.value,onfocus:t=>{this.hasFocus=!0,e.onfocus&&e.onfocus(t)},onblur:t=>{this.hasFocus=!1,e.onblur&&e.onblur(t)}};return a[!0===e.instantUpdate?"onkeyup":"onchange"]=()=>e.onchange(this.value),n()("input.mmf-input",a)}};const m={string:"text",integer:"number",number:"number"};var p={oncreate(e){this.$form=e.dom},updateClasses(e){const t=""!==e;this.$form.classList.remove(t?"is-empty":"not-empty"),this.$form.classList.add(!1===t?"is-empty":"not-empty")},onfocus(){this.$form.classList.add("has-focus"),this.$form.classList.remove("no-focus")},onblur(e){this.$form.classList.add("no-focus"),this.$form.classList.remove("has-focus"),this.updateClasses(e)},hasFocus(){return this.$form&&this.$form.classList.contains("has-focus")},view(e){var t;const o=m[e.attrs.type]||e.attrs.type||"text",r=Object.assign({id:null,title:"",value:"",errors:[],description:"",placeholder:"",instantUpdate:!1,onblur:Function.prototype,onfocus:Function.prototype,onchange:Function.prototype},e.attrs),s=this.hasFocus()?"has-focus":"no-focus",a=l(r.errors),c=""===r.value?"is-empty":"not-empty";return n()(".mmf-form.mmf-form--input.is-"+(r.disabled?"disabled":"enabled"),{class:`${s} ${a} ${c} ${null!==(t=r.theme)&&void 0!==t?t:"the-default"}`},n()(i,r,n()(f,{type:o,id:r.id,disabled:r.disabled,theme:r.theme,instantUpdate:r.instantUpdate,placeholder:r.placeholder,onchange:e=>r.onchange(function(e,t){if("number"===e){const e=parseInt(t),o=parseFloat(t);return o==t?o:isNaN(e)?t:e}return t}(o,e)),value:r.value,onfocus:e=>{this.onfocus(),r.onfocus&&r.onfocus(e)},onblur:e=>{this.onblur(e.target.value),r.onblur&&r.onblur(e)}})),n()(u,r),r.description&&n()(".mmf-meta",r.description),e.children)}};var h={view(e){const{attrs:t}=e,{theme:o="the-default"}=e.attrs,r=(e=>e.map(e=>"string"==typeof e?{value:e}:e))(t.options),s=r.find(e=>e.value===t.value),a=!0===t.disabled?"is-disabled":"is-enabled";return n()(".mmf-select__wrapper",{class:`${o} ${a} ${(null==s?void 0:s.color)?"with-color":""}`,oncreate:e=>this.$wrapper=e.dom},n()("span.select-icon",{style:"background-color: "+(null==s?void 0:s.color),oncreate:e=>this.$icon=e.dom}),n()("select.mmf-select",{"data-id":t.id,value:t.value,disabled:t.disabled,class:t.class,onfocus:()=>{this.$wrapper&&this.$wrapper.classList.add("has-focus"),t.onfocus&&t.onfocus(e)},onblur:()=>{this.$wrapper&&this.$wrapper.classList.remove("has-focus"),t.onblur&&t.onblur(e)},onchange:e=>{const o=null==r?void 0:r.find(t=>t.value===e.target.value);this.$wrapper.classList.toggle("with-color",null!=(null==o?void 0:o.color)),this.$icon.style.setProperty("background-color",null==o?void 0:o.color),t.onchange&&t.onchange(e.target.value)}},t.options.map(e=>(e=>e&&void 0!==e.value)(e)?n()("option",{value:""+e.value},e.title||e.value):n()("option",{value:""+e},e))))}},v={view(e){var t;const o=Object.assign({id:null,value:"",options:[{title:"-",value:!1}],errors:[],invertOrder:!1,description:""},e.attrs);return n()(".mmf-form.mmf-form--select.is-"+(o.disabled?"disabled":"enabled"),{class:`${null!==(t=o.theme)&&void 0!==t?t:"the-default"} ${l(o.errors)}`},n()(i,Object.assign(Object.assign({class:"mmf-grow-2"},o),{invertOrder:o.invertOrder}),n()(h,o)),n()(u,o),o.description&&n()(".mmf-meta",o.description),e.children)}},b={view:({attrs:e})=>n()("input.mmf-switch",{"data-id":e.id,type:"checkbox",class:e.theme||"the-default",disabled:!0===e.disabled,checked:e.value,onchange:t=>e.onchange(t.target.checked),onfocus:e.onfocus,onblur:e.onblur})};const g={id:null,title:"",disabled:!1,theme:"the-default",value:"",errors:[],description:"",onchange:Function.prototype};var y={view(e){const t=Object.assign(Object.assign({},g),e.attrs);return n()(".mmf-form.mmf-form--switch.is-"+(t.disabled?"disabled":"enabled"),{class:`${l(t.errors)} ${t.theme}`},n()(i,Object.assign(Object.assign({},t),{invertOrder:!0!==t.invertOrder}),n()(b,{id:e.attrs.id,disabled:t.disabled,theme:t.theme,value:e.attrs.value,onchange:e.attrs.onchange,onfocus:e.attrs.onfocus,onblur:e.attrs.onblur})),n()(u,t),t.description&&n()(".mmf-meta",t.description),e.children)}},w=o(1),x=o.n(w);const $=window.requestAnimationFrame,_=Function.prototype;var O={boolean:!1,onupdate(e){$(()=>x.a.update(e.dom))},view(e){var t,o;const r=Object.assign({value:"",rows:1,placeholder:"",disabled:!1,instantUpdate:!1,onblur:_,onfocus:_,onchange:_,oncreate:_,onbeforeremove:_},e.attrs),s=!0===r.disabled;this.focus&&(r.value=this.textarea.value);const a={"data-id":r.id,value:r.value,class:`${null!==(t=r.theme)&&void 0!==t?t:"the-default"} ${null!==(o=r.class)&&void 0!==o?o:""}`,rows:r.rows,disabled:s,placeholder:r.placeholder,onblur:e=>{this.focus=!1,r.onblur&&r.onblur(e)},onfocus:e=>{this.focus=!0,r.onfocus&&r.onfocus(e)},onupdate:e=>x.a.update(e.dom),oncreate:e=>{this.textarea=e.dom,r.oncreate(e),x()(e.dom),x.a.update(e.dom)},onbeforeremove:e=>{r.onbeforeremove(e),x.a.destroy(e.dom)}};return a[!0===r.instantUpdate?"onkeyup":"onchange"]=e=>r.onchange(e.target.value),n()("textarea.mmf-textarea",a)}};function F(e){return null==e||""===e}var j={oncreate(e){this.$form=e.dom,this.onblur(e.attrs.value)},onfocus(){this.$form.classList.remove("no-focus"),this.$form.classList.add("has-focus")},onblur(e){this.$form.classList.remove("has-focus"),this.$form.classList.add("no-focus"),this.updateClasses(e)},updateClasses(e){const t=!1===F(e);this.$form.classList.remove(t?"is-empty":"not-empty"),this.$form.classList.add(!1===t?"is-empty":"not-empty")},onupdate(e){this.updateClasses(e.attrs.value)},view(e){const t=Object.assign({id:null,title:"",value:"",errors:[],disabled:!1,description:"",placeholder:"",rows:1,theme:"the-default",instantUpdate:!1,onblur:Function.prototype,onfocus:Function.prototype,onchange:Function.prototype},e.attrs),o=!0===t.disabled;return n()(".mmf-form.mmf-form--textarea.is-"+(o?"disabled":"enabled"),{class:`${t.theme} ${l(t.errors)}`},n()(i,t,n()(O,{id:t.id,value:t.value,disabled:o,theme:t.theme,instantUpdate:t.instantUpdate,placeholder:t.placeholder,rows:t.rows,onchange:t.onchange,onblur:e=>{this.onblur(e.target.value),t.onblur(e)},onfocus:e=>{this.onfocus(),t.onfocus(e)}})),n()(u,t),t.description&&n()(".mmf-meta",t.description),e.children)}};const E=[16,9];function L(e){let t=e.split(":").map(parseFloat);return t=2===t.length?t:E,100*t[1]/t[0]}const k={view(e){const{attrs:t}=e;return[F(t.url)?n()(".mmf-preview__placeholder",t.placeholder):[t.description&&n()(".mmf-preview__description",n.a.trust(t.description)),n()(".mmf-preview__overflow-indicator")],e.children]}},C={view(e){const{attrs:t}=e;return n()(".mmf-preview__content",{style:!F(t.url)&&(o=t.maxRatio,`padding-bottom: ${L(o).toFixed(2)}%;`),oncreate:t.oncreate},F(t.url)?n()(".mmf-preview__placeholder",t.placeholder):[n()("img",{src:t.url,onload:t.onload}),t.description&&n()(".mmf-preview__description",n.a.trust(t.description)),n()(".mmf-preview__overflow-indicator")],e.children);var o}};var z={updateRatio(e,t){if(null!=this.overflowContainer&&t.naturalWidth){const o=L(e),r=L(`${t.naturalWidth}:${t.naturalHeight}`);o>=r?(this.overflowContainer.style.paddingBottom=r.toFixed(2)+"%",this.overflowContainer.classList.remove("with-overflow"),this.hasOverflow=!1):(this.overflowContainer.style.paddingBottom=o.toFixed(2)+"%",this.overflowContainer.classList.add("with-overflow"),this.hasOverflow=!0)}},view(e){const t=Object.assign({url:null,class:"",asBackgroundImage:!1,description:null,placeholder:null,onclick:null,maxRatio:"16:9",onload:t=>this.updateRatio(e.attrs.maxRatio,t.currentTarget),oncreate:e=>{this.overflowContainer=e.dom}},e.attrs);return n()(".mmf-preview.mmf-preview--image",{class:t.class+(F(t.url)?"":" with-image"),style:t.asBackgroundImage&&!F(t.url)&&`background-image: url(${t.url});`},t.asBackgroundImage?n()(k,t,e.children):n()(C,t,e.children))}}}})}));