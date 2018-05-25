webpackJsonp([16],{

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinsPageModule", function() { return CoinsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coins__ = __webpack_require__(511);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoinsPageModule = (function () {
    function CoinsPageModule() {
    }
    return CoinsPageModule;
}());
CoinsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__coins__["a" /* CoinsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__coins__["a" /* CoinsPage */]),
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */]
        ]
    })
], CoinsPageModule);

//# sourceMappingURL=coins.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(302);
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
 * Generated class for the CoinsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoinsPage = (function () {
    function CoinsPage(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CoinsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoinsPage');
        this.loadCoin();
    };
    CoinsPage.prototype.loadCoin = function () {
        var _this = this;
        this.http.get('https://api.coinmarketcap.com/v2/listings/')
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.coinData = res.data;
            //console.log(res.data);
        }, function (err) {
            console.log(err);
        });
    };
    return CoinsPage;
}());
CoinsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-coins',template:/*ion-inline-start:"/Users/nikolainossulenko/Desktop/CloudApi/KaizenApp/src/pages/coins/coins.html"*/'<!--\n  Generated template for the CoinsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>coins</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-row>\n        <ion-col>\n          <div *ngFor="let item of coinData">\n            <ion-card>\n            <ion-item>\n              <h2>{{item.name}}</h2>\n              <p>{{item.symbol}}</p>\n              <p>{{item.website_slug}}</p>\n            </ion-item>\n            \n            <!--<ion-card-content>\n              <p>{{item.location.street}}, {{item.location.city}} \n              {{item.location.state}}.</p>\n              <p>{{item.location.postcode}}</p>\n              <p>{{item.nat}}</p>\n            </ion-card-content>-->\n  \n            <ion-row>\n              <ion-col>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n          </div>\n        </ion-col>\n      </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nikolainossulenko/Desktop/CloudApi/KaizenApp/src/pages/coins/coins.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object])
], CoinsPage);

var _a, _b, _c;
//# sourceMappingURL=coins.js.map

/***/ })

});
//# sourceMappingURL=16.js.map