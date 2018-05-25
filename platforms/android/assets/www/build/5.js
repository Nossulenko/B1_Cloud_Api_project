webpackJsonp([5],{

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingCoursesPageModule", function() { return TrainingCoursesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__training_courses__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TrainingCoursesPageModule = (function () {
    function TrainingCoursesPageModule() {
    }
    return TrainingCoursesPageModule;
}());
TrainingCoursesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__training_courses__["a" /* TrainingCoursesPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__training_courses__["a" /* TrainingCoursesPage */]),
        ],
    })
], TrainingCoursesPageModule);

//# sourceMappingURL=training-courses.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingCoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(305);
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
 * Generated class for the TrainingCoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrainingCoursesPage = (function () {
    function TrainingCoursesPage(navCtrl, navParams, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
    }
    TrainingCoursesPage.prototype.openWebpage = function (url) {
        var options = {
            zoom: 'no'
        };
        var browser = this.iab.create(url, '_self', options);
    };
    return TrainingCoursesPage;
}());
TrainingCoursesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-training-courses',template:/*ion-inline-start:"/Users/nikolainossulenko/Desktop/CloudApi/OnlineAcademy/src/pages/training-courses/training-courses.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n    <ion-title>TRAINING COURSES</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="container">\n  <img src="assets/img/training_courses1.jpg" alt="" (click)="openWebpage(\'https://app.carlvandevelde.be/mijn-academie/master-in-business?popup=2\')">\n  <img src="assets/img/training_courses2.jpg" alt="" (click)="openWebpage(\'https://app.carlvandevelde.be/mijn-academie/master-in-business?popup=3\')">\n  <img src="assets/img/training_courses3.jpg" alt="" (click)="openWebpage(\'https://app.carlvandevelde.be/mijn-academie/master-in-business?popup=5\')">\n  <img src="assets/img/training_courses4.jpg" alt="" (click)="openWebpage(\'https://app.carlvandevelde.be/mijn-academie/master-in-business?popup=1\')">\n  <img src="assets/img/training_courses5.jpg" alt="" (click)="openWebpage(\'https://app.carlvandevelde.be/mijn-academie/master-in-business?popup=4\')">\n  <img src="assets/img/training_courses6.jpg" alt="" (click)="openWebpage(\'https://app.carlvandevelde.be/mijn-academie/master-in-business?popup=6\')">\n</ion-content>\n'/*ion-inline-end:"/Users/nikolainossulenko/Desktop/CloudApi/OnlineAcademy/src/pages/training-courses/training-courses.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], TrainingCoursesPage);

//# sourceMappingURL=training-courses.js.map

/***/ })

});
//# sourceMappingURL=5.js.map