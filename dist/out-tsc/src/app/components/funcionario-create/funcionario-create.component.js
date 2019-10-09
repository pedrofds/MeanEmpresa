import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, NgZone } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
var FuncionarioCreateComponent = /** @class */ (function () {
    function FuncionarioCreateComponent(fb, router, ngZone, apiService) {
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.apiService = apiService;
        this.submitted = false;
        this.FuncionarioProfile = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
        this.mainForm();
    }
    FuncionarioCreateComponent.prototype.ngOnInit = function () { };
    FuncionarioCreateComponent.prototype.mainForm = function () {
        this.funcionarioForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [Validators.required]],
            phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
        });
    };
    // Choose designation with select dropdown
    FuncionarioCreateComponent.prototype.updateProfile = function (e) {
        this.funcionarioForm.get('designation').setValue(e, {
            onlySelf: true
        });
    };
    Object.defineProperty(FuncionarioCreateComponent.prototype, "myForm", {
        // Getter to access form control
        get: function () {
            return this.funcionarioForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    FuncionarioCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.funcionarioForm.valid) {
            return false;
        }
        else {
            this.apiService.createFuncionario(this.funcionarioForm.value).subscribe(function (res) {
                console.log('funcionario successfully created!');
                _this.ngZone.run(function () { return _this.router.navigateByUrl('/funcionarios-list'); });
            }, function (error) {
                console.log(error);
            });
        }
    };
    FuncionarioCreateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-funcionario-create',
            templateUrl: './funcionario-create.component.html',
            styleUrls: ['./funcionario-create.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router,
            NgZone,
            ApiService])
    ], FuncionarioCreateComponent);
    return FuncionarioCreateComponent;
}());
export { FuncionarioCreateComponent };
//# sourceMappingURL=funcionario-create.component.js.map