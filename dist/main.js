(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"*{\n    margin: 0;\n    padding: 0;\n}\ndiv{\n    background-color:#380036;\n    height:fit-content;\n    \n}\n\n.title{\n    text-align:center;\n    color: rgb(237, 240, 102);\n    font-size: 55px;\n    padding-bottom: 25px;\n}\n\n\n\nheader ul{\n    list-style-type: none;\n    display: flex;\n    justify-content: space-around;\n}\n\nli{\n    margin: 10px 0 0 5px;\n    font-size: 38px;\n    color: rgb(158, 156, 12);\n    cursor: pointer;\n    position: relative;\n}\n\nli:hover{\n    color: white;\n\n}\n\n\n\n#content{\n\n    height: 500px;\n    background-color:rgba(233, 233, 10, 0.863);\n}\n\n\n.image{\n    \n    height:500px;\n    width:100%;\n}\n\n.cont{\n    text-align:center;\n    font-size:40px;\n    padding:100px 0 0 0;\n    color:#380036;\n\n}\n.address{\n    font-weight:bold;\n    text-align: center;\n    padding:10px 0 0 0;\n    font-size:35px;\n    color:#380036;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:m,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"3250c629ae6c72e2386d.jpg";function n(){let n=document.querySelector("#content");n.replaceChildren();const t=document.createElement("img");t.classList.add("image"),t.src=e,t.alt="image of restarant",n.append(t)}const r=t.p+"f1c029ebae0f1721e8c7.jpg";function o(){const e=document.querySelector("#content");e.replaceChildren();const n=document.createElement("img");n.classList.add("image"),n.src=r,n.alt="Item-image",e.appendChild(n)}function a(){const e=document.querySelector("#content");e.replaceChildren();const n=document.createElement("h2");n.textContent="Address",n.classList.add("cont"),e.appendChild(n);const t=document.createElement("p");t.textContent="83-90 vinayakar kovil street,",t.classList.add("address"),e.appendChild(t);const r=document.createElement("p");r.textContent="p.c.patti,",r.classList.add("address"),e.appendChild(r);const o=document.createElement("p");o.textContent="theni.",o.classList.add("address"),e.appendChild(o);const a=document.createElement("p");a.textContent="ph-no:8270813910",a.classList.add("address"),e.appendChild(a)}var c=t(379),i=t.n(c),s=t(795),d=t.n(s),l=t(569),p=t.n(l),u=t(565),f=t.n(u),m=t(216),h=t.n(m),v=t(589),g=t.n(v),y=t(426),x={};x.styleTagTransform=g(),x.setAttributes=f(),x.insert=p().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=h(),i()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals,n(),document.querySelector(".home").addEventListener("click",n),document.querySelector(".menu").addEventListener("click",o),document.querySelector(".contact").addEventListener("click",a)})()})();