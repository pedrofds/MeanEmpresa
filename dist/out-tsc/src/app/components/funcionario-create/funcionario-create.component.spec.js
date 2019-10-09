import { async, TestBed } from '@angular/core/testing';
import { FuncionarioCreateComponent } from './funcionario-create.component';
describe('FuncionarioCreateComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FuncionarioCreateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FuncionarioCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=funcionario-create.component.spec.js.map