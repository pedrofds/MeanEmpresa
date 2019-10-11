import { Router } from "@angular/router";
import { ApiService } from "../../service/api.service";
import { Component, OnInit, NgZone } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-funcionario-create",
  templateUrl: "./funcionario-create.component.html",
  styleUrls: ["./funcionario-create.component.css"]
})
export class FuncionarioCreateComponent implements OnInit {
  submitted = false;
  funcionarioForm: FormGroup;
  FuncionarioProfile: any = ["Finance", "BDM", "HR", "Sales", "Admin"];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() {}

  mainForm() {
    this.funcionarioForm = this.fb.group({
      name: ["", [Validators.required]],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
        ]
      ],
      cargo: ["", [Validators.required]],
      numeroTelefone: [
        "",
        [Validators.required, Validators.pattern("^[0-9]+$")]
      ]
    });
  }

  // Choose cargo with select dropdown
  updateProfile(e) {
    this.funcionarioForm.get("cargo").setValue(e, {
      onlySelf: true
    });
  }

  // Getter to access form control
  get myForm() {
    return this.funcionarioForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.funcionarioForm.valid) {
      return false;
    } else {
      this.apiService.createFuncionario(this.funcionarioForm.value).subscribe(
        res => {
          console.log("funcionario successfully created!");
          this.ngZone.run(() =>
            this.router.navigateByUrl("/funcionarios-list")
          );
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
