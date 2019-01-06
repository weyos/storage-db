!function(t){"use strict";var c,e=Object.prototype,s=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",n=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag",a="object"==typeof module,u=t.regeneratorRuntime;if(u)a&&(module.exports=u);else{(u=t.regeneratorRuntime=a?module.exports:{}).wrap=w;var h="suspendedStart",l="suspendedYield",p="executing",d="completed",y={},f={};f[o]=function(){return this};var v=Object.getPrototypeOf,m=v&&v(v(_([])));m&&m!==e&&s.call(m,o)&&(f=m);var g=k.prototype=b.prototype=Object.create(f);L.prototype=g.constructor=k,k.constructor=L,k[i]=L.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(g),t},u.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[n]=function(){return this},u.AsyncIterator=j,u.async=function(t,e,r,n){var o=new j(w(t,e,r,n));return u.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(g),g[i]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},u.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},u.values=_,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=c)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=c),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),u=s.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=c),y}}}function w(t,e,r,n){var i,a,u,c,o=e&&e.prototype instanceof b?e:b,s=Object.create(o.prototype),f=new O(n||[]);return s._invoke=(i=t,a=r,u=f,c=h,function(t,e){if(c===p)throw new Error("Generator is already running");if(c===d){if("throw"===t)throw e;return B()}for(u.method=t,u.arg=e;;){var r=u.delegate;if(r){var n=N(r,u);if(n){if(n===y)continue;return n}}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(c===h)throw c=d,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);c=p;var o=x(i,a,u);if("normal"===o.type){if(c=u.done?d:l,o.arg===y)continue;return{value:o.arg,done:u.done}}"throw"===o.type&&(c=d,u.method="throw",u.arg=o.arg)}}),s}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function b(){}function L(){}function k(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(c){var e;this._invoke=function(r,n){function t(){return new Promise(function(t,e){!function e(t,r,n,o){var i=x(c[t],c,r);if("throw"!==i.type){var a=i.arg,u=a.value;return u&&"object"==typeof u&&s.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):Promise.resolve(u).then(function(t){a.value=t,n(a)},function(t){return e("throw",t,n,o)})}o(i.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function N(t,e){var r=t.iterator[e.method];if(r===c){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=c,N(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var n=x(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,y;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=c),e.delegate=null,y):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=c,t.done=!0,t};return n.next=n}}return{next:B}}function B(){return{value:c,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")()),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).StorageDB=e()}(this,function(){"use strict";function c(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function u(u){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=u.apply(t,a);function o(t){c(n,e,r,o,i,"next",t)}function i(t){c(n,e,r,o,i,"throw",t)}o(void 0)})}}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(t){return}}(),h=Symbol("openDB"),l=Symbol("db"),p=Symbol("putData"),d=Symbol("getData"),y=Symbol("removeData"),v=Symbol("removeDB");return function(){function r(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.dbName=t,this.storeName=t,this.version=e,this[l]=null}var t,e,n,o,i,a;return t=r,(e=[{key:h,value:function(){var o=this;return new Promise(function(r,n){var t=f.open(o.dbName,o.dbVersion);t.onerror=function(t){n(t)},t.onsuccess=function(){o[l]=t.result,r(o[l])},t.onupgradeneeded=function(t){if(o[l]=t.target.result,o[l].objectStoreNames.contains(o.storeName))r(o[l]);else{var e=o[l].createObjectStore(o.storeName,{keyPath:"id"});e.transaction.oncomplete=function(){r(o[l])},e.transaction.onerror=function(t){n(t)}}}})}},{key:p,value:function(n,o){var i=this;return new Promise(function(t,e){var r=i[l].transaction([i.storeName],"readwrite").objectStore(i.storeName).put({id:n,value:o});r.onsuccess=function(){t(i[l])},r.onerror=function(t){e(t)}})}},{key:d,value:function(n){var o=this;return new Promise(function(e,r){var t=o[l].transaction([o.storeName]).objectStore(o.storeName).get(n);t.onsuccess=function(t){e(t.target.result)},t.onerror=function(t){r(t)}})}},{key:y,value:function(t){var e=this,r=this[l].transaction([this.storeName],"readwrite").objectStore(this.storeName).delete(t);r.onsuccess=function(t){resolve(e[l])},r.onerror=function(t){reject(t)}}},{key:v,value:function(t){f.deleteDatabase(t)}},{key:"setItem",value:(a=u(regeneratorRuntime.mark(function t(e,r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this[l]){t.next=4;break}return t.next=3,this[h]();case 3:this[l]=t.sent;case 4:return t.next=6,this[p](e,r);case 6:return t.abrupt("return",this[l]);case 7:case"end":return t.stop()}},t,this)})),function(t,e){return a.apply(this,arguments)})},{key:"getItem",value:(i=u(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this[l]){t.next=4;break}return t.next=3,this[h]();case 3:this[l]=t.sent;case 4:return t.next=6,this[d](e);case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}},t,this)})),function(t){return i.apply(this,arguments)})},{key:"removeItem",value:(o=u(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this[l]){t.next=4;break}return t.next=3,this[h]();case 3:this[l]=t.sent;case 4:return t.next=6,this[y](e);case 6:case"end":return t.stop()}},t,this)})),function(t){return o.apply(this,arguments)})},{key:"removeDB",value:function(t){this[v](t)}}])&&s(t.prototype,e),n&&s(t,n),r}()});