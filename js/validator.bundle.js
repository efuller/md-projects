!function(e){function n(e){delete installedChunks[e]}function t(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.charset="utf-8",t.src=p.p+""+e+"."+g+".hot-update.js",n.appendChild(t)}function r(){return new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var t=new XMLHttpRequest,r=p.p+""+g+".hot-update.json";t.open("GET",r,!0),t.timeout=1e4,t.send(null)}catch(e){return n(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)n(new Error("Manifest request to "+r+" failed."));else{try{var o=JSON.parse(t.responseText)}catch(e){return void n(e)}e(o)}}})}function o(e){var n=M[e];if(!n)return p;var t=function(t){return n.hot.active?(M[t]?M[t].parents.indexOf(e)<0&&M[t].parents.push(e):E=[e],n.children.indexOf(t)<0&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),E=[]),w=!1,p(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(n){p[e]=n}}};for(var o in p)Object.prototype.hasOwnProperty.call(p,o)&&Object.defineProperty(t,o,r(o));return Object.defineProperty(t,"e",{enumerable:!0,value:function(e){function n(){P--,"prepare"===D&&(x[e]||l(e),0===P&&0===C&&u())}return"ready"===D&&i("prepare"),P++,p.e(e).then(n,function(e){throw n(),e})}}),t}function a(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:w,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:c,apply:f,status:function(e){if(!e)return D;_.push(e)},addStatusHandler:function(e){_.push(e)},removeStatusHandler:function(e){var n=_.indexOf(e);n>=0&&_.splice(n,1)},data:j[e]};return w=!0,n}function i(e){D=e;for(var n=0;n<_.length;n++)_[n].call(null,e)}function s(e){return+e+""===e?+e:e}function c(e){if("idle"!==D)throw new Error("check() is only allowed in idle status");return b=e,i("check"),r().then(function(e){if(!e)return i("idle"),null;H={},x={},I=e.c,y=e.h,i("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});return v={},l(4),"prepare"===D&&0===P&&0===C&&u(),n})}function d(e,n){if(I[e]&&H[e]){H[e]=!1;for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--C&&0===P&&u()}}function l(e){I[e]?(H[e]=!0,C++,t(e)):x[e]=!0}function u(){i("ready");var e=m;if(m=null,e)if(b)f(b).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(s(t));e.resolve(n)}}function f(t){function r(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,s=a.chain;if((l=M[i])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<l.parents.length;c++){var d=l.parents[c],u=M[d];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([d]),moduleId:i,parentId:d};n.indexOf(d)>=0||(u.hot._acceptedDependencies[i]?(t[d]||(t[d]=[]),o(t[d],[i])):(delete t[d],n.push(d),r.push({chain:s.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];e.indexOf(r)<0&&e.push(r)}}if("ready"!==D)throw new Error("apply() is only allowed in ready status");t=t||{};var a,c,d,l,u,f={},h=[],m={},b=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){u=s(w);var O;O=v[w]?r(u):{type:"disposed",moduleId:w};var _=!1,C=!1,P=!1,x="";switch(O.chain&&(x="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+O.moduleId+x));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+x));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(_=new Error("Aborted because "+u+" is not accepted"+x));break;case"accepted":t.onAccepted&&t.onAccepted(O),C=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),P=!0;break;default:throw new Error("Unexception type "+O.type)}if(_)return i("abort"),Promise.reject(_);if(C){m[u]=v[u],o(h,O.outdatedModules);for(u in O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,u)&&(f[u]||(f[u]=[]),o(f[u],O.outdatedDependencies[u]))}P&&(o(h,[O.moduleId]),m[u]=b)}var H=[];for(c=0;c<h.length;c++)u=h[c],M[u]&&M[u].hot._selfAccepted&&H.push({module:u,errorHandler:M[u].hot._selfAccepted});i("dispose"),Object.keys(I).forEach(function(e){I[e]===!1&&n(e)});for(var N,k=h.slice();k.length>0;)if(u=k.pop(),l=M[u]){var A={},T=l.hot._disposeHandlers;for(d=0;d<T.length;d++)(a=T[d])(A);for(j[u]=A,l.hot.active=!1,delete M[u],d=0;d<l.children.length;d++){var L=M[l.children[d]];L&&((N=L.parents.indexOf(u))>=0&&L.parents.splice(N,1))}}var S,$;for(u in f)if(Object.prototype.hasOwnProperty.call(f,u)&&(l=M[u]))for($=f[u],d=0;d<$.length;d++)S=$[d],(N=l.children.indexOf(S))>=0&&l.children.splice(N,1);i("apply"),g=y;for(u in m)Object.prototype.hasOwnProperty.call(m,u)&&(e[u]=m[u]);var U=null;for(u in f)if(Object.prototype.hasOwnProperty.call(f,u)){l=M[u],$=f[u];var B=[];for(c=0;c<$.length;c++)S=$[c],a=l.hot._acceptedDependencies[S],B.indexOf(a)>=0||B.push(a);for(c=0;c<B.length;c++){a=B[c];try{a($)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:$[c],error:e}),t.ignoreErrored||U||(U=e)}}}for(c=0;c<H.length;c++){var q=H[c];u=q.module,E=[u];try{p(u)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,orginalError:e}),t.ignoreErrored||U||(U=n),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||U||(U=e)}}return U?(i("fail"),Promise.reject(U)):(i("idle"),Promise.resolve(h))}function p(n){if(M[n])return M[n].exports;var t=M[n]={i:n,l:!1,exports:{},hot:a(n),parents:(O=E,E=[],O),children:[]};return e[n].call(t.exports,t,t.exports,o(n)),t.l=!0,t.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){d(e,n),h&&h(e,n)};var m,v,y,b=!0,g="9db52ae2cf1544d71bf7",j={},w=!0,E=[],O=[],_=[],D="idle",C=0,P=0,x={},H={},I={},M={};p.m=e,p.c=M,p.i=function(e){return e},p.d=function(e,n,t){p.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},p.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(n,"a",n),n},p.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},p.p="/",p.h=function(){return g},o("./src/js/json-validator/main.js")(p.s="./src/js/json-validator/main.js")}({"./src/js/json-validator/json-validator.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){function e(e){return g.hasComma.test(e)}function n(e){return g.string.test(e)}function t(e){return g.stringNoComma.test(e)}function r(e){return g.bool.test(e)}function o(e){return g.boolNoComma.test(e)}function a(e){return g.num.test(e)}function i(e){return g.numNoComma.test(e)}function s(e){return g.arrayStart.test(e)}function c(e){return g.arrayEnd.test(e)}function d(e){return g.arrayEndNoComma.test(e)}function l(e){return g.objectStart.test(e)}function u(e){return g.objectEnd.test(e)}function f(e){return g.objectEndNoComma.test(e)}function p(e){return g.arrayObjectStart.test(e)}function h(e){return g.objectEnd.test(e)}function m(e){return g.objectEndNoComma.test(e)}function v(e){return e.trim().replace(/^\s*\r*\t*/gm,"").split("\n")}function y(e,n,t){return{status:e,message:n,line:t}}function b(b){var j=!1,w=!1,E=!1,O=1,_=v(b),D=_.length;if(!g.beginningPattern.test(_[0]))return y(!1,"There was an error on line 1.",_[0]);if(!g.endPattern.test(_[_.length-1]))return y(!1,"There was an error on line "+(_.length-1),_[_.length-1]);for(;O<D&&O!==D-1;O+=1){var C=_[O].trim(),P=_[O+1].trim(),x=O+1;if(O===D-2){if(e(C))return y(!1,"You probably have a dangling comma on line "+x,_[O]);break}if(j||!l(C))if(j&&u(C))j=!1;else{if(j){if(u(P)||f(P)){if(e(C))return y(!1,"You probably have a dangling comma on line "+x,_[O]);if(t(C)||o(C)||i(C))continue;return y(!1,"There was an issue with the last element in the object on line "+x,_[O])}if(!n(C)&&!r(C)&&!a(C))return y(!1,"There was an error on line "+x,_[O])}if(E===!1&&s(C))E=!0;else if(E&&c(C))E=!1;else{if(E){if(p(C)){w=!0;continue}if(w){if(c(P)||d(P)){if(m(C))continue;return y(!1,"Probably have a dangling comma at the closing of the last array object on line "+x,_[O])}if(u(P)||f(P)){if(e(C))return y(!1,"You probably have a dangling comma on line "+x,_[O]);if(t(C)||o(C)||i(C))continue;return y(!1,"There was an issue with the last element in the object on line "+x,_[O])}if(h(C)){w=!1;continue}if(!n(C)&&!r(C)&&!a(C))return y(!1,"There was an error on line "+x,_[O])}}if(!(a(C)||r(C)||n(C)))return y(!1,"There is an error on line "+x,_[O])}}else j=!0}return{status:!0,message:"Your JSON is valid!"}}var g={beginningPattern:/^{$/,endPattern:/^}$/,string:/^"\w*":\s*"\w*(\s*\w*.,?)*",$/,stringNoComma:/^"\w*":\s*"\w*(\s*\w*.,?)*"$/,bool:/"\w+":\s?(true|false),/,boolNoComma:/"\w+":\s?(true|false)/,num:/"\w+":\s?\d*,/,numNoComma:/"\w+":\s?\d*/,objectStart:/"\w+":\s?{/,objectEnd:/^},$/,objectEndNoComma:/^}$/,arrayStart:/"\w+":\s?\[/,arrayEnd:/^],$/,arrayEndNoComma:/^]$/,arrayObjectStart:/^{$/,arrayObjectEnd:/^},$/,arrayObjectEndNoComma:/^}$/,hasComma:/,$/};return{validate:b}}()},"./src/js/json-validator/main.js":function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t("./src/js/json-validator/json-validator.js"),a=r(o);n.default=function(){function e(){d.textArea=document.getElementById("json-input"),d.submit=document.getElementById("submit-json"),d.fileUpload=document.getElementById("file-upload"),d.flashContainer=document.getElementById("flash-container"),d.flashMessage=document.getElementById("flash-message"),d.flashClose=document.getElementById("flash-close")}function n(e){e.status?d.flashContainer.classList.add("flash--success"):d.flashContainer.classList.add("flash--error"),d.flashContainer.classList.remove("flash--closed"),void 0!==e.line?d.flashMessage.innerHTML=e.message+"<br/><pre>"+e.line+"</pre>":d.flashMessage.innerHTML=e.message}function t(){d.flashContainer.classList.remove("flash--success","flash--error"),d.flashContainer.classList.add("flash--closed"),d.flashMessage.innerHTML=""}function r(){t();var e=d.textArea.value;n(a.default.validate(e))}function o(){var e=d.fileUpload.files[0];if("application/json"!==e.type)return void console.log("You must use a valid JSON file type.");var n=new FileReader;n.onload=function(){d.textArea.value=n.result},n.readAsText(e)}function i(){t()}function s(){d.submit.addEventListener("click",r),d.fileUpload.addEventListener("change",o),d.flashClose.addEventListener("click",i)}function c(){e(),s()}var d={};c()}()}});