webpackJsonp([10],{

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNotePageModule", function() { return EditNotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_note__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditNotePageModule = (function () {
    function EditNotePageModule() {
    }
    return EditNotePageModule;
}());
EditNotePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_note__["a" /* EditNotePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_note__["a" /* EditNotePage */]),
        ],
    })
], EditNotePageModule);

//# sourceMappingURL=edit-note.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notes_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_service__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditNotePage = (function () {
    function EditNotePage(navCtrl, toast, navParams, notesservice) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.navParams = navParams;
        this.notesservice = notesservice;
        this.note = this.navParams.get('note');
    }
    EditNotePage.prototype.ionViewDidLoad = function () {
    };
    EditNotePage.prototype.saveNote = function (note) {
        var _this = this;
        this.notesservice.editNote(note).then(function () {
            _this.toast.show("Notitie opgeslagen");
            _this.navCtrl.setRoot('Home2Page');
        });
    };
    EditNotePage.prototype.removeNote = function (note) {
        var _this = this;
        this.notesservice.removeNote(note).then(function () {
            _this.toast.show("Notitie verwijderd");
            _this.navCtrl.setRoot('Home2Page');
        });
    };
    return EditNotePage;
}());
EditNotePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-note',template:/*ion-inline-start:"C:\Users\dell\Desktop\Cloud Api Project\projectCloudApi\src\pages\edit-note\edit-note.html"*/'<!--\n\n  Generated template for the EditNotePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n    <ion-title>{{note?.title}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="container">\n\n    <ion-item>\n\n        <ion-input type="text" [(ngModel)]="note.title" placeholder="Titel">\n\n          \n\n        </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n        <ion-textarea type="text"[(ngModel)]="note.description" placeholder="Beschrijving">\n\n          \n\n        </ion-textarea>\n\n        </ion-item>\n\n        \n\n        <button ion-button block clear (click)="saveNote(note)">Opslaan</button>\n\n        <button ion-button block clear color="danger" (click)="removeNote(note)"> \n\n            Verwijderen\n\n        </button>\n\n      </ion-content> \n\n'/*ion-inline-end:"C:\Users\dell\Desktop\Cloud Api Project\projectCloudApi\src\pages\edit-note\edit-note.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_notes_service__["a" /* NotesService */]])
], EditNotePage);

//# sourceMappingURL=edit-note.js.map

/***/ })

});
//# sourceMappingURL=10.js.map