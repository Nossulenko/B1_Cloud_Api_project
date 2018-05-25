webpackJsonp([10],{

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImmersionPageModule", function() { return ImmersionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__immersion__ = __webpack_require__(514);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImmersionPageModule = (function () {
    function ImmersionPageModule() {
    }
    return ImmersionPageModule;
}());
ImmersionPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__immersion__["a" /* ImmersionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__immersion__["a" /* ImmersionPage */]),
        ],
    })
], ImmersionPageModule);

//# sourceMappingURL=immersion.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmersionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
 * Generated class for the ImmersionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImmersionPage = (function () {
    function ImmersionPage(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ImmersionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImmersionPage');
        this.loadUser();
    };
    ImmersionPage.prototype.loadUser = function () {
        var _this = this;
        this.http.get('https://randomuser.me/api/?results=50')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.data = data.results;
            console.log(data.results);
        }, function (err) {
            console.log(err);
        });
    };
    return ImmersionPage;
}());
ImmersionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-immersion',template:/*ion-inline-start:"/Users/nikolainossulenko/Desktop/CloudApi/KaizenApp/src/pages/immersion/immersion.html"*/'<!--\n  Generated template for the ImmersionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">s\n    <ion-title>3</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="container">\n    <ion-row>\n      <ion-col>\n        <div *ngFor="let item of data">\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="{{item.picture.thumbnail}}">\n            </ion-avatar>\n            <h2>{{item.name.first}} {{item.name.last}}</h2>\n            <p>{{item.dob}}</p>\n          </ion-item>\n\n          <ion-card-content>\n            <p>{{item.location.street}}, {{item.location.city}} \n            {{item.location.state}}.</p>\n          </ion-card-content>\n\n          <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon name="ios-heart"></ion-icon>\n                <div>{{item.location.postcode}} loves</div>\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nikolainossulenko/Desktop/CloudApi/KaizenApp/src/pages/immersion/immersion.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object])
], ImmersionPage);

var _a, _b, _c;
//# sourceMappingURL=immersion.js.map

/***/ })

});
//# sourceMappingURL=10.js.map