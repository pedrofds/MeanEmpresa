import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuncionarioCreateComponent } from './components/funcionario-create/funcionario-create.component';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { FuncionarioEditComponent } from './components/funcionario-edit/funcionario-edit.component';
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'create-funcionario' },
    { path: 'create-funcionario', component: FuncionarioCreateComponent },
    { path: 'edit-funcionario/:id', component: FuncionarioEditComponent },
    { path: 'funcionarios-list', component: FuncionarioListComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map