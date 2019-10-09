import { async, TestBed } from '@angular/core/testing';
import { FuncionarioListComponent } from './funcionario-list.component';
describe('FuncionarioListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FuncionarioListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FuncionarioListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=funcionario-list.component.spec.js.map