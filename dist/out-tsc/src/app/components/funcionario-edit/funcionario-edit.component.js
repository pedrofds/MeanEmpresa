import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../../service/api.service';
import { FormBuilder, Validators } from "@angular/forms";
var FuncionarioEditComponent = /** @class */ (function () {
    function FuncionarioEditComponent(fb, actRoute, apiService, router) {
        this.fb = fb;
        this.actRoute = actRoute;
        this.apiService = apiService;
        this.router = router;
        this.submitted = false;
        this.funcionarioProfile = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
    }
    FuncionarioEditComponent.prototype.ngOnInit = function () {
        this.updateFuncionario();
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.getFuncionario(id);
        this.editForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [Validators.required]],
            phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
        });
    };
    // Choose options with select-dropdown
    FuncionarioEditComponent.prototype.updateProfile = function (e) {
        this.editForm.get('designation').setValue(e, {
            onlySelf: true
        });
    };
    Object.defineProperty(FuncionarioEditComponent.prototype, "myForm", {
        // Getter to access form control
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    FuncionarioEditComponent.prototype.getFuncionario = function (id) {
        var _this = this;
        this.apiService.getFuncionario(id).subscribe(function (data) {
            _this.editForm.setValue({
                name: data['name'],
                email: data['email'],
                designation: data['designation'],
                phoneNumber: data['phoneNumber'],
            });
        });
    };
    FuncionarioEditComponent.prototype.updateFuncionario = function () {
        this.editForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [Validators.required]],
            phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
        });
    };
    FuncionarioEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.editForm.valid) {
            return false;
        }
        else {
            if (window.confirm('Are you sure?')) {
                var id = this.actRoute.snapshot.paramMap.get('id');
                this.apiService.updateFuncionario(id, this.editForm.value)
                    .subscribe(function (res) {
                    _this.router.navigateByUrl('/funcionarios-list');
                    console.log('Content updated successfully!');
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    FuncionarioEditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-funcionario-edit',
            templateUrl: './funcionario-edit.component.html',
            styleUrls: ['./funcionario-edit.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            ActivatedRoute,
            ApiService,
            Router])
    ], FuncionarioEditComponent);
    return FuncionarioEditComponent;
}());
export { FuncionarioEditComponent };
//# sourceMappingURL=funcionario-edit.component.js.map