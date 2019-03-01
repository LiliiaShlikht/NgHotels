(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hot Weather Widget</h1>\n<div class=\"element\">\n  <app-hotels-list (changeHotel)=\"onCardClick($event)\"></app-hotels-list>\n  <app-widgets-list [hotel]=\"hotelWidget\"></app-widgets-list>\n  <div class=\"clear\"> </div>\n</div>\n<div class=\"copy-right\">\n  <p>© 2015 Hot Weather Widget. All rights reserved | Design by  <a href=\"http://w3layouts.com/\" target=\"_blank\">  W3layouts </a></p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onCardClick = function (hotel) {
        this.hotelWidget = hotel;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hotels_list_hotels_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hotels-list/hotels-list.component */ "./src/app/hotels-list/hotels-list.component.ts");
/* harmony import */ var _widgets_list_widgets_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets-list/widgets-list.component */ "./src/app/widgets-list/widgets-list.component.ts");
/* harmony import */ var _hotels_list_hotel_card_hotel_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hotels-list/hotel-card/hotel-card.component */ "./src/app/hotels-list/hotel-card/hotel-card.component.ts");
/* harmony import */ var _hotels_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hotels-filter.pipe */ "./src/app/hotels-filter.pipe.ts");
/* harmony import */ var _phone_number_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./phone-number.pipe */ "./src/app/phone-number.pipe.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _hotels_list_hotels_list_component__WEBPACK_IMPORTED_MODULE_4__["HotelsListComponent"],
                _widgets_list_widgets_list_component__WEBPACK_IMPORTED_MODULE_5__["WidgetsListComponent"],
                _hotels_list_hotel_card_hotel_card_component__WEBPACK_IMPORTED_MODULE_6__["HotelCardComponent"],
                _hotels_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["HotelsFilterPipe"],
                _phone_number_pipe__WEBPACK_IMPORTED_MODULE_8__["PhoneNumberPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/hotels-filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/hotels-filter.pipe.ts ***!
  \***************************************/
/*! exports provided: HotelsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsFilterPipe", function() { return HotelsFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HotelsFilterPipe = /** @class */ (function () {
    function HotelsFilterPipe() {
    }
    HotelsFilterPipe.prototype.transform = function (hotels, type) {
        if (type === 'All') {
            return hotels;
        }
        else {
            return hotels.filter(function (hotel) { return hotel.type === type; });
        }
    };
    HotelsFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'hotelsFilter'
        })
    ], HotelsFilterPipe);
    return HotelsFilterPipe;
}());



/***/ }),

/***/ "./src/app/hotels-list/hotel-card/hotel-card.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/hotels-list/hotel-card/hotel-card.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgLittle{\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90ZWxzLWxpc3QvaG90ZWwtY2FyZC9ob3RlbC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvdGVscy1saXN0L2hvdGVsLWNhcmQvaG90ZWwtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ0xpdHRsZXtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/hotels-list/hotel-card/hotel-card.component.html":
/*!******************************************************************!*\
  !*** ./src/app/hotels-list/hotel-card/hotel-card.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"activity-row\">\n  <div class=\"activity-desc\">\n    <h5>{{hotel.address}}</h5>\n    <p>Hotel {{hotel.address}}</p>\n    <p>{{hotel.type}}</p>\n    <h6>Tel: {{hotel.phone | phoneNumber}}</h6>\n  </div>\n  <div class=\"activity-img\">\n    <ul>\n      <li><img class=\"imgLittle\" src='assets/images/{{hotel.weather.icon}}'  alt=\"\"/></li>\n      <li><img class=\"imgLittle\" src='assets/images/{{hotel.social_info.img}}'  alt=\"\"/></li>\n    </ul>\n  </div>\n  <div class=\"clear\"> </div>\n</div>\n"

/***/ }),

/***/ "./src/app/hotels-list/hotel-card/hotel-card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/hotels-list/hotel-card/hotel-card.component.ts ***!
  \****************************************************************/
/*! exports provided: HotelCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelCardComponent", function() { return HotelCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HotelCardComponent = /** @class */ (function () {
    function HotelCardComponent() {
    }
    HotelCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HotelCardComponent.prototype, "hotel", void 0);
    HotelCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotel-card',
            template: __webpack_require__(/*! ./hotel-card.component.html */ "./src/app/hotels-list/hotel-card/hotel-card.component.html"),
            styles: [__webpack_require__(/*! ./hotel-card.component.css */ "./src/app/hotels-list/hotel-card/hotel-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HotelCardComponent);
    return HotelCardComponent;
}());



/***/ }),

/***/ "./src/app/hotels-list/hotels-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hotels-list/hotels-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdGVscy1saXN0L2hvdGVscy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/hotels-list/hotels-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/hotels-list/hotels-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"element-left\">\n  <div class=\"element-bg-img\"><img src=\"assets/images/{{selectedHotel.weather.icon}}\" alt=\"\" class=\"img-responsive\"> </div>\n  <div class=\"element-left-bottom\">\n    <div class=\"ele-strip\">\n      <ul>\n        <li *ngFor=\"let currentFilter of filterTypes\"><a href=\"#\" (click)=\"applyHotelFilter($event, currentFilter)\" >{{currentFilter}}</a></li>\n      </ul>\n    </div>\n    <div class=\"village\">\n      <h3>List Of Hotels</h3>\n      <span class=\"line\"> </span>\n      <div class=\"activity_box\">\n        <div class=\"scrollbar\" id=\"style-2\">\n          <app-hotel-card\n            [hotel]=\"currentHotel\"\n            *ngFor=\"let currentHotel of dataHotels | hotelsFilter: filter\"\n            (click)=\"onCardClicked(currentHotel)\">\n          </app-hotel-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/hotels-list/hotels-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hotels-list/hotels-list.component.ts ***!
  \******************************************************/
/*! exports provided: HotelsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsListComponent", function() { return HotelsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hotels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hotels */ "./src/app/hotels-list/hotels.ts");



var HotelsListComponent = /** @class */ (function () {
    function HotelsListComponent() {
        this.changeHotel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HotelsListComponent.prototype.onCardClicked = function (data) {
        this.selectedHotel = data;
        this.emitData();
    };
    HotelsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.dataHotels = HOTELS$;
        // this.selectedHotel = HOTELS[0];
        _hotels__WEBPACK_IMPORTED_MODULE_2__["HOTELS$"].subscribe(function (data) {
            _this.dataHotels = data;
            _this.selectedHotel = data[0];
            _this.emitData();
        });
        _hotels__WEBPACK_IMPORTED_MODULE_2__["FILTERS$"].subscribe(function (data) {
            _this.filterTypes = data;
            _this.filter = _this.filterTypes[0];
        });
    };
    HotelsListComponent.prototype.emitData = function () {
        this.changeHotel.emit(this.selectedHotel);
    };
    HotelsListComponent.prototype.applyHotelFilter = function (event, type) {
        event.preventDefault();
        this.filter = type;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HotelsListComponent.prototype, "changeHotel", void 0);
    HotelsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotels-list',
            template: __webpack_require__(/*! ./hotels-list.component.html */ "./src/app/hotels-list/hotels-list.component.html"),
            styles: [__webpack_require__(/*! ./hotels-list.component.css */ "./src/app/hotels-list/hotels-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HotelsListComponent);
    return HotelsListComponent;
}());



/***/ }),

/***/ "./src/app/hotels-list/hotels.ts":
/*!***************************************!*\
  !*** ./src/app/hotels-list/hotels.ts ***!
  \***************************************/
/*! exports provided: HOTELS$, FILTERS$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOTELS$", function() { return HOTELS$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTERS$", function() { return FILTERS$; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var HOTELS = [
    {
        "img": "..",
        "address": "Boston",
        "phone": 555501,
        "weather": {
            "title": "Weather",
            "icon": "Boston-1.jpg",
            "water": 17,
            "temperature": 24
        },
        "social_info": {
            "title": "Facebook",
            "img": "Boston-2.jpg",
            "followers": 506,
            "following": 98
        },
        "type": "***"
    },
    {
        "img": "..",
        "address": "Montenegro",
        "phone": 777701,
        "weather": {
            "title": "Weather",
            "icon": "Montenegro-1.jpg",
            "water": 25,
            "temperature": 33
        },
        "social_info": {
            "title": "Twitter",
            "img": "Montenegro-2.jpg",
            "followers": 770,
            "following": 10
        },
        "type": "****"
    },
    {
        "img": "..",
        "address": "Prague",
        "phone": 999901,
        "weather": {
            "title": "Weather",
            "icon": "Prague-1.jpg",
            "water": 18,
            "temperature": 24
        },
        "social_info": {
            "title": "Instagram",
            "img": "Prague-2.jpg",
            "followers": 150,
            "following": 109
        },
        "type": "*****"
    },
    {
        "img": "..",
        "address": "Paris",
        "phone": 444401,
        "weather": {
            "title": "Weather",
            "icon": "Paris-1.jpg",
            "water": 21,
            "temperature": 27
        },
        "social_info": {
            "title": "Vkontakte",
            "img": "Paris-2.jpg",
            "followers": 1002,
            "following": 88
        },
        "type": "***"
    },
    {
        "img": "..",
        "address": "Singapore",
        "phone": 111101,
        "weather": {
            "title": "Weather",
            "icon": "Singapore-1.jpg",
            "water": 25,
            "temperature": 35
        },
        "social_info": {
            "title": "Facebook",
            "img": "Singapore-2.jpg",
            "followers": 980,
            "following": 214
        },
        "type": "*****"
    }
];
var FILTERS = [
    "All",
    "***",
    "****",
    "*****"
];
var HOTELS$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(HOTELS);
var FILTERS$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(FILTERS);


/***/ }),

/***/ "./src/app/phone-number.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/phone-number.pipe.ts ***!
  \**************************************/
/*! exports provided: PhoneNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumberPipe", function() { return PhoneNumberPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhoneNumberPipe = /** @class */ (function () {
    function PhoneNumberPipe() {
    }
    PhoneNumberPipe.prototype.transform = function (phone, args) {
        phone = phone.toString();
        var result = phone.substring(0, 2) + '-' + phone.substring(2, 4) + '-' + phone.substring(4, 6);
        return result;
    };
    PhoneNumberPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'phoneNumber'
        })
    ], PhoneNumberPipe);
    return PhoneNumberPipe;
}());



/***/ }),

/***/ "./src/app/widgets-list/widgets-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/widgets-list/widgets-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgCircle{\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy1saXN0L3dpZGdldHMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRzLWxpc3Qvd2lkZ2V0cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nQ2lyY2xle1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/widgets-list/widgets-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/widgets-list/widgets-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"element-right\">\n  <div class=\"temperatur\">\n    <h5>{{hotel.weather.title}}</h5>\n    <span class=\"w-line\"> </span>\n    <span class=\"cloud\"> </span>\n    <h2>{{hotel.weather.temperature}}<sup class=\"degree\">°</sup></h2>\n    <h6>Water {{hotel.weather.water}}<sup class=\"degree\">°</sup></h6>\n  </div>\n  <div class=\"teddy-bear\">\n    <div class=\"teddy-text\">\n      <h4>{{hotel.social_info.title}}</h4>\n      <span class=\"w-line\"> </span>\n      <img src=\"assets/images/{{hotel?.social_info?.img}}\" alt=\"\"  class=\"img-responsive imgCircle\">\n    </div>\n    <div class=\"teddy-follow\">\n      <ul>\n        <li class=\"folw-h\"><h3>{{hotel.social_info.followers}}</h3>\n          <p>Followers</p>\n        </li>\n        <li><h3>{{hotel.social_info.following}}</h3>\n          <p>Following</p>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/widgets-list/widgets-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/widgets-list/widgets-list.component.ts ***!
  \********************************************************/
/*! exports provided: WidgetsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsListComponent", function() { return WidgetsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetsListComponent = /** @class */ (function () {
    function WidgetsListComponent() {
    }
    WidgetsListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetsListComponent.prototype, "hotel", void 0);
    WidgetsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widgets-list',
            template: __webpack_require__(/*! ./widgets-list.component.html */ "./src/app/widgets-list/widgets-list.component.html"),
            styles: [__webpack_require__(/*! ./widgets-list.component.css */ "./src/app/widgets-list/widgets-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetsListComponent);
    return WidgetsListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WebstormProjects\NgHotels\ng-hotels\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map