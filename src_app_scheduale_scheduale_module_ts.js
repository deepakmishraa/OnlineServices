(self["webpackChunkonlineservices"] = self["webpackChunkonlineservices"] || []).push([["src_app_scheduale_scheduale_module_ts"],{

/***/ 3394:
/*!*******************************************************!*\
  !*** ./src/app/scheduale/scheduale-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedualePageRoutingModule": () => (/* binding */ SchedualePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _scheduale_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduale.page */ 9983);




const routes = [
    {
        path: '',
        component: _scheduale_page__WEBPACK_IMPORTED_MODULE_0__.SchedualePage
    }
];
let SchedualePageRoutingModule = class SchedualePageRoutingModule {
};
SchedualePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SchedualePageRoutingModule);



/***/ }),

/***/ 6898:
/*!***********************************************!*\
  !*** ./src/app/scheduale/scheduale.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedualePageModule": () => (/* binding */ SchedualePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _scheduale_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduale-routing.module */ 3394);
/* harmony import */ var _scheduale_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduale.page */ 9983);







let SchedualePageModule = class SchedualePageModule {
};
SchedualePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _scheduale_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchedualePageRoutingModule
        ],
        declarations: [_scheduale_page__WEBPACK_IMPORTED_MODULE_1__.SchedualePage]
    })
], SchedualePageModule);



/***/ }),

/***/ 9983:
/*!*********************************************!*\
  !*** ./src/app/scheduale/scheduale.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedualePage": () => (/* binding */ SchedualePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_scheduale_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./scheduale.page.html */ 1998);
/* harmony import */ var _scheduale_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduale.page.scss */ 2755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);






let SchedualePage = class SchedualePage {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.url = "http://localhost:8000/scheduleonline/";
    }
    ngOnInit() {
    }
    onSubmit(data) {
        console.log(data);
        // if(data.firstname=="" || data.lastname=="" || data.address=="" ||data.city=="" || data.state=="" || data.postal=="" || data.phone=="" || data.email=="" || data.requesttype=="" || data.problem=="" || data.date=="" || data.time=="" || data.atdate=="" || data.attime=="" ){
        //   alert("please enter an detail");
        // }else{
        // this.http.post<any>(this.url,data)
        // .subscribe(
        //        Response =>console.log(Response),
        //        error=>console.error(error),
        //     )  
        // }    
    }
};
SchedualePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SchedualePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-scheduale',
        template: _raw_loader_scheduale_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_scheduale_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SchedualePage);



/***/ }),

/***/ 2755:
/*!***********************************************!*\
  !*** ./src/app/scheduale/scheduale.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".hedercol {\n  background-color: black;\n}\n\n.heropage {\n  height: 235px;\n  width: 100%;\n  background-color: #EFF7FF;\n  position: relative;\n}\n\n.form-select {\n  border: none;\n  font-size: 18px;\n}\n\n#header {\n  align-content: center;\n  text-transform: uppercase;\n  -webkit-text-decoration: solid;\n          text-decoration: solid;\n  color: red;\n  font-weight: bold;\n  font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWFsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUNFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUVBLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUVOOztBQUFFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdKIiwiZmlsZSI6InNjaGVkdWFsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVkZXJjb2x7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLmhlcm9wYWdle1xyXG4gICAgaGVpZ2h0OjIzNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGN0ZGO1xyXG4gICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgfVxyXG4gIC5mb3JtLXNlbGVjdHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gICNoZWFkZXJ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBzb2xpZDtcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7ICBcclxufSJdfQ== */");

/***/ }),

/***/ 1998:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scheduale/scheduale.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar >\n    <ion-title class=\"hedercol\" >\n      <center>\n          <img src=\"/assets/logo2.png\" height=\"80px\"  >\n      </center>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" class=\"heropage\">\n        <div>\n          <center>\n           <img src=\"/assets/bg.png\" height=\"230px\"></center>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <h2 id=\"header\" color=\"danger\">Book Scheduale {{this.rows}}</h2>\n      <form #form=\"ngForm\" role=\"form\"  (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\"  >\n        <ion-item lines=\"full\">\n          <ion-label position=\"\">First Name</ion-label>\n          <ion-input type=\"text\" name=\"firstname\"  required slot=\"end\"  ngModel   ></ion-input>\n        </ion-item>\n    \n        <ion-item lines=\"full\">\n          <ion-label position=\"\" >Last Name</ion-label>\n          <ion-input type=\"text\"  name=\"lastname\"  required slot=\"end\" ngModel  ></ion-input>\n        </ion-item>\n    \n        <ion-item lines=\"full\">\n          <ion-label position=\"\" >Address</ion-label>\n          <ion-input type=\"text\"  name=\"address\"  required slot=\"end\" ngModel  ></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"\" >city</ion-label>\n          <ion-input type=\"text\"  name=\"city\"  required slot=\"end\" ngModel  ></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"\" >state</ion-label>\n          <ion-input type=\"text\"  name=\"state\"  required slot=\"end\" ngModel  ></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"\" >postal</ion-label>\n          <ion-input type=\"text\"  name=\"postal\"  required slot=\"end\" ngModel  ></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"\" >phone</ion-label>\n          <ion-input type=\"text\" maxlength=\"10\" name=\"phone\"  required slot=\"end\" ngModel  ></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"\" >email</ion-label>\n          <ion-input type=\"email\"  name=\"email\"  required slot=\"end\" ngModel  ></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"\" >requesttype</ion-label>\n          <select class=\"form-select\"  name=\"requesttype\" required slot=\"end\" ngModel>\n            <option >Heating</option>\n            <option>Air Conditioning</option>\n            <option>Indoor Air Quality</option>\n            <option>green Energy Solutions</option>\n            <option>Duct Cleaning</option>\n            <option>Plumbing</option>\n            <option>Water Heaters</option>\n            <option>Attic Insulations</option>\n            <option>HVAC Installation</option>\n        </select>\n        </ion-item>\n\n         <ion-item lines=\"full\"> \n          <ion-label position=\"\" >problem</ion-label>\n        \n        <ion-item>\n          <textarea name=\"problem\"  ngModel required slot=\"end\"></textarea>\n        </ion-item>\n        </ion-item>\n        \n        <ion-item lines=\"full\">\n          <ion-label position=\"\" >Date</ion-label>\n          <ion-input type=\"date\"  name=\"date\"  required slot=\"end\" ngModel  ></ion-input>\n        </ion-item>\n    \n        <!-- <ion-input type=\"time\" name=\"time\"  required slot=\"end\" ngModel  > </ion-input> -->\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"\" >time</ion-label>\n          \n          <select class=\"form-select\"  name=\"time\" required slot=\"end\" ngModel> \n            <option >8am-10am</option>\n            <option>10am-12am</option>\n            <option>12pm-2pm</option>\n            <option>2pm-4pm</option>\n            <option>4pm-6pm</option>\n            <option>4pm-8pm</option>\n          </select>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"\" >Alernate Date</ion-label>\n          <ion-input type=\"date\"  name=\"atdate\"  required slot=\"end\" ngModel  ></ion-input>\n        </ion-item>\n    \n         <!-- <ion-input type=\"time\" name=\"attime\"  required slot=\"end\" ngModel  > </ion-input> -->\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"\" >Alernate time</ion-label>\n          <select class=\"form-select\"  name=\"attime\" required slot=\"end\" ngModel> \n            <option >8am-10am</option>\n            <option>10am-12am</option>\n            <option>12pm-2pm</option>\n            <option>2pm-4pm</option>\n            <option>4pm-6pm</option>\n            <option>4pm-8pm</option>\n          </select>\n        </ion-item>\n             \n\n         \n        \n            <ion-row>\n              <ion-col>\n                <ion-button type=\"submit\" color=\"danger\" expand=\"block\"  >Submit</ion-button>\n              </ion-col>\n            </ion-row>\n        \n           </form>\n           \n          <!-- </script> -->\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n  ");

/***/ })

}]);
//# sourceMappingURL=src_app_scheduale_scheduale_module_ts.js.map