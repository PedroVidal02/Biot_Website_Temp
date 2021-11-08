(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "43JW":
/*!**********************************************************************!*\
  !*** ./src/app/screens/forgot-password/forgot-password.component.ts ***!
  \**********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "VYY9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/auth.service */ "7Vn+");






var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.forgotPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
        });
        this.errorMessage = '';
        this.focus = false;
        this.isRecoveryFailed = false;
        this.isRecoverySent = false;
    }
    ;
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var email = this.forgotPasswordForm.get('email').value;
        this.authService
            .forgotPassword(email)
            .subscribe(function (data) {
            _this.isRecoverySent = true;
        }, function (err) {
            _this.errorMessage = err.error.message;
            _this.isRecoveryFailed = true;
        });
    };
    ;
    ForgotPasswordComponent.prototype.ngOnInit = function () { };
    ;
    ForgotPasswordComponent.prototype.ngOnDestroy = function () { };
    ;
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-forgot-password',
            template: _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());

;


/***/ }),

/***/ "Dwnz":
/*!**************************************************************************!*\
  !*** ./src/app/screens/verification-sent/verification-sent.component.ts ***!
  \**************************************************************************/
/*! exports provided: VerificationSentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationSentComponent", function() { return VerificationSentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verification_sent_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verification-sent.component.html */ "TEHR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/auth.service */ "7Vn+");





var VerificationSentComponent = /** @class */ (function () {
    function VerificationSentComponent(authService, activatedRoute, router) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.errorMessage = "";
        this.isEmailVerificationFailed = false;
    }
    ;
    VerificationSentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.token = String(params.token);
        });
        this.authService
            .verifyEmail(this.token) //mandando o token para a API validar
            .subscribe(function (err) {
            _this.errorMessage = err.error.message;
            _this.isEmailVerificationFailed = true;
        });
    };
    ;
    VerificationSentComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    VerificationSentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-verification-sent',
            template: _raw_loader_verification_sent_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VerificationSentComponent);
    return VerificationSentComponent;
}());



/***/ }),

/***/ "Eq68":
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/*! exports provided: AuthLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutes", function() { return AuthLayoutRoutes; });
/* harmony import */ var _screens_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../screens/forgot-password/forgot-password.component */ "43JW");
/* harmony import */ var _screens_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../screens/reset-password/reset-password.component */ "Hb5J");
/* harmony import */ var _screens_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../screens/sign-in/sign-in.component */ "QsKx");
/* harmony import */ var _screens_verification_sent_verification_sent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../screens/verification-sent/verification-sent.component */ "Dwnz");




var AuthLayoutRoutes = [
    {
        path: "forgot-password",
        component: _screens_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__["ForgotPasswordComponent"],
    },
    {
        path: "reset-password",
        component: _screens_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_1__["ResetPasswordComponent"],
    },
    {
        path: "",
        component: _screens_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"],
    },
    {
        path: "verification-sent",
        component: _screens_verification_sent_verification_sent_component__WEBPACK_IMPORTED_MODULE_3__["VerificationSentComponent"],
    },
];


/***/ }),

/***/ "Hb5J":
/*!********************************************************************!*\
  !*** ./src/app/screens/reset-password/reset-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reset_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reset-password.component.html */ "tp/C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/auth.service */ "7Vn+");






var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(activatedRoute, authService, router) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.router = router;
        this.resetPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]),
        });
        this.errorMessage = '';
        this.focus2 = false;
        this.isResetPasswordFailed = false;
        this.passwordReseted = false;
        this.showPassword = false;
    }
    ;
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.token = String(params.token);
        });
        this.authService
            .resetPassword(this.token, this.resetPasswordForm.get("password").value)
            .subscribe(function (data) {
            _this.passwordReseted = true;
        }, function (err) {
            _this.errorMessage = err.error.message;
            _this.isResetPasswordFailed = true;
        });
    };
    ;
    ResetPasswordComponent.prototype.passwordReveal = function () {
        this.showPassword = !this.showPassword;
    };
    ;
    ResetPasswordComponent.prototype.ngOnInit = function () { };
    ;
    ResetPasswordComponent.prototype.ngOnDestroy = function () { };
    ;
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ResetPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-reset-password",
            template: _raw_loader_reset_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());

;


/***/ }),

/***/ "PTPi":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function() { return AuthLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/authguard.service */ "bNik");
/* harmony import */ var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-layout.routing */ "Eq68");
/* harmony import */ var _screens_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../screens/forgot-password/forgot-password.component */ "43JW");
/* harmony import */ var _screens_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../screens/reset-password/reset-password.component */ "Hb5J");
/* harmony import */ var _screens_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../screens/sign-in/sign-in.component */ "QsKx");
/* harmony import */ var _screens_verification_sent_verification_sent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../screens/verification-sent/verification-sent.component */ "Dwnz");
/* harmony import */ var src_app_services_export_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_services/export.service */ "gaUo");












var AuthLayoutModule = /** @class */ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutRoutes"])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [
                _screens_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"],
                _screens_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"],
                _screens_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"],
                _screens_verification_sent_verification_sent_component__WEBPACK_IMPORTED_MODULE_10__["VerificationSentComponent"]
            ],
            providers: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"], src_app_services_export_service__WEBPACK_IMPORTED_MODULE_11__["ExportService"]]
        })
    ], AuthLayoutModule);
    return AuthLayoutModule;
}());



/***/ }),

/***/ "QsKx":
/*!******************************************************!*\
  !*** ./src/app/screens/sign-in/sign-in.component.ts ***!
  \******************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sign_in_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sign-in.component.html */ "uxCg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/auth.service */ "7Vn+");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/token-storage.service */ "FQmJ");







var SignInComponent = /** @class */ (function () {
    function SignInComponent(authService, router, tokenStorage) {
        this.authService = authService;
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
        this.focus = false;
        this.focus1 = false;
        this.rememberMe = false;
    }
    ;
    SignInComponent.prototype.onSubmit = function () {
        var email = this.signInForm.get('email').value;
        var password = this.signInForm.get('password').value;
        if (this.signInForm.get('rememberMe').value) {
            this.rememberMe = this.signInForm.get('rememberMe').value;
        }
        this.router.navigate(["user/dashboard"]);
        /*
        this.authService
          .login(email, password)
          .subscribe(
            data => {
              this.tokenStorage.saveToken(data.accessToken,this.rememberMe);
              this.tokenStorage.saveUser(data,this.rememberMe);
              this.isLoginFailed = false;
              this.roles = this.tokenStorage.getUser().roles;
              this.router.navigate(["user/dashboard"]);
            },
            err => {
              this.errorMessage = err.error.message;
              this.isLoginFailed = true;
            }
          );*/
        //remova esse comentário para restaurar o login
    };
    ;
    SignInComponent.prototype.handleEnterKey = function (e) {
        if (this.signInForm.valid) {
            this.onSubmit();
        }
    };
    SignInComponent.prototype.ngOnInit = function () { };
    ;
    SignInComponent.prototype.ngOnDestroy = function () { };
    ;
    SignInComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"] }
    ]; };
    SignInComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sign-in',
            template: _raw_loader_sign_in_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"]])
    ], SignInComponent);
    return SignInComponent;
}());

;


/***/ }),

/***/ "TEHR":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/verification-sent/verification-sent.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header py-7 py-lg-8\">\n  <div class=\"container\">\n    <div class=\"header-body text-center mb-7\">\n      <div class=\"row justify-content-center\">\n      </div>\n    </div>\n  </div>\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n\n<div class=\"container mt--8 pb-5\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-5 col-md-7 pb-lg-12 pb-md-13\">\n      <div class=\"card bg-white shadow border-0 my-0\">\n        <div class=\"card-body px-lg-5 py-lg-5 text-center\">\n          <i class=\"fas fa-envelope-open-text fa-5x\"></i>\n          <p style=\"font-size: 30px\" class=\"pt-4\">E-mail Verificado com Sucesso!</p>\n        </div>\n      </div>\n      <div class=\"row my-2\">\n        <div class=\"col text-right\">\n          <a [routerLink]=\"['']\" class=\"text-light\"><small>Fazer Login</small></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "VYY9":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forgot-password/forgot-password.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"header py-7 py-lg-8 pt-lg-9\">\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n\n  <div class=\"container pt-5 pb-5\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-6 col-md-8\">\n        <div class=\"card bg-white border-0 my-0\">\n          <div *ngIf=\"!isRecoverySent\" class=\"card-header bg-transparent pb-5\">\n            <div class=\"text-muted text-center mt-2 mb-3\">\n              <small> Recuperar a Senha </small>\n            </div>\n            <div *ngIf=\"this.isRecoveryFailed\" class=\"rounded text-muted bg-danger text-white\n              w-60 text-center mt--2 mb-3 mx-auto\">\n              <small>{{this.errorMessage}}</small>\n            </div>\n            <form [formGroup]=\"forgotPasswordForm\" role=\"form\">\n              <div class=\"form-group mb-4\" [ngClass]=\"{ focused: focus === true }\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                  </div>\n                  <input formControlName=\"email\" class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus = true\" (blur)=\"focus = false\" />\n                </div>\n              </div>\n              <div class=\"text-center\">\n                <button [disabled]=\"!forgotPasswordForm.valid\" (click)=\"onSubmit()\" type=\"button\" class=\"btn btn-secondary my-4\">\n                  Enviar Email de Recuperação\n                </button>\n              </div>\n            </form>\n          </div>\n          <div *ngIf=\"isRecoverySent\" class=\"card-body px-lg-5 py-lg-5 text-center\">\n            <i class=\"fas fa-envelope fa-5x\"></i>\n            <p style=\"font-size: 30px\" class=\"pt-4\">E-mail de Recuperação Enviado!</p>\n            <p style=\"font-size: 20px\">Verifique sua Caixa de Entrada</p>\n            <small>O E-mail também pode estar na caixa de spam</small>\n          </div>\n        </div>\n        <div class=\"row my-2\">\n          <div class=\"col text-right\">\n            <a class=\"text-light\" routerLinkActive=\"active\" [routerLink]=\"['']\">\n              <small> Fazer Login </small>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "tp/C":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/reset-password/reset-password.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"header py-7\">\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n\n  <div class=\"container py-9\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-6 col-md-8\">\n        <div class=\"card bg-white border-0 my-0\">\n          <div *ngIf=\"!passwordReseted\" class=\"card-body\">\n            <div *ngIf=\"this.isResetPasswordFailed\" class=\"rounded text-muted bg-danger text-white w-60 text-center\n            mt-1 mb-3 mx-auto\">\n              <small>{{this.errorMessage}} </small>\n            </div>\n            <div class=\"text-muted text-center pb-3\">\n              <small> Digite Sua Nova Senha </small>\n            </div>\n            <form role=\"form\" [formGroup]=\"resetPasswordForm\">\n              <div class=\"form-group\" [ngClass]=\"{ focused: focus2 === true }\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"ni ni-lock-circle-open\"></i>\n                    </span>\n                  </div>\n                  <input [type]=\"showPassword ? 'text' : 'password'\" class=\"form-control\" placeholder=\"Nova Senha (Min: 8 letras)\" formControlName=\"password\" type=\"password\" (focus)=\"focus2 = true\" (blur)=\"focus2 = false\" />\n                  <button type=\"button\" (click)=\"passwordReveal()\" class=\"btn btn-secondary mt-1\">\n                    <i *ngIf=\"showPassword\" class=\"fas fa-eye px-1\"></i>\n                    <i *ngIf=\"!showPassword\" class=\"fas fa-eye-slash\"></i>\n                  </button>\n                </div>\n              </div>\n              <div class=\"text-center\">\n                <button [disabled]=\"!resetPasswordForm.valid\" (click)=\"onSubmit()\" type=\"button\" class=\"btn btn-secondary mt-4\">\n                  Redefinir Senha\n                </button>\n              </div>\n            </form>\n          </div>\n          <div *ngIf=\"passwordReseted\" class=\"card-body px-lg-5 py-lg-5 text-center\">\n            <i class=\"fas fa-check fa-5x\"></i>\n            <p style=\"font-size: 30px\" class=\"pt-4\">Senha Alterada Com Sucesso!\n            </p>\n            <small>Faça Login Para Continuar</small>\n          </div>\n        </div>\n        <div class=\"row my-2\">\n          <div class=\"col text-right\">\n            <a class=\"text-light\" routerLinkActive=\"active\" [routerLink]=\"['']\">\n              <small>Fazer Login</small>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "uxCg":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/sign-in/sign-in.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"header py-7 py-lg-8 pt-lg-9\">\n    <div class=\"container\">\n      <div class=\"header-body text-center mb-5\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-xl-3 col-lg-3 col-md-4 col-sm-5 col-6 px-6\">\n            <img\n              class=\"img-fluid\"\n              src=\"/assets/img/biot/biot_logo.png\"\n              alt=\"Logo da BioT\"\n            />\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg\n        x=\"0\"\n        y=\"0\"\n        viewBox=\"0 0 2560 100\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n\n  <div class=\"container mt--8 pb-5\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-5 col-md-7\">\n        <div class=\"card bg-white border-0 my-0\">\n          <div class=\"card-header bg-transparent pb-5\">\n            <div class=\"row justify-content-center mb-3\">\n              <div class=\"col-xl-5 col-lg-4 col-md-4 col-sm-3 col-4 px-3\">\n                <img\n                  class=\"img-fluid\"\n                  src=\"/assets/img/biot/logo_text.png\"\n                  alt=\"BioT\"\n                />\n              </div>\n            </div>\n            <form [formGroup]=\"signInForm\" role=\"form\">\n\n              <div\n                class=\"form-group mb-3\"\n                [ngClass]=\"{ focused: focus === true }\"\n              >\n                <div\n                  *ngIf=\"this.isLoginFailed\"\n                  class=\"rounded text-muted bg-warning text-white w-60 text-center mt-1 mb-3 mx-auto\"\n                >\n                  <small>{{ this.errorMessage }}</small>\n                </div>\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      ><i class=\"ni ni-email-83\"></i\n                    ></span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Email\"\n                    type=\"email\"\n                    formControlName=\"email\"\n                    (focus)=\"focus = true\"\n                    (blur)=\"focus = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-group\" [ngClass]=\"{ focused: focus1 === true }\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      ><i class=\"ni ni-lock-circle-open\"></i\n                    ></span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Senha\"\n                    type=\"password\"\n                    formControlName=\"password\"\n                    (focus)=\"focus1 = true\"\n                    (blur)=\"focus1 = false\"\n                  />\n                </div>\n              </div>\n              <div\n                class=\"custom-control custom-control-alternative custom-checkbox\"\n              >\n                <input\n                  class=\"custom-control-input\"\n                  id=\" customCheckSignIn\"\n                  type=\"checkbox\"\n                  formControlName=\"rememberMe\"\n                />\n                <label class=\"custom-control-label\" for=\" customCheckSignIn\">\n                  <span>Lembrar de mim</span>\n                </label>\n              </div>\n              <div class=\"text-center\">\n                <button\n                  [disabled]=\"!signInForm.valid\"\n                  (click)=\"onSubmit()\"\n                  type=\"button\"\n                  class=\"btn btn-secondary my-4\"\n                >\n                  Entrar\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class=\"row my-2\">\n          <div class=\"col text-left\">\n            <a\n              class=\"text-light\"\n              routerLinkActive=\"active\"\n              [routerLink]=\"['/forgot-password']\"\n            >\n              <small> Esqueceu a Senha? </small>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module.js.map