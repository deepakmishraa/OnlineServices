(self["webpackChunkonlineservices"] = self["webpackChunkonlineservices"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("* {\n  margin: 0px;\n  padding: 0px;\n}\n\n.hedercol {\n  background-color: black;\n}\n\n.heropage {\n  height: 235px;\n  width: 100%;\n  background-color: #EFF7FF;\n  position: relative;\n}\n\n#header {\n  align-content: center;\n  text-transform: uppercase;\n  -webkit-text-decoration: solid;\n          text-decoration: solid;\n  text-align: center;\n  color: red;\n  font-weight: bold;\n  font-style: normal;\n}\n\n.card {\n  border: 1px solid gray;\n  margin: 10px;\n  padding: 10px;\n  box-shadow: 10px 10px 10px gray;\n}\n\n.btn {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7QUFFRjs7QUFBQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0FBSUY7O0FBRkE7RUFDQyxnQkFBQTtBQUtEIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5oZWRlcmNvbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uaGVyb3BhZ2V7XG4gIGhlaWdodDoyMzVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkY3RkY7XG4gIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG59XG4jaGVhZGVye1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogc29saWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6cmVkO1xuICBmb250LXdlaWdodDpib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7ICBcbn1cbi5jYXJke1xuICBib3JkZXI6MXB4IHNvbGlkIGdyYXk7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggZ3JheTtcbn1cbi5idG57XG4gbWFyZ2luLXRvcDogMTBweDtcblxufTsiXX0= */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar >\n    <ion-title class=\"hedercol\" >\n      <center>\n          <img src=\"/assets/logo2.png\" height=\"80px\"  >\n      </center>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" class=\"heropage\">\n        <div>\n          <center>\n           <img src=\"/assets/bg.png\" height=\"230px\"></center>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <h2 id=\"header\">Best Services For Ever at Best Price</h2>\n        <ion-row class=\"\">\n        <ion-col size=\"6\">\n          <div class=\"card\">\n            <center><img src=\"/assets/cooling.png\" height=\"100px\" width=\"100px\" color=\"danger\">\n            <p>Air Contion</p>\n            <ion-button size=\"\" color=\"danger\" expand=\"block\" fill=\"outline\" class=\"btn\" type=\"submit\" routerLink=\"/scheduale\" \n                 >Book Now</ion-button>\n          </center>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"card\">\n            <center><img src=\"/assets/heater.png\" height=\"100px\" width=\"100px\">\n              <p>Heater</p>\n              <ion-button size=\"\" color=\"danger\" expand=\"block\" fill=\"outline\" class=\"btn\" type=\"submit\" routerLink=\"/scheduale\" \n              >Book Now</ion-button></center>  \n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n      <ion-toolbar>\n        <ion-title>\n          <ion-button size=\"\" color=\"danger\" expand=\"block\" fill=\"outline\" class=\"btn\" type=\"submit\" routerLink=\"/scheduale\" \n                 >Schedeuale Book</ion-button>\n        </ion-title>\n      </ion-toolbar>\n</ion-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map