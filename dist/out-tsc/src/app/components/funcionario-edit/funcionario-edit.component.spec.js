import { async, TestBed } from '@angular/core/testing';
import { FuncionarioEditComponent } from './funcionario-edit.component';
describe('FuncionarioEditComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FuncionarioEditComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FuncionarioEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=funcionario-edit.component.spec.js.map