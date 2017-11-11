webpackJsonp([0],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_api__ = __webpack_require__(316);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["b"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularFireAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_auth__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_observeOn__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_observeOn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_observeOn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__);








var AngularFireAuth = (function () {
    function AngularFireAuth(app) {
        var _this = this;
        this.app = app;
        this.auth = app.auth();
        var authState$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (subscriber) {
            var unsubscribe = _this.auth.onAuthStateChanged(subscriber);
            return { unsubscribe: unsubscribe };
        });
        this.authState = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_observeOn__["observeOn"].call(authState$, new __WEBPACK_IMPORTED_MODULE_4_angularfire2__["c" /* ZoneScheduler */](Zone.current));
        var idToken$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (subscriber) {
            var unsubscribe = _this.auth.onIdTokenChanged(subscriber);
            return { unsubscribe: unsubscribe };
        }).switchMap(function (user) {
            return user ? __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(user.getIdToken()) : __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
        });
        this.idToken = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_observeOn__["observeOn"].call(idToken$, new __WEBPACK_IMPORTED_MODULE_4_angularfire2__["c" /* ZoneScheduler */](Zone.current));
    }
    AngularFireAuth.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */] },
    ];
    AngularFireAuth.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */], },
    ]; };
    return AngularFireAuth;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

__webpack_require__(317);


/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth__ = __webpack_require__(314);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module__ = __webpack_require__(325);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_module__["a"]; });


//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function() {
  var firebase = __webpack_require__(203).default;
  var h,aa=aa||{},k=this;function m(a){return"string"==typeof a}function ba(a){return"boolean"==typeof a}function ca(){}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return null===a}function fa(a){return"array"==da(a)}function ha(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"function"==da(a)}function q(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=ka:r=la;return r.apply(null,arguments)}
function ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var na=Date.now||function(){return+new Date};function t(a,b){function c(){}c.prototype=b.prototype;a.ib=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Nc=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function u(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}t(u,Error);u.prototype.name="CustomError";function oa(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function qa(a){if(!ra.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(sa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ta,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ua,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(va,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(wa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(xa,"&#0;"));return a}var sa=/&/g,ta=/</g,ua=/>/g,va=/"/g,wa=/'/g,xa=/\x00/g,ra=/[\x00&<>"']/;function v(a,b){return-1!=a.indexOf(b)}function ya(a,b){return a<b?-1:a>b?1:0};function za(a,b){b.unshift(a);u.call(this,oa.apply(null,b));b.shift()}t(za,u);za.prototype.name="AssertionError";function Aa(a,b){throw new za("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var Ba=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Ca(a,b){var c=a.length,d=m(a)?a.split(""):a;for(--c;0<=c;--c)c in d&&b.call(void 0,d[c],c,a)}var Da=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=m(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ea=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
function Fa(a){a:{var b=Ga;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:m(a)?a.charAt(b):a[b]}function Ha(a,b){return 0<=Ba(a,b)}function Ia(a,b){b=Ba(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}function Ja(a,b){var c=0;Ca(a,function(d,e){b.call(void 0,d,e,a)&&1==Array.prototype.splice.call(a,e,1).length&&c++})}function Ka(a){return Array.prototype.concat.apply([],arguments)}
function La(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Ma;a:{var Na=k.navigator;if(Na){var Oa=Na.userAgent;if(Oa){Ma=Oa;break a}}Ma=""}function x(a){return v(Ma,a)};function Pa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Qa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Ra(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function Sa(a){for(var b in a)return!1;return!0}function Ta(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}function Ua(a){var b={},c;for(c in a)b[c]=a[c];return b}var Va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Wa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Va.length;f++)c=Va[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Xa(a){Xa[" "](a);return a}Xa[" "]=ca;function Ya(a,b){var c=Za;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var $a=x("Opera"),y=x("Trident")||x("MSIE"),ab=x("Edge"),bb=ab||y,cb=x("Gecko")&&!(v(Ma.toLowerCase(),"webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),db=v(Ma.toLowerCase(),"webkit")&&!x("Edge");function eb(){var a=k.document;return a?a.documentMode:void 0}var fb;
a:{var gb="",hb=function(){var a=Ma;if(cb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ab)return/Edge\/([\d\.]+)/.exec(a);if(y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(db)return/WebKit\/(\S+)/.exec(a);if($a)return/(?:Version)[ \/]?(\S+)/.exec(a)}();hb&&(gb=hb?hb[1]:"");if(y){var ib=eb();if(null!=ib&&ib>parseFloat(gb)){fb=String(ib);break a}}fb=gb}var Za={};
function jb(a){return Ya(a,function(){for(var b=0,c=pa(String(fb)).split("."),d=pa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",l=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==g[0].length&&0==l[0].length)break;b=ya(0==g[1].length?0:parseInt(g[1],10),0==l[1].length?0:parseInt(l[1],10))||ya(0==g[2].length,0==l[2].length)||ya(g[2],l[2]);g=g[3];l=l[3]}while(0==b)}return 0<=b})}var kb;var lb=k.document;
kb=lb&&y?eb()||("CSS1Compat"==lb.compatMode?parseInt(fb,10):5):void 0;function mb(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function nb(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function ob(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null}ob.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function pb(a,b){a.g(b);a.b<a.f&&(a.b++,b.next=a.a,a.a=b)};var rb=new ob(function(){return new qb},function(a){a.reset()},100);function sb(){var a=tb,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function qb(){this.next=this.b=this.a=null}qb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};qb.prototype.reset=function(){this.next=this.b=this.a=null};function vb(a){k.setTimeout(function(){throw a;},0)}var wb;
function xb(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=r(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.pb;c.pb=null;a()}};return function(a){d.next={pb:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};function yb(a,b){zb||Ab();Bb||(zb(),Bb=!0);var c=tb,d=rb.get();d.set(a,b);c.b?c.b.next=d:c.a=d;c.b=d}var zb;function Ab(){if(-1!=String(k.Promise).indexOf("[native code]")){var a=k.Promise.resolve(void 0);zb=function(){a.then(Cb)}}else zb=function(){var a=Cb;!p(k.setImmediate)||k.Window&&k.Window.prototype&&!x("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(wb||(wb=xb()),wb(a)):k.setImmediate(a)}}var Bb=!1,tb=new function(){this.b=this.a=null};
function Cb(){for(var a;a=sb();){try{a.a.call(a.b)}catch(b){vb(b)}pb(rb,a)}Bb=!1};function z(a,b){this.a=Db;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=ca)try{var c=this;a.call(b,function(a){Eb(c,Fb,a)},function(a){if(!(a instanceof Gb))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}Eb(c,Hb,a)})}catch(d){Eb(this,Hb,d)}}var Db=0,Fb=2,Hb=3;function Ib(){this.next=this.f=this.b=this.g=this.a=null;this.c=!1}Ib.prototype.reset=function(){this.f=this.b=this.g=this.a=null;this.c=!1};
var Jb=new ob(function(){return new Ib},function(a){a.reset()},100);function Kb(a,b,c){var d=Jb.get();d.g=a;d.b=b;d.f=c;return d}function A(a){if(a instanceof z)return a;var b=new z(ca);Eb(b,Fb,a);return b}function B(a){return new z(function(b,c){c(a)})}function Lb(a,b,c){Mb(a,b,c,null)||yb(ma(b,a))}function Nb(a){return new z(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},l=0,n;l<a.length;l++)n=a[l],Lb(n,ma(f,l),g);else b(e)})}
function Ob(a){return new z(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Qb:!0,value:f}:{Qb:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Lb(g,ma(e,f,!0),ma(e,f,!1));else b(d)})}z.prototype.then=function(a,b,c){return Pb(this,p(a)?a:null,p(b)?b:null,c)};mb(z);function Qb(a,b){b=Kb(b,b,void 0);b.c=!0;Rb(a,b);return a}h=z.prototype;h.s=function(a,b){return Pb(this,null,a,b)};h.cancel=function(a){this.a==Db&&yb(function(){var b=new Gb(a);Sb(this,b)},this)};
function Sb(a,b){if(a.a==Db)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.c||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==Db&&1==d?Sb(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):Tb(c),Ub(c,e,Hb,b)))}a.c=null}else Eb(a,Hb,b)}function Rb(a,b){a.b||a.a!=Fb&&a.a!=Hb||Vb(a);a.f?a.f.next=b:a.b=b;a.f=b}
function Pb(a,b,c,d){var e=Kb(null,null,null);e.a=new z(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(D){g(D)}}:a;e.b=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof Gb?g(b):a(e)}catch(D){g(D)}}:g});e.a.c=a;Rb(a,e);return e.a}h.wc=function(a){this.a=Db;Eb(this,Fb,a)};h.xc=function(a){this.a=Db;Eb(this,Hb,a)};
function Eb(a,b,c){a.a==Db&&(a===c&&(b=Hb,c=new TypeError("Promise cannot resolve to itself")),a.a=1,Mb(c,a.wc,a.xc,a)||(a.i=c,a.a=b,a.c=null,Vb(a),b!=Hb||c instanceof Gb||Wb(a,c)))}function Mb(a,b,c,d){if(a instanceof z)return Rb(a,Kb(b||ca,c||null,d)),!0;if(nb(a))return a.then(b,c,d),!0;if(q(a))try{var e=a.then;if(p(e))return Xb(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Xb(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}function g(a){l||(l=!0,c.call(e,a))}var l=!1;try{b.call(a,g,f)}catch(n){f(n)}}function Vb(a){a.h||(a.h=!0,yb(a.Mb,a))}function Tb(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}h.Mb=function(){for(var a;a=Tb(this);)Ub(this,a,this.a,this.i);this.h=!1};
function Ub(a,b,c,d){if(c==Hb&&b.b&&!b.c)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Yb(b,c,d);else try{b.c?b.g.call(b.f):Yb(b,c,d)}catch(e){Zb.call(null,e)}pb(Jb,b)}function Yb(a,b,c){b==Fb?a.g.call(a.f,c):a.b&&a.b.call(a.f,c)}function Wb(a,b){a.g=!0;yb(function(){a.g&&Zb.call(null,b)})}var Zb=vb;function Gb(a){u.call(this,a)}t(Gb,u);Gb.prototype.name="cancel";var $b=!y||9<=Number(kb);function ac(){this.a="";this.b=bc}ac.prototype.la=!0;ac.prototype.ja=function(){return this.a};ac.prototype.toString=function(){return"Const{"+this.a+"}"};function cc(a){if(a instanceof ac&&a.constructor===ac&&a.b===bc)return a.a;Aa("expected object of type Const, got '"+a+"'");return"type_error:Const"}var bc={};function dc(a){var b=new ac;b.a=a;return b}dc("");function ec(){this.a="";this.b=fc}ec.prototype.la=!0;ec.prototype.ja=function(){return this.a};ec.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function gc(a){if(a instanceof ec&&a.constructor===ec&&a.b===fc)return a.a;Aa("expected object of type TrustedResourceUrl, got '"+a+"' of type "+da(a));return"type_error:TrustedResourceUrl"}function hc(a,b){a=ic(a,b);b=new ec;b.a=a;return b}
function ic(a,b){var c=cc(a);if(!jc.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);return c.replace(kc,function(a,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));a=b[e];return a instanceof ac?cc(a):encodeURIComponent(String(a))})}var kc=/%{(\w+)}/g,jc=/^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i,fc={};function lc(){this.a="";this.b=mc}lc.prototype.la=!0;lc.prototype.ja=function(){return this.a};lc.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function nc(a){if(a instanceof lc&&a.constructor===lc&&a.b===mc)return a.a;Aa("expected object of type SafeUrl, got '"+a+"' of type "+da(a));return"type_error:SafeUrl"}var oc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function pc(a){if(a instanceof lc)return a;a=a.la?a.ja():String(a);oc.test(a)||(a="about:invalid#zClosurez");return qc(a)}var mc={};function qc(a){var b=new lc;b.a=a;return b}qc("about:blank");function rc(){this.a="";this.b=tc}rc.prototype.la=!0;rc.prototype.ja=function(){return this.a};rc.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function uc(a){if(a instanceof rc&&a.constructor===rc&&a.b===tc)return a.a;Aa("expected object of type SafeHtml, got '"+a+"' of type "+da(a));return"type_error:SafeHtml"}var tc={};function vc(a){var b=new rc;b.a=a;return b}vc("<!DOCTYPE html>");vc("");vc("<br>");function wc(a){var b=document;return m(a)?b.getElementById(a):a}function xc(a,b){Pa(b,function(b,d){b&&b.la&&(b=b.ja());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:yc.hasOwnProperty(d)?a.setAttribute(yc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var yc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function zc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!$b&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',qa(g.name),'"');if(g.type){f.push(' type="',qa(g.type),'"');var l={};Wa(l,g);delete l.type;g=l}f.push(">");f=f.join("")}f=e.createElement(f);g&&(m(g)?f.className=g:fa(g)?f.className=g.join(" "):xc(f,g));2<d.length&&Ac(e,f,d);return f}
function Ac(a,b,c){function d(c){c&&b.appendChild(m(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!ha(f)||q(f)&&0<f.nodeType?d(f):w(Bc(f)?La(f):f,d)}}function Bc(a){if(a&&"number"==typeof a.length){if(q(a))return"function"==typeof a.item||"string"==typeof a.item;if(p(a))return"function"==typeof a.item}return!1};function Cc(a){var b=[];Dc(new Ec,a,b);return b.join("")}function Ec(){}
function Dc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(fa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Dc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Fc(d,c),c.push(":"),Dc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Fc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var Gc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Hc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function Fc(a,b){b.push('"',a.replace(Hc,function(a){var b=Gc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Gc[a]=b);return b}),'"')};function Ic(){0!=Jc&&(Kc[this[ia]||(this[ia]=++ja)]=this);this.oa=this.oa;this.Fa=this.Fa}var Jc=0,Kc={};Ic.prototype.oa=!1;function Lc(a){a.oa||(a.oa=!0,a.ta(),0!=Jc&&(a=a[ia]||(a[ia]=++ja),delete Kc[a]))}Ic.prototype.ta=function(){if(this.Fa)for(;this.Fa.length;)this.Fa.shift()()};var Mc=Object.freeze||function(a){return a};var Nc=!y||9<=Number(kb),Oc=y&&!jb("9"),Pc=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});k.addEventListener("test",ca,b);k.removeEventListener("test",ca,b);return a}();function C(a,b){this.type=a;this.b=this.target=b;this.Ab=!0}C.prototype.c=function(){this.Ab=!1};function Qc(a,b){C.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(cb){a:{try{Xa(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=
a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=m(a.pointerType)?a.pointerType:Rc[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.c()}}t(Qc,C);var Rc=Mc({2:"touch",3:"pen",4:"mouse"});Qc.prototype.c=function(){Qc.ib.c.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Oc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};Qc.prototype.g=function(){return this.a};var Sc="closure_listenable_"+(1E6*Math.random()|0),Tc=0;function Uc(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.capture=!!d;this.La=e;this.key=++Tc;this.ma=this.Ha=!1}function Vc(a){a.ma=!0;a.listener=null;a.a=null;a.src=null;a.La=null};function Wc(a){this.src=a;this.a={};this.b=0}function Xc(a,b,c,d,e,f){var g=b.toString();b=a.a[g];b||(b=a.a[g]=[],a.b++);var l=Yc(b,c,e,f);-1<l?(a=b[l],d||(a.Ha=!1)):(a=new Uc(c,a.src,g,!!e,f),a.Ha=d,b.push(a));return a}function Zc(a,b){var c=b.type;c in a.a&&Ia(a.a[c],b)&&(Vc(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function Yc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ma&&f.listener==b&&f.capture==!!c&&f.La==d)return e}return-1};var $c="closure_lm_"+(1E6*Math.random()|0),ad={},bd=0;function cd(a,b,c,d,e){if(d&&d.once)dd(a,b,c,d,e);else if(fa(b))for(var f=0;f<b.length;f++)cd(a,b[f],c,d,e);else c=ed(c),a&&a[Sc]?fd(a,b,c,q(d)?!!d.capture:!!d,e):gd(a,b,c,!1,d,e)}
function gd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=q(e)?!!e.capture:!!e,l=hd(a);l||(a[$c]=l=new Wc(a));c=Xc(l,b,c,d,g,f);if(!c.a){d=id();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)Pc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(jd(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");bd++}}
function id(){var a=kd,b=Nc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function dd(a,b,c,d,e){if(fa(b))for(var f=0;f<b.length;f++)dd(a,b[f],c,d,e);else c=ed(c),a&&a[Sc]?ld(a,b,c,q(d)?!!d.capture:!!d,e):gd(a,b,c,!0,d,e)}
function E(a,b,c,d,e){if(fa(b))for(var f=0;f<b.length;f++)E(a,b[f],c,d,e);else(d=q(d)?!!d.capture:!!d,c=ed(c),a&&a[Sc])?(a=a.u,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Yc(f,c,d,e),-1<c&&(Vc(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=hd(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Yc(b,c,d,e)),(c=-1<a?b[a]:null)&&md(c))}
function md(a){if("number"!=typeof a&&a&&!a.ma){var b=a.src;if(b&&b[Sc])Zc(b.u,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(jd(c),d);bd--;(c=hd(b))?(Zc(c,a),0==c.b&&(c.src=null,b[$c]=null)):Vc(a)}}}function jd(a){return a in ad?ad[a]:ad[a]="on"+a}function nd(a,b,c,d){var e=!0;if(a=hd(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.ma&&(f=od(f,d),e=e&&!1!==f)}return e}
function od(a,b){var c=a.listener,d=a.La||a.src;a.Ha&&md(a);return c.call(d,b)}
function kd(a,b){if(a.ma)return!0;if(!Nc){if(!b)a:{b=["window","event"];for(var c=k,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new Qc(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.b=d[e];var f=nd(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.b=d[e],f=nd(d[e],a,!1,b),c=c&&f}return c}return od(a,
new Qc(b,this))}function hd(a){a=a[$c];return a instanceof Wc?a:null}var pd="__closure_events_fn_"+(1E9*Math.random()>>>0);function ed(a){if(p(a))return a;a[pd]||(a[pd]=function(b){return a.handleEvent(b)});return a[pd]};function F(){Ic.call(this);this.u=new Wc(this);this.Eb=this;this.Ra=null}t(F,Ic);F.prototype[Sc]=!0;F.prototype.removeEventListener=function(a,b,c,d){E(this,a,b,c,d)};
function G(a,b){var c,d=a.Ra;if(d)for(c=[];d;d=d.Ra)c.push(d);a=a.Eb;d=b.type||b;if(m(b))b=new C(b,a);else if(b instanceof C)b.target=b.target||a;else{var e=b;b=new C(d,a);Wa(b,e)}e=!0;if(c)for(var f=c.length-1;0<=f;f--){var g=b.b=c[f];e=qd(g,d,!0,b)&&e}g=b.b=a;e=qd(g,d,!0,b)&&e;e=qd(g,d,!1,b)&&e;if(c)for(f=0;f<c.length;f++)g=b.b=c[f],e=qd(g,d,!1,b)&&e}
F.prototype.ta=function(){F.ib.ta.call(this);if(this.u){var a=this.u,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,Vc(d[e]);delete a.a[c];a.b--}}this.Ra=null};function fd(a,b,c,d,e){Xc(a.u,String(b),c,!1,d,e)}function ld(a,b,c,d,e){Xc(a.u,String(b),c,!0,d,e)}function qd(a,b,c,d){b=a.u.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ma&&g.capture==c){var l=g.listener,n=g.La||g.src;g.Ha&&Zc(a.u,g);e=!1!==l.call(n,d)&&e}}return e&&0!=d.Ab};function rd(a,b,c){if(p(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)}function sd(a){var b=null;return(new z(function(c,d){b=rd(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).s(function(a){k.clearTimeout(b);throw a;})};function td(a,b,c,d,e){this.reset(a,b,c,d,e)}td.prototype.a=null;var ud=0;td.prototype.reset=function(a,b,c,d,e){"number"==typeof e||ud++;d||na();this.b=b;delete this.a};function vd(a){this.f=a;this.b=this.c=this.a=null}function wd(a,b){this.name=a;this.value=b}wd.prototype.toString=function(){return this.name};var xd=new wd("SEVERE",1E3),yd=new wd("CONFIG",700),zd=new wd("FINE",500);function Ad(a){if(a.c)return a.c;if(a.a)return Ad(a.a);Aa("Root logger has no level set.");return null}
vd.prototype.log=function(a,b,c){if(a.value>=Ad(this).value)for(p(b)&&(b=b()),a=new td(a,String(b),this.f),c&&(a.a=c),c="log:"+a.b,(a=k.console)&&a.timeStamp&&a.timeStamp(c),(a=k.msWriteProfilerMark)&&a(c),c=this;c;)c=c.a};var Bd={},Cd=null;function Dd(a){Cd||(Cd=new vd(""),Bd[""]=Cd,Cd.c=yd);var b;if(!(b=Bd[a])){b=new vd(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=Dd(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;Bd[a]=b}return b};function Ed(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Ed?(c=a.S(),d=a.P()):(c=Ra(a),d=Qa(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}h=Ed.prototype;h.P=function(){Fd(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};h.S=function(){Fd(this);return this.a.concat()};
h.clear=function(){this.b={};this.c=this.a.length=0};function Fd(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Gd(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],Gd(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}h.get=function(a,b){return Gd(this.b,a)?this.b[a]:b};h.set=function(a,b){Gd(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};
h.forEach=function(a,b){for(var c=this.S(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};function Gd(a,b){return Object.prototype.hasOwnProperty.call(a,b)};function H(a,b){a&&a.log(zd,b,void 0)};function Hd(a){return Da(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var Id=null,Jd=null;function Kd(a){var b="";Ld(a,function(a){b+=String.fromCharCode(a)});return b}function Ld(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=Jd[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}Md();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=l&&b(g<<6&192|l))}}
function Md(){if(!Id){Id={};Jd={};for(var a=0;65>a;a++)Id[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Jd[Id[a]]=a,62<=a&&(Jd["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Nd(a,b){this.g=[];this.v=a;this.o=b||null;this.f=this.a=!1;this.c=void 0;this.u=this.w=this.i=!1;this.h=0;this.b=null;this.l=0}Nd.prototype.cancel=function(a){if(this.a)this.c instanceof Nd&&this.c.cancel();else{if(this.b){var b=this.b;delete this.b;a?b.cancel(a):(b.l--,0>=b.l&&b.cancel())}this.v?this.v.call(this.o,this):this.u=!0;this.a||(a=new Od,Pd(this),Qd(this,!1,a))}};Nd.prototype.m=function(a,b){this.i=!1;Qd(this,a,b)};function Qd(a,b,c){a.a=!0;a.c=c;a.f=!b;Rd(a)}
function Pd(a){if(a.a){if(!a.u)throw new Sd;a.u=!1}}Nd.prototype.A=function(a){Pd(this);Qd(this,!0,a)};function Td(a,b){Ud(a,null,b,void 0)}function Ud(a,b,c,d){a.g.push([b,c,d]);a.a&&Rd(a)}Nd.prototype.then=function(a,b,c){var d,e,f=new z(function(a,b){d=a;e=b});Ud(this,d,function(a){a instanceof Od?f.cancel():e(a)});return f.then(a,b,c)};mb(Nd);function Vd(a){return Ea(a.g,function(a){return p(a[1])})}
function Rd(a){if(a.h&&a.a&&Vd(a)){var b=a.h,c=Wd[b];c&&(k.clearTimeout(c.a),delete Wd[b]);a.h=0}a.b&&(a.b.l--,delete a.b);b=a.c;for(var d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],g=e[1];e=e[2];if(f=a.f?g:f)try{var l=f.call(e||a.o,b);void 0!==l&&(a.f=a.f&&(l==b||l instanceof Error),a.c=b=l);if(nb(b)||"function"===typeof k.Promise&&b instanceof k.Promise)d=!0,a.i=!0}catch(n){b=n,a.f=!0,Vd(a)||(c=!0)}}a.c=b;d&&(l=r(a.m,a,!0),d=r(a.m,a,!1),b instanceof Nd?(Ud(b,l,d),b.w=!0):b.then(l,d));c&&(b=
new Xd(b),Wd[b.a]=b,a.h=b.a)}function Sd(){u.call(this)}t(Sd,u);Sd.prototype.message="Deferred has already fired";Sd.prototype.name="AlreadyCalledError";function Od(){u.call(this)}t(Od,u);Od.prototype.message="Deferred was canceled";Od.prototype.name="CanceledError";function Xd(a){this.a=k.setTimeout(r(this.c,this),0);this.b=a}Xd.prototype.c=function(){delete Wd[this.a];throw this.b;};var Wd={};function Yd(){this.b=-1};function Zd(a,b){this.b=-1;this.b=$d;this.f=k.Uint8Array?new Uint8Array(this.b):Array(this.b);this.g=this.c=0;this.a=[];this.i=a;this.h=b;this.l=k.Int32Array?new Int32Array(64):Array(64);ae||(k.Int32Array?ae=new Int32Array(be):ae=be);this.reset()}var ae;t(Zd,Yd);for(var $d=64,ce=$d-1,de=[],ee=0;ee<ce;ee++)de[ee]=0;var fe=Ka(128,de);Zd.prototype.reset=function(){this.g=this.c=0;this.a=k.Int32Array?new Int32Array(this.h):La(this.h)};
function ge(a){for(var b=a.f,c=a.l,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,g=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+g|0}d=a.a[0]|0;e=a.a[1]|0;var l=a.a[2]|0,n=a.a[3]|0,D=a.a[4]|0,ub=a.a[5]|0,sc=a.a[6]|0;f=a.a[7]|0;for(b=0;64>b;b++){var yj=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&l^e&l)|0;g=D&ub^~D&sc;f=f+((D>>>6|D<<26)^(D>>>11|D<<21)^(D>>>
25|D<<7))|0;g=g+(ae[b]|0)|0;g=f+(g+(c[b]|0)|0)|0;f=sc;sc=ub;ub=D;D=n+g|0;n=l;l=e;e=d;d=g+yj|0}a.a[0]=a.a[0]+d|0;a.a[1]=a.a[1]+e|0;a.a[2]=a.a[2]+l|0;a.a[3]=a.a[3]+n|0;a.a[4]=a.a[4]+D|0;a.a[5]=a.a[5]+ub|0;a.a[6]=a.a[6]+sc|0;a.a[7]=a.a[7]+f|0}
function he(a,b,c){void 0===c&&(c=b.length);var d=0,e=a.c;if(m(b))for(;d<c;)a.f[e++]=b.charCodeAt(d++),e==a.b&&(ge(a),e=0);else if(ha(b))for(;d<c;){var f=b[d++];if(!("number"==typeof f&&0<=f&&255>=f&&f==(f|0)))throw Error("message must be a byte array");a.f[e++]=f;e==a.b&&(ge(a),e=0)}else throw Error("message must be string or array");a.c=e;a.g+=c}
var be=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function ie(){Zd.call(this,8,je)}t(ie,Zd);var je=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function ke(a){if(a.P&&"function"==typeof a.P)return a.P();if(m(a))return a.split("");if(ha(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Qa(a)}function le(a){if(a.S&&"function"==typeof a.S)return a.S();if(!a.P||"function"!=typeof a.P){if(ha(a)||m(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return Ra(a)}}
function me(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ha(a)||m(a))w(a,b,void 0);else for(var c=le(a),d=ke(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};var ne=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function oe(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};function pe(a,b){this.b=this.l=this.c="";this.i=null;this.h=this.g="";this.f=!1;if(a instanceof pe){this.f=void 0!==b?b:a.f;qe(this,a.c);this.l=a.l;this.b=a.b;re(this,a.i);this.g=a.g;b=a.a;var c=new se;c.c=b.c;b.a&&(c.a=new Ed(b.a),c.b=b.b);te(this,c);this.h=a.h}else a&&(c=String(a).match(ne))?(this.f=!!b,qe(this,c[1]||"",!0),this.l=ue(c[2]||""),this.b=ue(c[3]||"",!0),re(this,c[4]),this.g=ue(c[5]||"",!0),te(this,c[6]||"",!0),this.h=ue(c[7]||"")):(this.f=!!b,this.a=new se(null,0,this.f))}
pe.prototype.toString=function(){var a=[],b=this.c;b&&a.push(ve(b,we,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.l)&&a.push(ve(b,we,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.i,null!=c&&a.push(":",String(c));if(c=this.g)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(ve(c,"/"==c.charAt(0)?xe:ye,!0));(c=this.a.toString())&&a.push("?",c);(c=this.h)&&a.push("#",ve(c,ze));return a.join("")};
function qe(a,b,c){a.c=c?ue(b,!0):b;a.c&&(a.c=a.c.replace(/:$/,""))}function re(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b}else a.i=null}function te(a,b,c){b instanceof se?(a.a=b,Ae(a.a,a.f)):(c||(b=ve(b,Be)),a.a=new se(b,0,a.f))}function I(a,b,c){a.a.set(b,c)}function Ce(a,b){return a.a.get(b)}function De(a){return a instanceof pe?new pe(a):new pe(a,void 0)}function Ee(a,b){var c=new pe(null,void 0);qe(c,"https");a&&(c.b=a);b&&(c.g=b);return c}
function ue(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ve(a,b,c){return m(a)?(a=encodeURI(a).replace(b,Fe),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Fe(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var we=/[#\/\?@]/g,ye=/[\#\?:]/g,xe=/[\#\?]/g,Be=/[\#\?@]/g,ze=/#/g;function se(a,b,c){this.b=this.a=null;this.c=a||null;this.f=!!c}
function Ge(a){a.a||(a.a=new Ed,a.b=0,a.c&&oe(a.c,function(b,c){He(a,decodeURIComponent(b.replace(/\+/g," ")),c)}))}function Ie(a){var b=le(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new se(null,0,void 0);a=ke(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];fa(f)?Je(c,e,f):He(c,e,f)}return c}function He(a,b,c){Ge(a);a.c=null;b=Ke(a,b);var d=a.a.get(b);d||a.a.set(b,d=[]);d.push(c);a.b+=1}
function Le(a,b){Ge(a);b=Ke(a,b);Gd(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,Gd(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&Fd(a)))}h=se.prototype;h.clear=function(){this.a=this.c=null;this.b=0};function Me(a,b){Ge(a);b=Ke(a,b);return Gd(a.a.b,b)}h.forEach=function(a,b){Ge(this);this.a.forEach(function(c,d){w(c,function(c){a.call(b,c,d,this)},this)},this)};h.S=function(){Ge(this);for(var a=this.a.P(),b=this.a.S(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.P=function(a){Ge(this);var b=[];if(m(a))Me(this,a)&&(b=Ka(b,this.a.get(Ke(this,a))));else{a=this.a.P();for(var c=0;c<a.length;c++)b=Ka(b,a[c])}return b};h.set=function(a,b){Ge(this);this.c=null;a=Ke(this,a);Me(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};h.get=function(a,b){a=a?this.P(a):[];return 0<a.length?String(a[0]):b};function Je(a,b,c){Le(a,b);0<c.length&&(a.c=null,a.a.set(Ke(a,b),La(c)),a.b+=c.length)}
h.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.S(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.P(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.c=a.join("&")};function Ke(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function Ae(a,b){b&&!a.f&&(Ge(a),a.c=null,a.a.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(Le(this,b),Je(this,c,a))},a));a.f=b};function Ne(){}Ne.prototype.c=null;function Oe(a){return a.c||(a.c=a.b())};var Pe;function Qe(){}t(Qe,Ne);Qe.prototype.a=function(){var a=Re(this);return a?new ActiveXObject(a):new XMLHttpRequest};Qe.prototype.b=function(){var a={};Re(this)&&(a[0]=!0,a[1]=!0);return a};
function Re(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}Pe=new Qe;function Se(a){F.call(this);this.headers=new Ed;this.w=a||null;this.b=!1;this.v=this.a=null;this.g=this.I=this.i="";this.c=this.G=this.h=this.A=!1;this.f=0;this.m=null;this.l=Te;this.o=this.N=!1}t(Se,F);var Te="",Ue=Se.prototype,Ve=Dd("goog.net.XhrIo");Ue.J=Ve;var We=/^https?$/i,Xe=["POST","PUT"];
function Ye(a,b,c,d,e){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.i+"; newUri="+b);c=c?c.toUpperCase():"GET";a.i=b;a.g="";a.I=c;a.A=!1;a.b=!0;a.a=a.w?a.w.a():Pe.a();a.v=a.w?Oe(a.w):Oe(Pe);a.a.onreadystatechange=r(a.zb,a);try{H(a.J,Ze(a,"Opening Xhr")),a.G=!0,a.a.open(c,String(b),!0),a.G=!1}catch(g){H(a.J,Ze(a,"Error opening Xhr: "+g.message));$e(a,g);return}b=d||"";var f=new Ed(a.headers);e&&me(e,function(a,b){f.set(b,a)});e=Fa(f.S());d=k.FormData&&b instanceof
k.FormData;!Ha(Xe,c)||e||d||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.a.setRequestHeader(b,a)},a);a.l&&(a.a.responseType=a.l);"withCredentials"in a.a&&a.a.withCredentials!==a.N&&(a.a.withCredentials=a.N);try{af(a),0<a.f&&(a.o=bf(a.a),H(a.J,Ze(a,"Will abort after "+a.f+"ms if incomplete, xhr2 "+a.o)),a.o?(a.a.timeout=a.f,a.a.ontimeout=r(a.Ea,a)):a.m=rd(a.Ea,a.f,a)),H(a.J,Ze(a,"Sending request")),a.h=!0,a.a.send(b),a.h=!1}catch(g){H(a.J,Ze(a,
"Send error: "+g.message)),$e(a,g)}}function bf(a){return y&&jb(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function Ga(a){return"content-type"==a.toLowerCase()}h=Se.prototype;h.Ea=function(){"undefined"!=typeof aa&&this.a&&(this.g="Timed out after "+this.f+"ms, aborting",H(this.J,Ze(this,this.g)),G(this,"timeout"),this.abort(8))};function $e(a,b){a.b=!1;a.a&&(a.c=!0,a.a.abort(),a.c=!1);a.g=b;cf(a);df(a)}function cf(a){a.A||(a.A=!0,G(a,"complete"),G(a,"error"))}
h.abort=function(){this.a&&this.b&&(H(this.J,Ze(this,"Aborting")),this.b=!1,this.c=!0,this.a.abort(),this.c=!1,G(this,"complete"),G(this,"abort"),df(this))};h.ta=function(){this.a&&(this.b&&(this.b=!1,this.c=!0,this.a.abort(),this.c=!1),df(this,!0));Se.ib.ta.call(this)};h.zb=function(){this.oa||(this.G||this.h||this.c?ef(this):this.fc())};h.fc=function(){ef(this)};
function ef(a){if(a.b&&"undefined"!=typeof aa)if(a.v[1]&&4==ff(a)&&2==gf(a))H(a.J,Ze(a,"Local request error detected and ignored"));else if(a.h&&4==ff(a))rd(a.zb,0,a);else if(G(a,"readystatechange"),4==ff(a)){H(a.J,Ze(a,"Request complete"));a.b=!1;try{var b=gf(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.i).match(ne)[1]||null;if(!f&&k.self&&k.self.location){var g=k.self.location.protocol;
f=g.substr(0,g.length-1)}e=!We.test(f?f.toLowerCase():"")}d=e}if(d)G(a,"complete"),G(a,"success");else{try{var l=2<ff(a)?a.a.statusText:""}catch(n){H(a.J,"Can not get status: "+n.message),l=""}a.g=l+" ["+gf(a)+"]";cf(a)}}finally{df(a)}}}function df(a,b){if(a.a){af(a);var c=a.a,d=a.v[0]?ca:null;a.a=null;a.v=null;b||G(a,"ready");try{c.onreadystatechange=d}catch(e){(a=a.J)&&a.log(xd,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}
function af(a){a.a&&a.o&&(a.a.ontimeout=null);"number"==typeof a.m&&(k.clearTimeout(a.m),a.m=null)}function ff(a){return a.a?a.a.readyState:0}function gf(a){try{return 2<ff(a)?a.a.status:-1}catch(b){return-1}}function hf(a){try{return a.a?a.a.responseText:""}catch(b){return H(a.J,"Can not get responseText: "+b.message),""}}
h.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.l){case Te:case "text":return this.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var a=this.J;a&&a.log(xd,"Response type "+this.l+" is not supported on this browser",void 0);return null}catch(b){return H(this.J,"Can not get response: "+b.message),null}};function Ze(a,b){return b+" ["+a.I+" "+a.i+" "+gf(a)+"]"};var jf=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function kf(a){var b={},c=b.document||document,d=gc(a),e=document.createElement("SCRIPT"),f={Bb:e,Ea:void 0},g=new Nd(lf,f),l=null,n=null!=b.timeout?b.timeout:5E3;0<n&&(l=window.setTimeout(function(){mf(e,!0);var a=new nf(of,"Timeout reached for loading script "+d);Pd(g);Qd(g,!1,a)},n),f.Ea=l);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(mf(e,b.Oc||!1,l),g.A(null))};e.onerror=function(){mf(e,!0,l);var a=new nf(pf,"Error while loading script "+
d);Pd(g);Qd(g,!1,a)};f=b.attributes||{};Wa(f,{type:"text/javascript",charset:"UTF-8"});xc(e,f);e.src=gc(a);qf(c).appendChild(e);return g}function qf(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}function lf(){if(this&&this.Bb){var a=this.Bb;a&&"SCRIPT"==a.tagName&&mf(a,!0,this.Ea)}}
function mf(a,b,c){null!=c&&k.clearTimeout(c);a.onload=ca;a.onerror=ca;a.onreadystatechange=ca;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}var pf=0,of=1;function nf(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a}t(nf,u);function rf(){}t(rf,Ne);rf.prototype.a=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new sf;throw Error("Unsupported browser");};rf.prototype.b=function(){return{}};
function sf(){this.a=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.a.onload=r(this.Sb,this);this.a.onerror=r(this.wb,this);this.a.onprogress=r(this.Tb,this);this.a.ontimeout=r(this.Ub,this)}h=sf.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.a.open(a,b)};
h.send=function(a){if(a)if("string"==typeof a)this.a.send(a);else throw Error("Only string data is supported");else this.a.send()};h.abort=function(){this.a.abort()};h.setRequestHeader=function(){};h.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.a.contentType:""};h.Sb=function(){this.status=200;this.responseText=this.a.responseText;tf(this,4)};h.wb=function(){this.status=500;this.responseText="";tf(this,4)};h.Ub=function(){this.wb()};
h.Tb=function(){this.status=200;tf(this,1)};function tf(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}h.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType};function uf(){var a=J();return y&&!!kb&&11==kb||/Edge\/\d+/.test(a)}function vf(){return k.window&&k.window.location.href||""}function wf(a,b){b=b||k.window;var c="about:blank";a&&(c=nc(pc(a)));b.location.href=c}function xf(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):fa(a[d])?Ta(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<xf(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c}
function yf(){var a=J();a=zf(a)!=Af?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!y||!kb||9<kb}function Bf(a){a=(a||J()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1}function Cf(a){a=a||k.window;try{a.close()}catch(b){}}
function Df(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=J().toLowerCase();d&&(b.target=d,v(c,"crios/")&&(b.target="_blank"));zf(J())==Ef&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(d=b)||(d={});a=window;b=c instanceof lc?c:pc("undefined"!=typeof c.href?c.href:String(c));c=d.target||c.target;e=[];
for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;default:e.push(g+"="+(d[g]?1:0))}var g=e.join(",");(x("iPhone")&&!x("iPod")&&!x("iPad")||x("iPad")||x("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),b instanceof lc||b instanceof lc||(b=b.la?b.ja():String(b),oc.test(b)||(b="about:invalid#zClosurez"),b=qc(b)),g.href=nc(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel",
"noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),a=nc(b),g&&(bb&&v(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'"),g.opener=null,dc("b/12014412, meta tag with sanitized URL"),a='<META HTTP-EQUIV="refresh" content="0; url='+qa(a)+'">',a=vc(a),g.document.write(uc(a)),g.document.close())):g=a.open(nc(b),c,g);if(g)try{g.focus()}catch(l){}return g}
function Ff(a){return new z(function(b){function c(){sd(2E3).then(function(){if(!a||a.closed)b();else return c()})}return c()})}var Gf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;function Hf(){var a=null;return(new z(function(b){"complete"==k.document.readyState?b():(a=function(){b()},dd(window,"load",a))})).s(function(b){E(window,"load",a);throw b;})}
function If(){return Jf(void 0)?Hf().then(function(){return new z(function(a,b){var c=k.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):B(Error("Cordova must run in an Android or iOS file scheme."))}function Jf(a){a=a||J();return!("file:"!==Kf()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))}function Lf(){var a=k.window;try{return!(!a||a==a.top)}catch(b){return!1}}
function K(){return firebase.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":firebase.INTERNAL.hasOwnProperty("node")?"Node":"Browser"}function Mf(){var a=K();return"ReactNative"===a||"Node"===a}var Ef="Firefox",Af="Chrome";
function zf(a){var b=a.toLowerCase();if(v(b,"opera/")||v(b,"opr/")||v(b,"opios/"))return"Opera";if(v(b,"iemobile"))return"IEMobile";if(v(b,"msie")||v(b,"trident/"))return"IE";if(v(b,"edge/"))return"Edge";if(v(b,"firefox/"))return Ef;if(v(b,"silk/"))return"Silk";if(v(b,"blackberry"))return"Blackberry";if(v(b,"webos"))return"Webos";if(!v(b,"safari/")||v(b,"chrome/")||v(b,"crios/")||v(b,"android"))if(!v(b,"chrome/")&&!v(b,"crios/")||v(b,"edge/")){if(v(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&
2==a.length)return a[1]}else return Af;else return"Safari";return"Other"}var Nf={Cc:"FirebaseCore-web",Ec:"FirebaseUI-web"};function Of(a,b){b=b||[];var c=[],d={},e;for(e in Nf)d[Nf[e]]=!0;for(e=0;e<b.length;e++)"undefined"!==typeof d[b[e]]&&(delete d[b[e]],c.push(b[e]));c.sort();b=c;b.length||(b=["FirebaseCore-web"]);c=K();d="";"Browser"===c?d=zf(J()):d=c;return d+"/JsCore/"+a+"/"+b.join(",")}function J(){return k.navigator&&k.navigator.userAgent||""}
function L(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b}function Pf(){try{var a=k.localStorage,b=Qf();if(a)return a.setItem(b,"1"),a.removeItem(b),uf()?!!k.indexedDB:!0}catch(c){}return!1}function Rf(){return(Sf()||"chrome-extension:"===Kf()||Jf())&&!Mf()&&Pf()}function Sf(){return"http:"===Kf()||"https:"===Kf()}function Kf(){return k.location&&k.location.protocol||null}
function Tf(a){a=a||J();return Bf(a)||zf(a)==Ef?!1:!0}function Uf(a){return"undefined"===typeof a?null:Cc(a)}function Vf(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b}function Wf(a){if(null!==a)return JSON.parse(a)}function Qf(a){return a?a:""+Math.floor(1E9*Math.random()).toString()}function Xf(a){a=a||J();return"Safari"==zf(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0}
function Yf(){var a=k.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null}function Zf(){var a=k.navigator;return a&&"boolean"===typeof a.onLine&&(Sf()||"chrome-extension:"===Kf()||"undefined"!==typeof a.connection)?a.onLine:!0}function $f(a,b,c,d){if(a>b)throw Error("Short delay should be less than long delay!");this.c=a;this.b=b;a=c||J();d=d||K();this.a=Bf(a)||"ReactNative"===d}
$f.prototype.get=function(){return this.a?this.b:this.c};function ag(){var a=k.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0}function bg(){var a=k.document,b=null;return ag()||!a?A():(new z(function(c){b=function(){ag()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).s(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})}
function cg(a){try{var b=new Date(parseInt(a,10));if(!isNaN(b.getTime())&&!/[^0-9]/.test(a))return b.toUTCString()}catch(c){}return null};var dg={};var eg;try{var fg={};Object.defineProperty(fg,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(fg,"abcd",{configurable:!0,enumerable:!0,value:2});eg=2==fg.abcd}catch(a){eg=!1}function M(a,b,c){eg?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c}function gg(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&M(a,c,b[c])}function hg(a){var b={};gg(b,a);return b}function ig(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}
function jg(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0}function kg(a){var b=a;if("object"==typeof a&&null!=a){b="length"in a?[]:{};for(var c in a)M(b,c,kg(a[c]))}return b};function lg(a){var b={},c=a[mg],d=a[ng];a=a[og];if(!c||!a)throw Error("Invalid provider user info!");b[pg]=d||null;b[qg]=c;M(this,rg,a);M(this,sg,kg(b))}var mg="email",ng="newEmail",og="requestType",qg="email",pg="fromEmail",sg="data",rg="operation";function N(a,b){this.code=tg+a;this.message=b||ug[a]||""}t(N,Error);N.prototype.B=function(){return{code:this.code,message:this.message}};N.prototype.toJSON=function(){return this.B()};function vg(a){var b=a&&a.code;return b?new N(b.substring(tg.length),a.message):null}
var tg="auth/",ug={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
"code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
"dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
"invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.",
"invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.",
"invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
"invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
"invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.",
"auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.",
"missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",
timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","user-cancelled":"User did not grant your application the permissions it requested.",
"user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};function wg(a){var b=a[xg];if("undefined"===typeof b)throw new N("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new N("invalid-continue-uri");this.h=b;this.c=this.a=null;this.g=!1;var c=a[yg];if(c&&"object"===typeof c){b=c[zg];var d=c[Ag];c=c[Bg];if("string"===typeof b&&b.length){this.a=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new N("argument-error",Ag+" property must be a boolean when specified.");this.g=!!d;if("undefined"!==typeof c&&("string"!==
typeof c||"string"===typeof c&&!c.length))throw new N("argument-error",Bg+" property must be a non empty string when specified.");this.c=c||null}else{if("undefined"!==typeof b)throw new N("argument-error",zg+" property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new N("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new N("argument-error",yg+" property must be a non null object when specified.");this.b=null;if((b=a[Cg])&&"object"===
typeof b)if(b=b[Dg],"string"===typeof b&&b.length)this.b=b;else{if("undefined"!==typeof b)throw new N("argument-error",Dg+" property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new N("argument-error",Cg+" property must be a non null object when specified.");a=a[Eg];if("undefined"!==typeof a&&"boolean"!==typeof a)throw new N("argument-error",Eg+" property must be a boolean when specified.");if((this.f=!!a)&&!this.b&&!this.a)throw new N("argument-error",Eg+" property can't be true when no mobile application is provided.");
}var yg="android",Eg="handleCodeInApp",Cg="iOS",xg="url",Ag="installApp",Bg="minimumVersion",zg="packageName",Dg="bundleId";function Fg(a){var b={};b.continueUrl=a.h;b.canHandleCodeInApp=a.f;if(b.androidPackageName=a.a)b.androidMinimumVersion=a.c,b.androidInstallApp=a.g;b.iOSBundleId=a.b;for(var c in b)null===b[c]&&delete b[c];return b};function Gg(a){this.b=a.sub;na();this.a=a.provider_id||a.firebase&&a.firebase.sign_in_provider||null}function Hg(a){a=a.split(".");if(3!=a.length)return null;a=a[1];for(var b=(4-a.length%4)%4,c=0;c<b;c++)a+=".";try{var d=JSON.parse(Kd(a));if(d.sub&&d.iss&&d.aud&&d.exp)return new Gg(d)}catch(e){}return null};var Ig="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),Jg=["client_id","response_type","scope","redirect_uri","state"],Kg={Dc:{Ma:"locale",za:500,ya:600,Na:"facebook.com",$a:Jg},Fc:{Ma:null,za:500,ya:620,Na:"github.com",$a:Jg},Gc:{Ma:"hl",za:515,ya:680,Na:"google.com",$a:Jg},Mc:{Ma:"lang",za:485,ya:705,Na:"twitter.com",$a:Ig}};function Lg(a){for(var b in Kg)if(Kg[b].Na==a)return Kg[b];return null};function Mg(a){var b={};b["facebook.com"]=Ng;b["google.com"]=Og;b["github.com"]=Pg;b["twitter.com"]=Qg;var c=a&&a[Rg];try{if(c)return b[c]?new b[c](a):new Sg(a);if("undefined"!==typeof a[Tg])return new Ug(a)}catch(d){}return null}var Tg="idToken",Rg="providerId";function Ug(a){var b=a[Rg];if(!b&&a[Tg]){var c=Hg(a[Tg]);c&&c.a&&(b=c.a)}if(!b)throw Error("Invalid additional user info!");a=!!a.isNewUser;M(this,"providerId",b);M(this,"isNewUser",a)}
function Sg(a){Ug.call(this,a);a=Wf(a.rawUserInfo||"{}");M(this,"profile",kg(a||{}))}t(Sg,Ug);function Ng(a){Sg.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider ID!");}t(Ng,Sg);function Pg(a){Sg.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider ID!");M(this,"username",this.profile&&this.profile.login||null)}t(Pg,Sg);function Og(a){Sg.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider ID!");}t(Og,Sg);
function Qg(a){Sg.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider ID!");M(this,"username",a.screenName||null)}t(Qg,Sg);function Vg(a,b){return a.then(function(a){if(a[O]){var c=Hg(a[O]);if(!c||b!=c.b)throw new N("user-mismatch");return a}throw new N("user-mismatch");}).s(function(a){throw a&&a.code&&a.code==tg+"user-not-found"?new N("user-mismatch"):a;})}
function Wg(a,b){if(b.idToken||b.accessToken)b.idToken&&M(this,"idToken",b.idToken),b.accessToken&&M(this,"accessToken",b.accessToken);else if(b.oauthToken&&b.oauthTokenSecret)M(this,"accessToken",b.oauthToken),M(this,"secret",b.oauthTokenSecret);else throw new N("internal-error","failed to construct a credential");M(this,"providerId",a)}Wg.prototype.wa=function(a){return Xg(a,Yg(this))};Wg.prototype.b=function(a,b){var c=Yg(this);c.idToken=b;return Zg(a,c)};
Wg.prototype.c=function(a,b){var c=Yg(this);return Vg($g(a,c),b)};function Yg(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;return{postBody:Ie(b).toString(),requestUri:"http://localhost"}}
Wg.prototype.B=function(){var a={providerId:this.providerId};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};function ah(a,b){this.nc=b||[];gg(this,{providerId:a,isOAuthProvider:!0});this.qb={};this.Wa=(Lg(a)||{}).Ma||null;this.Ua=null}ah.prototype.Ba=function(a){this.qb=Ua(a);return this};function P(a){ah.call(this,a,Jg);this.a=[]}t(P,ah);
P.prototype.sa=function(a){Ha(this.a,a)||this.a.push(a);return this};P.prototype.vb=function(){return La(this.a)};P.prototype.credential=function(a,b){if(!a&&!b)throw new N("argument-error","credential failed: must provide the ID token and/or the access token.");return new Wg(this.providerId,{idToken:a||null,accessToken:b||null})};function bh(){P.call(this,"facebook.com")}t(bh,P);M(bh,"PROVIDER_ID","facebook.com");
function ch(a){if(!a)throw new N("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new bh).credential(null,b)}function dh(){P.call(this,"github.com")}t(dh,P);M(dh,"PROVIDER_ID","github.com");function eh(a){if(!a)throw new N("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new dh).credential(null,b)}
function fh(){P.call(this,"google.com");this.sa("profile")}t(fh,P);M(fh,"PROVIDER_ID","google.com");function gh(a,b){var c=a;q(a)&&(c=a.idToken,b=a.accessToken);return(new fh).credential(c,b)}function hh(){ah.call(this,"twitter.com",Ig)}t(hh,ah);M(hh,"PROVIDER_ID","twitter.com");
function ih(a,b){var c=a;q(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new N("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new Wg("twitter.com",c)}function jh(a,b){this.a=a;this.f=b;M(this,"providerId","password")}jh.prototype.wa=function(a){return Q(a,kh,{email:this.a,password:this.f})};jh.prototype.b=function(a,b){return Q(a,lh,{idToken:b,email:this.a,password:this.f})};
jh.prototype.c=function(a,b){return Vg(this.wa(a),b)};jh.prototype.B=function(){return{email:this.a,password:this.f}};function mh(){gg(this,{providerId:"password",isOAuthProvider:!1})}gg(mh,{PROVIDER_ID:"password"});function nh(a){if(!(a.Pa&&a.Oa||a.Da&&a.Y))throw new N("internal-error");this.a=a;M(this,"providerId","phone")}nh.prototype.wa=function(a){return a.Qa(oh(this))};nh.prototype.b=function(a,b){var c=oh(this);c.idToken=b;return Q(a,ph,c)};
nh.prototype.c=function(a,b){var c=oh(this);c.operation="REAUTH";a=Q(a,qh,c);return Vg(a,b)};nh.prototype.B=function(){var a={providerId:"phone"};this.a.Pa&&(a.verificationId=this.a.Pa);this.a.Oa&&(a.verificationCode=this.a.Oa);this.a.Da&&(a.temporaryProof=this.a.Da);this.a.Y&&(a.phoneNumber=this.a.Y);return a};function oh(a){return a.a.Da&&a.a.Y?{temporaryProof:a.a.Da,phoneNumber:a.a.Y}:{sessionInfo:a.a.Pa,code:a.a.Oa}}
function rh(a){try{this.a=a||firebase.auth()}catch(b){throw new N("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}gg(this,{providerId:"phone",isOAuthProvider:!1})}
rh.prototype.Qa=function(a,b){var c=this.a.c;return A(b.verify()).then(function(d){if(!m(d))throw new N("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return sh(c,{phoneNumber:a,recaptchaToken:d}).then(function(a){"function"===typeof b.reset&&b.reset();return a},function(a){"function"===typeof b.reset&&b.reset();throw a;});default:throw new N("argument-error",
'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};function th(a,b){if(!a)throw new N("missing-verification-id");if(!b)throw new N("missing-verification-code");return new nh({Pa:a,Oa:b})}gg(rh,{PROVIDER_ID:"phone"});
function uh(a){if(a.temporaryProof&&a.phoneNumber)return new nh({Da:a.temporaryProof,Y:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;try{switch(b){case "google.com":return gh(a,c);case "facebook.com":return ch(c);case "github.com":return eh(c);case "twitter.com":return ih(c,d);default:return(new P(b)).credential(a,c)}}catch(e){return null}}
function vh(a){if(!a.isOAuthProvider)throw new N("invalid-oauth-provider");};function wh(a,b,c,d,e){this.b=a;this.c=b||null;this.f=c||null;this.g=d||null;this.a=e||null;if(this.f||this.a){if(this.f&&this.a)throw new N("invalid-auth-event");if(this.f&&!this.g)throw new N("invalid-auth-event");}else throw new N("invalid-auth-event");}wh.prototype.B=function(){return{type:this.b,eventId:this.c,urlResponse:this.f,sessionId:this.g,error:this.a&&this.a.B()}};function xh(a){a=a||{};return a.type?new wh(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&vg(a.error)):null};function yh(a){var b="unauthorized-domain",c=void 0,d=De(a);a=d.b;d=d.c;"chrome-extension"==d?c=oa("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=oa("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b="operation-not-supported-in-this-environment";
N.call(this,b,c)}t(yh,N);function zh(a,b,c){N.call(this,a,c);a=b||{};a.rb&&M(this,"email",a.rb);a.Y&&M(this,"phoneNumber",a.Y);a.credential&&M(this,"credential",a.credential)}t(zh,N);zh.prototype.B=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);var b=this.credential&&this.credential.B();b&&Wa(a,b);return a};zh.prototype.toJSON=function(){return this.B()};
function Ah(a){if(a.code){var b=a.code||"";0==b.indexOf(tg)&&(b=b.substring(tg.length));var c={credential:uh(a)};if(a.email)c.rb=a.email;else if(a.phoneNumber)c.Y=a.phoneNumber;else return new N(b,a.message||void 0);return new zh(b,c,a.message)}return null};function Bh(a){this.f=a}t(Bh,Ne);Bh.prototype.a=function(){return new this.f};Bh.prototype.b=function(){return{}};
function Ch(a,b,c){var d="Node"==K();d=k.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new N("internal-error","The XMLHttpRequest compatibility library was not found.");this.b=a;a=b||{};this.i=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.l=a.secureTokenTimeout||Dh;this.c=Ua(a.secureTokenHeaders||Eh);this.g=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.h=a.firebaseTimeout||Fh;this.a=
Ua(a.firebaseHeaders||Gh);c&&(this.a["X-Client-Version"]=c,this.c["X-Client-Version"]=c);this.f=new rf;this.o=new Bh(d)}var Hh,O="idToken",Dh=new $f(3E4,6E4),Eh={"Content-Type":"application/x-www-form-urlencoded"},Fh=new $f(3E4,6E4),Gh={"Content-Type":"application/json"};function Ih(a,b){b?a.a["X-Firebase-Locale"]=b:delete a.a["X-Firebase-Locale"]}function Jh(a,b){b?(a.a["X-Client-Version"]=b,a.c["X-Client-Version"]=b):(delete a.a["X-Client-Version"],delete a.c["X-Client-Version"])}
function Kh(a,b,c,d,e,f,g){Zf()?(yf()?a=r(a.m,a):(Hh||(Hh=new z(function(a,b){Lh(a,b)})),a=r(a.u,a)),a(b,c,d,e,f,g)):c&&c(null)}
Ch.prototype.m=function(a,b,c,d,e,f){var g="Node"==K(),l=Mf()?g?new Se(this.o):new Se:new Se(this.f);if(f){l.f=Math.max(0,f);var n=setTimeout(function(){G(l,"timeout")},f)}fd(l,"complete",function(){n&&clearTimeout(n);var a=null;try{a=JSON.parse(hf(this))||null}catch(ub){a=null}b&&b(a)});ld(l,"ready",function(){n&&clearTimeout(n);Lc(this)});ld(l,"timeout",function(){n&&clearTimeout(n);Lc(this);b&&b(null)});Ye(l,a,c,d,e)};
var Mh=dc("https://apis.google.com/js/client.js?onload=%{onload}"),Nh="__fcb"+Math.floor(1E6*Math.random()).toString();function Lh(a,b){if(((window.gapi||{}).client||{}).request)a();else{k[Nh]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=hc(Mh,{onload:Nh});Td(kf(c),function(){b(Error("CORS_UNSUPPORTED"))})}}
Ch.prototype.u=function(a,b,c,d,e){var f=this;Hh.then(function(){window.gapi.client.setApiKey(f.b);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).s(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
function Oh(a,b){return new z(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Kh(a,a.i+"?key="+encodeURIComponent(a.b),function(a){a?a.error?d(Ph(a)):a.access_token&&a.refresh_token?c(a):d(new N("internal-error")):d(new N("network-request-failed"))},"POST",Ie(b).toString(),a.c,a.l.get()):d(new N("internal-error"))})}
function Qh(a,b,c,d,e,f){var g=De(a.g+b);I(g,"key",a.b);f&&I(g,"cb",na().toString());var l="GET"==c;if(l)for(var n in d)d.hasOwnProperty(n)&&I(g,n,d[n]);return new z(function(b,f){Kh(a,g.toString(),function(a){a?a.error?f(Ph(a,e||{})):b(a):f(new N("network-request-failed"))},c,l?void 0:Cc(Vf(d)),a.a,a.h.get())})}function Rh(a){if(!jf.test(a.email))throw new N("invalid-email");}function Sh(a){"email"in a&&Rh(a)}
function Th(a,b){return Q(a,Uh,{identifier:b,continueUri:Sf()?vf():"http://localhost"}).then(function(a){return a.allProviders||[]})}function Vh(a){return Q(a,Wh,{}).then(function(a){return a.authorizedDomains||[]})}function Xh(a){if(!a[O])throw new N("internal-error");}
function Yh(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new N("internal-error");}else{if(!a.sessionInfo)throw new N("missing-verification-id");if(!a.code)throw new N("missing-verification-code");}}Ch.prototype.gb=function(){return Q(this,Zh,{})};Ch.prototype.kb=function(a,b){return Q(this,$h,{idToken:a,email:b})};Ch.prototype.lb=function(a,b){return Q(this,lh,{idToken:a,password:b})};var ai={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};h=Ch.prototype;
h.mb=function(a,b){var c={idToken:a},d=[];Pa(ai,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return Q(this,$h,c)};h.cb=function(a,b){a={requestType:"PASSWORD_RESET",email:a};Wa(a,b);return Q(this,bi,a)};h.bb=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};Wa(a,b);return Q(this,ci,a)};function sh(a,b){return Q(a,di,b)}h.Qa=function(a){return Q(this,ei,a)};function fi(a,b,c){return Q(a,gi,{idToken:b,deleteProvider:c})}
function hi(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new N("internal-error");}function ii(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=Ah(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=Ah(a)):"EMAIL_EXISTS"==a.errorMessage&&(a.code="email-already-in-use",b=Ah(a));if(b)throw b;if(!a[O])throw new N("internal-error");}function Xg(a,b){b.returnIdpCredential=!0;return Q(a,ji,b)}
function Zg(a,b){b.returnIdpCredential=!0;return Q(a,ki,b)}function $g(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return Q(a,li,b)}function mi(a){if(!a.oobCode)throw new N("invalid-action-code");}h.Ta=function(a,b){return Q(this,ni,{oobCode:a,newPassword:b})};h.Ia=function(a){return Q(this,oi,{oobCode:a})};h.Sa=function(a){return Q(this,pi,{oobCode:a})};
var pi={endpoint:"setAccountInfo",D:mi,ga:"email"},oi={endpoint:"resetPassword",D:mi,O:function(a){if(!a.email||!a.requestType)throw new N("internal-error");}},qi={endpoint:"signupNewUser",D:function(a){Rh(a);if(!a.password)throw new N("weak-password");},O:Xh,T:!0},Uh={endpoint:"createAuthUri"},ri={endpoint:"deleteAccount",ea:["idToken"]},gi={endpoint:"setAccountInfo",ea:["idToken","deleteProvider"],D:function(a){if(!fa(a.deleteProvider))throw new N("internal-error");}},si={endpoint:"getAccountInfo"},
ci={endpoint:"getOobConfirmationCode",ea:["idToken","requestType"],D:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new N("internal-error");},ga:"email"},bi={endpoint:"getOobConfirmationCode",ea:["requestType"],D:function(a){if("PASSWORD_RESET"!=a.requestType)throw new N("internal-error");Rh(a)},ga:"email"},Wh={nb:!0,endpoint:"getProjectConfig",yb:"GET"},ti={nb:!0,endpoint:"getRecaptchaParam",yb:"GET",O:function(a){if(!a.recaptchaSiteKey)throw new N("internal-error");}},ni={endpoint:"resetPassword",
D:mi,ga:"email"},di={endpoint:"sendVerificationCode",ea:["phoneNumber","recaptchaToken"],ga:"sessionInfo"},$h={endpoint:"setAccountInfo",ea:["idToken"],D:Sh,T:!0},lh={endpoint:"setAccountInfo",ea:["idToken"],D:function(a){Sh(a);if(!a.password)throw new N("weak-password");},O:Xh,T:!0},Zh={endpoint:"signupNewUser",O:Xh,T:!0},ji={endpoint:"verifyAssertion",D:hi,O:ii,T:!0},li={endpoint:"verifyAssertion",D:hi,O:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new N("user-not-found");
if(!a[O])throw new N("internal-error");},T:!0},ki={endpoint:"verifyAssertion",D:function(a){hi(a);if(!a.idToken)throw new N("internal-error");},O:ii,T:!0},ui={endpoint:"verifyCustomToken",D:function(a){if(!a.token)throw new N("invalid-custom-token");},O:Xh,T:!0},kh={endpoint:"verifyPassword",D:function(a){Rh(a);if(!a.password)throw new N("wrong-password");},O:Xh,T:!0},ei={endpoint:"verifyPhoneNumber",D:Yh,O:Xh},ph={endpoint:"verifyPhoneNumber",D:function(a){if(!a.idToken)throw new N("internal-error");
Yh(a)},O:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",Ah(a);Xh(a)}},qh={Lb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",D:Yh,O:Xh};
function Q(a,b,c){if(!jg(c,b.ea))return B(new N("internal-error"));var d=b.yb||"POST",e;return A(c).then(b.D).then(function(){b.T&&(c.returnSecureToken=!0);return Qh(a,b.endpoint,d,c,b.Lb,b.nb||!1)}).then(function(a){return e=a}).then(b.O).then(function(){if(!b.ga)return e;if(!(b.ga in e))throw new N("internal-error");return e[b.ga]})}
function Ph(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new N(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",
INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",
INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",
UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash"};Wa(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new N(d[e],b);!b&&a&&(b=Uf(a));return new N("internal-error",b)};var vi={Ic:{Va:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",ab:"https://securetoken.googleapis.com/v1/token",id:"p"},Kc:{Va:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",ab:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},Lc:{Va:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",ab:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}};
function wi(a){for(var b in vi)if(vi[b].id===a)return a=vi[b],{firebaseEndpoint:a.Va,secureTokenEndpoint:a.ab};return null}var xi;xi=wi("__EID__")?"__EID__":void 0;function yi(a){this.b=a;this.a=null;this.Ya=zi(this)}
function zi(a){return Ai().then(function(){return new z(function(b,c){L("gapi.iframes.getContext")().open({where:document.body,url:a.b,messageHandlersFilter:L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(d){function e(){clearTimeout(f);b()}a.a=d;a.a.restyle({setHideOnLeave:!1});var f=setTimeout(function(){c(Error("Network Error"))},Bi.get());d.ping(e).then(e,function(){c(Error("Network Error"))})})})})}
function Ci(a,b){return a.Ya.then(function(){return new z(function(c){a.a.send(b.type,b,c,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}function Di(a,b){a.Ya.then(function(){a.a.register("authEvent",b,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}var Ei=dc("https://apis.google.com/js/api.js?onload=%{onload}"),Fi=new $f(3E4,6E4),Bi=new $f(5E3,15E3),Gi=null;
function Ai(){return Gi?Gi:Gi=(new z(function(a,b){if(Zf()){var c=function(){Yf();L("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Yf();b(Error("Network Error"))},timeout:Fi.get()})};if(L("gapi.iframes.Iframe"))a();else if(L("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();k[d]=function(){L("gapi.load")?c():b(Error("Network Error"))};d=hc(Ei,{onload:d});A(kf(d)).s(function(){b(Error("Network Error"))})}}else b(Error("Network Error"))})).s(function(a){Gi=
null;throw a;})};function Hi(a,b,c){this.i=a;this.g=b;this.h=c;this.f=null;this.a=Ee(this.i,"/__/auth/iframe");I(this.a,"apiKey",this.g);I(this.a,"appName",this.h);this.b=null;this.c=[]}Hi.prototype.toString=function(){this.f?I(this.a,"v",this.f):Le(this.a.a,"v");this.b?I(this.a,"eid",this.b):Le(this.a.a,"eid");this.c.length?I(this.a,"fw",this.c.join(",")):Le(this.a.a,"fw");return this.a.toString()};function Ii(a,b,c,d,e){this.m=a;this.u=b;this.c=c;this.l=d;this.i=this.g=this.h=null;this.a=e;this.f=null}
Ii.prototype.toString=function(){var a=Ee(this.m,"/__/auth/handler");I(a,"apiKey",this.u);I(a,"appName",this.c);I(a,"authType",this.l);if(this.a.isOAuthProvider){var b=this.a;try{var c=firebase.app(this.c).auth().$()}catch(l){c=null}b.Ua=c;I(a,"providerId",this.a.providerId);b=this.a;c=Vf(b.qb);for(var d in c)c[d]=c[d].toString();d=b.nc;c=Ua(c);for(var e=0;e<d.length;e++){var f=d[e];f in c&&delete c[f]}b.Wa&&b.Ua&&!c[b.Wa]&&(c[b.Wa]=b.Ua);Sa(c)||I(a,"customParameters",Uf(c))}"function"===typeof this.a.vb&&
(b=this.a.vb(),b.length&&I(a,"scopes",b.join(",")));this.h?I(a,"redirectUrl",this.h):Le(a.a,"redirectUrl");this.g?I(a,"eventId",this.g):Le(a.a,"eventId");this.i?I(a,"v",this.i):Le(a.a,"v");if(this.b)for(var g in this.b)this.b.hasOwnProperty(g)&&!Ce(a,g)&&I(a,g,this.b[g]);this.f?I(a,"eid",this.f):Le(a.a,"eid");g=Ji(this.c);g.length&&I(a,"fw",g.join(","));return a.toString()};function Ji(a){try{return firebase.app(a).auth().Ka()}catch(b){return[]}}
function Ki(a,b,c,d,e){this.u=a;this.f=b;this.b=c;this.c=d||null;this.h=e||null;this.m=this.o=this.v=null;this.g=[];this.l=this.a=null}
function Li(a){var b=vf();return Vh(a).then(function(a){a:{var c=De(b),e=c.c;c=c.b;for(var f=0;f<a.length;f++){var g=a[f];var l=c;var n=e;0==g.indexOf("chrome-extension://")?l=De(g).b==l&&"chrome-extension"==n:"http"!=n&&"https"!=n?l=!1:Gf.test(g)?l=l==g:(g=g.split(".").join("\\."),l=(new RegExp("^(.+\\."+g+"|"+g+")$","i")).test(l));if(l){a=!0;break a}}a=!1}if(!a)throw new yh(vf());})}
function Mi(a){if(a.l)return a.l;a.l=Hf().then(function(){if(!a.o){var b=a.c,c=a.h,d=Ji(a.b),e=new Hi(a.u,a.f,a.b);e.f=b;e.b=c;e.c=La(d||[]);a.o=e.toString()}a.i=new yi(a.o);Ni(a)});return a.l}h=Ki.prototype;h.Ca=function(a,b,c){var d=new N("popup-closed-by-user"),e=new N("web-storage-unsupported"),f=this,g=!1;return this.ba().then(function(){Oi(f).then(function(c){c||(a&&Cf(a),b(e),g=!0)})}).s(function(){}).then(function(){if(!g)return Ff(a)}).then(function(){if(!g)return sd(c).then(function(){b(d)})})};
h.Cb=function(){var a=J();return!Tf(a)&&!Xf(a)};h.xb=function(){return!1};
h.ub=function(a,b,c,d,e,f,g){if(!a)return B(new N("popup-blocked"));if(g&&!Tf())return this.ba().s(function(b){Cf(a);e(b)}),d(),A();this.a||(this.a=Li(Pi(this)));var l=this;return this.a.then(function(){var b=l.ba().s(function(b){Cf(a);e(b);throw b;});d();return b}).then(function(){vh(c);if(!g){var d=Qi(l.u,l.f,l.b,b,c,null,f,l.c,void 0,l.h);wf(d,a)}}).s(function(a){"auth/network-request-failed"==a.code&&(l.a=null);throw a;})};
function Pi(a){a.m||(a.v=a.c?Of(a.c,Ji(a.b)):null,a.m=new Ch(a.f,wi(a.h),a.v));return a.m}h.Aa=function(a,b,c){this.a||(this.a=Li(Pi(this)));var d=this;return this.a.then(function(){vh(b);var e=Qi(d.u,d.f,d.b,a,b,vf(),c,d.c,void 0,d.h);wf(e)}).s(function(a){"auth/network-request-failed"==a.code&&(d.a=null);throw a;})};h.ba=function(){var a=this;return Mi(this).then(function(){return a.i.Ya}).s(function(){a.a=null;throw new N("network-request-failed");})};h.Db=function(){return!0};
function Qi(a,b,c,d,e,f,g,l,n,D){a=new Ii(a,b,c,d,e);a.h=f;a.g=g;a.i=l;a.b=Ua(n||null);a.f=D;return a.toString()}function Ni(a){if(!a.i)throw Error("IfcHandler must be initialized!");Di(a.i,function(b){var c={};if(b&&b.authEvent){var d=!1;b=xh(b.authEvent);for(c=0;c<a.g.length;c++)d=a.g[c](b)||d;c={};c.status=d?"ACK":"ERROR";return A(c)}c.status="ERROR";return A(c)})}
function Oi(a){var b={type:"webStorageSupport"};return Mi(a).then(function(){return Ci(a.i,b)}).then(function(a){if(a&&a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})}h.ua=function(a){this.g.push(a)};h.Ja=function(a){Ja(this.g,function(b){return b==a})};function Ri(a){this.a=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.a)throw new N("internal-error","The React Native compatibility library was not found.");}h=Ri.prototype;h.get=function(a){return A(this.a.getItem(a)).then(function(a){return a&&Wf(a)})};h.set=function(a,b){return A(this.a.setItem(a,Uf(b)))};h.X=function(a){return A(this.a.removeItem(a))};h.ia=function(){};h.da=function(){};function Si(){this.a={}}h=Si.prototype;h.get=function(a){return A(this.a[a])};h.set=function(a,b){this.a[a]=b;return A()};h.X=function(a){delete this.a[a];return A()};h.ia=function(){};h.da=function(){};function Ti(a,b,c,d,e,f){if(!window.indexedDB)throw new N("web-storage-unsupported");this.u=a;this.h=b;this.g=c;this.l=d;this.m=e;this.f={};this.c=[];this.a=0;this.o=f||k.indexedDB}var Ui;function Vi(a){return new z(function(b,c){var d=a.o.open(a.u,a.m);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.h,{keyPath:a.g})}catch(f){c(f)}};d.onsuccess=function(a){b(a.target.result)}})}
function Wi(a){a.i||(a.i=Vi(a));return a.i}function Xi(a,b){return b.objectStore(a.h)}function Yi(a,b,c){return b.transaction([a.h],c?"readwrite":"readonly")}function Zi(a){return new z(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})}h=Ti.prototype;
h.set=function(a,b){var c=!1,d,e=this;return Qb(Wi(this).then(function(b){d=b;b=Xi(e,Yi(e,d,!0));return Zi(b.get(a))}).then(function(f){var g=Xi(e,Yi(e,d,!0));if(f)return f.value=b,Zi(g.put(f));e.a++;c=!0;f={};f[e.g]=a;f[e.l]=b;return Zi(g.add(f))}).then(function(){e.f[a]=b}),function(){c&&e.a--})};h.get=function(a){var b=this;return Wi(this).then(function(c){return Zi(Xi(b,Yi(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
h.X=function(a){var b=!1,c=this;return Qb(Wi(this).then(function(d){b=!0;c.a++;return Zi(Xi(c,Yi(c,d,!0))["delete"](a))}).then(function(){delete c.f[a]}),function(){b&&c.a--})};
h.vc=function(){var a=this;return Wi(this).then(function(b){var c=Xi(a,Yi(a,b,!1));return c.getAll?Zi(c.getAll()):new z(function(a,b){var d=[],e=c.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.a){for(d=0;d<b.length;d++)c[b[d][a.g]]=b[d][a.l];d=xf(a.f,c);a.f=c}return d})};h.ia=function(a){0==this.c.length&&$i(this);this.c.push(a)};
h.da=function(a){Ja(this.c,function(b){return b==a});0==this.c.length&&this.b&&this.b.cancel("STOP_EVENT")};function $i(a){function b(){a.b=sd(800).then(r(a.vc,a)).then(function(b){0<b.length&&w(a.c,function(a){a(b)})}).then(b).s(function(a){"STOP_EVENT"!=a.message&&b()});return a.b}a.b&&a.b.cancel("STOP_EVENT");b()};function aj(){if(!bj()){if("Node"==K())throw new N("internal-error","The LocalStorage compatibility library was not found.");throw new N("web-storage-unsupported");}this.a=k.localStorage||firebase.INTERNAL.node.localStorage}function bj(){var a="Node"==K();a=k.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}h=aj.prototype;
h.get=function(a){var b=this;return A().then(function(){var c=b.a.getItem(a);return Wf(c)})};h.set=function(a,b){var c=this;return A().then(function(){var d=Uf(b);null===d?c.X(a):c.a.setItem(a,d)})};h.X=function(a){var b=this;return A().then(function(){b.a.removeItem(a)})};h.ia=function(a){k.window&&cd(k.window,"storage",a)};h.da=function(a){k.window&&E(k.window,"storage",a)};function cj(){}h=cj.prototype;h.get=function(){return A(null)};h.set=function(){return A()};h.X=function(){return A()};h.ia=function(){};h.da=function(){};function dj(){if(!ej()){if("Node"==K())throw new N("internal-error","The SessionStorage compatibility library was not found.");throw new N("web-storage-unsupported");}this.a=k.sessionStorage||firebase.INTERNAL.node.sessionStorage}function ej(){var a="Node"==K();a=k.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}h=dj.prototype;
h.get=function(a){var b=this;return A().then(function(){var c=b.a.getItem(a);return Wf(c)})};h.set=function(a,b){var c=this;return A().then(function(){var d=Uf(b);null===d?c.X(a):c.a.setItem(a,d)})};h.X=function(a){var b=this;return A().then(function(){b.a.removeItem(a)})};h.ia=function(){};h.da=function(){};function fj(){var a={};a.Browser=gj;a.Node=hj;a.ReactNative=ij;this.a=a[K()]}var jj,gj={C:aj,jb:dj},hj={C:aj,jb:dj},ij={C:Ri,jb:cj};var kj={Hc:"local",NONE:"none",Jc:"session"};function lj(a){var b=new N("invalid-persistence-type"),c=new N("unsupported-persistence-type");a:{for(d in kj)if(kj[d]==a){var d=!0;break a}d=!1}if(!d||"string"!==typeof a)throw b;switch(K()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;default:if(!Pf()&&"none"!==a)throw c;}}
function mj(a,b,c,d){this.i=a;this.g=b;this.w=c;this.u=d;this.a={};jj||(jj=new fj);a=jj;try{if(uf()){Ui||(Ui=new Ti("firebaseLocalStorageDb","firebaseLocalStorage","fbase_key","value",1));var e=Ui}else e=new a.a.C;this.l=e}catch(f){this.l=new Si,this.u=!0}try{this.o=new a.a.jb}catch(f){this.o=new Si}this.v=new Si;this.h=r(this.m,this);this.b={}}var nj;function oj(){nj||(nj=new mj("firebase",":",!Xf(J())&&Lf()?!0:!1,Tf()));return nj}
function pj(a,b){switch(b){case "session":return a.o;case "none":return a.v;default:return a.l}}function qj(a,b,c){return a.i+a.g+b.name+(c?a.g+c:"")}mj.prototype.get=function(a,b){return pj(this,a.C).get(qj(this,a,b))};function rj(a,b,c){c=qj(a,b,c);"local"==b.C&&(a.b[c]=null);return pj(a,b.C).X(c)}mj.prototype.set=function(a,b,c){var d=qj(this,a,c),e=this,f=pj(this,a.C);return f.set(d,b).then(function(){return f.get(d)}).then(function(b){"local"==a.C&&(e.b[d]=b)})};
function sj(a,b,c,d){b=qj(a,b,c);"undefined"!==typeof k.localStorage&&"function"===typeof k.localStorage.getItem&&(a.b[b]=k.localStorage.getItem(b));Sa(a.a)&&(pj(a,"local").ia(a.h),a.u||uf()||tj(a));a.a[b]||(a.a[b]=[]);a.a[b].push(d)}function uj(a,b,c){b=qj(a,vj("local"),b);a.a[b]&&(Ja(a.a[b],function(a){return a==c}),0==a.a[b].length&&delete a.a[b]);Sa(a.a)&&wj(a)}
function tj(a){xj(a);a.f=setInterval(function(){for(var b in a.a){var c=k.localStorage.getItem(b),d=a.b[b];c!=d&&(a.b[b]=c,c=new Qc({type:"storage",key:b,target:window,oldValue:d,newValue:c,a:!0}),a.m(c))}},1E3)}function xj(a){a.f&&(clearInterval(a.f),a.f=null)}function wj(a){pj(a,"local").da(a.h);xj(a)}
mj.prototype.m=function(a){if(a&&a.g){var b=a.a.key;if(null==b)for(var c in this.a){var d=this.b[c];"undefined"===typeof d&&(d=null);var e=k.localStorage.getItem(c);e!==d&&(this.b[c]=e,this.c(c))}else if(0==b.indexOf(this.i+this.g)&&this.a[b]){"undefined"!==typeof a.a.a?pj(this,"local").da(this.h):xj(this);if(this.w)if(c=k.localStorage.getItem(b),d=a.a.newValue,d!==c)null!==d?k.localStorage.setItem(b,d):k.localStorage.removeItem(b);else if(this.b[b]===d&&"undefined"===typeof a.a.a)return;var f=this;
c=function(){if("undefined"!==typeof a.a.a||f.b[b]!==k.localStorage.getItem(b))f.b[b]=k.localStorage.getItem(b),f.c(b)};y&&kb&&10==kb&&k.localStorage.getItem(b)!==a.a.newValue&&a.a.newValue!==a.a.oldValue?setTimeout(c,10):c()}}else w(a,r(this.c,this))};mj.prototype.c=function(a){this.a[a]&&w(this.a[a],function(a){a()})};function zj(a){this.a=a;this.b=oj()}var Aj={name:"authEvent",C:"local"};function Bj(a){return a.b.get(Aj,a.a).then(function(a){return xh(a)})};function Cj(){this.a=oj()};function Dj(a,b,c,d,e,f,g){this.u=a;this.i=b;this.l=c;this.m=d||null;this.o=g||null;this.h=b+":"+c;this.A=new Cj;this.g=new zj(this.h);this.f=null;this.b=[];this.v=e||500;this.w=f||2E3;this.a=this.c=null}function Ej(a){return new N("invalid-cordova-configuration",a)}h=Dj.prototype;
h.ba=function(){return this.xa?this.xa:this.xa=If().then(function(){if("function"!==typeof L("universalLinks.subscribe",k))throw Ej("cordova-universal-links-plugin is not installed");if("undefined"===typeof L("BuildInfo.packageName",k))throw Ej("cordova-plugin-buildinfo is not installed");if("function"!==typeof L("cordova.plugins.browsertab.openUrl",k))throw Ej("cordova-plugin-browsertab is not installed");if("function"!==typeof L("cordova.InAppBrowser.open",k))throw Ej("cordova-plugin-inappbrowser is not installed");
},function(){throw new N("cordova-not-ready");})};function Fj(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function Gj(a){var b=new ie;he(b,a);a=[];var c=8*b.g;56>b.c?he(b,fe,56-b.c):he(b,fe,b.b-(b.c-56));for(var d=63;56<=d;d--)b.f[d]=c&255,c/=256;ge(b);for(d=c=0;d<b.i;d++)for(var e=24;0<=e;e-=8)a[c++]=b.a[d]>>e&255;return Hd(a)}
h.Ca=function(a,b){b(new N("operation-not-supported-in-this-environment"));return A()};h.ub=function(){return B(new N("operation-not-supported-in-this-environment"))};h.Db=function(){return!1};h.Cb=function(){return!0};h.xb=function(){return!0};
h.Aa=function(a,b,c){if(this.c)return B(new N("redirect-operation-pending"));var d=this,e=k.document,f=null,g=null,l=null,n=null;return this.c=Qb(A().then(function(){vh(b);return Hj(d)}).then(function(){return Ij(d,a,b,c)}).then(function(){return(new z(function(a,b){g=function(){var b=L("cordova.plugins.browsertab.close",k);a();"function"===typeof b&&b();d.a&&"function"===typeof d.a.close&&(d.a.close(),d.a=null);return!1};d.ua(g);l=function(){f||(f=sd(d.w).then(function(){b(new N("redirect-cancelled-by-user"))}))};
n=function(){ag()&&l()};e.addEventListener("resume",l,!1);J().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",n,!1)})).s(function(a){return Jj(d).then(function(){throw a;})})}),function(){l&&e.removeEventListener("resume",l,!1);n&&e.removeEventListener("visibilitychange",n,!1);f&&f.cancel();g&&d.Ja(g);d.c=null})};
function Ij(a,b,c,d){var e=Fj(),f=new wh(b,d,null,e,new N("no-auth-event")),g=L("BuildInfo.packageName",k);if("string"!==typeof g)throw new N("invalid-cordova-configuration");var l=L("BuildInfo.displayName",k),n={};if(J().toLowerCase().match(/iphone|ipad|ipod/))n.ibi=g;else if(J().toLowerCase().match(/android/))n.apn=g;else return B(new N("operation-not-supported-in-this-environment"));l&&(n.appDisplayName=l);e=Gj(e);n.sessionId=e;var D=Qi(a.u,a.i,a.l,b,c,null,d,a.m,n,a.o);return a.ba().then(function(){var b=
a.h;return a.A.a.set(Aj,f.B(),b)}).then(function(){var b=L("cordova.plugins.browsertab.isAvailable",k);if("function"!==typeof b)throw new N("invalid-cordova-configuration");var c=null;b(function(b){if(b){c=L("cordova.plugins.browsertab.openUrl",k);if("function"!==typeof c)throw new N("invalid-cordova-configuration");c(D)}else{c=L("cordova.InAppBrowser.open",k);if("function"!==typeof c)throw new N("invalid-cordova-configuration");b=J();b=!(!b.match(/(iPad|iPhone|iPod).*OS 7_\d/i)&&!b.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
a.a=c(D,b?"_blank":"_system","location=yes")}})})}function Kj(a,b){for(var c=0;c<a.b.length;c++)try{a.b[c](b)}catch(d){}}function Hj(a){a.f||(a.f=a.ba().then(function(){return new z(function(b){function c(d){b(d);a.Ja(c);return!1}a.ua(c);Lj(a)})}));return a.f}function Jj(a){var b=null;return Bj(a.g).then(function(c){b=c;c=a.g;return rj(c.b,Aj,c.a)}).then(function(){return b})}
function Lj(a){function b(b){e=!0;f&&f.cancel();Jj(a).then(function(c){var e=d;if(c&&b&&b.url){e=null;var f=b.url;var g=De(f),l=Ce(g,"link"),n=Ce(De(l),"link");g=Ce(g,"deep_link_id");f=Ce(De(g),"link")||g||n||l||f;-1!=f.indexOf("/__/auth/callback")&&(e=De(f),e=Wf(Ce(e,"firebaseError")||null),e=(e="object"===typeof e?vg(e):null)?new wh(c.b,c.c,null,null,e):new wh(c.b,c.c,f,c.g));e=e||d}Kj(a,e)})}var c=L("universalLinks.subscribe",k);if("function"!==typeof c)throw new N("invalid-cordova-configuration");
var d=new wh("unknown",null,null,null,new N("no-auth-event")),e=!1,f=sd(a.v).then(function(){return Jj(a).then(function(){e||Kj(a,d)})}),g=k.handleOpenURL;k.handleOpenURL=function(a){0==a.toLowerCase().indexOf(L("BuildInfo.packageName",k).toLowerCase()+"://")&&b({url:a});if("function"===typeof g)try{g(a)}catch(n){console.error(n)}};c(null,b)}
h.ua=function(a){this.b.push(a);Hj(this).s(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new wh("unknown",null,null,null,new N("no-auth-event")),a(b))})};h.Ja=function(a){Ja(this.b,function(b){return b==a})};function Mj(a){this.a=a;this.b=oj()}var Nj={name:"pendingRedirect",C:"session"};function Oj(a){return a.b.set(Nj,"pending",a.a)}function Pj(a){return rj(a.b,Nj,a.a)}function Qj(a){return a.b.get(Nj,a.a).then(function(a){return"pending"==a})};function Rj(a,b,c){this.v=a;this.l=b;this.u=c;this.h=[];this.f=!1;this.i=r(this.m,this);this.c=new Sj;this.o=new Tj;this.g=new Mj(this.l+":"+this.u);this.b={};this.b.unknown=this.c;this.b.signInViaRedirect=this.c;this.b.linkViaRedirect=this.c;this.b.reauthViaRedirect=this.c;this.b.signInViaPopup=this.o;this.b.linkViaPopup=this.o;this.b.reauthViaPopup=this.o;this.a=Uj(this.v,this.l,this.u,xi)}
function Uj(a,b,c,d){var e=firebase.SDK_VERSION||null;return Jf()?new Dj(a,b,c,e,void 0,void 0,d):new Ki(a,b,c,e,d)}Rj.prototype.reset=function(){this.f=!1;this.a.Ja(this.i);this.a=Uj(this.v,this.l,this.u)};function Vj(a){a.f||(a.f=!0,a.a.ua(a.i));var b=a.a;return a.a.ba().s(function(c){a.a==b&&a.reset();throw c;})}function Wj(a){a.a.Cb()&&Vj(a).s(function(b){var c=new wh("unknown",null,null,null,new N("operation-not-supported-in-this-environment"));Xj(b)&&a.m(c)});a.a.xb()||Yj(a.c)}
Rj.prototype.subscribe=function(a){Ha(this.h,a)||this.h.push(a);if(!this.f){var b=this;Qj(this.g).then(function(a){a?Pj(b.g).then(function(){Vj(b).s(function(a){var c=new wh("unknown",null,null,null,new N("operation-not-supported-in-this-environment"));Xj(a)&&b.m(c)})}):Wj(b)}).s(function(){Wj(b)})}};Rj.prototype.unsubscribe=function(a){Ja(this.h,function(b){return b==a})};
Rj.prototype.m=function(a){if(!a)throw new N("invalid-auth-event");for(var b=!1,c=0;c<this.h.length;c++){var d=this.h[c];if(d.ob(a.b,a.c)){(b=this.b[a.b])&&b.h(a,d);b=!0;break}}Yj(this.c);return b};var Zj=new $f(2E3,1E4),ak=new $f(3E4,6E4);Rj.prototype.aa=function(){return this.c.aa()};function bk(a,b,c,d,e,f){return a.a.ub(b,c,d,function(){a.f||(a.f=!0,a.a.ua(a.i))},function(){a.reset()},e,f)}function Xj(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1}
Rj.prototype.Aa=function(a,b,c){var d=this,e;return Oj(this.g).then(function(){return d.a.Aa(a,b,c).s(function(a){if(Xj(a))throw new N("operation-not-supported-in-this-environment");e=a;return Pj(d.g).then(function(){throw e;})}).then(function(){return d.a.Db()?new z(function(){}):Pj(d.g).then(function(){return d.aa()}).then(function(){}).s(function(){})})})};Rj.prototype.Ca=function(a,b,c,d){return this.a.Ca(c,function(c){a.fa(b,null,c,d)},Zj.get())};var ck={};
function dk(a,b,c){var d=b+":"+c;ck[d]||(ck[d]=new Rj(a,b,c));return ck[d]}function Sj(){this.b=null;this.f=[];this.c=[];this.a=null;this.g=!1}Sj.prototype.reset=function(){this.b=null;this.a&&(this.a.cancel(),this.a=null)};
Sj.prototype.h=function(a,b){if(!a)return B(new N("invalid-auth-event"));this.reset();this.g=!0;var c=a.b,d=a.c,e=a.a&&"auth/web-storage-unsupported"==a.a.code,f=a.a&&"auth/operation-not-supported-in-this-environment"==a.a.code;"unknown"!=c||e||f?a.a?(ek(this,!0,null,a.a),a=A()):a=b.va(c,d)?fk(this,a,b):B(new N("invalid-auth-event")):(ek(this,!1,null,null),a=A());return a};function Yj(a){a.g||(a.g=!0,ek(a,!1,null,null))}
function fk(a,b,c){c=c.va(b.b,b.c);var d=b.f,e=b.g,f=!!b.b.match(/Redirect$/);return c(d,e).then(function(b){ek(a,f,b,null)}).s(function(b){ek(a,f,null,b)})}function gk(a,b){a.b=function(){return B(b)};if(a.c.length)for(var c=0;c<a.c.length;c++)a.c[c](b)}function hk(a,b){a.b=function(){return A(b)};if(a.f.length)for(var c=0;c<a.f.length;c++)a.f[c](b)}function ek(a,b,c,d){b?d?gk(a,d):hk(a,c):hk(a,{user:null});a.f=[];a.c=[]}
Sj.prototype.aa=function(){var a=this;return new z(function(b,c){a.b?a.b().then(b,c):(a.f.push(b),a.c.push(c),ik(a))})};function ik(a){var b=new N("timeout");a.a&&a.a.cancel();a.a=sd(ak.get()).then(function(){a.b||ek(a,!0,null,b)})}function Tj(){}Tj.prototype.h=function(a,b){if(!a)return B(new N("invalid-auth-event"));var c=a.b,d=a.c;a.a?(b.fa(a.b,null,a.a,a.c),a=A()):a=b.va(c,d)?jk(a,b):B(new N("invalid-auth-event"));return a};
function jk(a,b){var c=a.c,d=a.b;return b.va(d,c)(a.f,a.g).then(function(a){b.fa(d,a,null,c)}).s(function(a){b.fa(d,null,a,c)})};function kk(a,b){this.a=b;M(this,"verificationId",a)}kk.prototype.confirm=function(a){a=th(this.verificationId,a);return this.a(a)};function lk(a,b,c,d){return(new rh(a)).Qa(b,c).then(function(a){return new kk(a,d)})};function mk(a,b,c,d,e,f){this.h=a;this.i=b;this.g=c;this.c=d;this.f=e;this.l=!!f;this.b=null;this.a=this.c;if(this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!");}mk.prototype.start=function(){this.a=this.c;nk(this,!0)};function ok(a,b){if(b)return a.a=a.c,a.g();b=a.a;a.a*=2;a.a>a.f&&(a.a=a.f);return b}
function nk(a,b){pk(a);a.b=sd(ok(a,b)).then(function(){return a.l?A():bg()}).then(function(){return a.h()}).then(function(){nk(a,!0)}).s(function(b){a.i(b)&&nk(a,!1)})}function pk(a){a.b&&(a.b.cancel(),a.b=null)};function qk(a){this.f=a;this.b=this.a=null;this.c=0}qk.prototype.B=function(){return{apiKey:this.f.b,refreshToken:this.a,accessToken:this.b,expirationTime:this.c}};function rk(a,b){var c=b[O],d=b.refreshToken;b=sk(b.expiresIn);a.b=c;a.c=b;a.a=d}function sk(a){return na()+1E3*parseInt(a,10)}
function tk(a,b){return Oh(a.f,b).then(function(b){a.b=b.access_token;a.c=sk(b.expires_in);a.a=b.refresh_token;return{accessToken:a.b,expirationTime:a.c,refreshToken:a.a}}).s(function(b){"auth/user-token-expired"==b.code&&(a.a=null);throw b;})}qk.prototype.getToken=function(a){a=!!a;return this.b&&!this.a?B(new N("user-token-expired")):a||!this.b||na()>this.c-3E4?this.a?tk(this,{grant_type:"refresh_token",refresh_token:this.a}):A(null):A({accessToken:this.b,expirationTime:this.c,refreshToken:this.a})};function uk(a,b){this.a=a||null;this.b=b||null;gg(this,{lastSignInTime:cg(b||null),creationTime:cg(a||null)})}function vk(a){return new uk(a.a,a.b)}uk.prototype.B=function(){return{lastLoginAt:this.b,createdAt:this.a}};function wk(a,b,c,d,e,f){gg(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b})}function xk(a,b){C.call(this,a);for(var c in b)this[c]=b[c]}t(xk,C);
function yk(a,b,c){this.A=[];this.G=a.apiKey;this.o=a.appName;this.w=a.authDomain||null;a=firebase.SDK_VERSION?Of(firebase.SDK_VERSION):null;this.c=new Ch(this.G,wi(xi),a);this.h=new qk(this.c);zk(this,b[O]);rk(this.h,b);M(this,"refreshToken",this.h.a);Ak(this,c||{});F.call(this);this.I=!1;this.w&&Rf()&&(this.a=dk(this.w,this.G,this.o));this.N=[];this.i=null;this.l=Bk(this);this.U=r(this.Ga,this);var d=this;this.ha=null;this.ra=function(a){d.na(a.h)};this.W=null;this.R=[];this.qa=function(a){Ck(d,
a.f)};this.V=null}t(yk,F);yk.prototype.na=function(a){this.ha=a;Ih(this.c,a)};yk.prototype.$=function(){return this.ha};function Dk(a,b){a.W&&E(a.W,"languageCodeChanged",a.ra);(a.W=b)&&cd(b,"languageCodeChanged",a.ra)}function Ck(a,b){a.R=b;Jh(a.c,firebase.SDK_VERSION?Of(firebase.SDK_VERSION,a.R):null)}yk.prototype.Ka=function(){return La(this.R)};function Ek(a,b){a.V&&E(a.V,"frameworkChanged",a.qa);(a.V=b)&&cd(b,"frameworkChanged",a.qa)}yk.prototype.Ga=function(){this.l.b&&(pk(this.l),this.l.start())};
function Fk(a){try{return firebase.app(a.o).auth()}catch(b){throw new N("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.o+"'!");}}function Bk(a){return new mk(function(){return a.F(!0)},function(a){return a&&"auth/network-request-failed"==a.code?!0:!1},function(){var b=a.h.c-na()-3E5;return 0<b?b:0},3E4,96E4,!1)}function Gk(a){a.m||a.l.b||(a.l.start(),E(a,"tokenChanged",a.U),cd(a,"tokenChanged",a.U))}function Hk(a){E(a,"tokenChanged",a.U);pk(a.l)}
function zk(a,b){a.pa=b;M(a,"_lat",b)}function Ik(a,b){Ja(a.N,function(a){return a==b})}function Jk(a){for(var b=[],c=0;c<a.N.length;c++)b.push(a.N[c](a));return Ob(b).then(function(){return a})}function Kk(a){a.a&&!a.I&&(a.I=!0,a.a.subscribe(a))}
function Ak(a,b){gg(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,metadata:new uk(b.createdAt,b.lastLoginAt),providerData:[]})}M(yk.prototype,"providerId","firebase");function Lk(){}function Mk(a){return A().then(function(){if(a.m)throw new N("app-deleted");})}function Nk(a){return Da(a.providerData,function(a){return a.providerId})}
function Ok(a,b){b&&(Pk(a,b.providerId),a.providerData.push(b))}function Pk(a,b){Ja(a.providerData,function(a){return a.providerId==b})}function Qk(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&M(a,b,c)}
function Rk(a,b){a!=b&&(gg(a,{uid:b.uid,displayName:b.displayName,photoURL:b.photoURL,email:b.email,emailVerified:b.emailVerified,phoneNumber:b.phoneNumber,isAnonymous:b.isAnonymous,providerData:[]}),b.metadata?M(a,"metadata",vk(b.metadata)):M(a,"metadata",new uk),w(b.providerData,function(b){Ok(a,b)}),a.h=b.h,M(a,"refreshToken",a.h.a))}h=yk.prototype;h.reload=function(){var a=this;return R(this,Mk(this).then(function(){return Sk(a).then(function(){return Jk(a)}).then(Lk)}))};
function Sk(a){return a.F().then(function(b){var c=a.isAnonymous;return Tk(a,b).then(function(){c||Qk(a,"isAnonymous",!1);return b})})}h.F=function(a){var b=this;return R(this,Mk(this).then(function(){return b.h.getToken(a)}).then(function(a){if(!a)throw new N("internal-error");a.accessToken!=b.pa&&(zk(b,a.accessToken),G(b,new xk("tokenChanged")));Qk(b,"refreshToken",a.refreshToken);return a.accessToken}))};
h.getToken=function(a){dg["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]||(dg["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn("firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."));return this.F(a)};
function Uk(a,b){b[O]&&a.pa!=b[O]&&(rk(a.h,b),G(a,new xk("tokenChanged")),zk(a,b[O]),Qk(a,"refreshToken",a.h.a))}function Tk(a,b){return Q(a.c,si,{idToken:b}).then(r(a.gc,a))}
h.gc=function(a){a=a.users;if(!a||!a.length)throw new N("internal-error");a=a[0];Ak(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber,lastLoginAt:a.lastLoginAt,createdAt:a.createdAt});for(var b=Vk(a),c=0;c<b.length;c++)Ok(this,b[c]);Qk(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
function Vk(a){return(a=a.providerUserInfo)&&a.length?Da(a,function(a){return new wk(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl,a.phoneNumber)}):[]}h.Za=function(a){var b=this,c=null;return R(this,a.c(this.c,this.uid).then(function(a){Uk(b,a);c=Wk(b,a,"reauthenticate");b.i=null;return b.reload()}).then(function(){return c}),!0)};h.hc=function(a){return this.Za(a).then(function(){})};
function Xk(a,b){return Sk(a).then(function(){if(Ha(Nk(a),b))return Jk(a).then(function(){throw new N("provider-already-linked");})})}h.Xa=function(a){var b=this,c=null;return R(this,Xk(this,a.providerId).then(function(){return b.F()}).then(function(c){return a.b(b.c,c)}).then(function(a){c=Wk(b,a,"link");return Yk(b,a)}).then(function(){return c}))};h.Zb=function(a){return this.Xa(a).then(function(a){return a.user})};
h.$b=function(a,b){var c=this;return R(this,Xk(this,"phone").then(function(){return lk(Fk(c),a,b,r(c.Xa,c))}))};h.ic=function(a,b){var c=this;return R(this,A().then(function(){return lk(Fk(c),a,b,r(c.Za,c))}),!0)};function Wk(a,b,c){var d=uh(b);b=Mg(b);return hg({user:a,credential:d,additionalUserInfo:b,operationType:c})}function Yk(a,b){Uk(a,b);return a.reload().then(function(){return a})}
h.kb=function(a){var b=this;return R(this,this.F().then(function(c){return b.c.kb(c,a)}).then(function(a){Uk(b,a);return b.reload()}))};h.zc=function(a){var b=this;return R(this,this.F().then(function(c){return a.b(b.c,c)}).then(function(a){Uk(b,a);return b.reload()}))};h.lb=function(a){var b=this;return R(this,this.F().then(function(c){return b.c.lb(c,a)}).then(function(a){Uk(b,a);return b.reload()}))};
h.mb=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Mk(this);var b=this;return R(this,this.F().then(function(c){return b.c.mb(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){Uk(b,a);Qk(b,"displayName",a.displayName||null);Qk(b,"photoURL",a.photoUrl||null);w(b.providerData,function(a){"password"===a.providerId&&(M(a,"displayName",b.displayName),M(a,"photoURL",b.photoURL))});return Jk(b)}).then(Lk))};
h.yc=function(a){var b=this;return R(this,Sk(this).then(function(c){return Ha(Nk(b),a)?fi(b.c,c,[a]).then(function(a){var c={};w(a.providerUserInfo||[],function(a){c[a.providerId]=!0});w(Nk(b),function(a){c[a]||Pk(b,a)});c[rh.PROVIDER_ID]||M(b,"phoneNumber",null);return Jk(b)}):Jk(b).then(function(){throw new N("no-such-provider");})}))};
h.delete=function(){var a=this;return R(this,this.F().then(function(b){return Q(a.c,ri,{idToken:b})}).then(function(){G(a,new xk("userDeleted"))})).then(function(){for(var b=0;b<a.A.length;b++)a.A[b].cancel("app-deleted");Dk(a,null);Ek(a,null);a.A=[];a.m=!0;Hk(a);M(a,"refreshToken",null);a.a&&a.a.unsubscribe(a)})};
h.ob=function(a,b){return"linkViaPopup"==a&&(this.g||null)==b&&this.f||"reauthViaPopup"==a&&(this.g||null)==b&&this.f||"linkViaRedirect"==a&&(this.Z||null)==b||"reauthViaRedirect"==a&&(this.Z||null)==b?!0:!1};h.fa=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.g||null)||(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.b&&(this.b.cancel(),this.b=null),delete this.f,delete this.v)};
h.va=function(a,b){return"linkViaPopup"==a&&b==(this.g||null)?r(this.sb,this):"reauthViaPopup"==a&&b==(this.g||null)?r(this.tb,this):"linkViaRedirect"==a&&(this.Z||null)==b?r(this.sb,this):"reauthViaRedirect"==a&&(this.Z||null)==b?r(this.tb,this):null};h.ac=function(a){var b=this;return Zk(this,"linkViaPopup",a,function(){return Xk(b,a.providerId).then(function(){return Jk(b)})},!1)};h.jc=function(a){return Zk(this,"reauthViaPopup",a,function(){return A()},!0)};
function Zk(a,b,c,d,e){if(!Rf())return B(new N("operation-not-supported-in-this-environment"));if(a.i&&!e)return B(a.i);var f=Lg(c.providerId),g=Qf(a.uid+":::"),l=null;(!Tf()||Lf())&&a.w&&c.isOAuthProvider&&(l=Qi(a.w,a.G,a.o,b,c,null,g,firebase.SDK_VERSION||null));var n=Df(l,f&&f.za,f&&f.ya);d=d().then(function(){$k(a);if(!e)return a.F().then(function(){})}).then(function(){return bk(a.a,n,b,c,g,!!l)}).then(function(){return new z(function(c,d){a.fa(b,null,new N("cancelled-popup-request"),a.g||null);
a.f=c;a.v=d;a.g=g;a.b=a.a.Ca(a,b,n,g)})}).then(function(a){n&&Cf(n);return a?hg(a):null}).s(function(a){n&&Cf(n);throw a;});return R(a,d,e)}h.bc=function(a){var b=this;return al(this,"linkViaRedirect",a,function(){return Xk(b,a.providerId)},!1)};h.kc=function(a){return al(this,"reauthViaRedirect",a,function(){return A()},!0)};
function al(a,b,c,d,e){if(!Rf())return B(new N("operation-not-supported-in-this-environment"));if(a.i&&!e)return B(a.i);var f=null,g=Qf(a.uid+":::");d=d().then(function(){$k(a);if(!e)return a.F().then(function(){})}).then(function(){a.Z=g;return Jk(a)}).then(function(b){a.ca&&(b=a.ca,b=b.b.set(bl,a.B(),b.a));return b}).then(function(){return a.a.Aa(b,c,g)}).s(function(b){f=b;if(a.ca)return cl(a.ca);throw f;}).then(function(){if(f)throw f;});return R(a,d,e)}
function $k(a){if(!a.a||!a.I){if(a.a&&!a.I)throw new N("internal-error");throw new N("auth-domain-config-required");}}h.sb=function(a,b){var c=this;this.b&&(this.b.cancel(),this.b=null);var d=null,e=this.F().then(function(d){return Zg(c.c,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=Wk(c,a,"link");return Yk(c,a)}).then(function(){return d});return R(this,e)};
h.tb=function(a,b){var c=this;this.b&&(this.b.cancel(),this.b=null);var d=null,e=A().then(function(){return Vg($g(c.c,{requestUri:a,sessionId:b}),c.uid)}).then(function(a){d=Wk(c,a,"reauthenticate");Uk(c,a);c.i=null;return c.reload()}).then(function(){return d});return R(this,e,!0)};h.bb=function(a){var b=this,c=null;return R(this,this.F().then(function(b){c=b;return"undefined"===typeof a||Sa(a)?{}:Fg(new wg(a))}).then(function(a){return b.c.bb(c,a)}).then(function(a){if(b.email!=a)return b.reload()}).then(function(){}))};
function R(a,b,c){var d=dl(a,b,c);a.A.push(d);Qb(d,function(){Ia(a.A,d)});return d}function dl(a,b,c){return a.i&&!c?(b.cancel(),B(a.i)):b.s(function(b){!b||"auth/user-disabled"!=b.code&&"auth/user-token-expired"!=b.code||(a.i||G(a,new xk("userInvalidated")),a.i=b);throw b;})}h.toJSON=function(){return this.B()};
h.B=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.G,appName:this.o,authDomain:this.w,stsTokenManager:this.h.B(),redirectEventId:this.Z||null};this.metadata&&Wa(a,this.metadata.B());w(this.providerData,function(b){a.providerData.push(ig(b))});return a};
function el(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c[O]=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-na())/1E3;else return null;var d=new yk(b,c,a);a.providerData&&w(a.providerData,function(a){a&&Ok(d,hg(a))});a.redirectEventId&&(d.Z=a.redirectEventId);return d}
function fl(a,b,c,d){var e=new yk(a,b);c&&(e.ca=c);d&&Ck(e,d);return e.reload().then(function(){return e})};function gl(a){this.a=a;this.b=oj()}var bl={name:"redirectUser",C:"session"};function cl(a){return rj(a.b,bl,a.a)}function hl(a,b){return a.b.get(bl,a.a).then(function(a){a&&b&&(a.authDomain=b);return el(a||{})})};function il(a,b){this.a=a;this.b=b||oj();this.c=null;this.f=jl(this);sj(this.b,vj("local"),this.a,r(this.g,this))}il.prototype.g=function(){var a=this,b=vj("local");kl(this,function(){return A().then(function(){return a.c&&"local"!=a.c.C?a.b.get(b,a.a):null}).then(function(c){if(c)return ll(a,"local").then(function(){a.c=b})})})};function ll(a,b){var c=[],d;for(d in kj)kj[d]!==b&&c.push(rj(a.b,vj(kj[d]),a.a));c.push(rj(a.b,ml,a.a));return Nb(c)}
function jl(a){var b=vj("local"),c=vj("session"),d=vj("none");return a.b.get(c,a.a).then(function(e){return e?c:a.b.get(d,a.a).then(function(c){return c?d:a.b.get(b,a.a).then(function(c){return c?b:a.b.get(ml,a.a).then(function(a){return a?vj(a):b})})})}).then(function(b){a.c=b;return ll(a,b.C)}).s(function(){a.c||(a.c=b)})}var ml={name:"persistence",C:"session"};function vj(a){return{name:"authUser",C:a}}
il.prototype.eb=function(a){var b=null,c=this;lj(a);return kl(this,function(){return a!=c.c.C?c.b.get(c.c,c.a).then(function(d){b=d;return ll(c,a)}).then(function(){c.c=vj(a);if(b)return c.b.set(c.c,b,c.a)}):A()})};function nl(a){return kl(a,function(){return a.b.set(ml,a.c.C,a.a)})}function ol(a,b){return kl(a,function(){return a.b.set(a.c,b.B(),a.a)})}function pl(a){return kl(a,function(){return rj(a.b,a.c,a.a)})}
function ql(a,b){return kl(a,function(){return a.b.get(a.c,a.a).then(function(a){a&&b&&(a.authDomain=b);return el(a||{})})})}function kl(a,b){a.f=a.f.then(b,b);return a.f};function rl(a){this.l=!1;M(this,"app",a);if(S(this).options&&S(this).options.apiKey)a=firebase.SDK_VERSION?Of(firebase.SDK_VERSION):null,this.c=new Ch(S(this).options&&S(this).options.apiKey,wi(xi),a);else throw new N("invalid-api-key");this.N=[];this.m=[];this.I=[];this.Gb=firebase.INTERNAL.createSubscribe(r(this.Xb,this));this.R=void 0;this.Hb=firebase.INTERNAL.createSubscribe(r(this.Yb,this));sl(this,null);this.h=new il(S(this).options.apiKey+":"+S(this).name);this.G=new gl(S(this).options.apiKey+
":"+S(this).name);this.U=T(this,tl(this));this.i=T(this,ul(this));this.W=!1;this.ha=r(this.uc,this);this.Ga=r(this.ka,this);this.pa=r(this.Pb,this);this.qa=r(this.Vb,this);this.ra=r(this.Wb,this);vl(this);this.INTERNAL={};this.INTERNAL["delete"]=r(this.delete,this);this.INTERNAL.logFramework=r(this.cc,this);this.o=0;F.call(this);wl(this);this.A=[]}t(rl,F);function xl(a){C.call(this,"languageCodeChanged");this.h=a}t(xl,C);function yl(a){C.call(this,"frameworkChanged");this.f=a}t(yl,C);h=rl.prototype;
h.eb=function(a){a=this.h.eb(a);return T(this,a)};h.na=function(a){this.V===a||this.l||(this.V=a,Ih(this.c,this.V),G(this,new xl(this.$())))};h.$=function(){return this.V};h.Ac=function(){var a=k.navigator;this.na(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null)};h.cc=function(a){this.A.push(a);Jh(this.c,firebase.SDK_VERSION?Of(firebase.SDK_VERSION,this.A):null);G(this,new yl(this.A))};h.Ka=function(){return La(this.A)};
function wl(a){Object.defineProperty(a,"lc",{get:function(){return this.$()},set:function(a){this.na(a)},enumerable:!1});a.V=null}h.toJSON=function(){return{apiKey:S(this).options.apiKey,authDomain:S(this).options.authDomain,appName:S(this).name,currentUser:U(this)&&U(this).B()}};function zl(a){return a.Fb||B(new N("auth-domain-config-required"))}
function vl(a){var b=S(a).options.authDomain,c=S(a).options.apiKey;b&&Rf()&&(a.Fb=a.U.then(function(){if(!a.l){a.a=dk(b,c,S(a).name);a.a.subscribe(a);U(a)&&Kk(U(a));if(a.w){Kk(a.w);var d=a.w;d.na(a.$());Dk(d,a);d=a.w;Ck(d,a.A);Ek(d,a);a.w=null}return a.a}}))}h.ob=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.g==b&&!!this.f;default:return!1}};
h.fa=function(a,b,c,d){"signInViaPopup"==a&&this.g==d&&(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.b&&(this.b.cancel(),this.b=null),delete this.f,delete this.v)};h.va=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.g==b&&this.f?r(this.Ob,this):null};
h.Ob=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.b&&(this.b.cancel(),this.b=null);var d=null,e=null,f=Xg(c.c,a).then(function(a){d=uh(a);e=Mg(a);return a});a=c.U.then(function(){return f}).then(function(a){return Al(c,a)}).then(function(){return hg({user:U(c),credential:d,additionalUserInfo:e,operationType:"signIn"})});return T(this,a)};
h.sc=function(a){if(!Rf())return B(new N("operation-not-supported-in-this-environment"));var b=this,c=Lg(a.providerId),d=Qf(),e=null;(!Tf()||Lf())&&S(this).options.authDomain&&a.isOAuthProvider&&(e=Qi(S(this).options.authDomain,S(this).options.apiKey,S(this).name,"signInViaPopup",a,null,d,firebase.SDK_VERSION||null));var f=Df(e,c&&c.za,c&&c.ya);c=zl(this).then(function(b){return bk(b,f,"signInViaPopup",a,d,!!e)}).then(function(){return new z(function(a,c){b.fa("signInViaPopup",null,new N("cancelled-popup-request"),
b.g);b.f=a;b.v=c;b.g=d;b.b=b.a.Ca(b,"signInViaPopup",f,d)})}).then(function(a){f&&Cf(f);return a?hg(a):null}).s(function(a){f&&Cf(f);throw a;});return T(this,c)};h.tc=function(a){if(!Rf())return B(new N("operation-not-supported-in-this-environment"));var b=this,c=zl(this).then(function(){return nl(b.h)}).then(function(){return b.a.Aa("signInViaRedirect",a)});return T(this,c)};
h.aa=function(){if(!Rf())return B(new N("operation-not-supported-in-this-environment"));var a=this,b=zl(this).then(function(){return a.a.aa()}).then(function(a){return a?hg(a):null});return T(this,b)};function Al(a,b){var c={};c.apiKey=S(a).options.apiKey;c.authDomain=S(a).options.authDomain;c.appName=S(a).name;return a.U.then(function(){return fl(c,b,a.G,a.Ka())}).then(function(b){if(U(a)&&b.uid==U(a).uid)return Rk(U(a),b),a.ka(b);sl(a,b);Kk(b);return a.ka(b)}).then(function(){Bl(a)})}
function sl(a,b){U(a)&&(Ik(U(a),a.Ga),E(U(a),"tokenChanged",a.pa),E(U(a),"userDeleted",a.qa),E(U(a),"userInvalidated",a.ra),Hk(U(a)));b&&(b.N.push(a.Ga),cd(b,"tokenChanged",a.pa),cd(b,"userDeleted",a.qa),cd(b,"userInvalidated",a.ra),0<a.o&&Gk(b));M(a,"currentUser",b);b&&(b.na(a.$()),Dk(b,a),Ck(b,a.A),Ek(b,a))}h.hb=function(){var a=this,b=this.i.then(function(){if(!U(a))return A();sl(a,null);return pl(a.h).then(function(){Bl(a)})});return T(this,b)};
function Cl(a){var b=hl(a.G,S(a).options.authDomain).then(function(b){if(a.w=b)b.ca=a.G;return cl(a.G)});return T(a,b)}function tl(a){var b=S(a).options.authDomain,c=Cl(a).then(function(){return ql(a.h,b)}).then(function(b){return b?(b.ca=a.G,a.w&&(a.w.Z||null)==(b.Z||null)?b:b.reload().then(function(){return ol(a.h,b).then(function(){return b})}).s(function(c){return"auth/network-request-failed"==c.code?b:pl(a.h)})):null}).then(function(b){sl(a,b||null)});return T(a,c)}
function ul(a){return a.U.then(function(){return a.aa()}).s(function(){}).then(function(){if(!a.l)return a.ha()}).s(function(){}).then(function(){if(!a.l){a.W=!0;var b=a.h;sj(b.b,vj("local"),b.a,a.ha)}})}
h.uc=function(){var a=this;return ql(this.h,S(this).options.authDomain).then(function(b){if(!a.l){var c;if(c=U(a)&&b){c=U(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return Rk(U(a),b),U(a).F();if(U(a)||b)sl(a,b),b&&(Kk(b),b.ca=a.G),a.a&&a.a.subscribe(a),Bl(a)}})};h.ka=function(a){return ol(this.h,a)};h.Pb=function(){Bl(this);this.ka(U(this))};h.Vb=function(){this.hb()};h.Wb=function(){this.hb()};
function Dl(a,b){var c=null,d=null;return T(a,b.then(function(b){c=uh(b);d=Mg(b);return Al(a,b)}).then(function(){return hg({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))}h.Xb=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};h.Yb=function(a){var b=this;El(this,function(){a.next(U(b))})};h.ec=function(a,b,c){var d=this;this.W&&firebase.Promise.resolve().then(function(){p(a)?a(U(d)):p(a.next)&&a.next(U(d))});return this.Gb(a,b,c)};
h.dc=function(a,b,c){var d=this;this.W&&firebase.Promise.resolve().then(function(){d.R=d.getUid();p(a)?a(U(d)):p(a.next)&&a.next(U(d))});return this.Hb(a,b,c)};h.Rb=function(a){var b=this,c=this.i.then(function(){return U(b)?U(b).F(a).then(function(a){return{accessToken:a}}):null});return T(this,c)};h.pc=function(a){var b=this;return this.i.then(function(){return Dl(b,Q(b.c,ui,{token:a}))}).then(function(a){a=a.user;Qk(a,"isAnonymous",!1);return b.ka(a)}).then(function(){return U(b)})};
h.qc=function(a,b){var c=this;return this.i.then(function(){return Dl(c,Q(c.c,kh,{email:a,password:b}))}).then(function(a){return a.user})};h.Kb=function(a,b){var c=this;return this.i.then(function(){return Dl(c,Q(c.c,qi,{email:a,password:b}))}).then(function(a){return a.user})};h.oc=function(a){return this.fb(a).then(function(a){return a.user})};h.fb=function(a){var b=this;return this.i.then(function(){return Dl(b,a.wa(b.c))})};
h.gb=function(){var a=this;return this.i.then(function(){var b=U(a);return b&&b.isAnonymous?b:Dl(a,a.c.gb()).then(function(b){b=b.user;Qk(b,"isAnonymous",!0);return a.ka(b)}).then(function(){return U(a)})})};function S(a){return a.app}function U(a){return a.currentUser}h.getUid=function(){return U(this)&&U(this).uid||null};function Fl(a){return U(a)&&U(a)._lat||null}
function Bl(a){if(a.W){for(var b=0;b<a.m.length;b++)if(a.m[b])a.m[b](Fl(a));if(a.R!==a.getUid()&&a.I.length)for(a.R=a.getUid(),b=0;b<a.I.length;b++)if(a.I[b])a.I[b](Fl(a))}}h.Ib=function(a){this.addAuthTokenListener(a);this.o++;0<this.o&&U(this)&&Gk(U(this))};h.mc=function(a){var b=this;w(this.m,function(c){c==a&&b.o--});0>this.o&&(this.o=0);0==this.o&&U(this)&&Hk(U(this));this.removeAuthTokenListener(a)};
h.addAuthTokenListener=function(a){var b=this;this.m.push(a);T(this,this.i.then(function(){b.l||Ha(b.m,a)&&a(Fl(b))}))};h.removeAuthTokenListener=function(a){Ja(this.m,function(b){return b==a})};function El(a,b){a.I.push(b);T(a,a.i.then(function(){!a.l&&Ha(a.I,b)&&a.R!==a.getUid()&&(a.R=a.getUid(),b(Fl(a)))}))}h.delete=function(){this.l=!0;for(var a=0;a<this.N.length;a++)this.N[a].cancel("app-deleted");this.N=[];this.h&&(a=this.h,uj(a.b,a.a,this.ha));this.a&&this.a.unsubscribe(this);return firebase.Promise.resolve()};
function T(a,b){a.N.push(b);Qb(b,function(){Ia(a.N,b)});return b}h.Nb=function(a){return T(this,Th(this.c,a))};h.Bc=function(a){return this.Ia(a).then(function(a){return a.data.email})};h.Ta=function(a,b){return T(this,this.c.Ta(a,b).then(function(){}))};h.Ia=function(a){return T(this,this.c.Ia(a).then(function(a){return new lg(a)}))};h.Sa=function(a){return T(this,this.c.Sa(a).then(function(){}))};
h.cb=function(a,b){var c=this;return T(this,A().then(function(){return"undefined"===typeof b||Sa(b)?{}:Fg(new wg(b))}).then(function(b){return c.c.cb(a,b)}).then(function(){}))};h.rc=function(a,b){return T(this,lk(this,a,b,r(this.fb,this)))};function Gl(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,g=0;g<b.length;g++)if(b[g].optional)f=!0;else{if(f)throw new N("internal-error","Argument validator encountered a required argument after an optional argument.");e++}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else{for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].M(c[e])&&!f){b=b[e];if(0>e||e>=Hl.length)throw new N("internal-error",
"Argument validator received an unsupported number of arguments.");c=Hl[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.K+".";break a}d=null}}if(d)throw new N("argument-error",a+" failed: "+d);}var Hl="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function V(a,b){return{name:a||"",K:"a valid string",optional:!!b,M:m}}function Il(){return{name:"opt_forceRefresh",K:"a boolean",optional:!0,M:ba}}
function W(a,b){return{name:a||"",K:"a valid object",optional:!!b,M:q}}function Jl(a,b){return{name:a||"",K:"a function",optional:!!b,M:p}}function Kl(a,b){return{name:a||"",K:"null",optional:!!b,M:ea}}function Ll(){return{name:"",K:"an HTML element",optional:!1,M:function(a){return!!(a&&a instanceof Element)}}}function Ml(){return{name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(a){return!!(a&&a instanceof rl)}}}
function Nl(){return{name:"app",K:"an instance of Firebase App",optional:!0,M:function(a){return!!(a&&a instanceof firebase.app.App)}}}function Ol(a){return{name:a?a+"Credential":"credential",K:a?"a valid "+a+" credential":"a valid credential",optional:!1,M:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.wa||!c)}}}
function Pl(){return{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}}function Ql(){return{name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(a){return!!(a&&m(a.type)&&p(a.verify))}}}function X(a,b,c,d){return{name:c||"",K:a.K+" or "+b.K,optional:!!d,M:function(c){return a.M(c)||b.M(c)}}};function Rl(a,b,c,d,e,f){M(this,"type","recaptcha");this.b=this.c=null;this.m=!1;this.l=b;this.a=c||{theme:"light",type:"image"};this.g=[];if(this.a[Sl])throw new N("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.h="invisible"===this.a[Tl];if(!wc(b)||!this.h&&wc(b).hasChildNodes())throw new N("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.u=new Ch(a,f||null,e||null);
this.o=d||function(){return null};var g=this;this.i=[];var l=this.a[Ul];this.a[Ul]=function(a){Vl(g,a);if("function"===typeof l)l(a);else if("string"===typeof l){var b=L(l,k);"function"===typeof b&&b(a)}};var n=this.a[Wl];this.a[Wl]=function(){Vl(g,null);if("function"===typeof n)n();else if("string"===typeof n){var a=L(n,k);"function"===typeof a&&a()}}}var Ul="callback",Wl="expired-callback",Sl="sitekey",Tl="size";function Vl(a,b){for(var c=0;c<a.i.length;c++)try{a.i[c](b)}catch(d){}}
function Xl(a,b){Ja(a.i,function(a){return a==b})}function Yl(a,b){a.g.push(b);Qb(b,function(){Ia(a.g,b)});return b}h=Rl.prototype;
h.xa=function(){var a=this;return this.c?this.c:this.c=Yl(this,A().then(function(){if(Sf())return Hf();throw new N("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return Zl($l(),a.o())}).then(function(){return Q(a.u,ti,{})}).then(function(b){a.a[Sl]=b.recaptchaSiteKey}).s(function(b){a.c=null;throw b;}))};
h.render=function(){am(this);var a=this;return Yl(this,this.xa().then(function(){if(null===a.b){var b=a.l;if(!a.h){var c=wc(b);b=zc("DIV");c.appendChild(b)}a.b=grecaptcha.render(b,a.a)}return a.b}))};h.verify=function(){am(this);var a=this;return Yl(this,this.render().then(function(b){return new z(function(c){var d=grecaptcha.getResponse(b);if(d)c(d);else{var e=function(b){b&&(Xl(a,e),c(b))};a.i.push(e);a.h&&grecaptcha.execute(a.b)}})}))};h.reset=function(){am(this);null!==this.b&&grecaptcha.reset(this.b)};
function am(a){if(a.m)throw new N("internal-error","RecaptchaVerifier instance has been destroyed.");}h.clear=function(){am(this);this.m=!0;$l().b--;for(var a=0;a<this.g.length;a++)this.g[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.h){a=wc(this.l);for(var b;b=a.firstChild;)a.removeChild(b)}};var bm=dc("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}");
function cm(){this.b=k.grecaptcha?Infinity:0;this.c=null;this.a="__rcb"+Math.floor(1E6*Math.random()).toString()}
function Zl(a,b){return new z(function(c,d){if(Zf())if(!k.grecaptcha||b!==a.c&&!a.b){k[a.a]=function(){if(k.grecaptcha){a.c=b;var e=k.grecaptcha.render;k.grecaptcha.render=function(b,c){b=e(b,c);a.b++;return b};c()}else d(new N("internal-error"));delete k[a.a]};var e=hc(bm,{onload:a.a,hl:b||""});A(kf(e)).s(function(){d(new N("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else c();else d(new N("network-request-failed"))})}var dm=null;
function $l(){dm||(dm=new cm);return dm}function em(a,b,c){try{this.f=c||firebase.app()}catch(f){throw new N("argument-error","No firebase.app.App instance is currently initialized.");}if(this.f.options&&this.f.options.apiKey)c=this.f.options.apiKey;else throw new N("invalid-api-key");var d=this,e=null;try{e=this.f.auth().Ka()}catch(f){}e=firebase.SDK_VERSION?Of(firebase.SDK_VERSION,e):null;Rl.call(this,c,a,b,function(){try{var a=d.f.auth().$()}catch(g){a=null}return a},e,wi(xi))}t(em,Rl);function Y(a,b){for(var c in b){var d=b[c].name;a[d]=fm(d,a[c],b[c].j)}}function Z(a,b,c,d){a[b]=fm(b,c,d)}function fm(a,b,c){function d(){var a=Array.prototype.slice.call(arguments);Gl(e,c,a);return b.apply(this,a)}if(!c)return b;var e=gm(a),f;for(f in b)d[f]=b[f];for(f in b.prototype)d.prototype[f]=b.prototype[f];return d}function gm(a){a=a.split(".");return a[a.length-1]};Y(rl.prototype,{Sa:{name:"applyActionCode",j:[V("code")]},Ia:{name:"checkActionCode",j:[V("code")]},Ta:{name:"confirmPasswordReset",j:[V("code"),V("newPassword")]},Kb:{name:"createUserWithEmailAndPassword",j:[V("email"),V("password")]},Nb:{name:"fetchProvidersForEmail",j:[V("email")]},aa:{name:"getRedirectResult",j:[]},dc:{name:"onAuthStateChanged",j:[X(W(),Jl(),"nextOrObserver"),Jl("opt_error",!0),Jl("opt_completed",!0)]},ec:{name:"onIdTokenChanged",j:[X(W(),Jl(),"nextOrObserver"),Jl("opt_error",
!0),Jl("opt_completed",!0)]},cb:{name:"sendPasswordResetEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),Kl(null,!0),"opt_actionCodeSettings",!0)]},eb:{name:"setPersistence",j:[V("persistence")]},fb:{name:"signInAndRetrieveDataWithCredential",j:[Ol()]},gb:{name:"signInAnonymously",j:[]},oc:{name:"signInWithCredential",j:[Ol()]},pc:{name:"signInWithCustomToken",j:[V("token")]},qc:{name:"signInWithEmailAndPassword",j:[V("email"),V("password")]},rc:{name:"signInWithPhoneNumber",j:[V("phoneNumber"),
Ql()]},sc:{name:"signInWithPopup",j:[Pl()]},tc:{name:"signInWithRedirect",j:[Pl()]},hb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[V(null,!0)]},Ac:{name:"useDeviceLanguage",j:[]},Bc:{name:"verifyPasswordResetCode",j:[V("code")]}});(function(a,b){for(var c in b){var d=b[c].name;if(d!==c){var e=b[c].Jb;Object.defineProperty(a,d,{get:function(){return this[c]},set:function(a){Gl(d,[e],[a],!0);this[c]=a},enumerable:!0})}}})(rl.prototype,{lc:{name:"languageCode",Jb:X(V(),Kl(),"languageCode")}});
rl.Persistence=kj;rl.Persistence.LOCAL="local";rl.Persistence.SESSION="session";rl.Persistence.NONE="none";
Y(yk.prototype,{"delete":{name:"delete",j:[]},F:{name:"getIdToken",j:[Il()]},getToken:{name:"getToken",j:[Il()]},Xa:{name:"linkAndRetrieveDataWithCredential",j:[Ol()]},Zb:{name:"linkWithCredential",j:[Ol()]},$b:{name:"linkWithPhoneNumber",j:[V("phoneNumber"),Ql()]},ac:{name:"linkWithPopup",j:[Pl()]},bc:{name:"linkWithRedirect",j:[Pl()]},Za:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Ol()]},hc:{name:"reauthenticateWithCredential",j:[Ol()]},ic:{name:"reauthenticateWithPhoneNumber",j:[V("phoneNumber"),
Ql()]},jc:{name:"reauthenticateWithPopup",j:[Pl()]},kc:{name:"reauthenticateWithRedirect",j:[Pl()]},reload:{name:"reload",j:[]},bb:{name:"sendEmailVerification",j:[X(W("opt_actionCodeSettings",!0),Kl(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[V(null,!0)]},yc:{name:"unlink",j:[V("provider")]},kb:{name:"updateEmail",j:[V("email")]},lb:{name:"updatePassword",j:[V("password")]},zc:{name:"updatePhoneNumber",j:[Ol("phone")]},mb:{name:"updateProfile",j:[W("profile")]}});
Y(z.prototype,{s:{name:"catch"},then:{name:"then"}});Y(kk.prototype,{confirm:{name:"confirm",j:[V("verificationCode")]}});Z(mh,"credential",function(a,b){return new jh(a,b)},[V("email"),V("password")]);Y(bh.prototype,{sa:{name:"addScope",j:[V("scope")]},Ba:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(bh,"credential",ch,[X(V(),W(),"token")]);Y(dh.prototype,{sa:{name:"addScope",j:[V("scope")]},Ba:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});
Z(dh,"credential",eh,[X(V(),W(),"token")]);Y(fh.prototype,{sa:{name:"addScope",j:[V("scope")]},Ba:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(fh,"credential",gh,[X(V(),X(W(),Kl()),"idToken"),X(V(),Kl(),"accessToken",!0)]);Y(hh.prototype,{Ba:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(hh,"credential",ih,[X(V(),W(),"token"),V("secret",!0)]);
Y(P.prototype,{sa:{name:"addScope",j:[V("scope")]},credential:{name:"credential",j:[X(V(),Kl(),"idToken",!0),X(V(),Kl(),"accessToken",!0)]},Ba:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(rh,"credential",th,[V("verificationId"),V("verificationCode")]);Y(rh.prototype,{Qa:{name:"verifyPhoneNumber",j:[V("phoneNumber"),Ql()]}});Y(N.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(zh.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});
Y(yh.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(em.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}});
(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:rl,Error:N};Z(a,"EmailAuthProvider",mh,[]);Z(a,"FacebookAuthProvider",bh,[]);Z(a,"GithubAuthProvider",dh,[]);Z(a,"GoogleAuthProvider",fh,[]);Z(a,"TwitterAuthProvider",hh,[]);Z(a,"OAuthProvider",P,[V("providerId")]);Z(a,"PhoneAuthProvider",rh,[Ml()]);Z(a,"RecaptchaVerifier",em,[X(V(),Ll(),"recaptchaContainer"),W("recaptchaParameters",!0),Nl()]);firebase.INTERNAL.registerService("auth",function(a,
c){a=new rl(a);c({INTERNAL:{getUid:r(a.getUid,a),getToken:r(a.Rb,a),addAuthTokenListener:r(a.Ib,a),removeAuthTokenListener:r(a.mc,a)}});return a},a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:yk})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();
}).call(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(27);
var Notification_1 = __webpack_require__(319);
/**
 *
 * Re-emits all notifications from source Observable with specified scheduler.
 *
 * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
 *
 * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
 * notifications emitted by the source Observable. It might be useful, if you do not have control over
 * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
 *
 * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
 * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
 * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
 * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
 * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
 * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
 * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
 * little bit more, to ensure that they are emitted at expected moments.
 *
 * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
 * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
 * will delay all notifications - including error notifications - while `delay` will pass through error
 * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
 * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
 * for notification emissions in general.
 *
 * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
 * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
 *                                               // with async scheduler by default...
 *
 * intervals
 * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
 * .subscribe(val => {                           // scheduler to ensure smooth animation.
 *   someDiv.style.height = val + 'px';
 * });
 *
 * @see {@link delay}
 *
 * @param {IScheduler} scheduler Scheduler that will be used to reschedule notifications from source Observable.
 * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
 * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
 * but with provided scheduler.
 *
 * @method observeOn
 * @owner Observable
 */
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return this.lift(new ObserveOnOperator(scheduler, delay));
}
exports.observeOn = observeOn;
var ObserveOnOperator = (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());
exports.ObserveOnOperator = ObserveOnOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ObserveOnSubscriber = (function (_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        _super.call(this, destination);
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification_1.Notification.createError(err));
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification_1.Notification.createComplete());
    };
    return ObserveOnSubscriber;
}(Subscriber_1.Subscriber));
exports.ObserveOnSubscriber = ObserveOnSubscriber;
var ObserveOnMessage = (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());
exports.ObserveOnMessage = ObserveOnMessage;
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
/**
 * Represents a push-based event or value that an {@link Observable} can emit.
 * This class is particularly useful for operators that manage notifications,
 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
 * others. Besides wrapping the actual delivered value, it also annotates it
 * with metadata of, for instance, what type of push message it is (`next`,
 * `error`, or `complete`).
 *
 * @see {@link materialize}
 * @see {@link dematerialize}
 * @see {@link observeOn}
 *
 * @class Notification<T>
 */
var Notification = (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    /**
     * Delivers to the given `observer` the value wrapped by this Notification.
     * @param {Observer} observer
     * @return
     */
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    /**
     * Given some {@link Observer} callbacks, deliver the value represented by the
     * current Notification to the correctly corresponding callback.
     * @param {function(value: T): void} next An Observer `next` callback.
     * @param {function(err: any): void} [error] An Observer `error` callback.
     * @param {function(): void} [complete] An Observer `complete` callback.
     * @return {any}
     */
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    /**
     * Takes an Observer or its individual callback functions, and calls `observe`
     * or `do` methods accordingly.
     * @param {Observer|function(value: T): void} nextOrObserver An Observer or
     * the `next` callback.
     * @param {function(err: any): void} [error] An Observer `error` callback.
     * @param {function(): void} [complete] An Observer `complete` callback.
     * @return {any}
     */
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    /**
     * Returns a simple Observable that just delivers the notification represented
     * by this Notification instance.
     * @return {any}
     */
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return Observable_1.Observable.of(this.value);
            case 'E':
                return Observable_1.Observable.throw(this.error);
            case 'C':
                return Observable_1.Observable.empty();
        }
        throw new Error('unexpected notification kind value');
    };
    /**
     * A shortcut to create a Notification instance of the type `next` from a
     * given value.
     * @param {T} value The `next` value.
     * @return {Notification<T>} The "next" Notification representing the
     * argument.
     */
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    };
    /**
     * A shortcut to create a Notification instance of the type `error` from a
     * given error.
     * @param {any} [err] The `error` error.
     * @return {Notification<T>} The "error" Notification representing the
     * argument.
     */
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    /**
     * A shortcut to create a Notification instance of the type `complete`.
     * @return {Notification<any>} The valueless "complete" Notification.
     */
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var switchMap_1 = __webpack_require__(321);
Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__(50);
var subscribeToResult_1 = __webpack_require__(51);
/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return this.lift(new SwitchMapOperator(project, resultSelector));
}
exports.switchMap = switchMap;
var SwitchMapOperator = (function () {
    function SwitchMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapSubscriber = (function (_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapSubscriber.prototype._next = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    SwitchMapSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (this.resultSelector) {
            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            this.destination.next(innerValue);
        }
    };
    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        var result;
        try {
            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return SwitchMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var of_1 = __webpack_require__(323);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayObservable_1 = __webpack_require__(200);
exports.of = ArrayObservable_1.ArrayObservable.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var fromPromise_1 = __webpack_require__(201);
Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _getAngularFireAuth */
/* unused harmony export AngularFireAuthProvider */
/* unused harmony export AUTH_PROVIDERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularFireAuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_auth__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__(314);




function _getAngularFireAuth(app) {
    return new __WEBPACK_IMPORTED_MODULE_3__auth__["a" /* AngularFireAuth */](app);
}
var AngularFireAuthProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_3__auth__["a" /* AngularFireAuth */],
    useFactory: _getAngularFireAuth,
    deps: [__WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */]]
};
var AUTH_PROVIDERS = [
    AngularFireAuthProvider,
];
var AngularFireAuthModule = (function () {
    function AngularFireAuthModule() {
    }
    AngularFireAuthModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */]],
                    providers: [AUTH_PROVIDERS]
                },] },
    ];
    AngularFireAuthModule.ctorParameters = function () { return []; };
    return AngularFireAuthModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_form_register_form_component__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_3__register_form_register_form_component__["a" /* RegisterFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_3__register_form_register_form_component__["a" /* RegisterFormComponent */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var LoginFormComponent = (function () {
    function LoginFormComponent(afAuth, navCtrl, toast) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.account = {};
        this.loginStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    LoginFormComponent.prototype.navigateToPage = function (pageName) {
        pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
    };
    LoginFormComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a, e_1, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = {};
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)];
                    case 1:
                        result = (_a.result = _b.sent(),
                            _a);
                        this.toast.create({
                            message: "Login Successfull",
                            duration: 3000
                        }).present();
                        this.loginStatus.emit(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        console.error(e_1);
                        error = {
                            error: e_1
                        };
                        this.toast.create({
                            message: e_1.message,
                            duration: 3000
                        }).present();
                        this.loginStatus.emit(error);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return LoginFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], LoginFormComponent.prototype, "loginStatus", void 0);
LoginFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-login-form>',template:/*ion-inline-start:"/Users/nikolainossulenko/OA2/src/components/login-form/login-form.component.html"*/'<div class="inputs">\n<ion-row><ion-input [(ngModel)]="account.email" type="email" placeholder="E-mail" id="email"></ion-input></ion-row>\n<ion-row><ion-input [(ngModel)]="account.password" type="password" placeholder="Password" ></ion-input></ion-row>\n</div>\n<button ion-button full text-capitalize (click)="login()" id="login">Login</button>\n<label class="label1" click="navigateToPage(\'RegisterPage\')">Wachtwoord vergeten</label>\n<label class="label2">Registreer nu!</label>\n\n\n\n'/*ion-inline-end:"/Users/nikolainossulenko/OA2/src/components/login-form/login-form.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
], LoginFormComponent);

//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RegisterFormComponent = (function () {
    function RegisterFormComponent(afAuth, toast) {
        this.afAuth = afAuth;
        this.toast = toast;
        this.account = {};
    }
    RegisterFormComponent.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password)];
                    case 1:
                        result = _a.sent();
                        this.toast.create({
                            message: "Account successfully created.",
                            duration: 3000
                        }).present();
                        console.log(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        this.toast.create({
                            message: e_1.message,
                            duration: 3000
                        }).present();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return RegisterFormComponent;
}());
RegisterFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-register-form',template:/*ion-inline-start:"/Users/nikolainossulenko/OA2/src/components/register-form/register-form.component.html"*/'      <ion-input [(ngModel)]="account.email" type="email" placeholder="E-mail"></ion-input>\n      <ion-input [(ngModel)]="account.password" type="password" placeholder="Password"></ion-input>\n      <button ion-button full (click)="register()">Register</button>\n      <ion-footer>\n        \n      </ion-footer>\n    '/*ion-inline-end:"/Users/nikolainossulenko/OA2/src/components/register-form/register-form.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
], RegisterFormComponent);

//# sourceMappingURL=register-form.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage() {
        this.account = {};
    }
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/nikolainossulenko/OA2/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n   <app-register-form></app-register-form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nikolainossulenko/OA2/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=0.js.map