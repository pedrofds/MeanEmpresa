import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
var FuncionarioListComponent = /** @class */ (function () {
    function FuncionarioListComponent(apiService) {
        this.apiService = apiService;
        this.Funcionario = [];
        this.readFuncionario();
    }
    FuncionarioListComponent.prototype.ngOnInit = function () { };
    FuncionarioListComponent.prototype.readFuncionario = function () {
        var _this = this;
        this.apiService.getFuncionarios().subscribe(function (data) {
            _this.Funcionario = data;
        });
    };
    FuncionarioListComponent.prototype.removeFuncionario = function (funcionario, index) {
        var _this = this;
        if (window.confirm('Are you sure?')) {
            this.apiService.deleteFuncionario(funcionario._id).subscribe(function (data) {
                _this.Funcionario.splice(index, 1);
            });
        }
    };
    FuncionarioListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-funcionario-list',
            templateUrl: './funcionario-list.component.html',
            styleUrls: ['./funcionario-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], FuncionarioListComponent);
    return FuncionarioListComponent;
}());
export { FuncionarioListComponent };
//# sourceMappingURL=funcionario-list.component.js.map