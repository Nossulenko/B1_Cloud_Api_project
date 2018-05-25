webpackJsonp([8],{

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotePageModule", function() { return QuotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quote__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuotePageModule = (function () {
    function QuotePageModule() {
    }
    return QuotePageModule;
}());
QuotePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__quote__["a" /* QuotePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quote__["a" /* QuotePage */]),
        ],
    })
], QuotePageModule);

//# sourceMappingURL=quote.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuotePage = (function () {
    function QuotePage(navCtrl, navParams, afdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afdb = afdb;
        this.quote = {};
        //Reference to firebase quotes
        this.QuotesRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/quotes/');
    }
    QuotePage.prototype.navigateToPage = function (pageName) {
        this.navCtrl.setRoot(pageName);
    };
    QuotePage.prototype.addQuote = function (auteur, quote) {
        try {
            this.QuotesRef.push({
                Auteur: auteur,
                Quote: quote,
                Day: new Date().getDate(),
                Month: new Date().getMonth(),
                Year: new Date().getFullYear(),
            });
        }
        catch (error) {
            console.log(error.error);
        }
        this.navigateToPage('ShowQuotesPage');
    };
    return QuotePage;
}());
QuotePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quote',template:/*ion-inline-start:"/Users/nikolainossulenko/Desktop/CloudApi/OnlineAcademy/src/pages/quote/quote.html"*/'\n<ion-header>\n        <ion-navbar color="primary">\n        <ion-title>Online Academy</ion-title>\n      </ion-navbar>\n</ion-header>\n\n\n<ion-content class="container" padding>\n    <ion-card>\n        <ion-card-content>\n    <ion-row><label>Auteur:</label></ion-row>\n    <ion-input [(ngModel)]="quote.author" type="text" placeholder="Auteur"></ion-input>\n    <ion-row><label>Quote:</label></ion-row>\n    <ion-textarea [(ngModel)]="quote.quote" type="text" placeholder="Uw quote" id="quote"></ion-textarea>\n    <button ion-button block clear (click)="addQuote(quote.author,quote.quote)">Opslaan</button>\n</ion-card-content>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/nikolainossulenko/Desktop/CloudApi/OnlineAcademy/src/pages/quote/quote.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], QuotePage);

//# sourceMappingURL=quote.js.map

/***/ })

});
//# sourceMappingURL=8.js.map