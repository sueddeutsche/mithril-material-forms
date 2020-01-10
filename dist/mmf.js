var MMF=function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=7)}([function(t,e){t.exports=m},function(t,e,r){var n=r(0);t.exports={view:function(t){return n("label.mmf-label",{for:t.attrs.id,class:t.attrs.class},t.attrs.title)}}},function(t,e,r){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(0);t.exports={getErrorClass:r(10),view:function(t){return null==t.attrs.errors||0===t.attrs.errors.length?"":o("ul.mmf-form__errors",t.attrs.errors.map(function(t){return function(t){return"string"==typeof t.tag&&null!=t.attrs&&"object"===n(t.attrs)}(t)?o("li.mmf-form__error.mmf-form__error--".concat(t.attrs.severity),t):t&&"object"===n(t)?"warning"===t.severity?o("li.mmf-form__error.mmf-form__error--warning",o.trust(t.message)):o("li.mmf-form__error.mmf-form__error--error",o.trust(t.message)):o("li.mmf-form__error.mmf-form__error--error",o.trust(t))}))}}},function(t,e,r){var n=r(0);t.exports={view:function(t){var e=t.attrs;return n("input.mmf-checkbox",{id:e.id,type:"checkbox",disabled:!0===e.disabled,checked:e.value,onchange:function(t){return e.onchange(t.target.checked)},onfocus:e.onfocus,onblur:e.onblur})}}},function(t,e,r){var a=r(0);t.exports={value:null,hasFocus:!1,onupdate:function(t){t.dom.id=t.attrs.id},view:function(t){var e=this,r=t.attrs,n=r.value;this.hasFocus&&null!=this.value&&(n=this.value),this.value=n;var o={type:r.type,value:n,placeholder:r.placeholder,disabled:!0===r.disabled,oninput:function(t){return e.value=t.target.value},oncreate:function(t){return t.dom.id=r.id},onfocus:function(t){e.hasFocus=!0,r.onfocus&&r.onfocus(t)},onblur:function(t){e.hasFocus=!1,r.onblur&&r.onblur(t)}};return o[!0===r.instantUpdate?"onkeyup":"onchange"]=function(){return r.onchange(e.value)},a("input.mmf-input",o)}}},function(t,e,r){var n=r(0);t.exports={view:function(e){var r=this;return n("div.mmf-select__wrapper",{class:!0===e.attrs.disabled?"is-disabled":"is-enabled",oncreate:function(t){return r.$wrapper=t.dom}},n("select.mmf-select",{id:e.attrs.id,value:e.attrs.value,disabled:e.attrs.disabled,class:e.attrs.class,onfocus:function(){r.$wrapper&&r.$wrapper.classList.add("has-focus"),e.attrs.onfocus&&e.attrs.onfocus(e)},onblur:function(){r.$wrapper&&r.$wrapper.classList.remove("has-focus"),e.attrs.onblur&&e.attrs.onblur(e)},onchange:function(t){return e.attrs.onchange(t.target.value)}},e.attrs.options.map(function(t){var e=t.title||t;return t="".concat(null==t.value?t:t.value),n("option",{value:t},e)})))}}},function(t,e,r){function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var a=r(0),i=r(14);t.exports={onupdate:function(t){i.update(t.dom)},view:function(e){var r=o({id:null,value:"",rows:1,placeholder:"",disabled:!1,instantUpdate:!1,onblur:Function.prototype,onfocus:Function.prototype,onchange:Function.prototype,oncreate:Function.prototype,onbeforeremove:Function.prototype},e.attrs),t=!0===r.disabled,n={id:r.id,value:r.value,rows:r.rows,disabled:t,placeholder:r.placeholder,onblur:r.onblur,onfocus:r.onfocus,onupdate:function(t){return i.update(t.dom)},oncreate:function(t){r.oncreate(t),i(t.dom),i.update(e.dom)},onbeforeremove:function(t){r.onbeforeremove(t),i.destroy(t.dom)}};return n[!0===r.instantUpdate?"onkeyup":"onchange"]=function(t){return r.onchange(t.target.value)},a("textarea.mmf-textarea",n)}}},function(t,e,r){t.exports={button:r(8),checkbox:r(3),checkboxForm:r(9),errors:r(2),input:r(4),inputForm:r(11),label:r(1),select:r(5),selectForm:r(13),textarea:r(6),textareaForm:r(15),imagePreview:r(16)}},function(t,e,r){function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var o=r(0);t.exports={getClassNames:function(t){var e=[];return e.push(t.raised?"mmf-button--raised":"mmf-button--flat"),e.push(t.disabled?"is-disabled":"is-enabled"),t.class&&e.push(t.class),e.join(" ")},view:function(e){var t=n({disabled:!1,onclick:function(t){return e.attrs.onclick(t)}},e.attrs);return t.class=this.getClassNames(e.attrs),o("button.mmf-button",t,e.children)}}},function(t,e,r){function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var o=r(0),a=r(3),i=r(1),s=r(2),u={id:null,title:"",disabled:!1,value:"",errors:[],description:"",placeholder:"",onchange:Function.prototype};t.exports={view:function(t){var e=n({},u,t.attrs);return o(".mmf-form.mmf-form--checkbox.mmf-form--".concat(e.disabled?"disabled":"enabled"),{class:s.getErrorClass(e.errors)},o(a,{id:t.attrs.id,disabled:e.disabled,value:t.attrs.value,onchange:t.attrs.onchange,onfocus:t.attrs.onfocus,onblur:t.attrs.onblur}),o(i,e),o(s,e),e.description?o(".mmf-meta",e.description):"")}}},function(t,e){t.exports=function(t){if(null==t||0===t.length)return"no-error";for(var e=0,r=t.length;e<r;e+=1)if("string"==typeof t[e]||"warning"!==t[e].severity)return"has-error";return"has-warning"}},function(t,e,r){function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var l=r(0),c=r(4),f=r(1),d=r(12),p=r(2),m={string:"text",integer:"number",number:"number"};t.exports={oncreate:function(t){this.$form=t.dom},updateClasses:function(t){var e=""!==t;this.$form.classList.remove(e?"isEmpty":"isNotEmpty"),this.$form.classList.add(!1==e?"isEmpty":"isNotEmpty")},onfocus:function(){this.$form.classList.add("hasFocus"),this.$form.classList.remove("hasNoFocus")},onblur:function(t){this.$form.classList.add("hasNoFocus"),this.$form.classList.remove("hasFocus"),this.updateClasses(t)},hasFocus:function(){return this.$form&&this.$form.classList.contains("hasFocus")},view:function(t){var e=this,r=m[t.attrs.type]||"text",n=u({id:null,title:"",value:"",errors:[],description:"",placeholder:"",instantUpdate:!1,onblur:Function.prototype,onfocus:Function.prototype,onchange:Function.prototype},t.attrs),o=this.hasFocus()?"hasFocus":"hasNoFocus",a=p.getErrorClass(n.errors),i=""===n.value?"isEmpty":"isNotEmpty",s=l(".mmf-form.mmf-form--input.mmf-form--".concat(n.disabled?"disabled":"enabled"),{class:"".concat(o," ").concat(a," ").concat(i)},l(f,n),l(c,{type:r,id:n.id,disabled:n.disabled,instantUpdate:n.instantUpdate,placeholder:n.placeholder,onchange:function(t){return n.onchange(d(r,t))},value:n.value,onfocus:function(t){e.onfocus(),n.onfocus&&n.onfocus(t)},onblur:function(t){e.onblur(t.target.value),n.onblur&&n.onblur(t)}}),l(p,n),n.description?l(".mmf-meta",n.description):"");return s}}},function(t,e){t.exports=function(t,e){if("number"!==t)return e;var r=parseInt(e),n=parseFloat(e);return n==e?n:isNaN(r)?e:r}},function(t,e,r){function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var o=r(0),a=r(5),i=r(1),s=r(2);t.exports={view:function(t){var e=n({id:null,value:"",options:[{title:"-",value:!1}],errors:[],description:"",placeholder:"",onchange:Function.prototype},t.attrs);return o(".mmf-form.mmf-form--select.mmf-form--".concat(e.disabled?"disabled":"enabled"),{class:s.getErrorClass(e.errors)},o(a,e),o(i,n({class:"mmf-grow-2"},e)),o(s,e),e.description?o(".mmf-meta",e.description):"")}}},function(t,e,r){var n,o,a;o=[t,e],void 0===(a="function"==typeof(n=function(t,e){"use strict";var d=typeof Map==="function"?new Map:function(){var n=[];var o=[];return{has:function t(e){return n.indexOf(e)>-1},get:function t(e){return o[n.indexOf(e)]},set:function t(e,r){if(n.indexOf(e)===-1){n.push(e);o.push(r)}},delete:function t(e){var r=n.indexOf(e);if(r>-1){n.splice(r,1);o.splice(r,1)}}}}(),p=function t(e){return new Event(e,{bubbles:true})};try{new Event("test")}catch(t){p=function t(e){var r=document.createEvent("Event");r.initEvent(e,true,false);return r}}function n(o){if(!o||!o.nodeName||o.nodeName!=="TEXTAREA"||d.has(o))return;var r=null;var n=null;var a=null;function t(){var t=window.getComputedStyle(o,null);if(t.resize==="vertical"){o.style.resize="none"}else if(t.resize==="both"){o.style.resize="horizontal"}if(t.boxSizing==="content-box"){r=-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom))}else{r=parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth)}if(isNaN(r)){r=0}l()}function i(t){{var e=o.style.width;o.style.width="0px";o.offsetWidth;o.style.width=e}o.style.overflowY=t}function s(t){var e=[];while(t&&t.parentNode&&t.parentNode instanceof Element){if(t.parentNode.scrollTop){e.push({node:t.parentNode,scrollTop:t.parentNode.scrollTop})}t=t.parentNode}return e}function u(){if(o.scrollHeight===0){return}var t=s(o);var e=document.documentElement&&document.documentElement.scrollTop;o.style.height="";o.style.height=o.scrollHeight+r+"px";n=o.clientWidth;t.forEach(function(t){t.node.scrollTop=t.scrollTop});if(e){document.documentElement.scrollTop=e}}function l(){u();var t=Math.round(parseFloat(o.style.height));var e=window.getComputedStyle(o,null);var r=e.boxSizing==="content-box"?Math.round(parseFloat(e.height)):o.offsetHeight;if(r<t){if(e.overflowY==="hidden"){i("scroll");u();r=e.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(o,null).height)):o.offsetHeight}}else{if(e.overflowY!=="hidden"){i("hidden");u();r=e.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(o,null).height)):o.offsetHeight}}if(a!==r){a=r;var n=p("autosize:resized");try{o.dispatchEvent(n)}catch(t){}}}var c=function t(){if(o.clientWidth!==n){l()}};var f=function(e){window.removeEventListener("resize",c,false);o.removeEventListener("input",l,false);o.removeEventListener("keyup",l,false);o.removeEventListener("autosize:destroy",f,false);o.removeEventListener("autosize:update",l,false);Object.keys(e).forEach(function(t){o.style[t]=e[t]});d.delete(o)}.bind(o,{height:o.style.height,resize:o.style.resize,overflowY:o.style.overflowY,overflowX:o.style.overflowX,wordWrap:o.style.wordWrap});o.addEventListener("autosize:destroy",f,false);if("onpropertychange"in o&&"oninput"in o){o.addEventListener("keyup",l,false)}window.addEventListener("resize",c,false);o.addEventListener("input",l,false);o.addEventListener("autosize:update",l,false);o.style.overflowX="hidden";o.style.wordWrap="break-word";d.set(o,{destroy:f,update:l});t()}function r(t){var e=d.get(t);if(e){e.destroy()}}function o(t){var e=d.get(t);if(e){e.update()}}var a=null;if(typeof window==="undefined"||typeof window.getComputedStyle!=="function"){a=function t(e){return e};a.destroy=function(t){return t};a.update=function(t){return t}}else{a=function t(e,r){if(e){Array.prototype.forEach.call(e.length?e:[e],function(t){return n(t,r)})}return e};a.destroy=function(t){if(t){Array.prototype.forEach.call(t.length?t:[t],r)}return t};a.update=function(t){if(t){Array.prototype.forEach.call(t.length?t:[t],o)}return t}}e.default=a,t.exports=e["default"]})?n.apply(e,o):n)||(t.exports=a)},function(t,e,r){function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var a=r(0),i=r(6),s=r(1),u=r(2);t.exports={oncreate:function(t){this.$form=t.dom,this.onblur(t.attrs.value)},onfocus:function(){this.$form.classList.remove("hasNoFocus"),this.$form.classList.add("hasFocus")},onblur:function(t){this.$form.classList.remove("hasFocus"),this.$form.classList.add("hasNoFocus"),this.updateClasses(t)},updateClasses:function(t){var e=!1===function(t){return null==t||""===t}(t);this.$form.classList.remove(e?"isEmpty":"isNotEmpty"),this.$form.classList.add(!1==e?"isEmpty":"isNotEmpty")},onupdate:function(t){this.updateClasses(t.attrs.value)},view:function(t){var e=this,r=o({id:null,title:"",value:"",errors:[],disabled:!1,description:"",placeholder:"",rows:1,instantUpdate:!1,onblur:Function.prototype,onfocus:Function.prototype,onchange:Function.prototype},t.attrs),n=!0===r.disabled;return a(".mmf-form.mmf-form--textarea.mmf-form--".concat(n?"disabled":"enabled"),{class:u.getErrorClass(r.errors)},a(s,r),a(i,{id:r.id,value:r.value,disabled:n,instantUpdate:r.instantUpdate,placeholder:r.placeholder,rows:r.rows,onchange:r.onchange,onblur:function(t){e.onblur(t.target.value),r.onblur(t)},onfocus:function(t){e.onfocus(),r.onfocus(t)}}),a(u,r),r.description?a(".mmf-meta",r.description):"")}}},function(t,e,r){function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var o=r(0),a=[16,9];function i(t){return null==t||""===t}function s(t){var e=t.split(":").map(parseFloat);return 100*(e=2===e.length?e:a)[1]/e[0]}var u={view:function(t){var e=t.attrs;return[i(e.url)?o(".mmf-preview__placeholder",e.placeholder):[e.description?o(".mmf-preview__description",o.trust(e.description)):"",o(".mmf-preview__overflow-indicator")],t.children]}},l={view:function(t){var e=t.attrs;return o(".mmf-preview__content",{style:i(e.url)?"":"padding-bottom: ".concat(function(t){return"".concat(s(t).toFixed(2),"%")}(e.maxRatio),";"),oncreate:e.oncreate},i(e.url)?o(".mmf-preview__placeholder",e.placeholder):[o("img",{src:e.url,onload:e.onload}),e.description?o(".mmf-preview__description",o.trust(e.description)):"",o(".mmf-preview__overflow-indicator")],t.children)}},c={overflowContainer:null,updateRatio:function(t,e){if(null!=this.overflowContainer&&e.naturalWidth){var r=s(t),n=s("".concat(e.naturalWidth,":").concat(e.naturalHeight));n<=r?(this.overflowContainer.style.paddingBottom="".concat(n.toFixed(2),"%"),this.overflowContainer.classList.remove("with-overflow"),this.hasOverflow=!1):(this.overflowContainer.style.paddingBottom="".concat(r.toFixed(2),"%"),this.overflowContainer.classList.add("with-overflow"),this.hasOverflow=!0)}},view:function(t){var e=this,r=n({url:null,class:"",asBackgroundImage:!1,description:null,placeholder:null,onclick:null,maxRatio:"16:9",onload:function(t){return e.updateRatio(r.maxRatio,t.currentTarget)},oncreate:function(t){e.overflowContainer=t.dom}},t.attrs);return o(".mmf-preview.mmf-preview--image",{class:r.class+(i(r.url)?"":" with-image"),style:r.asBackgroundImage&&!i(r.url)?"background-image: url(".concat(r.url,");"):""},r.asBackgroundImage?o(u,r,t.children):o(l,r,t.children))}};t.exports=c}]);