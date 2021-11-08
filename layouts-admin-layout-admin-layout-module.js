(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "3OaT":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/user-profile/user-profile.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" mt--7 header pb-6 d-flex align-items-center\" style=\"min-height: 500px; background-size: cover; background-position: center top;\">\n  <span class=\" mask bg-primary\"> </span>\n  <div class=\" container-fluid d-flex align-items-center\">\n    <div class=\" row\">\n      <div class=\" col-lg-7 col-md-10\">\n        <h1 class=\" display-2 text-white\">Ola, {{currentUser.username}}</h1>\n      </div>\n      <div class=\"row\">\n        <div class=\"col ml-2\">\n          <a class=\"btn btn-neutral text-nowrap\" routerLinkActive=\"active\" [routerLink]=\"['/user/sign-up']\"> Registrar Novo Usuário </a>\n        </div>\n        <div class=\"col\">\n          <a class=\"btn btn-neutral\" [routerLink]=\"['']\"> Sair </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6 bg-primary\" style=\"min-height: 100%; background-size: cover;\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-xl-4\">\n      <div class=\"card card-profile\">\n        <img alt=\"Image placeholder\" class=\" card-img-top\" src=\"assets/img/theme/img-1-1000x600.jpg\" />\n\n        <div class=\" row justify-content-center\">\n          <div class=\" col-lg-3 order-lg-2\">\n          </div>\n        </div>\n\n        <div class=\" card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4\">\n          <div class=\" d-flex justify-content-between\">\n          </div>\n        </div>\n\n        <div class=\" card-body pt-0\">\n\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"row justify-content-center text-center\">\n                <h5 class=\" h3\">\n                  {{currentUser.username}}\n                </h5>\n              </div>\n              <div class=\"row justify-content-center text-center\">\n                  <span class=\"mx-2 font-weight-bold\">Cargo:</span>{{currentUser.role}}\n                  <span class=\"mx-2 font-weight-bold\">E-mail:</span>{{currentUser.email}}\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "6+jJ":
/*!******************************************************!*\
  !*** ./src/app/screens/sign-up/sign-up.component.ts ***!
  \******************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sign_up_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sign-up.component.html */ "RnDI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/auth.service */ "7Vn+");






var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService, cd, router) {
        this.authService = authService;
        this.cd = cd;
        this.router = router;
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]),
            roleCheck: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]),
        });
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
        this.confirmMessage = '';
        this.showPassword = false;
        this.focus = false;
        this.focus1 = false;
        this.focus2 = false;
    }
    ;
    SignUpComponent.prototype.onSubmit = function () {
        var username = this.signUpForm.get('username').value;
        var email = this.signUpForm.get('email').value;
        var password = this.signUpForm.get('password').value;
        var confirmPassword = this.signUpForm.get('confirmPassword').value;
        console.log("teste");
        var roleCheck = this.signUpForm.get('roleCheck').value;
        var role = 'User';
        if (confirmPassword === password) {
            if (roleCheck) {
                role = 'Administrator';
            }
            this.isSuccessful = true;
            this.isSignUpFailed = false;
            this.confirmMessage = "Register Successful!";
            /*this.authService
              .register(username, email, password, role)
              .subscribe(
                data => {
                  this.isSuccessful = true;
                  this.isSignUpFailed = false;
                  this.confirmMessage = "Register Successful!";
                  this.authService.sendEmailVerification(email).subscribe();
                },
                err => {
                  this.errorMessage = err.error.message;
                  this.isSignUpFailed = true;
                }
              );*/
        }
        else {
            this.errorMessage = "Passwords do not match! Try Again";
            this.isSignUpFailed = true;
        }
    };
    ;
    SignUpComponent.prototype.handleEnterKey = function (e) {
        if (this.signUpForm.valid) {
            this.onSubmit();
        }
    };
    SignUpComponent.prototype.passwordReveal = function () {
        this.showPassword = !this.showPassword;
    };
    ;
    SignUpComponent.prototype.ngOnInit = function () { };
    ;
    SignUpComponent.prototype.ngOnDestroy = function () { };
    ;
    SignUpComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    SignUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-sign-up",
            template: _raw_loader_sign_up_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());

;


/***/ }),

/***/ "HlCX":
/*!**************************************************************!*\
  !*** ./src/app/screens/dashboard/grafico/grafico.presets.ts ***!
  \**************************************************************/
/*! exports provided: graphConfigPreset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphConfigPreset", function() { return graphConfigPreset; });
var graphConfigPreset = {
    modeBarButtonsToRemove: ["lasso2d", "autoScale2d", "zoom2d", "select2d"],
    editable: true,
    displaylogo: false,
    toImageButtonOptions: {
        format: "png",
        filename: "custom_image",
        height: 500,
        width: 700,
    },
};
// export const graphLayoutPreset = {
// 	responsive: true,
// 	title: "Clique aqui para editar o titulo",
// 	showlegend: true,
// 	legend: {
// 		x: 0,
// 		y: 100,
// 	},
// 	staticPlot: true,
// 	font: {
// 		color: '#000000',
// 	},
// 	paper_bgcolor: 'rgba(0,0,0,0)',
// 	plot_bgcolor: 'rgba(0,0,0,0)',
// 	autosize: false,
// 	xaxis: {
// 		title: "TEMPO",
// 	},
// 	yaxis: {
// 		title: "DADOS",
// 	},
// };


/***/ }),

/***/ "IgkS":
/*!****************************************************************!*\
  !*** ./src/app/screens/dashboard/grafico/grafico.component.ts ***!
  \****************************************************************/
/*! exports provided: GraficoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficoComponent", function() { return GraficoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_grafico_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./grafico.component.html */ "R7Pe");
/* harmony import */ var _grafico_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grafico.component.scss */ "tCn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/auth.service */ "7Vn+");
/* harmony import */ var src_app_services_export_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/export.service */ "gaUo");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dashboard.service */ "OgXG");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dashboard.component */ "SsAd");









var GraficoComponent = /** @class */ (function () {
    function GraficoComponent(authService, exportService, sharedService, dashboardComponent) {
        this.authService = authService;
        this.exportService = exportService;
        this.sharedService = sharedService;
        this.dashboardComponent = dashboardComponent;
        this.filteredExportData = [];
        this.isExportFailed = false;
        this.isExportSuccessful = false;
        this.errorMessage = "Export falhou! :(";
        this.successMessage = "Dados Exportados com sucesso!";
        this.exportMenuIsOpen = false;
        this.importMenuIsOpen = false;
        this.exportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            exportStartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            exportStartTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            exportEndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            exportEndTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    GraficoComponent.prototype.ngAfterViewInit = function () { };
    // teste(){
    //	alert("voce clicou no grafico!")
    // }
    GraficoComponent.prototype.onFileSelected = function (files) {
        var _this = this;
        this.fileToRead = files.item(0);
        var reader = new FileReader();
        reader.onload = function () {
            _this.jsonToImport = _this.csvJSON(reader.result);
            console.log(_this.jsonToImport);
            _this.authService.sendData(_this.jsonToImport, _this.graph.deviceNumber).subscribe(function (data) {
                console.log("enviado!");
            });
        };
        reader.readAsText(this.fileToRead);
        //this.authService.sendData000(this.fileToUpload).subscribe(data => {
        // console.log("Success! File uploaded")
        //}, error => {
        //	 console.log(error);
        //});
    };
    GraficoComponent.prototype.csvJSON = function (csv) {
        var lines = csv.split("\n");
        var result = [];
        var headers = lines[0].split(";");
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(";");
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        return result; //JavaScript object
        //return console.log(result); //JSON
    };
    GraficoComponent.prototype.atualizarGrafico = function () {
        console.log(this.graph);
        console.log("grafico atualizado");
    };
    GraficoComponent.prototype.exportMenuToggle = function () {
        if (this.exportMenuIsOpen)
            this.exportMenuIsOpen = false;
        else {
            this.exportMenuIsOpen = true;
        }
    };
    GraficoComponent.prototype.importMenuToggle = function () {
        if (this.importMenuIsOpen)
            this.importMenuIsOpen = false;
        else {
            this.importMenuIsOpen = true;
        }
    };
    GraficoComponent.prototype.sendRemoveEvent = function () {
        this.sharedService.sendClickEvent(this.graph.id);
    };
    GraficoComponent.prototype.previewFileSize = function () {
        this.isExportFailed = false;
        this.filteredExportData = [];
        this.exportDateStart = new Date(this.exportForm.get('exportStartDate').value + "T" + this.exportForm.get('exportStartTime').value);
        this.exportDateEnd = new Date(this.exportForm.get('exportEndDate').value + "T" + this.exportForm.get('exportEndTime').value);
        console.log(this.exportDateEnd);
        // filtra os dados do export pelas datas recebidas pelo usuario
        for (var i = 0; i < this.graph.exportData.length; i++) {
            this.tempDate = new Date(this.graph.exportData[i].valueTS);
            if (this.exportDateStart <= this.tempDate && this.tempDate <= this.exportDateEnd) {
                this.filteredExportData.push(this.graph.exportData[i]);
            }
        }
        // this.exportMenuIsOpen = false
        if (this.filteredExportData.length === 0 || this.filteredExportData.length === undefined) {
            this.errorMessage = "Erro: Nenhum dado para exportar,verifique os parametros e tente novamente!";
            this.isExportFailed = true;
        }
        else {
            this.exportFileSize = this.exportService.predictFileSize(this.filteredExportData, "jsontocsv", this.graph.exportFields);
            this.fileSizeMessage = "O tamanho do arquivo de export atual: " + this.exportFileSize / 1000 + " kB";
            // retornando o tamnho do arquivo final
        }
    };
    GraficoComponent.prototype.export = function () {
        this.isExportFailed = false;
        this.filteredExportData = [];
        this.exportDateStart = new Date(this.exportForm.get('exportStartDate').value + "T" + this.exportForm.get('exportStartTime').value);
        this.exportDateEnd = new Date(this.exportForm.get('exportEndDate').value + "T" + this.exportForm.get('exportEndTime').value);
        // console.log("To be Exported:")
        for (var i = 0; i < this.graph.exportData.length; i++) {
            this.tempDate = new Date(this.graph.exportData[i].valueTS);
            if (this.exportDateStart <= this.tempDate && this.tempDate <= this.exportDateEnd) {
                this.filteredExportData.push(this.graph.exportData[i]);
            }
        }
        // this.exportMenuIsOpen = false
        if (this.filteredExportData.length === 0 || this.filteredExportData.length === undefined) {
            this.errorMessage = "Erro: Nenhum dado para exportar,verifique os parametros e tente novamente!";
            this.isExportFailed = true;
        }
        else {
            this.isExportSuccessful = true;
            this.exportService.downloadFile(this.filteredExportData, "jsontocsv", this.graph.exportFields);
            // exportando dados filtrados
        }
    };
    GraficoComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_app_services_export_service__WEBPACK_IMPORTED_MODULE_6__["ExportService"] },
        { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"] },
        { type: _dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"] }
    ]; };
    GraficoComponent.propDecorators = {
        graph: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    GraficoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-grafico',
            template: _raw_loader_grafico_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_grafico_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_services_export_service__WEBPACK_IMPORTED_MODULE_6__["ExportService"],
            _dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"],
            _dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]])
    ], GraficoComponent);
    return GraficoComponent;
}());



/***/ }),

/***/ "IqXj":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-layout.routing */ "qZ7x");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/authguard.service */ "bNik");
/* harmony import */ var _screens_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../screens/user-profile/user-profile.component */ "MiHe");
/* harmony import */ var _screens_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../screens/dashboard/dashboard.component */ "SsAd");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _screens_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../screens/sign-up/sign-up.component */ "6+jJ");
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-plotly.js */ "u3+B");
/* harmony import */ var src_app_screens_dashboard_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/screens/dashboard/grafico/grafico.component */ "IgkS");













var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutRoutes"]),
                angular_plotly_js__WEBPACK_IMPORTED_MODULE_11__["PlotlyModule"],
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [
                _screens_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"],
                _screens_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _screens_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"],
                src_app_screens_dashboard_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_12__["GraficoComponent"],
            ],
            providers: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "LWA/":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/dashboard/dashboard.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-primary pt-7 pb-8\" style=\"\n    min-height: 100%;\n    background-size: cover;\n    background-position: center top;\n  \">\n\t<div class=\"container-fluid\">\n    <div class=\"row bg-primary justify-content-center pb-4\">\n  \t\t<a *ngIf=\"!graphMenuIsOpen && graphCounter < 4\" class=\"btn btn-secondary text-white justify-content-center align-self-center\" (click)=\"openAddGraphMenu(true)\">Adicionar Grafico</a>\n  \t\t<div *ngIf=\"graphMenuIsOpen\" class=\"container-fluid\">\n  \t\t\t<div class=\"row justify-content-center\">\n  \t\t\t\t<div class=\"card bg-gradient-default shadow\">\n  \t\t\t\t\t<div class=\"card-header bg-transparent\">\n  \t\t\t\t\t\t<div class=\"row align-items-center\">\n  \t\t\t\t\t\t\t<div class=\"col\">\n  \t\t\t\t\t\t\t\t<h6 class=\"text-uppercase text-light ls-1 mb-1\">Menu</h6>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t</div>\n  \t\t\t\t\t<div class=\"row justify-content-center mt-n3\">\n  \t\t\t\t\t\t<div class=\"dropdown\">\n  \t\t\t\t\t\t\t<button class=\"btn btn-secondary dropdown-toggle my-3\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n  \t\t\t\t\t\t\t\t{{ activeExperimentInGraphMenu }}\n  \t\t\t\t\t\t\t</button>\n  \t\t\t\t\t\t\t<div class=\"dropdown-menu justify-content-center\" aria-labelledby=\"dropdownMenuButton\">\n  \t\t\t\t\t\t\t\t<a *ngFor=\"let device of devices\" class=\"dropdown-item\" (click)=\"selectExperiment(device)\">{{ device }}</a>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t</div>\n            <form role=\"form\" [formGroup]=\"pullGraphForm\">\n            <div class=\"row justify-content-center my-3 mx-3 text-white\">\n              <div class=\"col-3\">\n                <p>Inicio:</p>\n              </div>\n              <div class=\"col-6 ml--5\"><input type=\"date\" formControlName=\"pullGraphStartDate\" (focus)=\"focus = true\" (blur)=\"focus = false\" /></div>\n              <div class=\"col-3\"><input type=\"time\" value=\"00:00\" formControlName=\"pullGraphStartTime\" (focus)=\"focus = true\" (blur)=\"focus = false\" /></div>\n            </div>\n            <div class=\"row justify-content-center my-3 mx-3 text-white\">\n              <div class=\"col-3\">\n                <p>Fim:</p>\n              </div>\n              <div class=\"col-6 ml--5\"><input type=\"date\" formControlName=\"pullGraphEndDate\" (focus)=\"focus = true\" (blur)=\"focus = false\" /></div>\n              <div class=\"col-3\"><input type=\"time\" value=\"23:59\" formControlName=\"pullGraphEndTime\" (focus)=\"focus = true\" (blur)=\"focus = false\" /></div>\n            </div>\n            </form>\n  \t\t\t\t\t<div class=\"row justify-content-center\">\n  \t\t\t\t\t\t<button class=\"btn btn-secondary my-3 mx-4\" type=\"button\" (click)=\"addGraph()\">\n  \t\t\t\t\t\t\tPuxar Gráficos\n  \t\t\t\t\t\t</button>\n  \t\t\t\t\t\t<button class=\"btn btn-warning px-6 my-3 mx-4\" type=\"button\" (click)=\"openAddGraphMenu(false)\">\n  \t\t\t\t\t\t\tCancelar\n  \t\t\t\t\t\t</button>\n  \t\t\t\t\t</div>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<section class=\"content\">\n\t\t\t\t\t<div class=\"row justify-content-center\">\n\t\t\t\t\t\t<div *ngFor=\"let graph of graphs\" class=\"card col-md-5 col-xs-12 mx-3\" style=\"height:600px;min-width:750px;max-height:700px\">\n\t\t\t\t\t\t\t<!-- <div class=\"card col-md-8 col-xs-12\"> -->\n\t\t\t\t\t\t\t\t<app-grafico [graph]=\"graph\"></app-grafico>\n\t\t\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</section>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- <div *ngIf=\"restaurants?.length === 0\" class=\"col-xs-12\">\n    <p class=\"lead text-center\">Não foram encontrados itens para a sua busca\n    </p>\n  </div> -->\n\n<!-- <div *ngFor=\"let graph of graphs\">\n          <app-grafico [graph]=\"graph\"></app-grafico>\n  </div> -->\n");

/***/ }),

/***/ "MiHe":
/*!****************************************************************!*\
  !*** ./src/app/screens/user-profile/user-profile.component.ts ***!
  \****************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-profile.component.html */ "3OaT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/token-storage.service */ "FQmJ");




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(token) {
        this.token = token;
        this.currentUser = {
            username: "João",
            role: "Usuário",
            email: "joao@gmail.com"
        };
    }
    UserProfileComponent.prototype.logout = function () {
        this.token.signOut();
        window.location.reload();
    };
    ;
    UserProfileComponent.prototype.ngOnInit = function () {
        console.log(this.currentUser);
    };
    ;
    UserProfileComponent.ctorParameters = function () { return [
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
    ]; };
    UserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-user-profile",
            template: _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "OgXG":
/*!********************************************************!*\
  !*** ./src/app/screens/dashboard/dashboard.service.ts ***!
  \********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



var DashboardService = /** @class */ (function () {
    function DashboardService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DashboardService.prototype.sendClickEvent = function (graphId) {
        this.currentGraphId = graphId;
        this.subject.next();
    };
    DashboardService.prototype.getClickEvent = function () {
        return this.subject.asObservable();
    };
    DashboardService.ctorParameters = function () { return []; };
    DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "R7Pe":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/dashboard/grafico/grafico.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row-12\">\n    <!-- <div class=\"col-12 bg-default\"> Inicio: <input type='date'><input type='time'> </div> -->\n    <div class=\"d-flex justify-content-between mb-4 mt-2\">\n      <div *ngIf=\"!exportMenuIsOpen\">\n        <a\n  \t\t    class=\" btn btn-secondary text-white\"\n  \t\t    (click)=\"exportMenuToggle()\">\n  \t\t    Exportar Grafico\n  \t\t  </a>\n      </div>\n\t\t\t<div *ngIf=\"exportMenuIsOpen\">\n\t\t\t<a\n\t\t    class=\" btn btn-secondary text-white\"\n\t\t    (click)=\"export()\">\n\t\t    Confirmar e Exportar\n\t\t  </a>\n      </div>\n      <div *ngIf=\"exportMenuIsOpen\">\n      <a\n\t\t    class=\" btn btn-secondary text-white\"\n\t\t    (click)=\"previewFileSize()\">\n\t\t    Prever tamanho do export\n\t\t  </a>\n      </div>\n      <div *ngIf=\"exportMenuIsOpen\">\n      <a\n        class=\" btn btn-danger text-white\"\n        (click)=\"exportMenuToggle()\">\n        Cancelar\n      </a>\n      </div>\n      <a *ngIf=\"!exportMenuIsOpen\" class=\"btn btn-secondary text-white\" (click)=\"importMenuToggle()\">\n\t\t\t\tImportar Dados\n\t\t\t</a>\n      <a *ngIf=\"!exportMenuIsOpen\" class=\"btn btn-secondary text-white\" (click)=\"atualizarGrafico()\">\n\t\t\t\tAtualizar Gráfico\n\t\t\t</a>\n      <a *ngIf=\"!exportMenuIsOpen\" class=\"btn btn-secondary text-white\" (click)=\"sendRemoveEvent(this.graph.id)\">\n\t\t\t\tRemover Gráfico\n\t\t\t</a>\n\t\t</div>\n    <div *ngIf=\"importMenuIsOpen\">\n      <input type=\"file\" accept=\".csv\" id=\"file\"\n      (change)=\"onFileSelected($event.target.files)\">\n    </div>\n\n    <div *ngIf=\"exportFileSize&&exportMenuIsOpen\" class=\"rounded text-muted bg-success text-white\n      w-60 text-center mt-1 mb-3 mx-auto\">\n      <small>{{this.fileSizeMessage}} </small>\n      <br>\n    </div>\n\t\t<form role=\"form\" [formGroup]=\"exportForm\">\n\t\t\t<div *ngIf=\"exportMenuIsOpen\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t<p>Inicio:</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-6\"><input type=\"date\" formControlName=\"exportStartDate\" (focus)=\"focus = true\" (blur)=\"focus = false\" /></div>\n\t\t\t\t\t<div class=\"col-3\"><input type=\"time\" formControlName=\"exportStartTime\" (focus)=\"focus = true\" (blur)=\"focus = false\" /></div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t<p>Fim:</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-6\"><input type=\"date\" formControlName=\"exportEndDate\" (focus)=\"focus = true\" (blur)=\"focus = false\" /></div>\n\t\t\t\t\t<div class=\"col-3\"><input type=\"time\" formControlName=\"exportEndTime\" (focus)=\"focus = true\" (blur)=\"focus = false\" /></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\n\t</div>\n\n\t<!--\n    <div class=\"row align-items-center\"> Hora Inicio: <input type='time'>  Hora Fim: <input\n    type='time'> </div>\n  -->\n</div>\n\n<!-- *ngIf=\"!graphMenuIsOpen\" -->\n\n<!--\n  <div #myDiv id=\"{{graph.id}}\" style=\"{ position: 'center', width: '100%', height: '100%' }\"></div>\n-->\n\n<plotly-plot\n  id=\"{{graph.id}}\"\n  [data]=\"graph.data\"\n  [layout]=\"graph.layout\"\n  [useResizeHandler]=\"true\"\n  [style]=\"{ position: 'center', width: '100%', height: '100%'}\"\n  [config]=\"graph.config\">\n</plotly-plot>\n");

/***/ }),

/***/ "RnDI":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/sign-up/sign-up.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content bg-primary\" style=\"min-height: 100%;\">\n  <div class=\"header py-7\">\n    <div class=\"container\">\n      <div class=\"header-body text-center mb-5\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-xl-3 col-lg-3 col-md-4 col-sm-5 col-6 px-6\">\n            <img *ngIf=\"!isSuccessful\" class=\"img-fluid\" src=\"/assets/img/biot/biot_logo.png\" alt=\"Logo da BioT\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n\n  <div class=\"container mt--6\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-6 col-md-8\">\n        <div class=\"card bg-white border-0 my-0\">\n          <div *ngIf=\"!isSuccessful\" class=\"card-body\">\n            <div class=\"row justify-content-center mb-3\">\n              <div class=\"col-xl-5 col-lg-4 col-md-4 col-sm-3 col-4 px-3\">\n                <img class=\"img-fluid\" src=\"/assets/img/biot/logo_text.png\" alt=\"BioT\">\n              </div>\n            </div>\n            <div *ngIf=\"isSignUpFailed\" class=\"rounded text-muted bg-warning text-white\n              w-60 text-center mt-1 mb-3 mx-auto\">\n              <small>{{this.errorMessage}} </small>\n            </div>\n\n            <form role=\"form\" [formGroup]=\"signUpForm\">\n              <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\n                <div class=\"input-group input-group-alternative mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                  </div>\n                  <input class=\"form-control\" placeholder=\"Nome de Usuário (Min: 5 letras)\" formControlName=\"username\" type=\"text\" (focus)=\"focus = true\" (blur)=\"focus = false\" />\n                </div>\n              </div>\n              <div class=\"form-group\" [ngClass]=\"{ focused: focus1 === true }\">\n                <div class=\"input-group input-group-alternative mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                  </div>\n                  <input class=\"form-control\" placeholder=\"Email\" formControlName=\"email\" type=\"email\" (focus)=\"focus1 = true\" (blur)=\"focus1 = false\" />\n                </div>\n              </div>\n              <div class=\"form-group\" [ngClass]=\"{ focused: focus2 === true }\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                  </div>\n                  <input [type]=\"showPassword ? 'text' : 'password'\" class=\"form-control\" placeholder=\"Senha (Min: 8 letras)\" formControlName=\"password\" type=\"password\" (focus)=\"focus2 = true\" (blur)=\"focus2 = false\" />\n                  <button type=\"button\" (click)=\"passwordReveal()\" class=\"btn btn-secondary mt-1\">\n                    <i *ngIf=\"showPassword\" class=\"fas fa-eye px-1\"></i>\n                    <i *ngIf=\"!showPassword\" class=\"fas fa-eye-slash\"></i>\n                  </button>\n                </div>\n              </div>\n\n              <div class=\"form-group\" [ngClass]=\"{ focused: focus2 === true }\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                  </div>\n                <input [type]=\"showPassword ? 'text' : 'password'\" class=\"form-control\" placeholder=\"Confirmar senha (Min: 8 letras)\" formControlName=\"confirmPassword\" type=\"password\" (focus)=\"focus2 = true\" (blur)=\"focus2 = false\" (keydown.enter)=\"handleEnterKey()\"/>\n                  <button type=\"button\" (click)=\"passwordReveal()\" class=\"btn btn-secondary mt-1\">\n                    <i *ngIf=\"showPassword\" class=\"fas fa-eye px-1\"></i>\n                    <i *ngIf=\"!showPassword\" class=\"fas fa-eye-slash\"></i>\n                  </button>\n                </div>\n              </div>\n              <div class=\"row my-4\">\n                <div class=\"col-12\">\n                  <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                    <input class=\"custom-control-input\" id=\"customCheckSignUp\" type=\"checkbox\" formControlName=\"roleCheck\" />\n                    <label class=\"custom-control-label\" for=\"customCheckSignUp\">\n                      <span>Administrador\n                      </span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf=\"!this.isSignUpFailed\" class=\"rounded text-muted bg-warning text-white\n              w-60 text-center mt-1 mb-3 mx-auto\">\n                <small>{{this.confirmMessage}} </small>\n              </div>\n              <div class=\"text-center\">\n                <button [disabled]=\"!signUpForm.valid\" (click)=\"onSubmit()\" type=\"button\" class=\"btn btn-secondary mt-4\">\n                  Criar Conta\n                </button>\n              </div>\n            </form>\n\n          </div>\n          <div *ngIf=\"isSuccessful\" class=\"card-body px-lg-5 py-lg-5 text-center\">\n            <i class=\"fas fa-envelope fa-5x\"></i>\n            <p style=\"font-size: 30px\" class=\"pt-4\">E-mail de Verificação Enviado!</p>\n            <p style=\"font-size: 20px\">Verifique sua Caixa de Entrada</p>\n            <small>O E-mail também pode estar na caixa de spam</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "SsAd":
/*!**********************************************************!*\
  !*** ./src/app/screens/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "LWA/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _grafico_grafico_presets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grafico/grafico.presets */ "HlCX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../_services/auth.service */ "7Vn+");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.service */ "OgXG");








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, sharedService, datePipe) {
        var _this = this;
        this.authService = authService;
        this.sharedService = sharedService;
        this.datePipe = datePipe;
        this.currentDate = new Date();
        this.currentDayAndMonth = this.datePipe.transform(this.currentDate, "yyyy-MM-dd");
        this.currentTime = this.datePipe.transform(this.currentDate, "HH:mm");
        this.graphCounter = 0;
        this.graphIdList = [0, 1, 2, 3];
        this.graphMenuIsOpen = false;
        this.activeExperimentInGraphMenu = "Selecione Um Experimento";
        this.devices = ["Device1"];
        this.traceGraphExemplo = {
            valueTS: ["2019-04-08 13:41:54", "2019-04-10 04:47:22", "2019-04-12 03:38:51"],
            valuePPO2: ["19.520", "19.521", "19.522"],
            valueTemp: ["21", "22", "21"],
        };
        this.pullGraphForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            pullGraphStartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('2000-01-01', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            pullGraphStartTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('00:00', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            pullGraphEndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.currentDayAndMonth, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            pullGraphEndTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.currentTime, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
        this.graphs = [];
        this.clickEventsubscription = this.sharedService.getClickEvent().subscribe(function () {
            _this.removeGraph(sharedService.currentGraphId);
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getDevice().subscribe(function (data) {
            _this.devices = data;
        }, function (err) {
            console.log(err);
        });
        console.log(this.datePipe.transform(this.currentDate, "yyyy-MM-dd"));
    };
    DashboardComponent.prototype.openAddGraphMenu = function (isItOpen) {
        this.graphMenuIsOpen = isItOpen;
    };
    DashboardComponent.prototype.selectExperiment = function (experimentSelected) {
        this.activeExperimentInGraphMenu = experimentSelected;
    };
    DashboardComponent.prototype.addGraph = function () {
        console.log(this.pullGraphForm);
        this.pullGraphDateStart = (this.pullGraphForm.get('pullGraphStartDate').value + "T" + this.pullGraphForm.get('pullGraphStartTime').value);
        this.pullGraphDateEnd = (this.pullGraphForm.get('pullGraphEndDate').value + "T" + this.pullGraphForm.get('pullGraphEndTime').value);
        console.log(this.pullGraphDateStart);
        console.log(this.pullGraphDateEnd);
        this.graphMenuIsOpen = false;
        //this.receivedData000 = JSON.parse(JSON.stringify(data));
        this.traceReceivedData1 = {
            x: [],
            y: [],
            name: "PP02",
        };
        this.traceReceivedData2 = {
            x: [],
            y: [],
            name: "TEMP",
        };
        /*this.receivedData000.forEach((item) => {
          this.traceReceivedData1.x.push(item.valueTS);
          this.traceReceivedData1.y.push(item.valuePPO2);
        });

        this.receivedData000.forEach((item) => {
          this.traceReceivedData2.x.push(item.valueTS);
          this.traceReceivedData2.y.push(item.valueTemp);
        });*/
        //remova esse comentário para restaurar o login
        //remova entre essas linhas para restaurar o pull de gráficos do backend ao plotly
        console.log(this.traceGraphExemplo);
        this.traceReceivedData1.x.push(this.traceGraphExemplo.valueTS[0], this.traceGraphExemplo.valueTS[1], this.traceGraphExemplo.valueTS[2]);
        this.traceReceivedData1.y.push(this.traceGraphExemplo.valuePPO2[0], this.traceGraphExemplo.valuePPO2[1], this.traceGraphExemplo.valuePPO2[2]);
        this.traceReceivedData2.x.push(this.traceGraphExemplo.valueTS[0], this.traceGraphExemplo.valueTS[1], this.traceGraphExemplo.valueTS[2]);
        this.traceReceivedData2.y.push(this.traceGraphExemplo.valueTemp[0], this.traceGraphExemplo.valueTemp[1], this.traceGraphExemplo.valueTemp[2]);
        //remova entre essas linhas para restaurar o pull de gráficos do backend ao plotly
        this.graphCounter++; //usado para identificar o grafico e seu div
        this.graphs.push({
            deviceNumber: this.activeExperimentInGraphMenu,
            id: this.graphIdList[0],
            name: "Gráfico O2(%) e Temp",
            data: [this.traceReceivedData1, this.traceReceivedData2],
            layout: {
                responsive: true,
                title: this.activeExperimentInGraphMenu,
                showlegend: true,
                legend: {
                    x: 0,
                    y: 100,
                },
                staticPlot: true,
                font: {
                    color: '#000000',
                },
                paper_bgcolor: 'rgba(0,0,0,0)',
                plot_bgcolor: 'rgba(0,0,0,0)',
                autosize: false,
                xaxis: {
                    title: "Tempo",
                },
                yaxis: {
                    title: "Dados",
                },
            },
            config: _grafico_grafico_presets__WEBPACK_IMPORTED_MODULE_4__["graphConfigPreset"],
            exportData: this.receivedData000,
            exportFields: [
                "valuePPO2",
                "valueTS",
                "valueTemp"
            ]
        });
        this.graphIdList.splice(0, 1);
        /*this.authService.getData(this.pullGraphDateStart, this.pullGraphDateEnd, this.activeExperimentInGraphMenu).subscribe(
          (data) => {
            this.graphMenuIsOpen = false;
            this.receivedData000 = JSON.parse(JSON.stringify(data));

            this.traceReceivedData1 = {
              x: [],
              y: [],
              name: "PP02",
            };

            this.traceReceivedData2 = {
              x: [],
              y: [],
              name: "TEMP",
            };

            this.receivedData000.forEach((item) => {
              this.traceReceivedData1.x.push(item.valueTS);
              this.traceReceivedData1.y.push(item.valuePPO2);
            });

            this.receivedData000.forEach((item) => {
              this.traceReceivedData2.x.push(item.valueTS);
              this.traceReceivedData2.y.push(item.valueTemp);
            });

            this.graphCounter++; //usado para identificar o grafico e seu div
            this.graphs.push(
              {
                deviceNumber: this.activeExperimentInGraphMenu,
                id: this.graphIdList[0],
                name: "Gráfico O2(%) e Temp",
                data: [this.traceReceivedData1, this.traceReceivedData2],
                layout:
                {
                    responsive: true,
                    title: this.activeExperimentInGraphMenu,
                    showlegend: true,
                    legend: {
                        x: 0,
                        y: 100,
                    },
                    staticPlot: true,
                    font: {
                        color: '#000000',
                    },
                    paper_bgcolor: 'rgba(0,0,0,0)',
                    plot_bgcolor: 'rgba(0,0,0,0)',
                    autosize: false,
                    xaxis: {
                        title: "Tempo",
                    },
                    yaxis: {
                        title: "Dados",
                    },
                },
                config: graphConfigPreset,
                exportData: this.receivedData000,
                exportFields: [
                  "valuePPO2",
                  "valueTS",
                  "valueTemp"
                ]
              }
            );
            this.graphIdList.splice(0, 1);
          },
          (err) => {
            console.log(err);
          }
        );*/
    };
    DashboardComponent.prototype.removeGraph = function (graphId) {
        this.graphs.splice(this.graphs.findIndex(function (i) { return i.id === graphId; }), 1);
        this.graphIdList.push(graphId);
        this.graphCounter--;
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }
    ]; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-dashboard",
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "qZ7x":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _screens_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../screens/user-profile/user-profile.component */ "MiHe");
/* harmony import */ var _screens_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../screens/dashboard/dashboard.component */ "SsAd");
/* harmony import */ var _screens_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../screens/sign-up/sign-up.component */ "6+jJ");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "hrlM");




var AdminLayoutRoutes = [
    {
        path: "",
        children: [
            {
                path: "user-profile",
                component: _screens_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__["UserProfileComponent"],
            },
            {
                path: "dashboard",
                component: _screens_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
            },
            {
                path: "navbar",
                component: _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
            },
            {
                path: "sign-up",
                component: _screens_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"],
            }
        ],
    },
];


/***/ }),

/***/ "tCn/":
/*!******************************************************************!*\
  !*** ./src/app/screens/dashboard/grafico/grafico.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFmaWNvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map