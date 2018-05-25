webpackJsonp([7],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowQuotesPageModule", function() { return ShowQuotesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_quotes__ = __webpack_require__(523);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowQuotesPageModule = (function () {
    function ShowQuotesPageModule() {
    }
    return ShowQuotesPageModule;
}());
ShowQuotesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__show_quotes__["a" /* ShowQuotesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__show_quotes__["a" /* ShowQuotesPage */]),
        ],
    })
], ShowQuotesPageModule);

//# sourceMappingURL=show-quotes.module.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowQuotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShowQuotesPage = (function () {
    function ShowQuotesPage(af, navCtrl, navParams, afdb, soc, loading) {
        this.af = af;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afdb = afdb;
        this.soc = soc;
        this.loading = loading;
        //Reference to firebase quotes
        this.QuotesRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/quotes/');
        //Array to hold quotes
        this.Quotes = [];
        this.loader = this.loading.create({
            content: 'Quotes laden...'
        });
    }
    ShowQuotesPage.prototype.navigateToPage = function (pageName) {
        this.navCtrl.push(pageName);
    };
    ShowQuotesPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.loader.present();
        this.QuotesRef.on('value', function (quoteSnapshot) {
            _this.Quotes = [];
            quoteSnapshot.forEach(function (quoteSnap) {
                _this.Quotes.push(quoteSnap.val());
                return false;
            });
        });
        this.loader.dismiss();
    };
    return ShowQuotesPage;
}());
ShowQuotesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-show-quotes',template:/*ion-inline-start:"/Users/nikolainossulenko/Desktop/CloudApi/KaizenApp/src/pages/show-quotes/show-quotes.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n    <ion-title>Online Academy</ion-title>\n    <ion-buttons end>\n        <button (click)="navigateToPage(\'QuotePage\')" ion-button>\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="container">\n  <ion-list *ngIf="Quotes !== null">\n    <ion-item  *ngFor="let quotes of Quotes" class="dark">\n\n      <div class="w3-panel w3-leftbar w3-light-grey dark"  padding>\n          {{quotes.Day}}/{{quotes.Month}}/{{quotes.Year}}\n          <p class="w3-xlarge w3-serif">\n            <i text-wrap>"{{quotes.Quote}}"</i>\n          <p>{{quotes.Auteur}}</p>\n          <br>\n          \n        </div>\n      </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/nikolainossulenko/Desktop/CloudApi/KaizenApp/src/pages/show-quotes/show-quotes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], ShowQuotesPage);

//# sourceMappingURL=show-quotes.js.map

/***/ })

});
//# sourceMappingURL=7.js.map