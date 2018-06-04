webpackJsonp([25],{

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPageModule", function() { return TodoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo__ = __webpack_require__(528);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TodoPageModule = (function () {
    function TodoPageModule() {
    }
    return TodoPageModule;
}());
TodoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__todo__["a" /* TodoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__todo__["a" /* TodoPage */]),
        ],
    })
], TodoPageModule);

//# sourceMappingURL=todo.module.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(151);
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
 * Generated class for the TodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TodoPage = (function () {
    function TodoPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    TodoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TodoPage');
        this.loadTodos();
    };
    TodoPage.prototype.loadTodos = function () {
        var _this = this;
        this.http.get('')
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.todoData = res.data;
            //this.initializeItems();
            //console.log(res.data);
        }, function (err) {
            console.log(err);
        });
    };
    TodoPage.prototype.initializeItems = function () {
        this.items = this.todoData;
    };
    TodoPage.prototype.getTodos = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.todoData = this.items.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return TodoPage;
}());
TodoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-todo',template:/*ion-inline-start:"/Users/nikolainossulenko/Desktop/CloudApi/KaizenApp/src/pages/todo/todo.html"*/'<!--\n  Generated template for the CoinsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>coins</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form id="filter"></form>\n    <ion-searchbar (ionInput)="getTodos($event)" [debounce]="500" placeholder="Search coins by name"></ion-searchbar>\n    \n  <br>\n    <ion-row>\n        <ion-col>\n          <div >\n            \n            <ion-card *ngFor="let item of todoData">\n            <ion-item>\n              <h2>{{item.name}}</h2>\n              <p>{{item.rank}}</p>\n            </ion-item>\n            <ion-row>\n              <ion-col>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n          </div>\n        </ion-col>\n      </ion-row>\n\n</ion-content>\n\n                \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n         '/*ion-inline-end:"/Users/nikolainossulenko/Desktop/CloudApi/KaizenApp/src/pages/todo/todo.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _c || Object])
], TodoPage);

var _a, _b, _c;
//# sourceMappingURL=todo.js.map

/***/ })

});
//# sourceMappingURL=25.js.map